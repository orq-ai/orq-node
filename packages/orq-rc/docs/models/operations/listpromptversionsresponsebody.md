# ListPromptVersionsResponseBody

Prompt versions retrieved.

## Example Usage

```typescript
import { ListPromptVersionsResponseBody } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      prompt: {
        fallbacks: [
          {
            model: "openai/gpt-4o-mini",
          },
        ],
        retry: {
          onCodes: [
            429,
            500,
            502,
            503,
            504,
          ],
        },
        cache: {
          ttl: 3600,
          type: "exact_match",
        },
        loadBalancer: {
          type: "weight_based",
          models: [
            {
              model: "openai/gpt-4o",
              weight: 0.7,
            },
          ],
        },
        timeout: {
          callTimeout: 30000,
        },
        model: "openai/gpt-4o",
      },
      timestamp: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [operations.ListPromptVersionsObject](../../models/operations/listpromptversionsobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.ListPromptVersionsData](../../models/operations/listpromptversionsdata.md)[]   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `hasMore`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |