# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseTools

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseTools } from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseTools = {
    type: "function",
    function: {
      name: "<value>",
      parameters: {
        type: "object",
        properties: {
          "key": "<value>",
        },
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |
| `type`                                                                                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson22InputType](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson22inputtype.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                     |
| `function`                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseFunction](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponsefunction.md)                                           | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |