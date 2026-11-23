# AgentThoughtStreamingEventRefusal

## Example Usage

```typescript
import { AgentThoughtStreamingEventRefusal } from "@orq-ai/node/models/components";

let value: AgentThoughtStreamingEventRefusal = {
  token: "<value>",
  logprob: 5036.07,
  bytes: [],
  topLogprobs: [],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                            | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The token.                                                                                                                                                         |
| `logprob`                                                                                                                                                          | *number*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value -9999.0 is used to signify that the token is very unlikely. |
| `bytes`                                                                                                                                                            | *number*[]                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                 | A list of integers representing the UTF-8 bytes representation of the token.                                                                                       |
| `topLogprobs`                                                                                                                                                      | [components.AgentThoughtStreamingEventTopLogprobs](../../models/components/agentthoughtstreamingeventtoplogprobs.md)[]                                             | :heavy_check_mark:                                                                                                                                                 | List of the most likely tokens and their log probability, at this token position.                                                                                  |