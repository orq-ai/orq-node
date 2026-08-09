# UpdateAgentScheduleSchedulesType

Schedule type. Only cron can be created or updated; once and interval only appear on schedules stored before that restriction.

## Example Usage

```typescript
import { UpdateAgentScheduleSchedulesType } from "@orq-ai/node/models/operations";

let value: UpdateAgentScheduleSchedulesType = "cron";
```

## Values

```typescript
"cron" | "once" | "interval"
```