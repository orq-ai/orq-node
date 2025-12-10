# GenerateConversationNameRequest

## Example Usage

```typescript
import { GenerateConversationNameRequest } from "@orq-ai/node/models/operations";

let value: GenerateConversationNameRequest = {
  conversationId: "conv_01jj1hdhn79xas7a01wb3hysdb",
  requestBody: {
    context: "What is the weather in San Francisco?",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The unique identifier of the conversation to generate a name for                                                 | conv_01jj1hdhn79xas7a01wb3hysdb                                                                                  |
| `requestBody`                                                                                                    | [operations.GenerateConversationNameRequestBody](../../models/operations/generateconversationnamerequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |