# InvokeAgentExtendedMessageRole

Role of the message sender in the A2A protocol. Values: user (end user), agent (AI agent), tool (tool execution result), system (system instructions/prompts).

## Example Usage

```typescript
import { InvokeAgentExtendedMessageRole } from "@orq-ai/node/models/operations";

let value: InvokeAgentExtendedMessageRole = "system";
```

## Values

```typescript
"user" | "agent" | "tool" | "system"
```