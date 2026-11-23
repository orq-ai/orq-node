# ExecuteTarget

Selects rows and columns for Execute a run.

## Example Usage

```typescript
import { ExecuteTarget } from "@orq-ai/node/models/components";

let value: ExecuteTarget = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `rowId`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Row to execute.                                                                                     |
| `columnId`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Column to execute, by column ID.                                                                    |
| `columnKey`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Column to execute, matched against column ID, key and display name. Every<br/> matching column is used. |
| `sourceColumnId`                                                                                    | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Limits an evaluator column target to the cells grading this task column.                            |