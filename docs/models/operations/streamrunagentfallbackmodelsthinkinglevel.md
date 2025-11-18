# StreamRunAgentFallbackModelsThinkingLevel

The level of reasoning the model should use. This setting is supported only by `gemini-3` models. If budget_tokens is specified and `thinking_level` is available, `budget_tokens` will be ignored.

## Example Usage

```typescript
import { StreamRunAgentFallbackModelsThinkingLevel } from "@orq-ai/node/models/operations";

let value: StreamRunAgentFallbackModelsThinkingLevel = "low";
```

## Values

```typescript
"low" | "high"
```