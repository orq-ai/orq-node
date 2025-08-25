# CreateChatCompletionProxyToolCalls

## Example Usage

```typescript
import { CreateChatCompletionProxyToolCalls } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionProxyToolCalls = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The ID of the tool call.                                                                                                     |
| `type`                                                                                                                       | [operations.CreateChatCompletionProxyResponse200Type](../../models/operations/createchatcompletionproxyresponse200type.md)   | :heavy_minus_sign:                                                                                                           | The type of the tool. Currently, only `function` is supported.                                                               |
| `function`                                                                                                                   | [operations.CreateChatCompletionProxyResponseFunction](../../models/operations/createchatcompletionproxyresponsefunction.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |