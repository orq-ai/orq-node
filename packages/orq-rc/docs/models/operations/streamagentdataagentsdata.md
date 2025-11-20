# StreamAgentDataAgentsData

## Example Usage

```typescript
import { StreamAgentDataAgentsData } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsData = {
  inputMessage: {
    role: "system",
    parts: [],
  },
  modelId: "<id>",
  instructions: "<value>",
  systemPrompt: "<value>",
  agentManifestId: "<id>",
  agentKey: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `integrationId`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `inputMessage`                                                                           | [operations.DataInputMessage](../../models/operations/datainputmessage.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `modelId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `instructions`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `systemPrompt`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `settings`                                                                               | [operations.StreamAgentDataSettings](../../models/operations/streamagentdatasettings.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `agentManifestId`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `agentKey`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `variables`                                                                              | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `toolExecutionId`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isContinuation`                                                                         | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `stream`                                                                                 | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |