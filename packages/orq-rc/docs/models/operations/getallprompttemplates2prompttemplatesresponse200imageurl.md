# GetAllPromptTemplates2PromptTemplatesResponse200ImageUrl

## Example Usage

```typescript
import { GetAllPromptTemplates2PromptTemplatesResponse200ImageUrl } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplates2PromptTemplatesResponse200ImageUrl = {
  url: "https://gaseous-publicity.info/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The orq.ai id of the image                                                           |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |