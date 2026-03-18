# FileUpdateRequest

## Example Usage

```typescript
import { FileUpdateRequest } from "@orq-ai/node/models/operations";

let value: FileUpdateRequest = {
  fileId: "<id>",
  requestBody: {
    fileName: "example.file",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `fileId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the file                                                                   |
| `requestBody`                                                                        | [operations.FileUpdateRequestBody](../../models/operations/fileupdaterequestbody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |