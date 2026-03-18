# ResponseBodyKnowledgeBases

## Example Usage

```typescript
import { ResponseBodyKnowledgeBases } from "@orq-ai/node/models/operations";

let value: ResponseBodyKnowledgeBases = {
  knowledgeId: "<id>",
  configuration: {
    type: "last_user_message",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The linked Knowledge ID                                                                    |
| `configuration`                                                                            | *operations.KnowledgeBaseConfiguration*                                                    | :heavy_check_mark:                                                                         | Defines the configuration settings which can either be for a user message or a text entry. |