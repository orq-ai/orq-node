# ExperimentRunRowsDeleteRequest

## Example Usage

```typescript
import { ExperimentRunRowsDeleteRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunRowsDeleteRequest = {
  experimentId: "<id>",
  runId: "<id>",
  deleteRowsRequest: {
    rowIds: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `experimentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | ID of the experiment.                                                        |
| `runId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | ID of the run.                                                               |
| `deleteRowsRequest`                                                          | [components.DeleteRowsRequest](../../models/components/deleterowsrequest.md) | :heavy_check_mark:                                                           | N/A                                                                          |