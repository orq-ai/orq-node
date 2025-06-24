# UpdatePromptPromptsReasoningEffort

Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.

## Example Usage

```typescript
import { UpdatePromptPromptsReasoningEffort } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsReasoningEffort = "high";
```

## Values

```typescript
"disable" | "low" | "medium" | "high"
```