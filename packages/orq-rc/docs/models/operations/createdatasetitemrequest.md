# CreateDatasetItemRequest

## Example Usage

```typescript
import { CreateDatasetItemRequest } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemRequest = {
  datasetId: "<id>",
  requestBody: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `datasetId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestBody`                                                            | [components.DatapointInput](../../models/components/datapointinput.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |