# ListAgentsFallbackModelConfiguration2

Fallback model configuration with optional parameters.

## Example Usage

```typescript
import { ListAgentsFallbackModelConfiguration2 } from "@orq-ai/node/models/operations";

let value: ListAgentsFallbackModelConfiguration2 = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | A fallback model ID string. Must support tool calling.                                                                                 |
| `parameters`                                                                                                                           | [operations.ListAgentsFallbackModelConfigurationParameters](../../models/operations/listagentsfallbackmodelconfigurationparameters.md) | :heavy_minus_sign:                                                                                                                     | Optional model parameters specific to this fallback model. Overrides primary model parameters if this fallback is used.                |