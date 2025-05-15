# CreateDatasetExperimentRequest

## Example Usage

```typescript
import { CreateDatasetExperimentRequest } from "@orq-ai/node/models/operations";

let value: CreateDatasetExperimentRequest = {
  datasetId: "<id>",
  requestBody: {
    experimentKey: "<value>",
    path: "Default/Experiments",
    type: "dataset_experiment",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `requestBody`                                                                                                  | [operations.CreateDatasetExperimentRequestBody](../../models/operations/createdatasetexperimentrequestbody.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |