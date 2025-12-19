# ListConversationsResponseBody

Successfully retrieved the list of conversations. Returns a paginated response containing conversation objects.

## Example Usage

```typescript
import { ListConversationsResponseBody } from "@orq-ai/node/models/operations";

let value: ListConversationsResponseBody = {
  object: "list",
  data: [
    {
      entityId: "<id>",
      kind: "conversation",
      displayName: "Nasir98",
      createdAt: 7869.27,
      updatedAt: 8848.28,
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