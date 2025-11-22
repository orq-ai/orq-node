# StreamAgentPartsFilePart

A file content part that can contain either base64-encoded bytes or a URI reference. Used for images, documents, and other binary content in agent communications.

## Example Usage

```typescript
import { StreamAgentPartsFilePart } from "@orq-ai/node/models/operations";

let value: StreamAgentPartsFilePart = {
  kind: "file",
  file: {
    uri: "https://red-halt.org/",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                         | [operations.StreamAgentPartsAgentsResponseKind](../../models/operations/streamagentpartsagentsresponsekind.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `file`                                                                                                         | *operations.StreamAgentPartsFile*                                                                              | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `metadata`                                                                                                     | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |