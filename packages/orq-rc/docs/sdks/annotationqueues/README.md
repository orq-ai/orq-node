# AnnotationQueues

## Overview

### Available Operations

* [postV2AnnotationQueuesQuery](#postv2annotationqueuesquery) - List annotation queues
* [getV2AnnotationQueuesAnnotationQueueId](#getv2annotationqueuesannotationqueueid) - Retrieve an annotation queue
* [deleteV2AnnotationQueuesAnnotationQueueIdClear](#deletev2annotationqueuesannotationqueueidclear) - Delete all items

## postV2AnnotationQueuesQuery

Retrieves a paginated list of annotation queues for the current workspace. Results can be paginated using cursor-based pagination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/annotation-queues/query" method="post" path="/v2/annotation-queues/query" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.annotationQueues.postV2AnnotationQueuesQuery();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { annotationQueuesPostV2AnnotationQueuesQuery } from "@orq-ai/node/funcs/annotationQueuesPostV2AnnotationQueuesQuery.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueuesPostV2AnnotationQueuesQuery(orq);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueuesPostV2AnnotationQueuesQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2AnnotationQueuesQueryRequestBody](../../models/operations/postv2annotationqueuesqueryrequestbody.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2AnnotationQueuesQueryResponseBody](../../models/operations/postv2annotationqueuesqueryresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getV2AnnotationQueuesAnnotationQueueId

Retrieves a specific annotation queue by its unique identifier

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/annotation-queues/{annotation_queue_id}" method="get" path="/v2/annotation-queues/{annotation_queue_id}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.annotationQueues.getV2AnnotationQueuesAnnotationQueueId({
    annotationQueueId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { annotationQueuesGetV2AnnotationQueuesAnnotationQueueId } from "@orq-ai/node/funcs/annotationQueuesGetV2AnnotationQueuesAnnotationQueueId.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueuesGetV2AnnotationQueuesAnnotationQueueId(orq, {
    annotationQueueId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueuesGetV2AnnotationQueuesAnnotationQueueId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdRequest](../../models/operations/getv2annotationqueuesannotationqueueidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2AnnotationQueuesAnnotationQueueIdResponseBody](../../models/operations/getv2annotationqueuesannotationqueueidresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteV2AnnotationQueuesAnnotationQueueIdClear

Delete all items from an annotation queue. This action is irreversible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/annotation-queues/{annotation_queue_id}/clear" method="delete" path="/v2/annotation-queues/{annotation_queue_id}/clear" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  await orq.annotationQueues.deleteV2AnnotationQueuesAnnotationQueueIdClear({
    annotationQueueId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { annotationQueuesDeleteV2AnnotationQueuesAnnotationQueueIdClear } from "@orq-ai/node/funcs/annotationQueuesDeleteV2AnnotationQueuesAnnotationQueueIdClear.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueuesDeleteV2AnnotationQueuesAnnotationQueueIdClear(orq, {
    annotationQueueId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("annotationQueuesDeleteV2AnnotationQueuesAnnotationQueueIdClear failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2AnnotationQueuesAnnotationQueueIdClearRequest](../../models/operations/deletev2annotationqueuesannotationqueueidclearrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |