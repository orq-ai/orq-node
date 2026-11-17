# SkillFile

## Example Usage

```typescript
import { SkillFile } from "@orq-ai/node/models/components";

let value: SkillFile = {
  path: "/opt/share",
  sizeBytes: "<value>",
  sha256: "<value>",
  contentType: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Relative path within the skill bundle, including any subdirectory<br/> components (e.g. "scripts/extract.py"). |
| `sizeBytes`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Size of the file in bytes.                                                                                 |
| `sha256`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | SHA-256 hex digest of the file content; used as the content-addressed<br/> storage key.                    |
| `contentType`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | MIME type of the file content.                                                                             |