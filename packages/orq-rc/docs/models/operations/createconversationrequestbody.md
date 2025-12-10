# CreateConversationRequestBody

## Example Usage

```typescript
import { CreateConversationRequestBody } from "@orq-ai/node/models/operations";

let value: CreateConversationRequestBody = {
  displayName: "Support Chat #1234",
  metadata: {
    entityId: "<id>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `displayName`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Display name for the conversation. Defaults to "Untitled" if not provided.                     | Support Chat #1234                                                                             |
| `metadata`                                                                                     | [operations.CreateConversationMetadata](../../models/operations/createconversationmetadata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |