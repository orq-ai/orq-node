# MonitorFilterOp

Predicate operator. `eq` and `neq` accept exactly one value; `in` and `not_in` accept 1-100 values.

## Example Usage

```typescript
import { MonitorFilterOp } from "@orq-ai/node/models/components";

let value: MonitorFilterOp = "in";
```

## Values

```typescript
"eq" | "neq" | "in" | "not_in" | "gt" | "gte" | "lt" | "lte" | "between" | "contains" | "exists" | "not_exists"
```