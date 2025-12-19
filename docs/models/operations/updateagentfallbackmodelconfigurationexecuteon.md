# UpdateAgentFallbackModelConfigurationExecuteOn

Determines whether the guardrail runs on the input (user message) or output (model response).

## Example Usage

```typescript
import { UpdateAgentFallbackModelConfigurationExecuteOn } from "@orq-ai/node/models/operations";

let value: UpdateAgentFallbackModelConfigurationExecuteOn = "output";
```

## Values

```typescript
"input" | "output"
```