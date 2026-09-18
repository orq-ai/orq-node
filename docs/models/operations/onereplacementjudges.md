# OneReplacementJudges

## Example Usage

```typescript
import { OneReplacementJudges } from "@orq-ai/node/models/operations";

let value: OneReplacementJudges = {
  model: "Expedition",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `model`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `retry`                                                              | [operations.OneRetry](../../models/operations/oneretry.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `fallbacks`                                                          | [operations.OneFallbacks](../../models/operations/onefallbacks.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |