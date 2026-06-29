# PIIRedactionPluginEn

## Example Usage

```typescript
import { PIIRedactionPluginEn } from "@orq-ai/node/models/components";

let value: PIIRedactionPluginEn = {
  id: "pii_redaction",
  language: "en",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | [components.PIIRedactionPluginEnId](../../models/components/piiredactionpluginenid.md)                              | :heavy_check_mark:                                                                                                  | Plugin discriminator. Must be `pii_redaction`.                                                                      |
| `onFailure`                                                                                                         | [components.PIIRedactionPluginEnOnFailure](../../models/components/piiredactionpluginenonfailure.md)                | :heavy_minus_sign:                                                                                                  | Behavior when redaction is unavailable. `block` (default) fails the request; `passthrough` sends the original text. |
| `threshold`                                                                                                         | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Detector confidence cutoff in [0,1].                                                                                |
| `language`                                                                                                          | [components.Language](../../models/components/language.md)                                                          | :heavy_check_mark:                                                                                                  | Detector language.                                                                                                  |
| `entities`                                                                                                          | [components.PIIRedactionPluginEnEntities](../../models/components/piiredactionpluginenentities.md)[]                | :heavy_minus_sign:                                                                                                  | English entity types to redact. Omit to redact every type detected for the language.                                |