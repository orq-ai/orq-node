# ListAgentTasksState

## Example Usage

```typescript
import { ListAgentTasksState } from "@orq-ai/node/models/operations";

let value: ListAgentTasksState = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `waitingForApproval`       | *boolean*                  | :heavy_minus_sign:         | N/A                        |
| `inactive`                 | *boolean*                  | :heavy_minus_sign:         | N/A                        |
| `error`                    | *string*                   | :heavy_minus_sign:         | N/A                        |
| `iteration`                | *number*                   | :heavy_minus_sign:         | N/A                        |
| `accumulatedExecutionTime` | *number*                   | :heavy_minus_sign:         | N/A                        |
| `variables`                | Record<string, *any*>      | :heavy_minus_sign:         | N/A                        |