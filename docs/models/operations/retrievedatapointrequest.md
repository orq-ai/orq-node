# RetrieveDatapointRequest

## Example Usage

```typescript
import { RetrieveDatapointRequest } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointRequest = {
  datasetId: "f6b5f8c7-e91a-4055-a394-2c6dd5b140b1",
  datapointId: "<id>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `datasetId`                            | *string*                               | :heavy_check_mark:                     | The unique identifier of the dataset   |
| `datapointId`                          | *string*                               | :heavy_check_mark:                     | The unique identifier of the datapoint |