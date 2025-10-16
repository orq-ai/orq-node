# UpdateAgentToolApprovalRequired

If all, the agent will require approval for all tools. If respect_tool, the agent will require approval for tools that have the requires_approval flag set to true. If none, the agent will not require approval for any tools.

## Example Usage

```typescript
import { UpdateAgentToolApprovalRequired } from "@orq-ai/node/models/operations";

let value: UpdateAgentToolApprovalRequired = "none";
```

## Values

```typescript
"all" | "respect_tool" | "none"
```