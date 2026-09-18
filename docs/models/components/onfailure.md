# OnFailure

Behavior when redaction is unavailable. `block` (default) fails the request; `passthrough` sends the original text.

## Example Usage

```typescript
import { OnFailure } from "@orq-ai/node/models/components";

let value: OnFailure = "block";
```

## Values

```typescript
"block" | "passthrough"
```