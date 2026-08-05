# SummaryLogprobs

The log probability of a token.

## Example Usage

```typescript
import { SummaryLogprobs } from "@orq-ai/node/models/operations";

let value: SummaryLogprobs = {
  token: "<value>",
  logprob: 790.23,
  bytes: [
    452030,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 6896.39,
      bytes: [],
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `token`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `logprob`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `bytes`                                                                          | *number*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `topLogprobs`                                                                    | [operations.SummaryTopLogprobs](../../models/operations/summarytoplogprobs.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |