# UpdateDatapointAnnotations1

## Example Usage

```typescript
import { UpdateDatapointAnnotations1 } from "@orq-ai/node/models/operations";

let value: UpdateDatapointAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 834283,
  endIndex: 873249,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.UpdateDatapointAnnotationsType](../../models/operations/updatedatapointannotationstype.md)                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `text`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `fileCitation`                                                                                                         | [operations.UpdateDatapointAnnotationsFileCitation](../../models/operations/updatedatapointannotationsfilecitation.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `startIndex`                                                                                                           | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `endIndex`                                                                                                             | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |