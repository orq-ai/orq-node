# CreateDatasetItemRequest

## Example Usage

```typescript
import { CreateDatasetItemRequest } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemRequest = {
  datasetId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique identifier of the dataset                                                                 |
| `requestBody`                                                                                        | [operations.CreateDatasetItemRequestBody](../../models/operations/createdatasetitemrequestbody.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |