# ExperimentRunRowsDeleteRequest

## Example Usage

```typescript
import { ExperimentRunRowsDeleteRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunRowsDeleteRequest = {
  experimentId: "<id>",
  runId: "<id>",
  deleteRowsRequest: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `experimentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `runId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `deleteRowsRequest`                                                          | [components.DeleteRowsRequest](../../models/components/deleterowsrequest.md) | :heavy_check_mark:                                                           | N/A                                                                          |