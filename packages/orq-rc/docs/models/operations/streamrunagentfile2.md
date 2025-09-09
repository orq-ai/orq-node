# StreamRunAgentFile2

## Example Usage

```typescript
import { StreamRunAgentFile2 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentFile2 = {
  uri: "https://windy-programme.com",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `uri`                          | *string*                       | :heavy_check_mark:             | URL for the File content       |
| `mimeType`                     | *string*                       | :heavy_minus_sign:             | Optional mimeType for the file |
| `name`                         | *string*                       | :heavy_minus_sign:             | Optional name for the file     |