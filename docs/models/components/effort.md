# Effort

Constrains effort on reasoning for reasoning models. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.

## Example Usage

```typescript
import { Effort } from "@orq-ai/node/models/components";

let value: Effort = "minimal";
```

## Values

```typescript
"none" | "minimal" | "low" | "medium" | "high" | "xhigh"
```