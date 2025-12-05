# CreateConversationResponseBody

Conversation successfully created. Returns the complete conversation object including the generated ID and timestamps.

## Example Usage

```typescript
import { CreateConversationResponseBody } from "@orq-ai/node/models/operations";

let value: CreateConversationResponseBody = {
  kind: "conversation",
  displayName: "Joaquin94",
  createdAt: 5344.58,
  updatedAt: 5473.99,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Unique ULID (Universally Unique Lexicographically Sortable Identifier) for the conversation, prefixed with "conv_" |
| `kind`                                                                                                             | [operations.CreateConversationKind](../../models/operations/createconversationkind.md)                             | :heavy_check_mark:                                                                                                 | Type discriminator indicating this is a conversation                                                               |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Display name for the conversation. Can be auto-generated or set by the user.                                       |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was created                                                 |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was last updated                                            |
| `createdById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that created the conversation                                             |
| `updatedById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that last updated the conversation                                        |