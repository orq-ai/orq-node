# Guardrails

## Example Usage

```typescript
import { Guardrails } from "@orq-ai/node/models/operations";

let value: Guardrails = {
  id: "orq_pii_detection",
  executeOn: "output",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *operations.Id*                                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `executeOn`                                                                                   | [operations.ExecuteOn](../../models/operations/executeon.md)                                  | :heavy_check_mark:                                                                            | Determines whether the guardrail runs on the input (user message) or output (model response). |