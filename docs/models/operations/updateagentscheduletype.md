# UpdateAgentScheduleType

Change the schedule type. Only cron is accepted. Changing type or expression resets the NATS schedule and bumps generation.

## Example Usage

```typescript
import { UpdateAgentScheduleType } from "@orq-ai/node/models/operations";

let value: UpdateAgentScheduleType = "cron";
```

## Values

```typescript
"cron"
```