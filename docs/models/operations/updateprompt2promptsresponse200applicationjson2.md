# UpdatePrompt2PromptsResponse200ApplicationJson2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePrompt2PromptsResponse200ApplicationJson2 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsResponse200ApplicationJson2 = {
  type: "image_url",
  imageUrl: {
    url: "https://entire-bowling.net",
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody2VersionsType](../../models/operations/updateprompt2promptsresponse200applicationjsonresponsebody2versionstype.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `imageUrl`                                                                                                                                                                               | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONImageUrl](../../models/operations/updateprompt2promptsresponse200applicationjsonimageurl.md)                                   | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |