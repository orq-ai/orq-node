# StreamRunAgentAgentToolInputRunCurrentDateTool

Returns the current date and time

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunCurrentDateTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunCurrentDateTool = {
  type: "current_date",
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                         | [operations.StreamRunAgentAgentToolInputRunAgentsRequestRequestBodySettingsTools11Type](../../models/operations/streamrunagentagenttoolinputrunagentsrequestrequestbodysettingstools11type.md) | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |
| `requiresApproval`                                                                                                                                                                             | *boolean*                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                             | Whether this tool requires approval before execution                                                                                                                                           |