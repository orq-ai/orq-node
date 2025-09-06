# ListDatasetDatapoints2TextContentPart

## Example Usage

```typescript
import { ListDatasetDatapoints2TextContentPart } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapoints2TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [operations.ListDatasetDatapoints2DatasetsResponse200ApplicationJSONType](../../models/operations/listdatasetdatapoints2datasetsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                                 | The type of the content part.                                                                                                                                      |
| `text`                                                                                                                                                             | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The text content.                                                                                                                                                  |
| `annotations`                                                                                                                                                      | *operations.ListDatasetDatapoints2Annotations*[]                                                                                                                   | :heavy_minus_sign:                                                                                                                                                 | Annotations for the text content.                                                                                                                                  |