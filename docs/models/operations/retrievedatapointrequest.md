# RetrieveDatapointRequest

## Example Usage

```typescript
import { RetrieveDatapointRequest } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointRequest = {
  datasetId: "<id>",
  datapointId: "<id>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `datasetId`                            | *string*                               | :heavy_check_mark:                     | The unique identifier of the dataset   |
| `datapointId`                          | *string*                               | :heavy_check_mark:                     | The unique identifier of the datapoint |