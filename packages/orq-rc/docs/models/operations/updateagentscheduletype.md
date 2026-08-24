# UpdateAgentScheduleType

Change the schedule type. Only cron is accepted. Changing the type or expression reschedules future executions and increments generation.

## Example Usage

```typescript
import { UpdateAgentScheduleType } from "@orq-ai/node/models/operations";

let value: UpdateAgentScheduleType = "cron";
```

## Values

```typescript
"cron"
```