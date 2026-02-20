# ReplacementJudges

## Example Usage

```typescript
import { ReplacementJudges } from "@orq-ai/node/models/operations";

let value: ReplacementJudges = {
  model: "XTS",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `retry`                                                                              | [operations.RequestBodyRetry](../../models/operations/requestbodyretry.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `fallbacks`                                                                          | [operations.RequestBodyFallbacks](../../models/operations/requestbodyfallbacks.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |