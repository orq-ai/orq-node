# CreateChatCompletion2TextContentPart

## Example Usage

```typescript
import { CreateChatCompletion2TextContentPart } from "@orq-ai/node/models/operations";

let value: CreateChatCompletion2TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [operations.CreateChatCompletion2ProxyRequestRequestBodyMessagesType](../../models/operations/createchatcompletion2proxyrequestrequestbodymessagestype.md) | :heavy_check_mark:                                                                                                                                         | The type of the content part.                                                                                                                              |
| `text`                                                                                                                                                     | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The text content.                                                                                                                                          |
| `annotations`                                                                                                                                              | *operations.CreateChatCompletion2Annotations*[]                                                                                                            | :heavy_minus_sign:                                                                                                                                         | Annotations for the text content.                                                                                                                          |