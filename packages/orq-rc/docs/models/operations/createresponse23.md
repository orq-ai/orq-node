# CreateResponse23

A file input content part.

## Example Usage

```typescript
import { CreateResponse23 } from "@orq-ai/node/models/operations";

let value: CreateResponse23 = {
  type: "input_file",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.CreateResponse2ProxyRequestType](../../models/operations/createresponse2proxyrequesttype.md) | :heavy_check_mark:                                                                                       | The type of input content part                                                                           |
| `fileData`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Base64 encoded file data                                                                                 |
| `fileId`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | File ID from the Files API                                                                               |
| `filename`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Name of the file                                                                                         |
| `fileUrl`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | URL of the file to fetch                                                                                 |