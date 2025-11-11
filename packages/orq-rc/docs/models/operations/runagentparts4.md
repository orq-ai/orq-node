# RunAgentParts4

## Example Usage

```typescript
import { RunAgentParts4 } from "@orq-ai/node/models/operations";

let value: RunAgentParts4 = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                         | [operations.RunAgentPartsAgentsResponse200Kind](../../models/operations/runagentpartsagentsresponse200kind.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `toolName`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `toolCallId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `arguments`                                                                                                    | Record<string, *any*>                                                                                          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `metadata`                                                                                                     | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |