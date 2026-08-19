# Data1

## Example Usage

```typescript
import { Data1 } from "@orq-ai/node/models/operations";

let value: Data1 = {
  id: "<id>",
  annotationQueueId: "<id>",
  workspaceId: "<id>",
  spanId: "<id>",
  type: "span",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `annotationQueueId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier of the annotation queue                                        |
| `workspaceId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier of the workspace it belongs to                                 |
| `usedHumanReviewIds`                                                                 | *string*[]                                                                           | :heavy_minus_sign:                                                                   | The unique identifiers of the human reviews that have been used to annotate the item |
| `spanId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `traceId`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | The trace identifier this span belongs to                                            |
| `type`                                                                               | *"span"*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |