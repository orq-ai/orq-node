# StreamRunAgentDataToolExecutionContext

## Example Usage

```typescript
import { StreamRunAgentDataToolExecutionContext } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataToolExecutionContext = {
  actionId: "<id>",
  agentToolCallId: "<id>",
  workspaceId: "<id>",
  agentManifestId: "<id>",
  agentExecutionId: "<id>",
  product: "deployments",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `actionId`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `agentToolCallId`                                                                                      | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `workspaceId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `agentManifestId`                                                                                      | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `agentExecutionId`                                                                                     | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `product`                                                                                              | [operations.StreamRunAgentDataProduct](../../models/operations/streamrunagentdataproduct.md)           | :heavy_check_mark:                                                                                     | Orquesta product                                                                                       |
| `memory`                                                                                               | [operations.StreamRunAgentDataAgentsMemory](../../models/operations/streamrunagentdataagentsmemory.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `parentId`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |