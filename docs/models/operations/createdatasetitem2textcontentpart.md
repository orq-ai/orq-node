# CreateDatasetItem2TextContentPart

## Example Usage

```typescript
import { CreateDatasetItem2TextContentPart } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem2TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [operations.CreateDatasetItem2DatasetsRequestRequestBodyMessagesType](../../models/operations/createdatasetitem2datasetsrequestrequestbodymessagestype.md) | :heavy_check_mark:                                                                                                                                         | The type of the content part.                                                                                                                              |
| `text`                                                                                                                                                     | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The text content.                                                                                                                                          |
| `annotations`                                                                                                                                              | *operations.CreateDatasetItem2Annotations*[]                                                                                                               | :heavy_minus_sign:                                                                                                                                         | Annotations for the text content.                                                                                                                          |