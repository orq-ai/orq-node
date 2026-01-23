# GenerateConversationNameRequestBody

## Example Usage

```typescript
import { GenerateConversationNameRequestBody } from "@orq-ai/node/models/operations";

let value: GenerateConversationNameRequestBody = {
  context: "How do I integrate the SDK with my Node.js application?",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `context`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Conversation context used to generate a meaningful display name. Typically the first user message or a conversation summary. | How do I integrate the SDK with my Node.js application?                                                                      |