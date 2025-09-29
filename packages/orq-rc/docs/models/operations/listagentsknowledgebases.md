# ListAgentsKnowledgeBases

## Example Usage

```typescript
import { ListAgentsKnowledgeBases } from "@orq-ai/node/models/operations";

let value: ListAgentsKnowledgeBases = {
  knowledgeId: "<id>",
  configuration: {
    type: "last_user_message",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | The id of the resource                                                                     |
| `knowledgeId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The id of the resource                                                                     |
| `configuration`                                                                            | *operations.ListAgentsKnowledgeBaseConfiguration*                                          | :heavy_check_mark:                                                                         | Defines the configuration settings which can either be for a user message or a text entry. |