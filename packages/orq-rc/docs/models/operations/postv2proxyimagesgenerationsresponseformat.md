# PostV2ProxyImagesGenerationsResponseFormat

The format in which generated images with are returned. This parameter isn't supported for `openai/gpt-image-1` which will always return base64-encoded images.

## Example Usage

```typescript
import { PostV2ProxyImagesGenerationsResponseFormat } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesGenerationsResponseFormat = "url";
```

## Values

```typescript
"url" | "b64_json"
```