# File1

## Example Usage

```typescript
import { File1 } from "@orq-ai/node/models/operations";

let value: File1 = {
  bytes: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `bytes`                            | *string*                           | :heavy_check_mark:                 | base64 encoded content of the file |
| `mimeType`                         | *string*                           | :heavy_minus_sign:                 | Optional mimeType for the file     |
| `name`                             | *string*                           | :heavy_minus_sign:                 | Optional name for the file         |