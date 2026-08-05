# RetrieveAnnotationQueueItemMessageToolCalls

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemMessageToolCalls } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `index`                                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [operations.RetrieveAnnotationQueueItemMessageType](../../models/operations/retrieveannotationqueueitemmessagetype.md)         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `function`                                                                                                                     | [operations.RetrieveAnnotationQueueItemMessageFunction](../../models/operations/retrieveannotationqueueitemmessagefunction.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |