# ResponseLifecycleStreamEventType

The event type. Matches the SSE `event` field.

## Example Usage

```typescript
import { ResponseLifecycleStreamEventType } from "@orq-ai/node/models/components";

let value: ResponseLifecycleStreamEventType = "response.queued";
```

## Values

```typescript
"response.created" | "response.queued" | "response.in_progress" | "response.completed" | "response.failed" | "response.incomplete"
```