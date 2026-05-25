# DeleteDatapointRequest

## Example Usage

```typescript
import { DeleteDatapointRequest } from "@orq-ai/node/models/operations";

let value: DeleteDatapointRequest = {
  datasetId: "b6c88556-46cc-4332-856e-e7cd839f4476",
  datapointId: "<id>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `datasetId`                            | *string*                               | :heavy_check_mark:                     | The unique identifier of the dataset   |
| `datapointId`                          | *string*                               | :heavy_check_mark:                     | The unique identifier of the datapoint |