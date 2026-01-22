# UpdateAgentRequest

## Example Usage

```typescript
import { UpdateAgentRequest } from "@orq-ai/node/models/operations";

let value: UpdateAgentRequest = {
  agentKey: "<value>",
  requestBody: {
    model: {
      id: "<id>",
      parameters: {
        fallbacks: [
          {
            model: "openai/gpt-4o-mini",
          },
        ],
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
        cache: {
          ttl: 3600,
          type: "exact_match",
        },
        loadBalancer: [
          {
            type: "weight_based",
            model: "openai/gpt-4o",
            weight: 0.7,
          },
          {
            type: "weight_based",
            model: "openai/gpt-4o",
            weight: 0.7,
          },
        ],
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
    fallbackModels: [
      {
        id: "<id>",
        parameters: {
          fallbacks: [
            {
              model: "openai/gpt-4o-mini",
            },
          ],
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
          cache: {
            ttl: 3600,
            type: "exact_match",
          },
          loadBalancer: [
            {
              type: "weight_based",
              model: "openai/gpt-4o",
              weight: 0.7,
            },
            {
              type: "weight_based",
              model: "openai/gpt-4o",
              weight: 0.7,
            },
          ],
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
    settings: {
      tools: [
        {
          type: "mcp",
          id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
          toolId: "01KXYZ123456789",
          requiresApproval: false,
        },
      ],
    },
    path: "Default",
    knowledgeBases: [
      {
        knowledgeId: "customer-knowledge-base",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `agentKey`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | The unique key of the agent to update                                                                |
| `requestBody`                                                                                        | [operations.UpdateAgentUpdateAgentRequest](../../models/operations/updateagentupdateagentrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |