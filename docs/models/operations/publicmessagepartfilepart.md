# PublicMessagePartFilePart

File attachment part. Use this to send files (images, documents, etc.) to the agent for processing.

## Example Usage

```typescript
import { PublicMessagePartFilePart } from "@orq-ai/node/models/operations";

let value: PublicMessagePartFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                       | [operations.StreamRunAgentPublicMessagePartAgentsKind](../../models/operations/streamrunagentpublicmessagepartagentskind.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `file`                                                                                                                       | *operations.StreamRunAgentPublicMessagePartFile*                                                                             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `metadata`                                                                                                                   | Record<string, *any*>                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |