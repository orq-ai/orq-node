# UniqueEvaluator

An evaluator used by the experiment.

## Example Usage

```typescript
import { UniqueEvaluator } from "@orq-ai/node/models/components";

let value: UniqueEvaluator = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `evaluatorId`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Evaluator ID.                                                                                                |
| `evaluatorType`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Evaluator type, taken from the evaluator's definition.                                                       |
| `evaluatorName`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Evaluator display name.                                                                                      |
| `evaluatorKey`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Column key of the evaluator in an evaluatorq upload. Empty for evaluators<br/> added through Add an eval column. |