# Router.Classify

## Overview

### Available Operations

* [create](#create) - Classify

## create

**Beta.** Runs typed classification questions (`noul`, `choice`, `score`) against a native classify provider, including OpenAI Decisions with `openai/gpt-6-luna`, or a chat model that supports classify emulation. Emulated models answer through one structured-output call and their probabilities are model-reported rather than calibrated. Native providers can return `refusal` for individual questions; refused answers contain only `type`. The request and response follow the TypeSafe classification contract; `model` in the response identifies the primary or fallback model that answered and `usage` carries the computed cost like the Responses API. Both `/v3/router/classify` and `/v3/router/decisions` use this contract, including ordered `fallbacks`, request-level `retry`, and `identity` attribution. Both require `classify.execute`. This endpoint currently does not apply PII plugins or guardrails.

### Example Usage: fallback_retry_identity

<!-- UsageSnippet language="typescript" operationID="CreateClassify" method="post" path="/v3/router/classify" example="fallback_retry_identity" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.classify.create({
    fallbacks: [
      {
        model: "openai/gpt-5.6-luna",
      },
    ],
    identity: {
      displayName: "Sample customer",
      id: "customer-demo",
    },
    model: "openai/gpt-6-luna",
    questions: {
      "positive": {
        criteria: {
          false: "The customer is unhappy.",
          true: "The customer is happy.",
        },
        instructions: "Is the sentiment positive?",
        type: "noul",
      },
      "rating": {
        criteria: [
          "Negative",
          "Neutral",
          "Positive",
        ],
        instructions: "Rate sentiment.",
        type: "score",
      },
      "sentiment": {
        criteria: {
          "negative": "Negative sentiment",
          "neutral": "<value>",
          "positive": "Positive sentiment",
        },
        instructions: "Classify sentiment.",
        type: "choice",
      },
    },
    retry: {
      count: 2,
      onCodes: [
        429,
        502,
        503,
        504,
      ],
    },
    state: "The customer says: I love this product. It is wonderful!",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { routerClassifyCreate } from "@orq-ai/node/funcs/routerClassifyCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerClassifyCreate(orq, {
    fallbacks: [
      {
        model: "openai/gpt-5.6-luna",
      },
    ],
    identity: {
      displayName: "Sample customer",
      id: "customer-demo",
    },
    model: "openai/gpt-6-luna",
    questions: {
      "positive": {
        criteria: {
          false: "The customer is unhappy.",
          true: "The customer is happy.",
        },
        instructions: "Is the sentiment positive?",
        type: "noul",
      },
      "rating": {
        criteria: [
          "Negative",
          "Neutral",
          "Positive",
        ],
        instructions: "Rate sentiment.",
        type: "score",
      },
      "sentiment": {
        criteria: {
          "negative": "Negative sentiment",
          "neutral": "<value>",
          "positive": "Positive sentiment",
        },
        instructions: "Classify sentiment.",
        type: "choice",
      },
    },
    retry: {
      count: 2,
      onCodes: [
        429,
        502,
        503,
        504,
      ],
    },
    state: "The customer says: I love this product. It is wonderful!",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerClassifyCreate failed:", res.error);
  }
}

run();
```
### Example Usage: openai_answers

<!-- UsageSnippet language="typescript" operationID="CreateClassify" method="post" path="/v3/router/classify" example="openai_answers" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.classify.create({
    model: "LeBaron",
    questions: {

    },
    state: {

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
import { routerClassifyCreate } from "@orq-ai/node/funcs/routerClassifyCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerClassifyCreate(orq, {
    model: "LeBaron",
    questions: {
  
    },
    state: {
  
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerClassifyCreate failed:", res.error);
  }
}

run();
```
### Example Usage: openai_inline_image

<!-- UsageSnippet language="typescript" operationID="CreateClassify" method="post" path="/v3/router/classify" example="openai_inline_image" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.classify.create({
    model: "openai/gpt-6-luna",
    questions: {
      "contains_text": {
        instructions: "Does the image contain text?",
        type: "noul",
      },
    },
    state: {
      "0": {
        "content": [
          {
            "text": "Evaluate this image.",
            "type": "input_text",
          },
          {
            "image_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgBdY8NDYAgEIXBBEQgAhG0gRGMYBNtoA2M4EygDYygDfCxvdMbk7d9A453f8ZQMcYAWuBVzIHujeGyxE8nYz7dJWYl01p749zxDKABEzhYfDNaMPZSAUymJLZLuvSsSVUhx4G7VM2xpSzQ5YYhLUHDCGoad47ixXjxY84qi1a9QPgZpdYLPVkbtsfywz3jAAAAAElFTkSuQmCC",
            "type": "input_image",
          },
        ],
        "role": "user",
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
import { routerClassifyCreate } from "@orq-ai/node/funcs/routerClassifyCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerClassifyCreate(orq, {
    model: "openai/gpt-6-luna",
    questions: {
      "contains_text": {
        instructions: "Does the image contain text?",
        type: "noul",
      },
    },
    state: {
      "0": {
        "content": [
          {
            "text": "Evaluate this image.",
            "type": "input_text",
          },
          {
            "image_url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgBdY8NDYAgEIXBBEQgAhG0gRGMYBNtoA2M4EygDYygDfCxvdMbk7d9A453f8ZQMcYAWuBVzIHujeGyxE8nYz7dJWYl01p749zxDKABEzhYfDNaMPZSAUymJLZLuvSsSVUhx4G7VM2xpSzQ5YYhLUHDCGoad47ixXjxY84qi1a9QPgZpdYLPVkbtsfywz3jAAAAAElFTkSuQmCC",
            "type": "input_image",
          },
        ],
        "role": "user",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerClassifyCreate failed:", res.error);
  }
}

run();
```
### Example Usage: openai_text

<!-- UsageSnippet language="typescript" operationID="CreateClassify" method="post" path="/v3/router/classify" example="openai_text" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.classify.create({
    model: "openai/gpt-6-luna",
    questions: {
      "positive": {
        criteria: {
          false: "The customer is unhappy.",
          true: "The customer is happy.",
        },
        instructions: "Is the sentiment positive?",
        type: "noul",
      },
      "rating": {
        criteria: [
          "Negative",
          "Neutral",
          "Positive",
        ],
        instructions: "Rate sentiment.",
        type: "score",
      },
      "sentiment": {
        criteria: {
          "negative": "Negative sentiment",
          "neutral": "<value>",
          "positive": "Positive sentiment",
        },
        instructions: "Classify sentiment.",
        type: "choice",
      },
    },
    state: "The customer says: I love this product. It is wonderful!",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { routerClassifyCreate } from "@orq-ai/node/funcs/routerClassifyCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerClassifyCreate(orq, {
    model: "openai/gpt-6-luna",
    questions: {
      "positive": {
        criteria: {
          false: "The customer is unhappy.",
          true: "The customer is happy.",
        },
        instructions: "Is the sentiment positive?",
        type: "noul",
      },
      "rating": {
        criteria: [
          "Negative",
          "Neutral",
          "Positive",
        ],
        instructions: "Rate sentiment.",
        type: "score",
      },
      "sentiment": {
        criteria: {
          "negative": "Negative sentiment",
          "neutral": "<value>",
          "positive": "Positive sentiment",
        },
        instructions: "Classify sentiment.",
        type: "choice",
      },
    },
    state: "The customer says: I love this product. It is wonderful!",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerClassifyCreate failed:", res.error);
  }
}

run();
```
### Example Usage: partial_refusal

<!-- UsageSnippet language="typescript" operationID="CreateClassify" method="post" path="/v3/router/classify" example="partial_refusal" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.classify.create({
    model: "LeBaron",
    questions: {

    },
    state: {

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
import { routerClassifyCreate } from "@orq-ai/node/funcs/routerClassifyCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerClassifyCreate(orq, {
    model: "LeBaron",
    questions: {
  
    },
    state: {
  
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerClassifyCreate failed:", res.error);
  }
}

run();
```
### Example Usage: support_ticket

<!-- UsageSnippet language="typescript" operationID="CreateClassify" method="post" path="/v3/router/classify" example="support_ticket" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.classify.create({
    model: "typesafe/jev-latest",
    questions: {
      "is_complaint": {
        instructions: "Is the customer complaining?",
        type: "noul",
      },
      "severity": {
        criteria: [
          "Minor",
          "Moderate",
          "Severe",
        ],
        instructions: "How severe is the issue?",
        type: "score",
      },
      "topic": {
        criteria: {
          "delivery": "Shipping or delivery issues",
          "other": "<value>",
          "product": "Product quality",
        },
        instructions: "What is the message mainly about?",
        type: "choice",
      },
    },
    state: "The parcel arrived two days late and the box was crushed.",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { routerClassifyCreate } from "@orq-ai/node/funcs/routerClassifyCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerClassifyCreate(orq, {
    model: "typesafe/jev-latest",
    questions: {
      "is_complaint": {
        instructions: "Is the customer complaining?",
        type: "noul",
      },
      "severity": {
        criteria: [
          "Minor",
          "Moderate",
          "Severe",
        ],
        instructions: "How severe is the issue?",
        type: "score",
      },
      "topic": {
        criteria: {
          "delivery": "Shipping or delivery issues",
          "other": "<value>",
          "product": "Product quality",
        },
        instructions: "What is the message mainly about?",
        type: "choice",
      },
    },
    state: "The parcel arrived two days late and the box was crushed.",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routerClassifyCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateClassifyRequestBody](../../models/operations/createclassifyrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateClassifyResponseBody](../../models/operations/createclassifyresponsebody.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.CreateClassifyResponseBody                          | 400                                                        | application/json                                           |
| errors.CreateClassifyRouterClassifyResponseBody            | 401                                                        | application/json                                           |
| errors.CreateClassifyRouterClassifyResponseResponseBody    | 403                                                        | application/json                                           |
| errors.CreateClassifyRouterClassifyResponse422ResponseBody | 422                                                        | application/json                                           |
| errors.CreateClassifyRouterClassifyResponse429ResponseBody | 429                                                        | application/json                                           |
| errors.CreateClassifyRouterClassifyResponse500ResponseBody | 500                                                        | application/json                                           |
| errors.CreateClassifyRouterClassifyResponse502ResponseBody | 502                                                        | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |