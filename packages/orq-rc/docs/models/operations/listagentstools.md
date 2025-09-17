# ListAgentsTools

## Example Usage

```typescript
import { ListAgentsTools } from "@orq-ai/node/models/operations";

let value: ListAgentsTools = {
  id: "<id>",
  actionType: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The id of the resource                                                               |
| `actionType`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `requiresApproval`                                                                   | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `conditions`                                                                         | [operations.ListAgentsConditions](../../models/operations/listagentsconditions.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `mcpServer`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | The id of the resource                                                               |
| `timeout`                                                                            | *number*                                                                             | :heavy_minus_sign:                                                                   | Tool execution timeout in seconds (default: 2 minutes, max: 10 minutes)              |