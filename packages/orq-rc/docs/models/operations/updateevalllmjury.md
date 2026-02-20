# UpdateEvalLLMJury

## Example Usage

```typescript
import { UpdateEvalLLMJury } from "@orq-ai/node/models/operations";

let value: UpdateEvalLLMJury = {
  judges: [
    {
      model: "Alpine",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `judges`                                                                                                 | [operations.UpdateEvalLLMJudges](../../models/operations/updateevalllmjudges.md)[]                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `replacementJudges`                                                                                      | [operations.UpdateEvalLLMReplacementJudges](../../models/operations/updateevalllmreplacementjudges.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `minSuccessfulJudges`                                                                                    | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `tieValue`                                                                                               | [operations.UpdateEvalLLMTieValue](../../models/operations/updateevalllmtievalue.md)                     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |