# InvokeEvalResponseBodyJury

## Example Usage

```typescript
import { InvokeEvalResponseBodyJury } from "@orq-ai/node/models/operations";

let value: InvokeEvalResponseBodyJury = {
  judgesConfigured: 381273,
  judgesSucceeded: 569440,
  judgesFailed: 591301,
  replacementsUsed: 527340,
  tie: true,
  votes: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `judgesConfigured`                                     | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `judgesSucceeded`                                      | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `judgesFailed`                                         | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `replacementsUsed`                                     | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `tie`                                                  | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `votes`                                                | [operations.Votes](../../models/operations/votes.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `stats`                                                | [operations.Stats](../../models/operations/stats.md)   | :heavy_minus_sign:                                     | N/A                                                    |