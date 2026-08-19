# AgenticRagConfig1

## Example Usage

```typescript
import { AgenticRagConfig1 } from "@orq-ai/node/models/components";

let value: AgenticRagConfig1 = {
  model: "Aventador",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The name of the model for the Agent to use. Refer to the [model list](https://docs.orq.ai/docs/proxy#/chat-models). |
| `modelDbId`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Internal database model identifier used by the retrieval testing UI.                                                |
| `provider`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Provider identifier for the stored model configuration.                                                             |
| `integrationId`                                                                                                     | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Optional integration identifier for the stored model configuration.                                                 |