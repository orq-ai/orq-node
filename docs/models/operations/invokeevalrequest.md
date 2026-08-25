# InvokeEvalRequest

## Example Usage

```typescript
import { InvokeEvalRequest } from "@orq-ai/node/models/operations";

let value: InvokeEvalRequest = {
  id: "<id>",
  invokeEvaluatorRequest: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Accepts a bare id, `id@version`, or `id@environment`.                                  |
| `invokeEvaluatorRequest`                                                               | [components.InvokeEvaluatorRequest](../../models/components/invokeevaluatorrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |