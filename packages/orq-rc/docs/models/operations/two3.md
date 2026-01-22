# Two3

A file input content part.

## Example Usage

```typescript
import { Two3 } from "@orq-ai/node/models/operations";

let value: Two3 = {
  type: "input_file",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `type`                         | *"input_file"*                 | :heavy_check_mark:             | The type of input content part |
| `fileData`                     | *string*                       | :heavy_minus_sign:             | Base64 encoded file data       |
| `fileId`                       | *string*                       | :heavy_minus_sign:             | File ID from the Files API     |
| `filename`                     | *string*                       | :heavy_minus_sign:             | Name of the file               |
| `fileUrl`                      | *string*                       | :heavy_minus_sign:             | URL of the file to fetch       |