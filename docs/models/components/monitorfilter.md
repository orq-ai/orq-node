# MonitorFilter

## Example Usage

```typescript
import { MonitorFilter } from "@orq-ai/node/models/components";

let value: MonitorFilter = {
  field: "<value>",
  op: "neq",
  values: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Reporting dimension to filter on. Valid fields depend on the<br/> metric; validated when the monitor is saved. |
| `op`                                                                                                       | [components.Op](../../models/components/op.md)                                                             | :heavy_check_mark:                                                                                         | Predicate operator. `eq` and `neq` accept exactly one value; `in` and `not_in` accept 1-100 values.        |
| `values`                                                                                                   | *string*[]                                                                                                 | :heavy_check_mark:                                                                                         | Values compared against the selected field.                                                                |