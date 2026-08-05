# RetrieveAnnotationQueueItemResponseBodyTools

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyTools } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyTools = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      type: "object",
      properties: {},
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |
| `type`                                                                                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson14InputType](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson14inputtype.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                                                                                                     |
| `function`                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemResponseBodyFunction](../../models/operations/retrieveannotationqueueitemresponsebodyfunction.md)                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |