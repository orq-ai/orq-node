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
| `id`                                                                                                                | [components.Id](../../models/components/id.md)                                                                      | :heavy_check_mark:                                                                                                  | Plugin discriminator. Must be `pii_redaction`.                                                                      |
| `onFailure`                                                                                                         | [components.OnFailure](../../models/components/onfailure.md)                                                        | :heavy_minus_sign:                                                                                                  | Behavior when redaction is unavailable. `block` (default) fails the request; `passthrough` sends the original text. |
| `threshold`                                                                                                         | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Detector confidence cutoff in [0,1].                                                                                |
| `language`                                                                                                          | *"en"*                                                                                                              | :heavy_check_mark:                                                                                                  | Detector language.                                                                                                  |
| `entities`                                                                                                          | [components.Entities](../../models/components/entities.md)[]                                                        | :heavy_minus_sign:                                                                                                  | English entity types to redact. Omit to redact every type detected for the language.                                |