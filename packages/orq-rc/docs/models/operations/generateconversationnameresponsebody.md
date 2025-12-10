# GenerateConversationNameResponseBody

Conversation name successfully generated and updated. Returns the complete updated conversation object.

## Example Usage

```typescript
import { GenerateConversationNameResponseBody } from "@orq-ai/node/models/operations";

let value: GenerateConversationNameResponseBody = {
  entityId: "<id>",
  kind: "conversation",
  displayName: "Glenna.Bruen73",
  createdAt: 5389.54,
  updatedAt: 4303.27,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Unique ULID (Universally Unique Lexicographically Sortable Identifier) for the conversation, prefixed with "conv_" |
| `entityId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Identifier of the parent entity (agent, deployment, etc.) this conversation belongs to.                            |
| `kind`                                                                                                             | [operations.GenerateConversationNameKind](../../models/operations/generateconversationnamekind.md)                 | :heavy_check_mark:                                                                                                 | Type discriminator indicating this is a conversation                                                               |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Display name for the conversation. Can be auto-generated or set by the user.                                       |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was created                                                 |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was last updated                                            |
| `createdById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that created the conversation                                             |
| `updatedById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that last updated the conversation                                        |
| `metadata`                                                                                                         | [operations.GenerateConversationNameMetadata](../../models/operations/generateconversationnamemetadata.md)         | :heavy_minus_sign:                                                                                                 | Optional metadata associated with the conversation.                                                                |