# ThinkingParamType

The thinking mode to use for the model. Sonnet 5.5 supports between_tools for progress updates without extended thinking.

## Example Usage

```typescript
import { ThinkingParamType } from "@orq-ai/node/models/components";

let value: ThinkingParamType = "between_tools";
```

## Values

```typescript
"enabled" | "disabled" | "adaptive" | "between_tools"
```