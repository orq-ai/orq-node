# StreamAgentPartsAgentsFilePart

A file content part that can contain either base64-encoded bytes or a URI reference. Used for images, documents, and other binary content in agent communications.

## Example Usage

```typescript
import { StreamAgentPartsAgentsFilePart } from "@orq-ai/node/models/operations";

let value: StreamAgentPartsAgentsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                                                                                               | [operations.StreamAgentPartsAgentsResponse200TextEventStreamResponseBodyData3Kind](../../models/operations/streamagentpartsagentsresponse200texteventstreamresponsebodydata3kind.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `file`                                                                                                                                                                               | *operations.StreamAgentPartsAgentsFile*                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                           | Record<string, *any*>                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |