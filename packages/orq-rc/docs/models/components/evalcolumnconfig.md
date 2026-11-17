# EvalColumnConfig

Configuration of an evaluator column. Name and types are read from the
 evaluator.

## Example Usage

```typescript
import { EvalColumnConfig } from "@orq-ai/node/models/components";

let value: EvalColumnConfig = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `evaluatorId`                                          | *string*                                               | :heavy_minus_sign:                                     | ID of the evaluator.                                   |
| `evaluatorName`                                        | *string*                                               | :heavy_minus_sign:                                     | Evaluator display name.                                |
| `evaluatorType`                                        | *string*                                               | :heavy_minus_sign:                                     | Evaluator type, such as `llm_eval` or `python_eval`.   |
| `evaluatorOutputType`                                  | *string*                                               | :heavy_minus_sign:                                     | Type of value the evaluator returns, such as `number`. |