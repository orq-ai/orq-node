# PublicPluginId

Plugin discriminator. pii_redaction replaces PII with placeholders before the provider sees it and restores the original values in the response. response_healing repairs malformed JSON in non-streaming model output.

## Example Usage

```typescript
import { PublicPluginId } from "@orq-ai/node/models/components";

let value: PublicPluginId = "pii_redaction";
```

## Values

```typescript
"pii_redaction" | "response_healing"
```