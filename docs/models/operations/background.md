# Background

Allows to set transparency for the background of the generated image(s). This parameter is only supported for `openai/gpt-image-1`.

## Example Usage

```typescript
import { Background } from "@orq-ai/node/models/operations";

let value: Background = "transparent";
```

## Values

```typescript
"transparent" | "opaque" | "auto"
```