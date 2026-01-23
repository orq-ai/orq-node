# CreateChatCompletionRouterChatCompletionsCache

Cache configuration for the request.

## Example Usage

```typescript
import { CreateChatCompletionRouterChatCompletionsCache } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionRouterChatCompletionsCache = {
  ttl: 3600,
  type: "exact_match",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ttl`                                                                                                                                                                    | *number*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Time to live for cached responses in seconds. Maximum 259200 seconds (3 days).                                                                                           | 3600                                                                                                                                                                     |
| `type`                                                                                                                                                                   | [operations.CreateChatCompletionRouterChatCompletionsRequestRequestBodyType](../../models/operations/createchatcompletionrouterchatcompletionsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |