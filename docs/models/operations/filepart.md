# FilePart

File attachment part. Use this to send files (images, documents, etc.) to the agent for processing.

## Example Usage

```typescript
import { FilePart } from "@orq-ai/node/models/operations";

let value: FilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `kind`                                                                               | [operations.PublicMessagePartKind](../../models/operations/publicmessagepartkind.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `file`                                                                               | *operations.PublicMessagePartFile*                                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |