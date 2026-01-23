# GetAllPromptsExecuteOn

Determines whether the guardrail runs on the input (user message) or output (model response).

## Example Usage

```typescript
import { GetAllPromptsExecuteOn } from "@orq-ai/node/models/operations";

let value: GetAllPromptsExecuteOn = "output";
```

## Values

```typescript
"input" | "output"
```