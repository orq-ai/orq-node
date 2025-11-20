# GetAgentTaskExtendedMessageRole

Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts).

## Example Usage

```typescript
import { GetAgentTaskExtendedMessageRole } from "@orq-ai/node/models/operations";

let value: GetAgentTaskExtendedMessageRole = "system";
```

## Values

```typescript
"user" | "agent" | "tool" | "system"
```