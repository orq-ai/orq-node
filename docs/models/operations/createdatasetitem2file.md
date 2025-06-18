# CreateDatasetItem2File

## Example Usage

```typescript
import { CreateDatasetItem2File } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem2File = {
  fileData: "<value>",
  filename: "example.file",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `fileData`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The base64 encoded file data, used when passing the file to the model as a string. |
| `filename`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the file, used when passing the file to the model as a string.         |