# FileT

## Example Usage

```typescript
import { FileT } from "@orq-ai/node/models/operations";

let value: FileT = {
  fileData: "<value>",
  filename: "example.file",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `fileData`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The base64 encoded file data, used when passing the file to the model as a string. |
| `filename`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the file, used when passing the file to the model as a string.         |