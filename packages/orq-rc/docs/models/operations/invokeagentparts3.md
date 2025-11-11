# InvokeAgentParts3

## Example Usage

```typescript
import { InvokeAgentParts3 } from "@orq-ai/node/models/operations";

let value: InvokeAgentParts3 = {
  kind: "file",
  file: {
    uri: "https://admired-descent.name",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                         | [operations.InvokeAgentPartsAgentsResponseKind](../../models/operations/invokeagentpartsagentsresponsekind.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `file`                                                                                                         | *operations.InvokeAgentPartsFile*                                                                              | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `metadata`                                                                                                     | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |