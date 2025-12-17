# CreateChatCompletion24

## Example Usage

```typescript
import { CreateChatCompletion24 } from "@orq-ai/node/models/operations";

let value: CreateChatCompletion24 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | *"file"*                                                                                                     | :heavy_check_mark:                                                                                           | The type of the content part. Always `file`.                                                                 |
| `cacheControl`                                                                                               | [operations.CreateChatCompletion2CacheControl](../../models/operations/createchatcompletion2cachecontrol.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `file`                                                                                                       | [components.FileContentPartSchema](../../models/components/filecontentpartschema.md)                         | :heavy_check_mark:                                                                                           | File data for the content part. Must contain either file_data or uri, but not both.                          |