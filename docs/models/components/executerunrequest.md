# ExecuteRunRequest

## Example Usage

```typescript
import { ExecuteRunRequest } from "@orq-ai/node/models/components";

let value: ExecuteRunRequest = {
  scope: "EXECUTE_SCOPE_COLUMN",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `scope`                                                                        | [components.ExecuteScope](../../models/components/executescope.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `targets`                                                                      | [components.ExecuteTarget](../../models/components/executetarget.md)[]         | :heavy_minus_sign:                                                             | Rows and columns to execute. Required for row, column and cell scope.          |
| `constraints`                                                                  | [components.ExecuteConstraints](../../models/components/executeconstraints.md) | :heavy_minus_sign:                                                             | Limits for this execution, saved into the run's settings.                      |