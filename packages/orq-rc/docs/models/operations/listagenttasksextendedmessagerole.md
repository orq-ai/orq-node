# ListAgentTasksExtendedMessageRole

Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts).

## Example Usage

```typescript
import { ListAgentTasksExtendedMessageRole } from "@orq-ai/node/models/operations";

let value: ListAgentTasksExtendedMessageRole = "tool";
```

## Values

```typescript
"user" | "agent" | "tool" | "system"
```