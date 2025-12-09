# CreateDatasetItem24

## Example Usage

```typescript
import { CreateDatasetItem24 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem24 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | *"file"*                                                                                                               | :heavy_check_mark:                                                                                                     | The type of the content part. Always `file`.                                                                           |
| `cacheControl`                                                                                                         | [operations.CreateDatasetItem2DatasetsCacheControl](../../models/operations/createdatasetitem2datasetscachecontrol.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `file`                                                                                                                 | [components.FileContentPartSchema](../../models/components/filecontentpartschema.md)                                   | :heavy_check_mark:                                                                                                     | File data for the content part. Must contain either file_data or uri, but not both.                                    |