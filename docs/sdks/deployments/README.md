# Deployments

## Overview

### Available Operations

* [invoke](#invoke) - Invoke
* [list](#list) - List all deployments
* [getConfig](#getconfig) - Get config
* [stream](#stream) - Stream

## invoke

Invoke a deployment with a given payload

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeploymentInvoke" method="post" path="/v2/deployments/invoke" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  environment: "<value>",
  contactId: "<id>",
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.deployments.invoke({
    key: "<key>",
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
    documents: [
      {
        text: "The refund policy allows customers to return items within 30 days of purchase for a full refund.",
        metadata: {
          fileName: "refund_policy.pdf",
          fileType: "application/pdf",
          pageNumber: 1,
        },
      },
      {
        text: "Premium members receive free shipping on all orders over $50.",
        metadata: {
          fileName: "membership_benefits.md",
          fileType: "text/markdown",
        },
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
import { deploymentsInvoke } from "@orq-ai/node/funcs/deploymentsInvoke.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  environment: "<value>",
  contactId: "<id>",
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsInvoke(orq, {
    key: "<key>",
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
    documents: [
      {
        text: "The refund policy allows customers to return items within 30 days of purchase for a full refund.",
        metadata: {
          fileName: "refund_policy.pdf",
          fileType: "application/pdf",
          pageNumber: 1,
        },
      },
      {
        text: "Premium members receive free shipping on all orders over $50.",
        metadata: {
          fileName: "membership_benefits.md",
          fileType: "text/markdown",
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsInvoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.InvokeDeploymentRequest](../../models/components/invokedeploymentrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeploymentInvokeResponseBody](../../models/operations/deploymentinvokeresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## list

Returns a list of your deployments. The deployments are returned sorted by creation date, with the most recent deployments appearing first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Deployments" method="get" path="/v2/deployments" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.deployments.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { deploymentsList } from "@orq-ai/node/funcs/deploymentsList.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsList(orq, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeploymentsRequest](../../models/operations/deploymentsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeploymentsResponseBody](../../models/operations/deploymentsresponsebody.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.HonoApiError | 500                 | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getConfig

Retrieve the deployment configuration

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeploymentGetConfig" method="post" path="/v2/deployments/get_config" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.deployments.getConfig({
    key: "<key>",
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
    documents: [
      {
        text: "The refund policy allows customers to return items within 30 days of purchase for a full refund.",
        metadata: {
          fileName: "refund_policy.pdf",
          fileType: "application/pdf",
          pageNumber: 1,
        },
      },
      {
        text: "Premium members receive free shipping on all orders over $50.",
        metadata: {
          fileName: "membership_benefits.md",
          fileType: "text/markdown",
        },
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
import { deploymentsGetConfig } from "@orq-ai/node/funcs/deploymentsGetConfig.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsGetConfig(orq, {
    key: "<key>",
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
    documents: [
      {
        text: "The refund policy allows customers to return items within 30 days of purchase for a full refund.",
        metadata: {
          fileName: "refund_policy.pdf",
          fileType: "application/pdf",
          pageNumber: 1,
        },
      },
      {
        text: "Premium members receive free shipping on all orders over $50.",
        metadata: {
          fileName: "membership_benefits.md",
          fileType: "text/markdown",
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsGetConfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeploymentGetConfigRequestBody](../../models/operations/deploymentgetconfigrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeploymentGetConfigResponseBody](../../models/operations/deploymentgetconfigresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## stream

Stream deployment generation. Only supported for completions and chat completions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeploymentStream" method="post" path="/v2/deployments/stream" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  environment: "<value>",
  contactId: "<id>",
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.deployments.stream({
    key: "<key>",
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
    documents: [
      {
        text: "The refund policy allows customers to return items within 30 days of purchase for a full refund.",
        metadata: {
          fileName: "refund_policy.pdf",
          fileType: "application/pdf",
          pageNumber: 1,
        },
      },
      {
        text: "Premium members receive free shipping on all orders over $50.",
        metadata: {
          fileName: "membership_benefits.md",
          fileType: "text/markdown",
        },
      },
    ],
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
import { deploymentsStream } from "@orq-ai/node/funcs/deploymentsStream.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  environment: "<value>",
  contactId: "<id>",
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsStream(orq, {
    key: "<key>",
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
    documents: [
      {
        text: "The refund policy allows customers to return items within 30 days of purchase for a full refund.",
        metadata: {
          fileName: "refund_policy.pdf",
          fileType: "application/pdf",
          pageNumber: 1,
        },
      },
      {
        text: "Premium members receive free shipping on all orders over $50.",
        metadata: {
          fileName: "membership_benefits.md",
          fileType: "text/markdown",
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("deploymentsStream failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeploymentStreamRequestBody](../../models/operations/deploymentstreamrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<operations.DeploymentStreamResponseBody>](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |