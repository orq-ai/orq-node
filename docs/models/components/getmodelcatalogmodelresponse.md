# GetModelCatalogModelResponse

## Example Usage

```typescript
import { GetModelCatalogModelResponse } from "@orq-ai/node/models/components";

let value: GetModelCatalogModelResponse = {
  model: {
    id: "<id>",
    created: "<value>",
    name: "<value>",
    description:
      "separate keenly following despite rigidly woot ugh internationalize reprove",
    provider: {
      id: "<id>",
      logo: "<value>",
    },
    endpoints: [
      "<value 1>",
      "<value 2>",
    ],
    modalities: {
      input: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      output: [
        "<value 1>",
      ],
    },
    offeringOf: "<value>",
    supportedParameters: [
      "<value 1>",
    ],
    supportedTiers: [],
    location: [
      "<value 1>",
    ],
    features: [],
    deprecated: true,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `model`                                              | [components.Model](../../models/components/model.md) | :heavy_check_mark:                                   | Requested catalog entry.                             |