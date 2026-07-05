# PIIRedactionPluginNlOnFailure

Behavior when redaction is unavailable. `block` (default) fails the request; `passthrough` sends the original text.

## Example Usage

```typescript
import { PIIRedactionPluginNlOnFailure } from "@orq-ai/node/models/components";

let value: PIIRedactionPluginNlOnFailure = "block";
```

## Values

```typescript
"block" | "passthrough"
```