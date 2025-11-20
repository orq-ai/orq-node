# StreamRunAgentDataData

## Example Usage

```typescript
import { StreamRunAgentDataData } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataData = {
  inputMessage: {
    role: "agent",
    parts: [
      {
        kind: "tool_result",
        toolCallId: "<id>",
      },
    ],
  },
  modelId: "<id>",
  instructions: "<value>",
  systemPrompt: "<value>",
  agentManifestId: "<id>",
  agentKey: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `integrationId`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `inputMessage`                                                     | [operations.InputMessage](../../models/operations/inputmessage.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `modelId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `instructions`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `systemPrompt`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `settings`                                                         | [operations.DataSettings](../../models/operations/datasettings.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `agentManifestId`                                                  | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `agentKey`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `variables`                                                        | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `toolExecutionId`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `isContinuation`                                                   | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `stream`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |