# StreamRunAgentFileAgentsResponse200FileInURIFormat

File in URI format. Check in the model's documentation for the supported mime types for the URI format

## Example Usage

```typescript
import { StreamRunAgentFileAgentsResponse200FileInURIFormat } from "@orq-ai/node/models/operations";

let value: StreamRunAgentFileAgentsResponse200FileInURIFormat = {
  uri: "https://waterlogged-expansion.net/",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `uri`                          | *string*                       | :heavy_check_mark:             | URL for the File content       |
| `mimeType`                     | *string*                       | :heavy_minus_sign:             | Optional mimeType for the file |
| `name`                         | *string*                       | :heavy_minus_sign:             | Optional name for the file     |