# PublicPluginId

Plugin discriminator. pii_redaction redacts PII, response_healing repairs malformed JSON, and trace_scrubbing removes selected sensitive fields from exported traces.

## Example Usage

```typescript
import { PublicPluginId } from "@orq-ai/node/models/components";

let value: PublicPluginId = "response_healing";
```

## Values

```typescript
"pii_redaction" | "response_healing" | "trace_scrubbing"
```