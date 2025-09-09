# StreamRunAgentParts3

## Example Usage

```typescript
import { StreamRunAgentParts3 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentParts3 = {
  kind: "file",
  file: {
    uri: "https://tragic-sundae.info/",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                             | [operations.StreamRunAgentPartsAgentsRequestKind](../../models/operations/streamrunagentpartsagentsrequestkind.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `file`                                                                                                             | *operations.StreamRunAgentPartsFile*                                                                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `metadata`                                                                                                         | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |