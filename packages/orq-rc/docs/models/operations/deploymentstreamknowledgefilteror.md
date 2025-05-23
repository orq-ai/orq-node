# DeploymentStreamKnowledgeFilterOr

Or

## Example Usage

```typescript
import { DeploymentStreamKnowledgeFilterOr } from "@orq-ai/node/models/operations";

let value: DeploymentStreamKnowledgeFilterOr = {
  or: [
    {
      "key": {
        gte: 1750.14,
      },
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `or`                                                                        | Record<string, *operations.DeploymentStreamKnowledgeFilterDeploymentsOr*>[] | :heavy_check_mark:                                                          | N/A                                                                         |