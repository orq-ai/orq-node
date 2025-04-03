# UpdateDatasetRequest

## Example Usage

```typescript
import { UpdateDatasetRequest } from "@orq-ai/node/models/operations";

let value: UpdateDatasetRequest = {
  datasetId: "<id>",
  requestBody: {
    path: "Customer Service/Billing/Refund",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.UpdateDatasetRequestBody](../../models/operations/updatedatasetrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |