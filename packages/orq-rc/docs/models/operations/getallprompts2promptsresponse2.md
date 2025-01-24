# GetAllPrompts2PromptsResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetAllPrompts2PromptsResponse2 } from "@orq-ai/node/models/operations";

let value: GetAllPrompts2PromptsResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://defensive-commodity.info/",
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [operations.GetAllPrompts2PromptsResponse200ApplicationJSONResponseBodyType](../../models/operations/getallprompts2promptsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `imageUrl`                                                                                                                                                               | [operations.GetAllPrompts2PromptsResponseImageUrl](../../models/operations/getallprompts2promptsresponseimageurl.md)                                                     | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |