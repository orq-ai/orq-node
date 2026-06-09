# Event

The SSE event name, equal to the payload's `type`.

## Example Usage

```typescript
import { Event } from "@orq-ai/node/models/components";

let value: Event = "response.created";
```

## Values

```typescript
"response.created" | "response.queued" | "response.in_progress" | "response.completed" | "response.failed" | "response.incomplete"
```