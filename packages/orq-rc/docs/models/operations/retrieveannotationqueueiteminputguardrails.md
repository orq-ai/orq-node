# RetrieveAnnotationQueueItemInputGuardrails

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemInputGuardrails } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemInputGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *operations.RetrieveAnnotationQueueItemInputId*                                                                              | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `executeOn`                                                                                                                  | [operations.RetrieveAnnotationQueueItemInputExecuteOn](../../models/operations/retrieveannotationqueueiteminputexecuteon.md) | :heavy_check_mark:                                                                                                           | Determines whether the guardrail runs on the input (user message) or output (model response).                                |