# CreatePromptSnippetReasoningEffort

Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.

## Example Usage

```typescript
import { CreatePromptSnippetReasoningEffort } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippetReasoningEffort = "low";
```

## Values

```typescript
"low" | "medium" | "high"
```