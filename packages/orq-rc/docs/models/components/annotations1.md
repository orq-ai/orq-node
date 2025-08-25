# Annotations1

## Example Usage

```typescript
import { Annotations1 } from "@orq-ai/node/models/components";

let value: Annotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 714044,
  endIndex: 314770,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [components.AnnotationsType](../../models/components/annotationstype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `text`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `fileCitation`                                                           | [components.FileCitation](../../models/components/filecitation.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `startIndex`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `endIndex`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |