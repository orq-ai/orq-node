# RetrieveDatapoint2TextContentPart

## Example Usage

```typescript
import { RetrieveDatapoint2TextContentPart } from "@orq-ai/node/models/operations";

let value: RetrieveDatapoint2TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [operations.RetrieveDatapoint2DatasetsResponse200ApplicationJSONType](../../models/operations/retrievedatapoint2datasetsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                         | The type of the content part.                                                                                                                              |
| `text`                                                                                                                                                     | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The text content.                                                                                                                                          |
| `annotations`                                                                                                                                              | *operations.RetrieveDatapoint2Annotations*[]                                                                                                               | :heavy_minus_sign:                                                                                                                                         | Annotations for the text content.                                                                                                                          |