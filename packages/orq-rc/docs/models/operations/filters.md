# Filters

Filter query to filter the list

## Example Usage

```typescript
import { Filters } from "@orq-ai/node/models/operations";

let value: Filters = {
  operator: "and",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `search`                                                   | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `operator`                                                 | [operations.Operator](../../models/operations/operator.md) | :heavy_check_mark:                                         | N/A                                                        |
| `filters`                                                  | *operations.PostV2AnnotationQueuesQueryFilters*[]          | :heavy_minus_sign:                                         | N/A                                                        |