# ListPromptVersionsPromptsReasoningEffort

Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.

## Example Usage

```typescript
import { ListPromptVersionsPromptsReasoningEffort } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsPromptsReasoningEffort = "low";
```

## Values

```typescript
"none" | "disable" | "minimal" | "low" | "medium" | "high"
```