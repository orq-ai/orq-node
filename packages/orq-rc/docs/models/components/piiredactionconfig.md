# PiiRedactionConfig

PiiRedactionConfig mirrors the workspace-default PII redaction plugin
 configuration. Every field is optional; the gateway applies its own
 defaults for unset fields.

 The stored value is validated on write using the same rules the gateway
 applies to live requests. Without that, an invalid workspace default
 would 400 every gateway call for the workspace, since the default plugin
 is injected into each request and validated there.

## Example Usage

```typescript
import { PiiRedactionConfig } from "@orq-ai/node/models/components";

let value: PiiRedactionConfig = {};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `language`                                                                                                                                                               | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Detector language. One of "en" or "nl"; omit for the gateway default<br/> ("en"). The valid entity catalog depends on this value.                                        |
| `entities`                                                                                                                                                               | *string*[]                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | Entity types to redact (e.g. "EMAIL_ADDRESS", "PERSON"). Values are<br/> validated against the entity catalog for `language`; omit to redact every<br/> type the detector finds. |
| `onFailure`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Behaviour when redaction cannot run: "block" (fail closed, the default) or<br/> "passthrough" (fail open, send the original text).                                       |
| `threshold`                                                                                                                                                              | *number*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Detection confidence threshold in the [0, 1] range.                                                                                                                      |