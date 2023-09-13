import { Durable } from '@pubsubdb/pubsubdb';
import type * as activities from './activities';

const { helloworld } = Durable.workflow.proxyActivities<typeof activities>();

export async function helloworldExample(name: string): Promise<string> {
  return await helloworld(name);
}
