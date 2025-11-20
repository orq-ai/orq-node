# PartsFilePart

A file content part that can contain either base64-encoded bytes or a URI reference. Used for images, documents, and other binary content in agent communications.

## Example Usage

```typescript
import { PartsFilePart } from "@orq-ai/node/models/operations";

let value: PartsFilePart = {
  kind: "file",
  file: {
    uri: "https://grim-markup.com/",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `kind`                                                                                           | [operations.GetAgentTaskPartsAgentsKind](../../models/operations/getagenttaskpartsagentskind.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `file`                                                                                           | *operations.PartsFile*                                                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |