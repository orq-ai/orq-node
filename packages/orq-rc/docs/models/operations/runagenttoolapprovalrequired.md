# RunAgentToolApprovalRequired

An Agent runs its tools without waiting for a human decision on `POST /v3/router/responses`. See https://docs.orq.ai/ai-studio/ai-engineering/build-agents#tool-approval.

## Example Usage

```typescript
import { RunAgentToolApprovalRequired } from "@orq-ai/node/models/operations";

let value: RunAgentToolApprovalRequired = "all";
```

## Values

```typescript
"all" | "respect_tool" | "none"
```