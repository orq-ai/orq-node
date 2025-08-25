# CreateResponseAnnotations2

A citation to a file

## Example Usage

```typescript
import { CreateResponseAnnotations2 } from "@orq-ai/node/models/operations";

let value: CreateResponseAnnotations2 = {
  type: "file_citation",
  index: 6571.1,
  fileId: "<id>",
  filename: "example.file",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.CreateResponseAnnotationsProxyType](../../models/operations/createresponseannotationsproxytype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `index`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The index in the text where the citation appears                                                               |
| `fileId`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the file being cited                                                                                 |
| `filename`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The name of the file being cited                                                                               |