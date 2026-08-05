# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesTools

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesTools } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesTools = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      type: "object",
      properties: {
        "key": "<value>",
        "key1": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |
| `type`                                                                                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17InputType](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson17inputtype.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                     |
| `function`                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesFunction](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesfunction.md)                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |