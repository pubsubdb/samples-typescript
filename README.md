# samples-typescript
Example workflows and activities


## Keys
Add a `.env` file to the project root and include your keys for honeycomb open telemetry if you wish to use the default tracer configuration located in `./services/tracer.ts`

```
HONEYCOMB_API_KEY=XXXXXXXXXX
OTEL_SERVICE_NAME=yyyy
```

## Install
Download from GitHub and run the following command to load dependencies:

```bash
npm install
```

## Build
Run the following command to build/start the application:

```bash
docker-compose up --build -d
```

## Run
Open a browser and navigate to `http://localhost:3002/apis/v1/test/helloworld` to invoke the `helloworld` workflow. Additional workflows can be tested by invoking them in the same manner (e.g., v1/test/helloworld, v1/test/child, v1/test/parent)

You will see the full execution tree organized as a DAG, allowing you to configure dashboards and alerts as the processes execute.

Add more workflows to the `./services/workflows` directory and they will be automatically loaded and available for execution (make sure to update the http route).