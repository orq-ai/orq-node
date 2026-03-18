# ResponseBodyBackground

Allows to set transparency for the background of the generated image(s). This parameter is only supported for `openai/gpt-image-1`.

## Example Usage

```typescript
import { ResponseBodyBackground } from "@orq-ai/node/models/operations";

let value: ResponseBodyBackground = "transparent";
```

## Values

```typescript
"transparent" | "opaque" | "auto"
```