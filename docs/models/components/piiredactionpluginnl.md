# PIIRedactionPluginNl

## Example Usage

```typescript
import { PIIRedactionPluginNl } from "@orq-ai/node/models/components";

let value: PIIRedactionPluginNl = {
  id: "pii_redaction",
  language: "nl",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | [components.PIIRedactionPluginNlId](../../models/components/piiredactionpluginnlid.md)                              | :heavy_check_mark:                                                                                                  | Plugin discriminator. Must be `pii_redaction`.                                                                      |
| `onFailure`                                                                                                         | [components.PIIRedactionPluginNlOnFailure](../../models/components/piiredactionpluginnlonfailure.md)                | :heavy_minus_sign:                                                                                                  | Behavior when redaction is unavailable. `block` (default) fails the request; `passthrough` sends the original text. |
| `threshold`                                                                                                         | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Detector confidence cutoff in [0,1].                                                                                |
| `language`                                                                                                          | [components.PIIRedactionPluginNlLanguage](../../models/components/piiredactionpluginnllanguage.md)                  | :heavy_check_mark:                                                                                                  | Detector language.                                                                                                  |
| `entities`                                                                                                          | [components.PIIRedactionPluginNlEntities](../../models/components/piiredactionpluginnlentities.md)[]                | :heavy_minus_sign:                                                                                                  | Dutch entity types to redact. Omit to redact every type detected for the language.                                  |