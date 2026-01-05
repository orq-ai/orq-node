# Router

## Overview

### Available Operations

* [chatCompletions](#chatcompletions) - Create chat completion
* [imagesGenerate](#imagesgenerate) - Create image

## chatCompletions

Creates a model response for the given chat conversation with support for retries, fallbacks, prompts, and variables.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v2/gateway/chat/completions" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.chatCompletions({
    messages: [],
    model: "Model 3",
    orq: {
      retry: {
        onCodes: [
          429,
          500,
          502,
        ],
      },
      fallbacks: [
        {
          model: "openai/gpt-5",
        },
        {
          model: "anthropic/claude-4-opus",
        },
      ],
      contact: {
        id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        displayName: "Jane Doe",
        email: "jane.doe@example.com",
      },
      thread: {
        id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        tags: [
          "customer-support",
        ],
      },
      inputs: {
        "customer_name": "John Smith",
        "issue_type": "billing",
      },
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      knowledgeBases: [
        {
          topK: 5,
          knowledgeId: "knowledge_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        },
      ],
      timeout: {
        callTimeout: 30000,
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
import { routerChatCompletions } from "@orq-ai/node/funcs/routerChatCompletions.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerChatCompletions(orq, {
    messages: [],
    model: "Model 3",
    orq: {
      retry: {
        onCodes: [
          429,
          500,
          502,
        ],
      },
      fallbacks: [
        {
          model: "openai/gpt-5",
        },
        {
          model: "anthropic/claude-4-opus",
        },
      ],
      contact: {
        id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        displayName: "Jane Doe",
        email: "jane.doe@example.com",
      },
      thread: {
        id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        tags: [
          "customer-support",
        ],
      },
      inputs: {
        "customer_name": "John Smith",
        "issue_type": "billing",
      },
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      knowledgeBases: [
        {
          topK: 5,
          knowledgeId: "knowledge_01ARZ3NDEKTSV4RRFFQ69G5FAV",
        },
      ],
      timeout: {
        callTimeout: 30000,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerChatCompletions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateChatCompletionRequestBody](../../models/operations/createchatcompletionrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateChatCompletionResponse](../../models/operations/createchatcompletionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## imagesGenerate

Create an Image

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createImage" method="post" path="/v2/gateway/images/generations" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.imagesGenerate({
    prompt: "<value>",
    model: "2",
    orq: {
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      contact: {
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
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      loadBalancer: [
        {
          type: "weight_based",
          model: "openai/gpt-4o",
          weight: 0.7,
        },
        {
          type: "weight_based",
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
      timeout: {
        callTimeout: 30000,
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
import { routerImagesGenerate } from "@orq-ai/node/funcs/routerImagesGenerate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerImagesGenerate(orq, {
    prompt: "<value>",
    model: "2",
    orq: {
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
      },
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      contact: {
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
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      loadBalancer: [
        {
          type: "weight_based",
          model: "openai/gpt-4o",
          weight: 0.7,
        },
        {
          type: "weight_based",
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
      timeout: {
        callTimeout: 30000,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerImagesGenerate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateImageRequestBody](../../models/operations/createimagerequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateImageResponseBody](../../models/operations/createimageresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |