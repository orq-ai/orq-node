# McpIcon

## Example Usage

```typescript
import { McpIcon } from "@orq-ai/node/models/components";

let value: McpIcon = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `src`                                                 | *string*                                              | :heavy_minus_sign:                                    | Icon URI, including HTTPS URLs and base64 data URIs.  |
| `mimeType`                                            | *string*                                              | :heavy_minus_sign:                                    | Optional MIME type override.                          |
| `sizes`                                               | *string*[]                                            | :heavy_minus_sign:                                    | Supported sizes such as "48x48" or "any".             |
| `theme`                                               | *string*                                              | :heavy_minus_sign:                                    | Optional background theme this icon was designed for. |