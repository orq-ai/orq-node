# RunStats

Execution totals of a run. Not reset when the run is executed again.

## Example Usage

```typescript
import { RunStats } from "@orq-ai/node/models/components";

let value: RunStats = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `totalCost`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Total cost in USD of the successful prompt and agent cell executions. |
| `totalErrors`                                                         | *number*                                                              | :heavy_minus_sign:                                                    | Number of failed prompt and agent cell executions.                    |
| `totalDone`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Number of successful prompt and agent cell executions.                |