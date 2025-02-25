# ListDatasetDatapointsToolCalls

## Example Usage

```typescript
import { ListDatasetDatapointsToolCalls } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapointsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `index`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [operations.ListDatasetDatapointsType](../../models/operations/listdatasetdatapointstype.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `function`                                                                                           | [operations.ListDatasetDatapointsFunction](../../models/operations/listdatasetdatapointsfunction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |