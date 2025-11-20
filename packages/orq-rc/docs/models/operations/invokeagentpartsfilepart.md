# InvokeAgentPartsFilePart

A file content part that can contain either base64-encoded bytes or a URI reference. Used for images, documents, and other binary content in agent communications.

## Example Usage

```typescript
import { InvokeAgentPartsFilePart } from "@orq-ai/node/models/operations";

let value: InvokeAgentPartsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `kind`                                                                                         | [operations.InvokeAgentPartsAgentsKind](../../models/operations/invokeagentpartsagentskind.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `file`                                                                                         | *operations.InvokeAgentPartsFile*                                                              | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |