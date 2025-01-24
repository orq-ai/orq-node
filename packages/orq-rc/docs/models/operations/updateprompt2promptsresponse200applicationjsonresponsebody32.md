# UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody32

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody32 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody32 = {
  type: "image_url",
  imageUrl: {
    url: "https://quintessential-muscat.name/",
  },
};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                           | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody3VersionsPromptConfigType](../../models/operations/updateprompt2promptsresponse200applicationjsonresponsebody3versionspromptconfigtype.md) | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `imageUrl`                                                                                                                                                                                                       | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody3ImageUrl](../../models/operations/updateprompt2promptsresponse200applicationjsonresponsebody3imageurl.md)                                 | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |