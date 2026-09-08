# Mode

Value shaping. `timeseries` (default) buckets by time; `scalar` returns one aggregated row per group over the whole window, ordered by value (top list), or a single row when `group_by` is empty.

## Example Usage

```typescript
import { Mode } from "@orq-ai/node/models/components";

let value: Mode = "scalar";
```

## Values

```typescript
"timeseries" | "scalar"
```