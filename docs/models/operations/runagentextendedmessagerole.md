# RunAgentExtendedMessageRole

Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts).

## Example Usage

```typescript
import { RunAgentExtendedMessageRole } from "@orq-ai/node/models/operations";

let value: RunAgentExtendedMessageRole = "agent";
```

## Values

```typescript
"user" | "agent" | "tool" | "system"
```