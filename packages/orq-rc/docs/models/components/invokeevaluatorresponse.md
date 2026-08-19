# InvokeEvaluatorResponse

Response wrappers keep each RPC's response type distinct, so a future field
 can be added to one without touching the other.

## Example Usage

```typescript
import { InvokeEvaluatorResponse } from "@orq-ai/node/models/components";

let value: InvokeEvaluatorResponse = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                                       | [components.EvaluationResult](../../models/components/evaluationresult.md)                                                                     | :heavy_minus_sign:                                                                                                                             | The verdict. Shaped to match WorkflowRunMinifiedEvalSchema, the body the<br/> TypeScript route returned, so existing consumers read the same JSON. |