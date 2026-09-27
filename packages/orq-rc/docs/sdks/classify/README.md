# Router.Classify

## Overview

### Available Operations

* [create](#create) - Classify

## create

**Beta.** Runs typed classification questions (`noul`, `choice`, `score`) against the native classify model `typesafe/jev-latest` or a chat model that supports classify, such as `anthropic/claude-haiku-4-5`, `google-ai/gemini-3.8-flash` or `zai/glm-5.3-flash`. Chat models answer through one structured-output call and their probabilities are model-reported rather than calibrated. The request and response follow the TypeSafe classification contract; `model` in the response echoes the request and `usage` carries the computed cost like the Responses API. This endpoint currently does not apply PII plugins or guardrails.

### Example Usage

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

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.CreateClassifyResponseBody                       | 400                                                     | application/json                                        |
| errors.CreateClassifyRouterClassifyResponseBody         | 422                                                     | application/json                                        |
| errors.CreateClassifyRouterClassifyResponseResponseBody | 429                                                     | application/json                                        |
| errors.APIError                                         | 4XX, 5XX                                                | \*/\*                                                   |