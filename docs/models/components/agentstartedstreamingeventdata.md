# AgentStartedStreamingEventData

## Example Usage

```typescript
import { AgentStartedStreamingEventData } from "@orq-ai/node/models/components";

let value: AgentStartedStreamingEventData = {
  workflowRunId: "<id>",
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `workflowRunId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `integrationId`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `inputMessage`                                                     | [components.InputMessage](../../models/components/inputmessage.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `modelId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `instructions`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `systemPrompt`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `settings`                                                         | [components.Settings](../../models/components/settings.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `agentManifestId`                                                  | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `agentKey`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `variables`                                                        | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `toolExecutionId`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `isContinuation`                                                   | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `stream`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `responseId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |