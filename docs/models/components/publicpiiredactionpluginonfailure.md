# PublicPIIRedactionPluginOnFailure

Behavior when redaction is unavailable. block (default) fails the request; passthrough sends the original text.

## Example Usage

```typescript
import { PublicPIIRedactionPluginOnFailure } from "@orq-ai/node/models/components";

let value: PublicPIIRedactionPluginOnFailure = "block";
```

## Values

```typescript
"block" | "passthrough"
```