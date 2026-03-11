# ListAgentsResponseBody

Successfully retrieved the list of agents. Returns a paginated response containing agent manifests with complete configurations, including primary and fallback models, tools, knowledge bases, and execution settings.

## Example Usage

```typescript
import { ListAgentsResponseBody } from "@orq-ai/node/models/operations";

let value: ListAgentsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      key: "<key>",
      status: "draft",
      path: "Default",
      knowledgeBases: [
        {
          knowledgeId: "customer-knowledge-base",
        },
      ],
      role: "<value>",
      description: "between ick deflect once forenenst gee yet gah eek",
      instructions: "<value>",
      model: {
        id: "<id>",
        parameters: {
          fallbacks: [
            {
              model: "openai/gpt-4o-mini",
            },
          ],
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
        },
        retry: {
          onCodes: [
            429,
            500,
            502,
            503,
            504,
          ],
        },
        fallbackModels: [
          "<value>",
        ],
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | [operations.ListAgentsObject](../../models/operations/listagentsobject.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [operations.ListAgentsData](../../models/operations/listagentsdata.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |