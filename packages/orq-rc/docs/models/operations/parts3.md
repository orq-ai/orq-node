# Parts3

## Example Usage

```typescript
import { Parts3 } from "@orq-ai/node/models/operations";

let value: Parts3 = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `kind`                                                                       | [operations.RunAgentPartsKind](../../models/operations/runagentpartskind.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `file`                                                                       | *operations.PartsFile*                                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |