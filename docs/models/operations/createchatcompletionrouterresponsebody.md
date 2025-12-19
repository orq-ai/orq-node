# CreateChatCompletionRouterResponseBody

Represents a streamed chunk of a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { CreateChatCompletionRouterResponseBody } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionRouterResponseBody = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                    | [operations.CreateChatCompletionData](../../models/operations/createchatcompletiondata.md)                | :heavy_minus_sign:                                                                                        | Represents a streamed chunk of a chat completion response returned by model, based on the provided input. |