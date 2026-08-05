# Interval

How often the alert is evaluated. `30s` is a testing cadence.

## Example Usage

```typescript
import { Interval } from "@orq-ai/node/models/components";

let value: Interval = "1d";
```

## Values

```typescript
"30s" | "5m" | "15m" | "1h" | "1d"
```