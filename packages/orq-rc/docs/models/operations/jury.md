# Jury

## Example Usage

```typescript
import { Jury } from "@orq-ai/node/models/operations";

let value: Jury = {
  judges: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `judges`                                                                       | [operations.Judges](../../models/operations/judges.md)[]                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `replacementJudges`                                                            | [operations.ReplacementJudges](../../models/operations/replacementjudges.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `minSuccessfulJudges`                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `tieValue`                                                                     | [operations.TieValue](../../models/operations/tievalue.md)                     | :heavy_minus_sign:                                                             | N/A                                                                            |