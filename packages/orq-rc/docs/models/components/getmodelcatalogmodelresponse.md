# GetModelCatalogModelResponse

## Example Usage

```typescript
import { GetModelCatalogModelResponse } from "@orq-ai/node/models/components";

let value: GetModelCatalogModelResponse = {
  model: {
    id: "<id>",
    created: new Date("2026-08-06T11:27:51.346Z"),
    name: "<value>",
    description:
      "brave conjecture garage preheat dramatic braid popularity brr",
    provider: {
      id: "<id>",
      logo: "<value>",
    },
    endpoints: [],
    modalities: {
      input: [],
      output: [
        "<value 1>",
      ],
    },
    offeringOf: "<value>",
    supportedParameters: [
      "<value 1>",
    ],
    supportedTiers: [
      "<value 1>",
    ],
    location: [
      "<value 1>",
      "<value 2>",
    ],
    features: [],
    deprecated: false,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `model`                                              | [components.Model](../../models/components/model.md) | :heavy_check_mark:                                   | Requested catalog entry.                             |