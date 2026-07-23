# OneJury

## Example Usage

```typescript
import { OneJury } from "@orq-ai/node/models/operations";

let value: OneJury = {
  judges: [
    {
      model: "A8",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `judges`                                                                             | [operations.OneJudges](../../models/operations/onejudges.md)[]                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `replacementJudges`                                                                  | [operations.OneReplacementJudges](../../models/operations/onereplacementjudges.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `minSuccessfulJudges`                                                                | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tieValue`                                                                           | [operations.OneTieValue](../../models/operations/onetievalue.md)                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |