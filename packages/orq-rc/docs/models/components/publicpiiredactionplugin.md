# PublicPIIRedactionPlugin

## Example Usage

```typescript
import { PublicPIIRedactionPlugin } from "@orq-ai/node/models/components";

let value: PublicPIIRedactionPlugin = {
  id: "pii_redaction",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `entities`                                                                                                      | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | Entity types to redact (e.g. EMAIL_ADDRESS, BSN). Omit to redact every type detected for the language.          |
| `id`                                                                                                            | [components.PublicPIIRedactionPluginId](../../models/components/publicpiiredactionpluginid.md)                  | :heavy_check_mark:                                                                                              | Plugin discriminator. Must be pii_redaction.                                                                    |
| `language`                                                                                                      | [components.PublicPIIRedactionPluginLanguage](../../models/components/publicpiiredactionpluginlanguage.md)      | :heavy_minus_sign:                                                                                              | Detector language. Defaults to en.                                                                              |
| `onFailure`                                                                                                     | [components.PublicPIIRedactionPluginOnFailure](../../models/components/publicpiiredactionpluginonfailure.md)    | :heavy_minus_sign:                                                                                              | Behavior when redaction is unavailable. block (default) fails the request; passthrough sends the original text. |
| `persistRedactedToTraces`                                                                                       | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | Store the redacted (placeholder) form in traces rather than the restored original. Defaults to true.            |
| `threshold`                                                                                                     | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Detector confidence cutoff in [0,1].                                                                            |