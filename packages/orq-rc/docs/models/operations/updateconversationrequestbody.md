# UpdateConversationRequestBody

## Example Usage

```typescript
import { UpdateConversationRequestBody } from "@orq-ai/node/models/operations";

let value: UpdateConversationRequestBody = {
  displayName: "Renamed Conversation",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `displayName`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Updated display name for the conversation.                                                     | Renamed Conversation                                                                           |
| `metadata`                                                                                     | [operations.UpdateConversationMetadata](../../models/operations/updateconversationmetadata.md) | :heavy_minus_sign:                                                                             | Optional metadata to update for the conversation.                                              |                                                                                                |