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
      status: "published",
      path: "Default",
      type: "internal",
      role: "<value>",
      description: "tail draft alongside pish apologise readjust pfft until",
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
          count: 3,
          onCodes: [
            429,
            500,
            502,
            503,
            504,
          ],
        },
        fallbackModels: [
          {
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
              count: 3,
              onCodes: [
                429,
                500,
                502,
                503,
                504,
              ],
            },
          },
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
| `data`                                                                     | *operations.ListAgentsData*[]                                              | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |