# GetAllPromptsQuery

## Example Usage

```typescript
import { GetAllPromptsQuery } from "@orq-ai/node/models/operations";

let value: GetAllPromptsQuery = {
  operator: "and",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `operator`                                                                           | [operations.GetAllPromptsOperator](../../models/operations/getallpromptsoperator.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `filters`                                                                            | *operations.GetAllPromptsFilters*[]                                                  | :heavy_minus_sign:                                                                   | N/A                                                                                  |