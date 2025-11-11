# RunAgentParts3

## Example Usage

```typescript
import { RunAgentParts3 } from "@orq-ai/node/models/operations";

let value: RunAgentParts3 = {
  kind: "file",
  file: {
    uri: "https://critical-vista.org/",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                   | [operations.RunAgentPartsAgentsResponseKind](../../models/operations/runagentpartsagentsresponsekind.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `file`                                                                                                   | *operations.RunAgentPartsFile*                                                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |