# Evaluators

## Overview

### Available Operations

* [getV2EvaluatorsIdVersions](#getv2evaluatorsidversions) - List evaluator versions
* [getV2EvaluatorsIdVersionsVersionId](#getv2evaluatorsidversionsversionid) - Get evaluator version

## getV2EvaluatorsIdVersions

Returns version history for a specific evaluator

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/evaluators/{id}/versions" method="get" path="/v2/evaluators/{id}/versions" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.evaluators.getV2EvaluatorsIdVersions({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { evaluatorsGetV2EvaluatorsIdVersions } from "@orq-ai/node/funcs/evaluatorsGetV2EvaluatorsIdVersions.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await evaluatorsGetV2EvaluatorsIdVersions(orq, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("evaluatorsGetV2EvaluatorsIdVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2EvaluatorsIdVersionsRequest](../../models/operations/getv2evaluatorsidversionsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2EvaluatorsIdVersionsResponseBody](../../models/operations/getv2evaluatorsidversionsresponsebody.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetV2EvaluatorsIdVersionsResponseBody | 404                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## getV2EvaluatorsIdVersionsVersionId

Returns a specific version of an evaluator

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/evaluators/{id}/versions/{version_id}" method="get" path="/v2/evaluators/{id}/versions/{version_id}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.evaluators.getV2EvaluatorsIdVersionsVersionId({
    id: "<id>",
    versionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { evaluatorsGetV2EvaluatorsIdVersionsVersionId } from "@orq-ai/node/funcs/evaluatorsGetV2EvaluatorsIdVersionsVersionId.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await evaluatorsGetV2EvaluatorsIdVersionsVersionId(orq, {
    id: "<id>",
    versionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("evaluatorsGetV2EvaluatorsIdVersionsVersionId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2EvaluatorsIdVersionsVersionIdRequest](../../models/operations/getv2evaluatorsidversionsversionidrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2EvaluatorsIdVersionsVersionIdResponseBody](../../models/operations/getv2evaluatorsidversionsversionidresponsebody.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.GetV2EvaluatorsIdVersionsVersionIdResponseBody | 404                                                   | application/json                                      |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |