# DataRefusal

## Example Usage

```typescript
import { DataRefusal } from "@orq-ai/node/models/operations";

let value: DataRefusal = {
  token: "<value>",
  logprob: 1466.82,
  bytes: [
    9828.11,
  ],
  topLogprobs: [],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                            | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The token.                                                                                                                                                         |
| `logprob`                                                                                                                                                          | *number*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value -9999.0 is used to signify that the token is very unlikely. |
| `bytes`                                                                                                                                                            | *number*[]                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                 | A list of integers representing the UTF-8 bytes representation of the token.                                                                                       |
| `topLogprobs`                                                                                                                                                      | [operations.StreamAgentDataAgentsTopLogprobs](../../models/operations/streamagentdataagentstoplogprobs.md)[]                                                       | :heavy_check_mark:                                                                                                                                                 | List of the most likely tokens and their log probability, at this token position.                                                                                  |