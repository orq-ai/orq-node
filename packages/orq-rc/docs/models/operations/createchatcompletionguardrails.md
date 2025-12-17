# CreateChatCompletionGuardrails

## Example Usage

```typescript
import { CreateChatCompletionGuardrails } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionGuardrails = {
  id: "orq_pii_detection",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *operations.CreateChatCompletionId*                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `executeOn`                                                                                          | [operations.CreateChatCompletionExecuteOn](../../models/operations/createchatcompletionexecuteon.md) | :heavy_check_mark:                                                                                   | Determines whether the guardrail runs on the input (user message) or output (model response).        |