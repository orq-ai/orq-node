# RunAgentPublicMessagePartFilePart

File attachment part. Use this to send files (images, documents, etc.) to the agent for processing.

## Example Usage

```typescript
import { RunAgentPublicMessagePartFilePart } from "@orq-ai/node/models/operations";

let value: RunAgentPublicMessagePartFilePart = {
  kind: "file",
  file: {
    uri: "https://admired-bowler.name/",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                           | [operations.RunAgentPublicMessagePartAgentsKind](../../models/operations/runagentpublicmessagepartagentskind.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `file`                                                                                                           | *operations.RunAgentPublicMessagePartFile*                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `metadata`                                                                                                       | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |