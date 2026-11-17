# RenameSkillFileRequest

## Example Usage

```typescript
import { RenameSkillFileRequest } from "@orq-ai/node/models/components";

let value: RenameSkillFileRequest = {
  oldPath: "<value>",
  newPath: "<value>",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `oldPath`                                                                                                                   | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Current relative path of the file within the skill bundle.                                                                  |
| `newPath`                                                                                                                   | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | New relative path for the file within the skill bundle, including any<br/> subdirectory components (e.g. "scripts/extract.py"). |