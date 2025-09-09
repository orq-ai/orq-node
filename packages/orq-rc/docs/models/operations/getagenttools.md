# GetAgentTools

## Example Usage

```typescript
import { GetAgentTools } from "@orq-ai/node/models/operations";

let value: GetAgentTools = {
  id: "<id>",
  actionType: "<value>",
  requiresApproval: true,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | The id of the resource                                                  |
| `actionType`                                                            | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `displayName`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `requiresApproval`                                                      | *boolean*                                                               | :heavy_check_mark:                                                      | N/A                                                                     |
| `conditions`                                                            | [operations.Conditions](../../models/operations/conditions.md)[]        | :heavy_minus_sign:                                                      | N/A                                                                     |
| `mcpServer`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | The id of the resource                                                  |
| `timeout`                                                               | *number*                                                                | :heavy_minus_sign:                                                      | Tool execution timeout in seconds (default: 2 minutes, max: 10 minutes) |