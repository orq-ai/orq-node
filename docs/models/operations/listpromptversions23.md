# ListPromptVersions23

## Example Usage

```typescript
import { ListPromptVersions23 } from "@orq-ai/node/models/operations";

let value: ListPromptVersions23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.ListPromptVersions2PromptsResponseType](../../models/operations/listpromptversions2promptsresponsetype.md) | :heavy_check_mark:                                                                                                     | The type of the content part. Always `file`.                                                                           |
| `file`                                                                                                                 | [operations.ListPromptVersions2File](../../models/operations/listpromptversions2file.md)                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |