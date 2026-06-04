# DeploymentGetConfigKnowledgeFilterOr

Or

## Example Usage

```typescript
import { DeploymentGetConfigKnowledgeFilterOr } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigKnowledgeFilterOr = {
  or: [
    {
      "key": {
        gt: 3522.44,
      },
    },
    {},
    {},
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `or`                                                                           | Record<string, *operations.DeploymentGetConfigKnowledgeFilterDeploymentsOr*>[] | :heavy_check_mark:                                                             | N/A                                                                            |