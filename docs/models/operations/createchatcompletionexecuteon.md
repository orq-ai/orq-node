# CreateChatCompletionExecuteOn

Determines whether the guardrail runs on the input (user message) or output (model response).

## Example Usage

```typescript
import { CreateChatCompletionExecuteOn } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionExecuteOn = "input";
```

## Values

```typescript
"input" | "output"
```