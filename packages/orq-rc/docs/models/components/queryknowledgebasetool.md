# QueryKnowledgeBaseTool

Queries knowledge bases for information

## Example Usage

```typescript
import { QueryKnowledgeBaseTool } from "@orq-ai/node/models/components";

let value: QueryKnowledgeBaseTool = {
  type: "query_knowledge_base",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.QueryKnowledgeBaseToolType](../../models/components/queryknowledgebasetooltype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `requiresApproval`                                                                             | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |