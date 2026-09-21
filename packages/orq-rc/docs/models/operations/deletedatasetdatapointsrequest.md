# DeleteDatasetDatapointsRequest

## Example Usage

```typescript
import { DeleteDatasetDatapointsRequest } from "@orq-ai/node/models/operations";

let value: DeleteDatasetDatapointsRequest = {
  datasetId: "<id>",
  deleteDatapointsRequest: {
    itemIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `datasetId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteDatapointsRequest`                                                                | [components.DeleteDatapointsRequest](../../models/components/deletedatapointsrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |