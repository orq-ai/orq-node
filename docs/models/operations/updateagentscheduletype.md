# UpdateAgentScheduleType

Change the schedule type. Changing type or expression resets the NATS schedule and bumps generation.

## Example Usage

```typescript
import { UpdateAgentScheduleType } from "@orq-ai/node/models/operations";

let value: UpdateAgentScheduleType = "interval";
```

## Values

```typescript
"cron" | "once" | "interval"
```