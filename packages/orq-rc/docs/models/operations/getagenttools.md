# GetAgentTools

## Example Usage

```typescript
import { GetAgentTools } from "@orq-ai/node/models/operations";

let value: GetAgentTools = {
  id: "<id>",
  actionType: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The id of the resource                                                           |
| `key`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | Optional tool key for custom tools                                               |
| `actionType`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `displayName`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | Optional tool description                                                        |
| `requiresApproval`                                                               | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `conditions`                                                                     | [operations.GetAgentConditions](../../models/operations/getagentconditions.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `timeout`                                                                        | *number*                                                                         | :heavy_minus_sign:                                                               | Tool execution timeout in seconds (default: 2 minutes, max: 10 minutes)          |