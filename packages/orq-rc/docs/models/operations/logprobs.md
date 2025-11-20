# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "@orq-ai/node/models/operations";

let value: Logprobs = {
  content: [],
  refusal: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `content`                                                          | [operations.DataContent](../../models/operations/datacontent.md)[] | :heavy_check_mark:                                                 | A list of message content tokens with log probability information. |
| `refusal`                                                          | [operations.Refusal](../../models/operations/refusal.md)[]         | :heavy_check_mark:                                                 | A list of message refusal tokens with log probability information. |