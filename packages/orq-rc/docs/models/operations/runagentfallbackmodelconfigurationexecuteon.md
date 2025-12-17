# RunAgentFallbackModelConfigurationExecuteOn

Determines whether the guardrail runs on the input (user message) or output (model response).

## Example Usage

```typescript
import { RunAgentFallbackModelConfigurationExecuteOn } from "@orq-ai/node/models/operations";

let value: RunAgentFallbackModelConfigurationExecuteOn = "output";
```

## Values

```typescript
"input" | "output"
```