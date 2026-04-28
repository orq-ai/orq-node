# EvaluatorRef

## Example Usage

```typescript
import { EvaluatorRef } from "@orq-ai/node/models/components";

let value: EvaluatorRef = {
  executeOn: "output",
  id: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `executeOn`                                                                          | [components.EvaluatorRefExecuteOn](../../models/components/evaluatorrefexecuteon.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `isGuardrail`                                                                        | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `sampleRate`                                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |