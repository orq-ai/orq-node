# ResponseBodyResponseFormat

The format in which generated images are returned. Must be one of `url` or `b64_json`. This parameter isn't supported for `gpt-image-1` which will always return base64-encoded images.

## Example Usage

```typescript
import { ResponseBodyResponseFormat } from "@orq-ai/node/models/operations";

let value: ResponseBodyResponseFormat = "url";
```

## Values

```typescript
"url" | "b64_json"
```