# ExportSkillBundleResponse

## Example Usage

```typescript
import { ExportSkillBundleResponse } from "@orq-ai/node/models/components";

let value: ExportSkillBundleResponse = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `bundle`                                             | *string*                                             | :heavy_minus_sign:                                   | Zip archive bytes, base64 encoded in JSON responses. |
| `contentType`                                        | *string*                                             | :heavy_minus_sign:                                   | Content type of the bundle response.                 |
| `filename`                                           | *string*                                             | :heavy_minus_sign:                                   | Suggested filename for the downloaded archive.       |