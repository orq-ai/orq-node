# KnowledgeBases

## Example Usage

```typescript
import { KnowledgeBases } from "@orq-ai/node/models/operations";

let value: KnowledgeBases = {
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
| `knowledgeId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The id of the resource                                                                     |
| `configuration`                                                                            | *operations.Configuration*                                                                 | :heavy_check_mark:                                                                         | Defines the configuration settings which can either be for a user message or a text entry. |