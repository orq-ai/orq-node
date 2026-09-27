# Agents

## Overview

### Available Operations

* [create](#create) - Create agent
* [list](#list) - List agents
* [delete](#delete) - Delete agent
* [retrieve](#retrieve) - Retrieve agent
* [update](#update) - Update agent
* [~~invoke~~](#invoke) - Execute an agent task :warning: **Deprecated**
* [~~run~~](#run) - Run an agent with configuration :warning: **Deprecated**
* [~~streamRun~~](#streamrun) - Run agent with streaming response :warning: **Deprecated**
* [~~stream~~](#stream) - Stream agent execution in real-time :warning: **Deprecated**

## create

Create a new agent with the specified model, instructions, tools, and knowledge bases. Supports fallback models and configurable execution settings.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateAgentRequest" method="post" path="/v2/agents" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.agents.create({
    key: "<key>",
    role: "<value>",
    description: "alongside beneath doubtfully behest validity bah after furthermore",
    instructions: "<value>",
    path: "Default",
    model: {
      id: "<id>",
      retry: {
        count: 3,
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
    },
    fallbackModels: [
      {
        id: "<id>",
        retry: {
          count: 3,
          onCodes: [
            429,
            500,
            502,
            503,
            504,
          ],
        },
      },
    ],
    settings: {
      tools: [
        {
          type: "mcp",
          id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
          toolId: "01KXYZ123456789",
          requiresApproval: false,
        },
      ],
    },
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { agentsCreate } from "@orq-ai/node/funcs/agentsCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsCreate(orq, {
    key: "<key>",
    role: "<value>",
    description: "alongside beneath doubtfully behest validity bah after furthermore",
    instructions: "<value>",
    path: "Default",
    model: {
      id: "<id>",
      retry: {
        count: 3,
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
    },
    fallbackModels: [
      {
        id: "<id>",
        retry: {
          count: 3,
          onCodes: [
            429,
            500,
            502,
            503,
            504,
          ],
        },
      },
    ],
    settings: {
      tools: [
        {
          type: "mcp",
          id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
          toolId: "01KXYZ123456789",
          requiresApproval: false,
        },
      ],
    },
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAgentRequestRequestBody](../../models/operations/createagentrequestrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAgentRequestResponseBody](../../models/operations/createagentrequestresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## list

List all agents in the workspace with full configuration details. Supports pagination and sorts agents newest first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAgents" method="get" path="/v2/agents" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.agents.list(10);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { agentsList } from "@orq-ai/node/funcs/agentsList.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsList(orq, 10);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                      | A limit on the number of objects to be returned. Limit can range between 1 and 200. When not provided, returns all agents without pagination.                                                                                                                                                                                           |
| `startingAfter`                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                      | A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 20 objects, ending with `01JJ1HDHN79XAS7A01WB3HYSDB`, your subsequent call can include `after=01JJ1HDHN79XAS7A01WB3HYSDB` in order to fetch the next page of the list.       |
| `endingBefore`                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                      | A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 20 objects, starting with `01JJ1HDHN79XAS7A01WB3HYSDB`, your subsequent call can include `before=01JJ1HDHN79XAS7A01WB3HYSDB` in order to fetch the previous page of the list. |
| `type`                                                                                                                                                                                                                                                                                                                                  | [operations.QueryParamType](../../models/operations/queryparamtype.md)                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                      | Filter agents by type                                                                                                                                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                          |
| `options.retries`                                                                                                                                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                        |

### Response

**Promise\<[operations.ListAgentsResponseBody](../../models/operations/listagentsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Permanently remove an agent and all associated configuration from the workspace. Terminate active sessions and the key becomes reusable.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteAgent" method="delete" path="/v2/agents/{agent_key}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  await orq.agents.delete("<value>");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { agentsDelete } from "@orq-ai/node/funcs/agentsDelete.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsDelete(orq, "<value>");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("agentsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique key of the agent to delete                                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.DeleteAgentResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## retrieve

Retrieve the complete agent manifest by key, including model assignments, tools, knowledge bases, memory stores, and execution parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="RetrieveAgentRequest" method="get" path="/v2/agents/{agent_key}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.agents.retrieve("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { agentsRetrieve } from "@orq-ai/node/funcs/agentsRetrieve.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsRetrieve(orq, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique key of the agent to retrieve                                                                                                                                        |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RetrieveAgentRequestResponseBody](../../models/operations/retrieveagentrequestresponsebody.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.RetrieveAgentRequestResponseBody | 404                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## update

Partially update an existing agent configuration including models, instructions, tools, knowledge bases, and execution parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateAgent" method="patch" path="/v2/agents/{agent_key}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.agents.update({
    model: "El Camino",
    fallbackModels: [
      "<value>",
    ],
    settings: {
      tools: [
        {
          type: "mcp",
          id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
          toolId: "01KXYZ123456789",
          requiresApproval: false,
        },
      ],
    },
    path: "Default",
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
  }, "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { agentsUpdate } from "@orq-ai/node/funcs/agentsUpdate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsUpdate(orq, {
    model: "El Camino",
    fallbackModels: [
      "<value>",
    ],
    settings: {
      tools: [
        {
          type: "mcp",
          id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
          toolId: "01KXYZ123456789",
          requiresApproval: false,
        },
      ],
    },
    path: "Default",
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
  }, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique key of the agent to update                                                                                                                                          |
| `requestBody`                                                                                                                                                                  | [operations.UpdateAgentRequestBody](../../models/operations/updateagentrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAgentResponseBody](../../models/operations/updateagentresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.UpdateAgentResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## ~~invoke~~

Invoke an agent to perform a task with input messages. Supports tool execution, knowledge retrieval, memory context, and model fallback.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="InvokeAgent" method="post" path="/v2/agents/{key}/task" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.agents.invoke("<key>", {
    message: {
      role: "user",
      parts: [],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
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
import { agentsInvoke } from "@orq-ai/node/funcs/agentsInvoke.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsInvoke(orq, "<key>", {
    message: {
      role: "user",
      parts: [],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsInvoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The key or ID of the agent to invoke                                                                                                                                           |
| `requestBody`                                                                                                                                                                  | [operations.InvokeAgentA2AInvokeRequest](../../models/operations/invokeagenta2ainvokerequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InvokeAgentA2ATaskResponse](../../models/operations/invokeagenta2ataskresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~run~~

Run an agent with inline configuration or existing agent reference. Supports A2A messages, memory context, tool execution, and model fallback.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="RunAgent" method="post" path="/v2/agents/run" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.agents.run({
    key: "<key>",
    model: "F-150",
    fallbackModels: [
      "<value>",
    ],
    role: "<value>",
    instructions: "<value>",
    message: {
      role: "tool",
      parts: [
        {
          kind: "file",
          file: {
            uri: "https://front-pecan.info",
          },
        },
      ],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
    path: "Default",
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
    settings: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { agentsRun } from "@orq-ai/node/funcs/agentsRun.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsRun(orq, {
    key: "<key>",
    model: "F-150",
    fallbackModels: [
      "<value>",
    ],
    role: "<value>",
    instructions: "<value>",
    message: {
      role: "tool",
      parts: [
        {
          kind: "file",
          file: {
            uri: "https://front-pecan.info",
          },
        },
      ],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
    path: "Default",
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
    settings: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsRun failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RunAgentRequestBody](../../models/operations/runagentrequestbody.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RunAgentA2ATaskResponse](../../models/operations/runagenta2ataskresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~streamRun~~

Run an agent with streaming via SSE, combining inline configuration with real-time updates including messages, tool executions, and status.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="StreamRunAgent" method="post" path="/v2/agents/stream-run" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.agents.streamRun({
    key: "<key>",
    model: "Alpine",
    fallbackModels: [
      "<value>",
    ],
    role: "<value>",
    instructions: "<value>",
    message: {
      role: "user",
      parts: [
        {
          kind: "file",
          file: {
            uri: "https://jumbo-zebra.info/",
          },
        },
      ],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
    path: "Default",
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
    settings: {},
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { agentsStreamRun } from "@orq-ai/node/funcs/agentsStreamRun.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsStreamRun(orq, {
    key: "<key>",
    model: "Alpine",
    fallbackModels: [
      "<value>",
    ],
    role: "<value>",
    instructions: "<value>",
    message: {
      role: "user",
      parts: [
        {
          kind: "file",
          file: {
            uri: "https://jumbo-zebra.info/",
          },
        },
      ],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
    path: "Default",
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
    settings: {},
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("agentsStreamRun failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StreamRunAgentRequestBody](../../models/operations/streamrunagentrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<operations.StreamRunAgentResponseBody>](../../models/.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.StreamRunAgentResponseBody | 404                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## ~~stream~~

Stream an existing agent execution in real-time via SSE, providing live message chunks, tool calls, and status updates until completion.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="StreamAgent" method="post" path="/v2/agents/{key}/stream-task" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.agents.stream({
    message: {
      role: "user",
      parts: [],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
  }, "<key>");

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { agentsStream } from "@orq-ai/node/funcs/agentsStream.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await agentsStream(orq, {
    message: {
      role: "user",
      parts: [],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
  }, "<key>");
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("agentsStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The key or ID of the agent to invoke                                                                                                                                           |
| `requestBody`                                                                                                                                                                  | [operations.StreamAgentA2AInvokeRequest](../../models/operations/streamagenta2ainvokerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<operations.StreamAgentResponseBody>](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.StreamAgentResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |