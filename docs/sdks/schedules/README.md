# Schedules

## Overview

### Available Operations

* [list](#list) - List schedules
* [create](#create) - Create schedule
* [delete](#delete) - Delete schedule
* [retrieve](#retrieve) - Retrieve schedule
* [update](#update) - Update schedule
* [trigger](#trigger) - Trigger schedule execution

## list

Lists all schedules attached to the specified agent, most recent first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-agent-schedules" method="get" path="/v3/agents/{agent_key}/schedules" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.list({
    agentKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesList } from "@orq-ai/node/funcs/schedulesList.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesList(orq, {
    agentKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAgentSchedulesRequest](../../models/operations/listagentschedulesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAgentSchedulesResponseBody](../../models/operations/listagentschedulesresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Creates a schedule that runs the agent on a recurring or one-off cadence. The minimum firing interval is 1 hour for `cron` and `interval`; `once` schedules are exempt.

### Example Usage: daily_cron

<!-- UsageSnippet language="typescript" operationID="create-agent-schedule" method="post" path="/v3/agents/{agent_key}/schedules" example="daily_cron" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.create({
    agentKey: "<value>",
    requestBody: {
      agentTag: "v2",
      expression: "0 0 9 * * mon-fri",
      payload: {
        input: "Generate the morning briefing for {{region}}",
        memoryEntityId: "mem_entity_123",
        metadata: {
          "run_source": "daily-briefing",
        },
        variables: {
          "region": "EMEA",
        },
      },
      type: "cron",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesCreate } from "@orq-ai/node/funcs/schedulesCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesCreate(orq, {
    agentKey: "<value>",
    requestBody: {
      agentTag: "v2",
      expression: "0 0 9 * * mon-fri",
      payload: {
        input: "Generate the morning briefing for {{region}}",
        memoryEntityId: "mem_entity_123",
        metadata: {
          "run_source": "daily-briefing",
        },
        variables: {
          "region": "EMEA",
        },
      },
      type: "cron",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: hourly_interval

<!-- UsageSnippet language="typescript" operationID="create-agent-schedule" method="post" path="/v3/agents/{agent_key}/schedules" example="hourly_interval" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.create({
    agentKey: "<value>",
    requestBody: {
      expression: "@every 1h",
      payload: {
        input: "Summarize new tickets from the last hour",
      },
      type: "interval",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesCreate } from "@orq-ai/node/funcs/schedulesCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesCreate(orq, {
    agentKey: "<value>",
    requestBody: {
      expression: "@every 1h",
      payload: {
        input: "Summarize new tickets from the last hour",
      },
      type: "interval",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: once_future_at

<!-- UsageSnippet language="typescript" operationID="create-agent-schedule" method="post" path="/v3/agents/{agent_key}/schedules" example="once_future_at" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.create({
    agentKey: "<value>",
    requestBody: {
      expression: "@at 2026-05-01T09:00:00Z",
      payload: {
        input: "Check in on ticket TICKET-123 and post a status update.",
      },
      type: "once",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesCreate } from "@orq-ai/node/funcs/schedulesCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesCreate(orq, {
    agentKey: "<value>",
    requestBody: {
      expression: "@at 2026-05-01T09:00:00Z",
      payload: {
        input: "Check in on ticket TICKET-123 and post a status update.",
      },
      type: "once",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAgentScheduleRequest](../../models/operations/createagentschedulerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAgentScheduleResponseBody](../../models/operations/createagentscheduleresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.CreateAgentScheduleResponseBody          | 400                                             | application/json                                |
| errors.CreateAgentScheduleSchedulesResponseBody | 404                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## delete

Permanently removes a schedule from NATS, Mongo, and the Redis cache.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-agent-schedule" method="delete" path="/v3/agents/{agent_key}/schedules/{schedule_id}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  await orq.schedules.delete({
    agentKey: "<value>",
    scheduleId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesDelete } from "@orq-ai/node/funcs/schedulesDelete.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesDelete(orq, {
    agentKey: "<value>",
    scheduleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("schedulesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAgentScheduleRequest](../../models/operations/deleteagentschedulerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.DeleteAgentScheduleResponseBody | 404                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## retrieve

Retrieves a single schedule by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="retrieve-agent-schedule" method="get" path="/v3/agents/{agent_key}/schedules/{schedule_id}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.retrieve({
    agentKey: "<value>",
    scheduleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesRetrieve } from "@orq-ai/node/funcs/schedulesRetrieve.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesRetrieve(orq, {
    agentKey: "<value>",
    scheduleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RetrieveAgentScheduleRequest](../../models/operations/retrieveagentschedulerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RetrieveAgentScheduleResponseBody](../../models/operations/retrieveagentscheduleresponsebody.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.RetrieveAgentScheduleResponseBody | 404                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## update

Partially updates a schedule. Any omitted field is left unchanged. Changing `expression` or `type` (or reactivating from inactive) re-publishes the NATS schedule and bumps `generation`; payload-only and `agent_tag`-only changes leave the firing cadence in place.

### Example Usage: change_cadence

<!-- UsageSnippet language="typescript" operationID="update-agent-schedule" method="patch" path="/v3/agents/{agent_key}/schedules/{schedule_id}" example="change_cadence" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.update({
    agentKey: "<value>",
    scheduleId: "<id>",
    requestBody: {
      expression: "@every 6h",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesUpdate } from "@orq-ai/node/funcs/schedulesUpdate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesUpdate(orq, {
    agentKey: "<value>",
    scheduleId: "<id>",
    requestBody: {
      expression: "@every 6h",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: deactivate

<!-- UsageSnippet language="typescript" operationID="update-agent-schedule" method="patch" path="/v3/agents/{agent_key}/schedules/{schedule_id}" example="deactivate" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.update({
    agentKey: "<value>",
    scheduleId: "<id>",
    requestBody: {
      isActive: false,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesUpdate } from "@orq-ai/node/funcs/schedulesUpdate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesUpdate(orq, {
    agentKey: "<value>",
    scheduleId: "<id>",
    requestBody: {
      isActive: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: update_payload

<!-- UsageSnippet language="typescript" operationID="update-agent-schedule" method="patch" path="/v3/agents/{agent_key}/schedules/{schedule_id}" example="update_payload" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.update({
    agentKey: "<value>",
    scheduleId: "<id>",
    requestBody: {
      payload: {
        input: "Updated input for the next run",
        variables: {
          "region": "APAC",
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesUpdate } from "@orq-ai/node/funcs/schedulesUpdate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesUpdate(orq, {
    agentKey: "<value>",
    scheduleId: "<id>",
    requestBody: {
      payload: {
        input: "Updated input for the next run",
        variables: {
          "region": "APAC",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAgentScheduleRequest](../../models/operations/updateagentschedulerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAgentScheduleResponseBody](../../models/operations/updateagentscheduleresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.UpdateAgentScheduleResponseBody          | 400                                             | application/json                                |
| errors.UpdateAgentScheduleSchedulesResponseBody | 404                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## trigger

Runs the schedule's payload immediately (≈10 seconds after the request, to stay above the NATS scheduler's minimum deliver-at margin). The schedule's regular cadence is unaffected. Inactive schedules return 400.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="trigger-agent-schedule" method="post" path="/v3/agents/{agent_key}/schedules/{schedule_id}/execution" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.schedules.trigger({
    agentKey: "<value>",
    scheduleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { schedulesTrigger } from "@orq-ai/node/funcs/schedulesTrigger.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await schedulesTrigger(orq, {
    agentKey: "<value>",
    scheduleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("schedulesTrigger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TriggerAgentScheduleRequest](../../models/operations/triggeragentschedulerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TriggerAgentScheduleResponseBody](../../models/operations/triggeragentscheduleresponsebody.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.TriggerAgentScheduleResponseBody          | 400                                              | application/json                                 |
| errors.TriggerAgentScheduleSchedulesResponseBody | 404                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |