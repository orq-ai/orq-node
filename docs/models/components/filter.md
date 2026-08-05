# Filter

## Example Usage

```typescript
import { Filter } from "@orq-ai/node/models/components";

let value: Filter = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                       | [components.Field](../../models/components/field.md)                                                          | :heavy_minus_sign:                                                                                            | Public reporting dimension to filter on. Valid fields depend on the selected metric.                          |
| `op`                                                                                                          | [components.Op](../../models/components/op.md)                                                                | :heavy_minus_sign:                                                                                            | Predicate operator. `eq` and `neq` accept exactly one value; `in` and `not_in` accept 1-100 values.           |
| `values`                                                                                                      | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Values compared against the selected field. Values are interpreted<br/> as public API strings, not SQL fragments. |