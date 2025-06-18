# UpdateDatapoint2TextContentPart

## Example Usage

```typescript
import { UpdateDatapoint2TextContentPart } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.UpdateDatapoint2DatasetsRequestRequestBodyMessagesType](../../models/operations/updatedatapoint2datasetsrequestrequestbodymessagestype.md) | :heavy_check_mark:                                                                                                                                     | The type of the content part.                                                                                                                          |
| `text`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The text content.                                                                                                                                      |