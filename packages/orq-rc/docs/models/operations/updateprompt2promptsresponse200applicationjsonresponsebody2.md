# UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody2 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody2 = {
  type: "image_url",
  imageUrl: {
    url: "https://hateful-heartache.info",
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody1VersionsType](../../models/operations/updateprompt2promptsresponse200applicationjsonresponsebody1versionstype.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `imageUrl`                                                                                                                                                                               | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONResponseBodyImageUrl](../../models/operations/updateprompt2promptsresponse200applicationjsonresponsebodyimageurl.md)           | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |