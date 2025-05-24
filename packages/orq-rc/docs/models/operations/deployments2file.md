# Deployments2File

## Example Usage

```typescript
import { Deployments2File } from "@orq-ai/node/models/operations";

let value: Deployments2File = {
  fileData: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `fileData`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The base64 encoded file data, used when passing the file to the model as a string. |
| `filename`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | The name of the file, used when passing the file to the model as a string.         |