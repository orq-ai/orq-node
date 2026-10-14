# ListDeploymentVersionsKnowledgeBases

## Example Usage

```typescript
import { ListDeploymentVersionsKnowledgeBases } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersionsKnowledgeBases = {
  knowledgeId: "<id>",
  configuration: {
    type: "query",
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | The unique identifier of the playground knowledge base                                     |
| `knowledgeId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The linked Knowledge ID                                                                    |
| `configuration`                                                                            | *operations.KnowledgeBaseConfiguration*                                                    | :heavy_check_mark:                                                                         | Defines the configuration settings which can either be for a user message or a text entry. |