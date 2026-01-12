# CreateConversationMetadata

Optional metadata to attach to the conversation.

## Example Usage

```typescript
import { CreateConversationMetadata } from "@orq-ai/node/models/operations";

let value: CreateConversationMetadata = {
  entityId: "agent_01jj1hdhn79xas7a01wb3hysdb",
  model: "openai/gpt-4o",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `generatingTitle`                                                                                                                  | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Set to `true` to indicate the title is being auto-generated.                                                                       |                                                                                                                                    |
| `entityId`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Parent entity identifier to associate the conversation with. Omit or set to `null` for standalone conversations.                   | agent_01jj1hdhn79xas7a01wb3hysdb                                                                                                   |
| `model`                                                                                                                            | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Model identifier in `provider/model_id` format for standalone conversations. Omit or set to `null` for entity-bound conversations. | openai/gpt-4o                                                                                                                      |