# ContentTopLogprobs

The top log probability of a token.

## Example Usage

```typescript
import { ContentTopLogprobs } from "@orq-ai/node/models/operations";

let value: ContentTopLogprobs = {
  token: "<value>",
  logprob: 9413.19,
  bytes: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_check_mark: | N/A                |
| `logprob`          | *number*           | :heavy_check_mark: | N/A                |
| `bytes`            | *number*[]         | :heavy_check_mark: | N/A                |