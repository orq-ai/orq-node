# PutSkillFileRequest

## Example Usage

```typescript
import { PutSkillFileRequest } from "@orq-ai/node/models/components";

let value: PutSkillFileRequest = {
  path: "/home",
  content: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `path`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Relative path within the skill bundle, including subdirectory<br/> components (e.g. "scripts/extract.py"). |
| `content`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | Raw file content. The MIME type is derived from the path extension.                                    |