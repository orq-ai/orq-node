# PostV2RouterOcrResponseBody

Represents an OCR response from the API.

## Example Usage

```typescript
import { PostV2RouterOcrResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2RouterOcrResponseBody = {
  model: "Fiesta",
  pages: [
    {
      index: 2386.11,
      markdown: "<value>",
      images: [
        {
          id: "<id>",
        },
      ],
    },
  ],
  usage: {
    type: "tokens",
    tokensProcessed: 846264,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `model`                                                | *string*                                               | :heavy_check_mark:                                     | ID of the model used for OCR.                          |
| `pages`                                                | [operations.Pages](../../models/operations/pages.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `usage`                                                | *operations.PostV2RouterOcrUsage*                      | :heavy_check_mark:                                     | N/A                                                    |