# FilterOp

Predicate operator. `eq` and `neq` accept exactly one value; `in` and `not_in` accept 1-100 values.

## Example Usage

```typescript
import { FilterOp } from "@orq-ai/node/models/components";

let value: FilterOp = "in";
```

## Values

```typescript
"eq" | "neq" | "in" | "not_in"
```