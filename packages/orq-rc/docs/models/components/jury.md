# Jury

## Example Usage

```typescript
import { Jury } from "@orq-ai/node/models/components";

let value: Jury = {
  judges: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `judges`                                                                       | [components.Judges](../../models/components/judges.md)[]                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `replacementJudges`                                                            | [components.ReplacementJudges](../../models/components/replacementjudges.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `minSuccessfulJudges`                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `tieValue`                                                                     | [components.TieValue](../../models/components/tievalue.md)                     | :heavy_minus_sign:                                                             | N/A                                                                            |