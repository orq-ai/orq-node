# UpdateConversationMetadata

Metadata fields to update. Only provided fields are modified.

## Example Usage

```typescript
import { UpdateConversationMetadata } from "@orq-ai/node/models/operations";

let value: UpdateConversationMetadata = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `generatingTitle`                                                 | *boolean*                                                         | :heavy_minus_sign:                                                | Set to `true` to indicate the title is being auto-generated.      |
| `entityId`                                                        | *string*                                                          | :heavy_minus_sign:                                                | Parent entity identifier. Set to `null` to detach from an entity. |