# UpdateConversationRequest

## Example Usage

```typescript
import { UpdateConversationRequest } from "@orq-ai/node/models/operations";

let value: UpdateConversationRequest = {
  conversationId: "conv_01jj1hdhn79xas7a01wb3hysdb",
  requestBody: {
    displayName: "Renamed Conversation",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique identifier of the conversation to update                                                  | conv_01jj1hdhn79xas7a01wb3hysdb                                                                      |
| `requestBody`                                                                                        | [operations.UpdateConversationRequestBody](../../models/operations/updateconversationrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |