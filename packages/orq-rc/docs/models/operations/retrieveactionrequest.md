# RetrieveActionRequest

## Example Usage

```typescript
import { RetrieveActionRequest } from "@orq-ai/node/models/operations";

let value: RetrieveActionRequest = {
  agentKey: "<value>",
  taskId: "<id>",
  actionId: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `agentKey`                  | *string*                    | :heavy_check_mark:          | The unique key of the agent |
| `taskId`                    | *string*                    | :heavy_check_mark:          | The unique id of the task   |
| `actionId`                  | *string*                    | :heavy_check_mark:          | The unique id of the action |