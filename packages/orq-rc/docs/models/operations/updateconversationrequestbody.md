# UpdateConversationRequestBody

## Example Usage

```typescript
import { UpdateConversationRequestBody } from "@orq-ai/node/models/operations";

let value: UpdateConversationRequestBody = {
  displayName: "Updated Support Session",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `displayName`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | New display name for the conversation. Maximum 100 characters.                                 | Updated Support Session                                                                        |
| `metadata`                                                                                     | [operations.UpdateConversationMetadata](../../models/operations/updateconversationmetadata.md) | :heavy_minus_sign:                                                                             | Metadata fields to update. Only provided fields are modified.                                  |                                                                                                |