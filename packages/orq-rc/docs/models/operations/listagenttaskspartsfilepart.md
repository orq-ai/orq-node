# ListAgentTasksPartsFilePart

A file content part that can contain either base64-encoded bytes or a URI reference. Used for images, documents, and other binary content in agent communications.

## Example Usage

```typescript
import { ListAgentTasksPartsFilePart } from "@orq-ai/node/models/operations";

let value: ListAgentTasksPartsFilePart = {
  kind: "file",
  file: {
    uri: "https://cuddly-rust.com",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                               | [operations.ListAgentTasksPartsAgentsResponseKind](../../models/operations/listagenttaskspartsagentsresponsekind.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `file`                                                                                                               | *operations.ListAgentTasksPartsFile*                                                                                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `metadata`                                                                                                           | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |