# ThinkingParamType

The thinking mode to use for the model. between_tools returns progress updates between tool calls without extended thinking on models that support it.

## Example Usage

```typescript
import { ThinkingParamType } from "@orq-ai/node/models/components";

let value: ThinkingParamType = "between_tools";
```

## Values

```typescript
"enabled" | "disabled" | "adaptive" | "between_tools"
```