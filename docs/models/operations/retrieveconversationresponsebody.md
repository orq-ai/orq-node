# RetrieveConversationResponseBody

Conversation successfully retrieved. Returns the complete conversation object with all metadata.

## Example Usage

```typescript
import { RetrieveConversationResponseBody } from "@orq-ai/node/models/operations";

let value: RetrieveConversationResponseBody = {
  entityId: "<id>",
  kind: "conversation",
  displayName: "Wilber.Huels53",
  createdAt: 4273.19,
  updatedAt: 9724.16,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Unique ULID (Universally Unique Lexicographically Sortable Identifier) for the conversation, prefixed with "conv_" |
| `entityId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Identifier of the parent entity (agent, deployment, etc.) this conversation belongs to.                            |
| `kind`                                                                                                             | [operations.RetrieveConversationKind](../../models/operations/retrieveconversationkind.md)                         | :heavy_check_mark:                                                                                                 | Type discriminator indicating this is a conversation                                                               |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Display name for the conversation. Can be auto-generated or set by the user.                                       |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was created                                                 |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was last updated                                            |
| `createdById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that created the conversation                                             |
| `updatedById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that last updated the conversation                                        |
| `metadata`                                                                                                         | [operations.RetrieveConversationMetadata](../../models/operations/retrieveconversationmetadata.md)                 | :heavy_minus_sign:                                                                                                 | Optional metadata associated with the conversation.                                                                |