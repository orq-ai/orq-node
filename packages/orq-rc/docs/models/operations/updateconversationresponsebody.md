# UpdateConversationResponseBody

Conversation successfully updated. Returns the complete updated conversation object.

## Example Usage

```typescript
import { UpdateConversationResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateConversationResponseBody = {
  kind: "conversation",
  displayName: "Merl_West80",
  createdAt: 5336.7,
  updatedAt: 1573.33,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Unique ULID (Universally Unique Lexicographically Sortable Identifier) for the conversation, prefixed with "conv_" |
| `kind`                                                                                                             | [operations.UpdateConversationKind](../../models/operations/updateconversationkind.md)                             | :heavy_check_mark:                                                                                                 | Type discriminator indicating this is a conversation                                                               |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Display name for the conversation. Can be auto-generated or set by the user.                                       |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was created                                                 |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Unix timestamp (in milliseconds) when the conversation was last updated                                            |
| `createdById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that created the conversation                                             |
| `updatedById`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional identifier of the user or agent that last updated the conversation                                        |