# CreateConversationResponseRequest

## Example Usage

```typescript
import { CreateConversationResponseRequest } from "@orq-ai/node/models/operations";

let value: CreateConversationResponseRequest = {
  conversationId: "<id>",
  requestBody: {
    message: {
      role: "user",
      parts: [
        {
          kind: "text",
          text: "Hello!",
        },
      ],
    },
    model: "Model X",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The unique identifier of the conversation                                                                            |
| `requestBody`                                                                                                        | [operations.CreateConversationResponseRequestBody](../../models/operations/createconversationresponserequestbody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |