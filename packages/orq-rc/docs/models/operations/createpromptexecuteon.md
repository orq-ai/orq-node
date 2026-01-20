# CreatePromptExecuteOn

Determines whether the guardrail runs on the input (user message) or output (model response).

## Example Usage

```typescript
import { CreatePromptExecuteOn } from "@orq-ai/node/models/operations";

let value: CreatePromptExecuteOn = "output";
```

## Values

```typescript
"input" | "output"
```