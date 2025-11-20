# ListAgentTasksFileAgentsBinaryFormat

Binary in base64 format. Check in the model's documentation for the supported mime types for the binary format.

## Example Usage

```typescript
import { ListAgentTasksFileAgentsBinaryFormat } from "@orq-ai/node/models/operations";

let value: ListAgentTasksFileAgentsBinaryFormat = {
  bytes: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `bytes`                            | *string*                           | :heavy_check_mark:                 | base64 encoded content of the file |
| `mimeType`                         | *string*                           | :heavy_minus_sign:                 | Optional mimeType for the file     |
| `name`                             | *string*                           | :heavy_minus_sign:                 | Optional name for the file         |