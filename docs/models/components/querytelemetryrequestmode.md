# QueryTelemetryRequestMode

Value shaping. `timeseries` buckets by grain; `scalar` returns one row per group. When omitted, grain selects the compatible shape.

## Example Usage

```typescript
import { QueryTelemetryRequestMode } from "@orq-ai/node/models/components";

let value: QueryTelemetryRequestMode = "timeseries";
```

## Values

```typescript
"timeseries" | "scalar"
```