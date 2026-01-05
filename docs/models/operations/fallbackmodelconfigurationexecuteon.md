# FallbackModelConfigurationExecuteOn

Determines whether the guardrail runs on the input (user message) or output (model response).

## Example Usage

```typescript
import { FallbackModelConfigurationExecuteOn } from "@orq-ai/node/models/operations";

let value: FallbackModelConfigurationExecuteOn = "input";
```

## Values

```typescript
"input" | "output"
```