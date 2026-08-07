# CreateAgentScheduleType

Schedule type. Only cron is accepted; the expression must be a 6-field cron expression firing at most once per hour.

## Example Usage

```typescript
import { CreateAgentScheduleType } from "@orq-ai/node/models/operations";

let value: CreateAgentScheduleType = "cron";
```

## Values

```typescript
"cron"
```