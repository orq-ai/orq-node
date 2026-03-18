# Items2

## Example Usage

```typescript
import { Items2 } from "@orq-ai/node/models/operations";

let value: Items2 = {
  id: "<id>",
  annotationQueueId: "<id>",
  workspaceId: "<id>",
  datapointId: "<id>",
  type: "datapoint",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `annotationQueueId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier of the annotation queue                                        |
| `workspaceId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier of the workspace it belongs to                                 |
| `usedHumanReviewIds`                                                                 | *string*[]                                                                           | :heavy_minus_sign:                                                                   | The unique identifiers of the human reviews that have been used to annotate the item |
| `datapointId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `type`                                                                               | *"datapoint"*                                                                        | :heavy_check_mark:                                                                   | N/A                                                                                  |