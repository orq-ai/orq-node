# CreateEvalColumnRequest

## Example Usage

```typescript
import { CreateEvalColumnRequest } from "@orq-ai/node/models/components";

let value: CreateEvalColumnRequest = {
  evaluatorId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `evaluatorId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | ID of the evaluator to add. Each row gets one evaluator cell per task<br/> column. |
| `position`                                                                     | *number*                                                                       | :heavy_minus_sign:                                                             | 0-based position among the run's columns. Defaults to the end.                 |