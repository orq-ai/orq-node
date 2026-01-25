# Router.Rerank

## Overview

### Available Operations

* [create](#create) - Create rerank

## create

Rerank a list of documents based on their relevance to a query.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createRerank" method="post" path="/v2/router/rerank" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.rerank.create({
    query: "<value>",
    documents: [
      "<value 1>",
    ],
    model: "XTS",
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
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
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
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
import { routerRerankCreate } from "@orq-ai/node/funcs/routerRerankCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerRerankCreate(orq, {
    query: "<value>",
    documents: [
      "<value 1>",
    ],
    model: "XTS",
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [],
    },
    timeout: {
      callTimeout: 30000,
    },
    orq: {
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
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
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            model: "anthropic/claude-3-5-sonnet",
            weight: 0.3,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerRerankCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRerankRequestBody](../../models/operations/creatererankrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateRerankResponseBody](../../models/operations/creatererankresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |