# StreamRunAgentFileAgentsResponse200BinaryFormat

Binary in base64 format. Check in the model's documentation for the supported mime types for the binary format.

## Example Usage

```typescript
import { StreamRunAgentFileAgentsResponse200BinaryFormat } from "@orq-ai/node/models/operations";

let value: StreamRunAgentFileAgentsResponse200BinaryFormat = {
  bytes: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `bytes`                            | *string*                           | :heavy_check_mark:                 | base64 encoded content of the file |
| `mimeType`                         | *string*                           | :heavy_minus_sign:                 | Optional mimeType for the file     |
| `name`                             | *string*                           | :heavy_minus_sign:                 | Optional name for the file         |