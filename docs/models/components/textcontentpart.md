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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.Deployments2PrefixMessages4Type](../../models/components/deployments2prefixmessages4type.md) | :heavy_check_mark:                                                                                       | The type of the content part.                                                                            |
| `text`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The text content.                                                                                        |
| `annotations`                                                                                            | *components.Annotations*[]                                                                               | :heavy_minus_sign:                                                                                       | Annotations for the text content.                                                                        |