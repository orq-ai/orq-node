# GetAllPrompts2PromptsResponse2002

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetAllPrompts2PromptsResponse2002 } from "@orq-ai/node/models/operations";

let value: GetAllPrompts2PromptsResponse2002 = {
  type: "image_url",
  imageUrl: {
    url: "https://idolized-statue.name/",
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.GetAllPrompts2PromptsResponse200ApplicationJSONResponseBodyData2Type](../../models/operations/getallprompts2promptsresponse200applicationjsonresponsebodydata2type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `imageUrl`                                                                                                                                                                         | [operations.GetAllPrompts2PromptsResponse200ImageUrl](../../models/operations/getallprompts2promptsresponse200imageurl.md)                                                         | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |