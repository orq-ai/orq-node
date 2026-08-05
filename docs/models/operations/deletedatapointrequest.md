# DeleteDatapointRequest

## Example Usage

```typescript
import { DeleteDatapointRequest } from "@orq-ai/node/models/operations";

let value: DeleteDatapointRequest = {
  datasetId: "<id>",
  datapointId: "<id>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `datasetId`                            | *string*                               | :heavy_check_mark:                     | The unique identifier of the dataset   |
| `datapointId`                          | *string*                               | :heavy_check_mark:                     | The unique identifier of the datapoint |