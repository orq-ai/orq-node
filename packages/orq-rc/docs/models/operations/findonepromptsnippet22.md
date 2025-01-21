# FindOnePromptSnippet22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { FindOnePromptSnippet22 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippet22 = {
  type: "image_url",
  imageUrl: {
    url: "https://present-integer.name",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.FindOnePromptSnippet2PromptSnippetsType](../../models/operations/findonepromptsnippet2promptsnippetstype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `imageUrl`                                                                                                               | [operations.FindOnePromptSnippet2ImageUrl](../../models/operations/findonepromptsnippet2imageurl.md)                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |