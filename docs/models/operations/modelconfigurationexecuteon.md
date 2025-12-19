# ModelConfigurationExecuteOn

Determines whether the guardrail runs on the input (user message) or output (model response).

## Example Usage

```typescript
import { ModelConfigurationExecuteOn } from "@orq-ai/node/models/operations";

let value: ModelConfigurationExecuteOn = "input";
```

## Values

```typescript
"input" | "output"
```