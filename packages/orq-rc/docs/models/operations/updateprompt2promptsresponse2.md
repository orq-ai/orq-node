# UpdatePrompt2PromptsResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePrompt2PromptsResponse2 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://superior-drive.org",
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONResponseBodyType](../../models/operations/updateprompt2promptsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `imageUrl`                                                                                                                                                             | [operations.UpdatePrompt2PromptsResponseImageUrl](../../models/operations/updateprompt2promptsresponseimageurl.md)                                                     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |