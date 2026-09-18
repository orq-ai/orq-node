# PIIRedactionPluginAuto

## Example Usage

```typescript
import { PIIRedactionPluginAuto } from "@orq-ai/node/models/components";

let value: PIIRedactionPluginAuto = {
  id: "pii_redaction",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | [components.Id](../../models/components/id.md)                                                                      | :heavy_check_mark:                                                                                                  | Plugin discriminator. Must be `pii_redaction`.                                                                      |
| `onFailure`                                                                                                         | [components.OnFailure](../../models/components/onfailure.md)                                                        | :heavy_minus_sign:                                                                                                  | Behavior when redaction is unavailable. `block` (default) fails the request; `passthrough` sends the original text. |
| `threshold`                                                                                                         | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Detector confidence cutoff in [0,1].                                                                                |
| `entities`                                                                                                          | [components.Entities](../../models/components/entities.md)[]                                                        | :heavy_minus_sign:                                                                                                  | Entity types to redact when no detector language is configured. Omit to redact every detected type.                 |