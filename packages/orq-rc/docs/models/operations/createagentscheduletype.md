# CreateAgentScheduleType

Schedule type. cron uses 6-field cron expressions; interval uses @every <duration>; once uses @at <RFC3339-UTC>.

## Example Usage

```typescript
import { CreateAgentScheduleType } from "@orq-ai/node/models/operations";

let value: CreateAgentScheduleType = "once";
```

## Values

```typescript
"cron" | "once" | "interval"
```