# StreamAgentPublicMessagePartFilePart

File attachment part. Use this to send files (images, documents, etc.) to the agent for processing.

## Example Usage

```typescript
import { StreamAgentPublicMessagePartFilePart } from "@orq-ai/node/models/operations";

let value: StreamAgentPublicMessagePartFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                     | [operations.StreamAgentPublicMessagePartKind](../../models/operations/streamagentpublicmessagepartkind.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `file`                                                                                                     | *operations.StreamAgentPublicMessagePartFile*                                                              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |