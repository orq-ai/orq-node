# CreateConversationRequestBody

## Example Usage

```typescript
import { CreateConversationRequestBody } from "@orq-ai/node/models/operations";

let value: CreateConversationRequestBody = {
  displayName: "Customer Support Session",
  projectId: "prj_01jj1hdhn79xas7a01wb3hysdb",
  metadata: {
    entityId: "agent_01jj1hdhn79xas7a01wb3hysdb",
    model: "openai/gpt-4o",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `displayName`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Human-readable name for the conversation. Defaults to "Untitled" if omitted.                   | Customer Support Session                                                                       |
| `projectId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | Project identifier to associate the conversation with.                                         | prj_01jj1hdhn79xas7a01wb3hysdb                                                                 |
| `metadata`                                                                                     | [operations.CreateConversationMetadata](../../models/operations/createconversationmetadata.md) | :heavy_minus_sign:                                                                             | Optional metadata to attach to the conversation.                                               |                                                                                                |