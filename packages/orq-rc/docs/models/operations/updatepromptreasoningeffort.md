# UpdatePromptReasoningEffort

Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.

## Example Usage

```typescript
import { UpdatePromptReasoningEffort } from "@orq-ai/node/models/operations";

let value: UpdatePromptReasoningEffort = "disable";
```

## Values

```typescript
"none" | "disable" | "minimal" | "low" | "medium" | "high"
```