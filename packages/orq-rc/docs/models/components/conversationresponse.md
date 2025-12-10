# ConversationResponse

## Example Usage

```typescript
import { ConversationResponse } from "@orq-ai/node/models/components";

let value: ConversationResponse = {
  entityId: "<id>",
  kind: "conversation",
  displayName: "Keyshawn20",
  createdAt: 22.92,
  updatedAt: 327.94,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Unique ULID (Universally Unique Lexicographically Sortable Identifier) for the conversation, prefixed with "conv_" |
| `entityId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Identifier of the parent entity (agent, deployment, etc.) this conversation belongs to.                            |
| `kind`                                                                                                             | [components.ConversationResponseKind](../../models/components/conversationresponsekind.md)                         | :heavy_check_mark:                                                                                                 | Type discriminator indicating this is a conversation                                                               |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Display name for the conversation. Can be auto-generated or set by the user.                                       |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was created                                                 |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was last updated                                            |
| `createdById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that created the conversation                                             |
| `updatedById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that last updated the conversation                                        |
| `metadata`                                                                                                         | [components.Metadata](../../models/components/metadata.md)                                                         | :heavy_minus_sign:                                                                                                 | Optional metadata associated with the conversation.                                                                |