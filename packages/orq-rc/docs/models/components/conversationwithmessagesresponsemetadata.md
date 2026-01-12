# ConversationWithMessagesResponseMetadata

Additional conversation metadata.

## Example Usage

```typescript
import { ConversationWithMessagesResponseMetadata } from "@orq-ai/node/models/components";

let value: ConversationWithMessagesResponseMetadata = {
  entityId: "agent_01jj1hdhn79xas7a01wb3hysdb",
  model: "openai/gpt-4o",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `generatingTitle`                                                                                                          | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | When `true`, indicates the conversation title is being auto-generated.                                                     |                                                                                                                            |
| `entityId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Parent entity identifier (e.g., agent or deployment). Set to `null` for standalone conversations.                          | agent_01jj1hdhn79xas7a01wb3hysdb                                                                                           |
| `model`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Model identifier for standalone conversations in `provider/model_id` format. Set to `null` for entity-bound conversations. | openai/gpt-4o                                                                                                              |