# ListAgentTasksPartsAgentsFilePart

A file content part that can contain either base64-encoded bytes or a URI reference. Used for images, documents, and other binary content in agent communications.

## Example Usage

```typescript
import { ListAgentTasksPartsAgentsFilePart } from "@orq-ai/node/models/operations";

let value: ListAgentTasksPartsAgentsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                                                                                                     | [operations.ListAgentTasksPartsAgentsResponse200ApplicationJSONResponseBodyTasksKind](../../models/operations/listagenttaskspartsagentsresponse200applicationjsonresponsebodytaskskind.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `file`                                                                                                                                                                                     | *operations.ListAgentTasksPartsAgentsFile*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `metadata`                                                                                                                                                                                 | Record<string, *any*>                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                         | N/A                                                                                                                                                                                        |