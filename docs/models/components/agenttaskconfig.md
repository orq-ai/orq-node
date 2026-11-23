# AgentTaskConfig

Configuration of an agent task column.

## Example Usage

```typescript
import { AgentTaskConfig } from "@orq-ai/node/models/components";

let value: AgentTaskConfig = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `agentKey`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Key of the agent to run. Required.                                                       |
| `messagesSource`                                                                         | [components.MessagesSource](../../models/components/messagessource.md)                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `messages`                                                                               | Record<string, *any*>[]                                                                  | :heavy_minus_sign:                                                                       | Conversation sent to the agent when `messages_source` is not the messages<br/> column.   |
| `engine`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | Template engine for variables in the messages: `text` (default), `jinja`<br/> or `mustache`. |
| `parentId`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Saved with the column; not used during execution.                                        |
| `agentTag`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Agent version tag. When set, the column runs that tagged version.                        |