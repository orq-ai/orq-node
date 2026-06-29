# PIIRedactionPluginEnOnFailure

Behavior when redaction is unavailable. `block` (default) fails the request; `passthrough` sends the original text.

## Example Usage

```typescript
import { PIIRedactionPluginEnOnFailure } from "@orq-ai/node/models/components";

let value: PIIRedactionPluginEnOnFailure = "passthrough";
```

## Values

```typescript
"block" | "passthrough"
```