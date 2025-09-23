# ListPromptVersionsReasoningEffort

Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.

## Example Usage

```typescript
import { ListPromptVersionsReasoningEffort } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsReasoningEffort = "low";
```

## Values

```typescript
"disable" | "minimal" | "low" | "medium" | "high"
```