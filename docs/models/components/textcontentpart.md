# TextContentPart

## Example Usage

```typescript
import { TextContentPart } from "@orq-ai/node/models/components";

let value: TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.Deployments2PrefixMessagesType](../../models/components/deployments2prefixmessagestype.md) | :heavy_check_mark:                                                                                     | The type of the content part.                                                                          |
| `text`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The text content.                                                                                      |