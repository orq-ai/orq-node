# AnnotationQueue

## Overview

### Available Operations

* [patchV2AnnotationQueuesAnnotationQueueId](#patchv2annotationqueuesannotationqueueid) - Edit an annotation queue
* [deleteV2AnnotationQueuesAnnotationQueueId](#deletev2annotationqueuesannotationqueueid) - Delete an annotation queue
* [postV2AnnotationQueues](#postv2annotationqueues) - Create an annotation queue
* [getV2AnnotationQueuesAnnotationQueueIdItems](#getv2annotationqueuesannotationqueueiditems) - Query items from an annotation queue
* [postV2AnnotationQueuesAnnotationQueueIdItemsAdd](#postv2annotationqueuesannotationqueueiditemsadd) - Add items to an annotation queue
* [postV2AnnotationQueuesAnnotationQueueIdItemsRemove](#postv2annotationqueuesannotationqueueiditemsremove) - Remove annotation queue items
* [getV2AnnotationQueuesAnnotationQueueIdItemsItemId](#getv2annotationqueuesannotationqueueiditemsitemid) - Retrieve an annotation queue item

## patchV2AnnotationQueuesAnnotationQueueId

Edit an annotation queue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/annotation-queues/{annotation_queue_id}" method="patch" path="/v2/annotation-queues/{annotation_queue_id}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.annotationQueue.patchV2AnnotationQueuesAnnotationQueueId({
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
import { annotationQueuePatchV2AnnotationQueuesAnnotationQueueId } from "@orq-ai/node/funcs/annotationQueuePatchV2AnnotationQueuesAnnotationQueueId.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueuePatchV2AnnotationQueuesAnnotationQueueId(orq, {
    annotationQueueId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueuePatchV2AnnotationQueuesAnnotationQueueId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2AnnotationQueuesAnnotationQueueIdRequest](../../models/operations/patchv2annotationqueuesannotationqueueidrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2AnnotationQueuesAnnotationQueueIdResponseBody](../../models/operations/patchv2annotationqueuesannotationqueueidresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteV2AnnotationQueuesAnnotationQueueId

Delete an annotation queue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/annotation-queues/{annotation_queue_id}" method="delete" path="/v2/annotation-queues/{annotation_queue_id}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  await orq.annotationQueue.deleteV2AnnotationQueuesAnnotationQueueId({
    annotationQueueId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { annotationQueueDeleteV2AnnotationQueuesAnnotationQueueId } from "@orq-ai/node/funcs/annotationQueueDeleteV2AnnotationQueuesAnnotationQueueId.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueueDeleteV2AnnotationQueuesAnnotationQueueId(orq, {
    annotationQueueId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("annotationQueueDeleteV2AnnotationQueuesAnnotationQueueId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2AnnotationQueuesAnnotationQueueIdRequest](../../models/operations/deletev2annotationqueuesannotationqueueidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV2AnnotationQueues

Create an annotation queue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/annotation-queues" method="post" path="/v2/annotation-queues" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.annotationQueue.postV2AnnotationQueues();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { annotationQueuePostV2AnnotationQueues } from "@orq-ai/node/funcs/annotationQueuePostV2AnnotationQueues.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueuePostV2AnnotationQueues(orq);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueuePostV2AnnotationQueues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2AnnotationQueuesRequestBody](../../models/operations/postv2annotationqueuesrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2AnnotationQueuesResponseBody](../../models/operations/postv2annotationqueuesresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getV2AnnotationQueuesAnnotationQueueIdItems

Queries items from the specified annotation queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/annotation-queues/{annotation_queue_id}/items" method="get" path="/v2/annotation-queues/{annotation_queue_id}/items" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.annotationQueue.getV2AnnotationQueuesAnnotationQueueIdItems({
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
import { annotationQueueGetV2AnnotationQueuesAnnotationQueueIdItems } from "@orq-ai/node/funcs/annotationQueueGetV2AnnotationQueuesAnnotationQueueIdItems.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueueGetV2AnnotationQueuesAnnotationQueueIdItems(orq, {
    annotationQueueId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueGetV2AnnotationQueuesAnnotationQueueIdItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsRequest](../../models/operations/getv2annotationqueuesannotationqueueiditemsrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2AnnotationQueuesAnnotationQueueIdItemsResponseBody](../../models/operations/getv2annotationqueuesannotationqueueiditemsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV2AnnotationQueuesAnnotationQueueIdItemsAdd

Adds items to the specified annotation queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/annotation-queues/{annotation_queue_id}/items-add" method="post" path="/v2/annotation-queues/{annotation_queue_id}/items-add" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.annotationQueue.postV2AnnotationQueuesAnnotationQueueIdItemsAdd({
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
import { annotationQueuePostV2AnnotationQueuesAnnotationQueueIdItemsAdd } from "@orq-ai/node/funcs/annotationQueuePostV2AnnotationQueuesAnnotationQueueIdItemsAdd.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueuePostV2AnnotationQueuesAnnotationQueueIdItemsAdd(orq, {
    annotationQueueId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueuePostV2AnnotationQueuesAnnotationQueueIdItemsAdd failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2AnnotationQueuesAnnotationQueueIdItemsAddRequest](../../models/operations/postv2annotationqueuesannotationqueueiditemsaddrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2AnnotationQueuesAnnotationQueueIdItemsAddResponseBody](../../models/operations/postv2annotationqueuesannotationqueueiditemsaddresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV2AnnotationQueuesAnnotationQueueIdItemsRemove

Removes items from the specified annotation queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/annotation-queues/{annotation_queue_id}/items-remove" method="post" path="/v2/annotation-queues/{annotation_queue_id}/items-remove" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.annotationQueue.postV2AnnotationQueuesAnnotationQueueIdItemsRemove({
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
import { annotationQueuePostV2AnnotationQueuesAnnotationQueueIdItemsRemove } from "@orq-ai/node/funcs/annotationQueuePostV2AnnotationQueuesAnnotationQueueIdItemsRemove.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueuePostV2AnnotationQueuesAnnotationQueueIdItemsRemove(orq, {
    annotationQueueId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueuePostV2AnnotationQueuesAnnotationQueueIdItemsRemove failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2AnnotationQueuesAnnotationQueueIdItemsRemoveRequest](../../models/operations/postv2annotationqueuesannotationqueueiditemsremoverequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2AnnotationQueuesAnnotationQueueIdItemsRemoveResponseBody](../../models/operations/postv2annotationqueuesannotationqueueiditemsremoveresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getV2AnnotationQueuesAnnotationQueueIdItemsItemId

Retrieves an item from the specified annotation queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/annotation-queues/{annotation_queue_id}/items/{item_id}" method="get" path="/v2/annotation-queues/{annotation_queue_id}/items/{item_id}" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.annotationQueue.getV2AnnotationQueuesAnnotationQueueIdItemsItemId({
    annotationQueueId: "<id>",
    itemId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { annotationQueueGetV2AnnotationQueuesAnnotationQueueIdItemsItemId } from "@orq-ai/node/funcs/annotationQueueGetV2AnnotationQueuesAnnotationQueueIdItemsItemId.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await annotationQueueGetV2AnnotationQueuesAnnotationQueueIdItemsItemId(orq, {
    annotationQueueId: "<id>",
    itemId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueGetV2AnnotationQueuesAnnotationQueueIdItemsItemId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdRequest](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |