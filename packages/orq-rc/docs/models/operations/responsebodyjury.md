# ResponseBodyJury

## Example Usage

```typescript
import { ResponseBodyJury } from "@orq-ai/node/models/operations";

let value: ResponseBodyJury = {
  judges: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `judges`                                                                                               | [operations.ResponseBodyJudges](../../models/operations/responsebodyjudges.md)[]                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `replacementJudges`                                                                                    | [operations.ResponseBodyReplacementJudges](../../models/operations/responsebodyreplacementjudges.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `minSuccessfulJudges`                                                                                  | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `tieValue`                                                                                             | [operations.ResponseBodyTieValue](../../models/operations/responsebodytievalue.md)                     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |