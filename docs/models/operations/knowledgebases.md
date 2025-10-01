# KnowledgeBases

## Example Usage

```typescript
import { KnowledgeBases } from "@orq-ai/node/models/operations";

let value: KnowledgeBases = {
  configuration: {
    type: "last_user_message",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `configuration`                                                                            | *operations.KnowledgeBaseConfiguration*                                                    | :heavy_check_mark:                                                                         | Defines the configuration settings which can either be for a user message or a text entry. |