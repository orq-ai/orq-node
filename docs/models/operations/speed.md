# Speed

Inference speed for direct Anthropic models. Fast mode is available on Claude Opus 4.8, Opus 5, and Opus 5.5 at premium pricing, and cannot be combined with batch or priority processing.

## Example Usage

```typescript
import { Speed } from "@orq-ai/node/models/operations";

let value: Speed = "fast";
```

## Values

```typescript
"standard" | "fast"
```