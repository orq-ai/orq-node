# SummaryTopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import { SummaryTopLogprobs } from "@orq-ai/node/models/operations";

let value: SummaryTopLogprobs = {
  token: "<value>",
  logprob: 5866.77,
  bytes: [
    469775,
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |