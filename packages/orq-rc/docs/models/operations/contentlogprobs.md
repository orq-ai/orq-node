# ContentLogprobs

The log probability of a token.

## Example Usage

```typescript
import { ContentLogprobs } from "@orq-ai/node/models/operations";

let value: ContentLogprobs = {
  token: "<value>",
  logprob: 4428.03,
  bytes: [
    459503,
    952360,
  ],
  topLogprobs: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `token`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `logprob`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `bytes`                                                                          | *number*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `topLogprobs`                                                                    | [operations.ContentTopLogprobs](../../models/operations/contenttoplogprobs.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |