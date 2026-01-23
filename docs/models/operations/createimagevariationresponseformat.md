# CreateImageVariationResponseFormat

The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.

## Example Usage

```typescript
import { CreateImageVariationResponseFormat } from "@orq-ai/node/models/operations";

let value: CreateImageVariationResponseFormat = "b64_json";
```

## Values

```typescript
"url" | "b64_json"
```