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
      name: "<value>",
      logo: "<value>",
      docsUrl: "https://twin-impostor.biz",
      pricingUrl: "https://stingy-thread.biz",
    },
    endpoints: [
      "<value 1>",
      "<value 2>",
    ],
    modalities: {
      input: [
        "<value 1>",
        "<value 2>",
      ],
      output: [],
    },
    offeringOf: "<value>",
    supportedParameters: [],
    supportedTiers: [],
    location: [
      "<value 1>",
    ],
    status: "<value>",
    type: "<value>",
    knowledgeCutoff: "<value>",
    releaseDate: "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `model`                                              | [components.Model](../../models/components/model.md) | :heavy_check_mark:                                   | Requested catalog entry.                             |