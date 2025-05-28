# TwoFile

## Example Usage

```typescript
import { TwoFile } from "@orq-ai/node/models/operations";

let value: TwoFile = {
  fileData: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `fileData`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The base64 encoded file data, used when passing the file to the model as a string. |
| `filename`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | The name of the file, used when passing the file to the model as a string.         |