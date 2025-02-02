# UpdatePromptSnippet22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePromptSnippet22 } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippet22 = {
  type: "image_url",
  imageUrl: {
    url: "https://grown-rust.net",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.UpdatePromptSnippet2PromptSnippetsType](../../models/operations/updatepromptsnippet2promptsnippetstype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `imageUrl`                                                                                                             | [operations.UpdatePromptSnippet2ImageUrl](../../models/operations/updatepromptsnippet2imageurl.md)                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |