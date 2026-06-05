# FileContentRequest

## Example Usage

```typescript
import { FileContentRequest } from "@orq-ai/node/models/operations";

let value: FileContentRequest = {
  fileIdOrPath: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `fileIdOrPath`                                   | *string*                                         | :heavy_check_mark:                               | File ID or path used to locate the file content. |