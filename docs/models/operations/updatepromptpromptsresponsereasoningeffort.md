# UpdatePromptPromptsResponseReasoningEffort

Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.

## Example Usage

```typescript
import { UpdatePromptPromptsResponseReasoningEffort } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsResponseReasoningEffort = "low";
```

## Values

```typescript
"none" | "disable" | "minimal" | "low" | "medium" | "high"
```