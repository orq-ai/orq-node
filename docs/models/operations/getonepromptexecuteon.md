# GetOnePromptExecuteOn

Determines whether the guardrail runs on the input (user message) or output (model response).

## Example Usage

```typescript
import { GetOnePromptExecuteOn } from "@orq-ai/node/models/operations";

let value: GetOnePromptExecuteOn = "output";
```

## Values

```typescript
"input" | "output"
```