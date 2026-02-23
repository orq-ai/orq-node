# ResponseBodyJury

## Example Usage

```typescript
import { ResponseBodyJury } from "@orq-ai/node/models/operations";

let value: ResponseBodyJury = {
  judgesConfigured: 417989,
  judgesSucceeded: 158001,
  judgesFailed: 530551,
  replacementsUsed: 203120,
  tie: false,
  votes: [
    {
      model: "A4",
      replacement: false,
      success: true,
    },
  ],
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