# ResponseHostedToolCallStreamEventType

The event type. Matches the SSE `event` field.

## Example Usage

```typescript
import { ResponseHostedToolCallStreamEventType } from "@orq-ai/node/models/components";

let value: ResponseHostedToolCallStreamEventType =
  "response.image_generation_call.completed";
```

## Values

```typescript
"response.web_search_call.in_progress" | "response.web_search_call.searching" | "response.web_search_call.completed" | "response.file_search_call.in_progress" | "response.file_search_call.searching" | "response.file_search_call.completed" | "response.code_interpreter_call.in_progress" | "response.code_interpreter_call.interpreting" | "response.code_interpreter_call.completed" | "response.image_generation_call.in_progress" | "response.image_generation_call.generating" | "response.image_generation_call.completed" | "response.mcp_call.in_progress" | "response.mcp_call.completed" | "response.mcp_call.failed"
```