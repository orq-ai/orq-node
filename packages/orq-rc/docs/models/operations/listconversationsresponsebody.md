# ListConversationsResponseBody

Successfully retrieved the list of conversations. Returns a paginated response containing conversation objects.

## Example Usage

```typescript
import { ListConversationsResponseBody } from "@orq-ai/node/models/operations";

let value: ListConversationsResponseBody = {
  object: "list",
  data: [
    {
      id: "conv_01jj1hdhn79xas7a01wb3hysdb",
      kind: "conversation",
      displayName: "Product Feature Discussion",
      createdAt: 1734789600000,
      updatedAt: 1734793200000,
      createdById: "user_01jj1hdhn79xas7a01wb3hysdb",
      updatedById: "user_01jj1hdhn79xas7a01wb3hysdb",
      metadata: {
        entityId: "agent_01jj1hdhn79xas7a01wb3hysdb",
        model: "openai/gpt-4o",
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `object`                                                                                 | [operations.ListConversationsObject](../../models/operations/listconversationsobject.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [components.ConversationResponse](../../models/components/conversationresponse.md)[]     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `hasMore`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |