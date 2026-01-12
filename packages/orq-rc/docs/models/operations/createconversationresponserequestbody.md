# CreateConversationResponseRequestBody

## Example Usage

```typescript
import { CreateConversationResponseRequestBody } from "@orq-ai/node/models/operations";

let value: CreateConversationResponseRequestBody = {
  message: {
    role: "user",
    parts: [
      {
        kind: "text",
        text: "Hello!",
      },
    ],
  },
  model: "LeBaron",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `message`                                                                          | [components.UserMessageRequest](../../models/components/usermessagerequest.md)     | :heavy_check_mark:                                                                 | The user message to send to the model                                              |
| `model`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The model to use for generation in format provider/model_id (e.g., openai/gpt-4o). |
| `taskId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | Task ID for continuing a previous conversation turn                                |
| `stream`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether to stream the response (default: true)                                     |