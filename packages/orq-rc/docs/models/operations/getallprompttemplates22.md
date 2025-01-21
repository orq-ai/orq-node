# GetAllPromptTemplates22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetAllPromptTemplates22 } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplates22 = {
  type: "image_url",
  imageUrl: {
    url: "https://inconsequential-comparison.net",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.GetAllPromptTemplates2PromptTemplatesType](../../models/operations/getallprompttemplates2prompttemplatestype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `imageUrl`                                                                                                                   | [operations.GetAllPromptTemplates2ImageUrl](../../models/operations/getallprompttemplates2imageurl.md)                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |