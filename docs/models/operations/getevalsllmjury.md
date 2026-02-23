# GetEvalsLLMJury

## Example Usage

```typescript
import { GetEvalsLLMJury } from "@orq-ai/node/models/operations";

let value: GetEvalsLLMJury = {
  judges: [
    {
      model: "Colorado",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `judges`                                                                                             | [operations.GetEvalsLLMJudges](../../models/operations/getevalsllmjudges.md)[]                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `replacementJudges`                                                                                  | [operations.GetEvalsLLMReplacementJudges](../../models/operations/getevalsllmreplacementjudges.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `minSuccessfulJudges`                                                                                | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `tieValue`                                                                                           | [operations.GetEvalsLLMTieValue](../../models/operations/getevalsllmtievalue.md)                     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |