# PublicScheduleType

Schedule type. Only cron can be created or updated; once and interval only appear on schedules stored before that restriction.

## Example Usage

```typescript
import { PublicScheduleType } from "@orq-ai/node/models/components";

let value: PublicScheduleType = "once";
```

## Values

```typescript
"cron" | "once" | "interval"
```