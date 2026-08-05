# PublicPluginOnFailure

pii_redaction only. Behavior when redaction is unavailable. block (default) fails the request; passthrough sends the original text.

## Example Usage

```typescript
import { PublicPluginOnFailure } from "@orq-ai/node/models/components";

let value: PublicPluginOnFailure = "block";
```

## Values

```typescript
"block" | "passthrough"
```