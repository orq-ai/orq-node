# ListDatasetDatapointsResponseBody

Datapoints retrieved successfully. Returns a paginated list of datapoints.

## Example Usage

```typescript
import { ListDatasetDatapointsResponseBody } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapointsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      workspaceId: "<id>",
      datasetId: "<id>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `object`                                                                                         | [operations.ListDatasetDatapointsObject](../../models/operations/listdatasetdatapointsobject.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [operations.ListDatasetDatapointsData](../../models/operations/listdatasetdatapointsdata.md)[]   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `hasMore`                                                                                        | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |