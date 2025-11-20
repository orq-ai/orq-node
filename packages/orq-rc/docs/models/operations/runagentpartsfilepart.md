# RunAgentPartsFilePart

A file content part that can contain either base64-encoded bytes or a URI reference. Used for images, documents, and other binary content in agent communications.

## Example Usage

```typescript
import { RunAgentPartsFilePart } from "@orq-ai/node/models/operations";

let value: RunAgentPartsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                   | [operations.RunAgentPartsAgentsResponseKind](../../models/operations/runagentpartsagentsresponsekind.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `file`                                                                                                   | *operations.RunAgentPartsFile*                                                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |