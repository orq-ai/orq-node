# ListDatasetDatapoints2RefusalContentPart

## Example Usage

```typescript
import { ListDatasetDatapoints2RefusalContentPart } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapoints2RefusalContentPart = {
  type: "refusal",
  refusal: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                     | [operations.ListDatasetDatapoints2DatasetsResponse200ApplicationJSONResponseBodyType](../../models/operations/listdatasetdatapoints2datasetsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                         | The type of the content part.                                                                                                                                                              |
| `refusal`                                                                                                                                                                                  | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | The refusal message generated by the model.                                                                                                                                                |