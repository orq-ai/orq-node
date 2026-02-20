# LLMJury

## Example Usage

```typescript
import { LLMJury } from "@orq-ai/node/models/operations";

let value: LLMJury = {
  judges: [
    {
      model: "Altima",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `judges`                                                                             | [operations.LLMJudges](../../models/operations/llmjudges.md)[]                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `replacementJudges`                                                                  | [operations.LLMReplacementJudges](../../models/operations/llmreplacementjudges.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `minSuccessfulJudges`                                                                | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tieValue`                                                                           | [operations.LLMTieValue](../../models/operations/llmtievalue.md)                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |