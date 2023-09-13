import { Durable } from '@pubsubdb/pubsubdb';
import Redis from 'ioredis';
import { nanoid } from 'nanoid';

import config from '../../config';

async function executeDurableWorkflow(workflowName = 'helloworld') {
  const connection = await Durable.Connection.connect({
    class: Redis,
    options: {
      host: config.REDIS_HOST,
      port: config.REDIS_PORT,
      password: config.REDIS_PASSWORD,
      database: config.REDIS_DATABASE,
    },
  });
  const client = new Durable.Client({
    connection,
  });
  const handle = await client.workflow.start({
    args: ['PubSubDB'],
    taskQueue: workflowName,
    workflowName: `${workflowName}Example`,
    workflowId: `${workflowName}-${nanoid()}`,
  });
  console.log(`Started ${workflowName} ==> ${handle.workflowId}`);
  const output = await handle.result();
  console.log(output);
  return await output;
}

export default executeDurableWorkflow;
