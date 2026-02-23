# CreateEvalLLMJury

## Example Usage

```typescript
import { CreateEvalLLMJury } from "@orq-ai/node/models/operations";

let value: CreateEvalLLMJury = {
  judges: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `judges`                                                                                                 | [operations.CreateEvalLLMJudges](../../models/operations/createevalllmjudges.md)[]                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `replacementJudges`                                                                                      | [operations.CreateEvalLLMReplacementJudges](../../models/operations/createevalllmreplacementjudges.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `minSuccessfulJudges`                                                                                    | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `tieValue`                                                                                               | [operations.CreateEvalLLMTieValue](../../models/operations/createevalllmtievalue.md)                     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |