# StreamRunAgentPublicMessagePartFilePart

File attachment part. Use this to send files (images, documents, etc.) to the agent for processing.

## Example Usage

```typescript
import { StreamRunAgentPublicMessagePartFilePart } from "@orq-ai/node/models/operations";

let value: StreamRunAgentPublicMessagePartFilePart = {
  kind: "file",
  file: {
    uri: "https://calculating-offset.net",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                           | [operations.StreamRunAgentPublicMessagePartKind](../../models/operations/streamrunagentpublicmessagepartkind.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `file`                                                                                                           | *operations.StreamRunAgentPublicMessagePartFile*                                                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `metadata`                                                                                                       | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |