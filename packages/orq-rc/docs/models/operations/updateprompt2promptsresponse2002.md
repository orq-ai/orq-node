# UpdatePrompt2PromptsResponse2002

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePrompt2PromptsResponse2002 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsResponse2002 = {
  type: "image_url",
  imageUrl: {
    url: "https://youthful-pop.name/",
  },
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                           | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONResponseBody3PromptConfigType](../../models/operations/updateprompt2promptsresponse200applicationjsonresponsebody3promptconfigtype.md) | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `imageUrl`                                                                                                                                                                                       | [operations.UpdatePrompt2PromptsResponse200ImageUrl](../../models/operations/updateprompt2promptsresponse200imageurl.md)                                                                         | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |