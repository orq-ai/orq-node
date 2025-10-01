# ListAgentsConditions

## Example Usage

```typescript
import { ListAgentsConditions } from "@orq-ai/node/models/operations";

let value: ListAgentsConditions = {
  condition: "<value>",
  operator: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `condition`                               | *string*                                  | :heavy_check_mark:                        | The argument of the tool call to evaluate |
| `operator`                                | *string*                                  | :heavy_check_mark:                        | The operator to use                       |
| `value`                                   | *string*                                  | :heavy_check_mark:                        | The value to compare against              |