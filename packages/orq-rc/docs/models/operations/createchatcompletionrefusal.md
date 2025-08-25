# CreateChatCompletionRefusal

## Example Usage

```typescript
import { CreateChatCompletionRefusal } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionRefusal = {
  token: "<value>",
  logprob: 1398.39,
  bytes: [
    5420.64,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 5868.77,
      bytes: [
        674.76,
        4002.92,
        2827.58,
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                            | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The token.                                                                                                                                                         |
| `logprob`                                                                                                                                                          | *number*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value -9999.0 is used to signify that the token is very unlikely. |
| `bytes`                                                                                                                                                            | *number*[]                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                 | A list of integers representing the UTF-8 bytes representation of the token.                                                                                       |
| `topLogprobs`                                                                                                                                                      | [operations.CreateChatCompletionProxyResponseTopLogprobs](../../models/operations/createchatcompletionproxyresponsetoplogprobs.md)[]                               | :heavy_check_mark:                                                                                                                                                 | List of the most likely tokens and their log probability, at this token position.                                                                                  |