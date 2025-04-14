# Query

## Example Usage

```typescript
import { Query } from "@orq-ai/node/models/operations";

let value: Query = {
  operator: "or",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `search`                                                   | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `operator`                                                 | [operations.Operator](../../models/operations/operator.md) | :heavy_check_mark:                                         | N/A                                                        |
| `filters`                                                  | *operations.Filters*[]                                     | :heavy_minus_sign:                                         | N/A                                                        |