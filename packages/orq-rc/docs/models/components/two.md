# Two

## Example Usage

```typescript
import { Two } from "@orq-ai/node/models/components";

let value: Two = {
  modelDbId: "<id>",
  provider: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                             | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The name of the model for the Agent to use. Refer to the [model list](https://docs.orq.ai/docs/proxy#/chat-models). |
| `modelDbId`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Internal database model identifier used by the retrieval testing UI.                                                |
| `provider`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Provider identifier for the stored model configuration.                                                             |
| `integrationId`                                                                                                     | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Optional integration identifier for the stored model configuration.                                                 |