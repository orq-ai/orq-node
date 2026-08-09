# UpdateDatapointRequest

## Example Usage

```typescript
import { UpdateDatapointRequest } from "@orq-ai/node/models/operations";

let value: UpdateDatapointRequest = {
  datasetId: "<id>",
  datapointId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique identifier of the dataset                                                           |
| `datapointId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique identifier of the datapoint                                                         |
| `requestBody`                                                                                  | [operations.UpdateDatapointRequestBody](../../models/operations/updatedatapointrequestbody.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |