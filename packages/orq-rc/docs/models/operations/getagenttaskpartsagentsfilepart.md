# GetAgentTaskPartsAgentsFilePart

A file content part that can contain either base64-encoded bytes or a URI reference. Used for images, documents, and other binary content in agent communications.

## Example Usage

```typescript
import { GetAgentTaskPartsAgentsFilePart } from "@orq-ai/node/models/operations";

let value: GetAgentTaskPartsAgentsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                                                                                                                 | [operations.GetAgentTaskPartsAgentsResponse200ApplicationJSONResponseBodyStatusMessageKind](../../models/operations/getagenttaskpartsagentsresponse200applicationjsonresponsebodystatusmessagekind.md) | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `file`                                                                                                                                                                                                 | *operations.GetAgentTaskPartsAgentsFile*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `metadata`                                                                                                                                                                                             | Record<string, *any*>                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |