# Annotations2

A citation to a file

## Example Usage

```typescript
import { Annotations2 } from "@orq-ai/node/models/operations";

let value: Annotations2 = {
  type: "file_citation",
  index: 7024.27,
  fileId: "<id>",
  filename: "example.file",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | *"file_citation"*                                | :heavy_check_mark:                               | N/A                                              |
| `index`                                          | *number*                                         | :heavy_check_mark:                               | The index in the text where the citation appears |
| `fileId`                                         | *string*                                         | :heavy_check_mark:                               | The ID of the file being cited                   |
| `filename`                                       | *string*                                         | :heavy_check_mark:                               | The name of the file being cited                 |