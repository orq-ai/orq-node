# KnowledgeBaseStaticQuery

Defines the configuration settings for a static query.

## Example Usage

```typescript
import { KnowledgeBaseStaticQuery } from "@orq-ai/node/models/operations";

let value: KnowledgeBaseStaticQuery = {
  type: "query",
  query: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.RunAgentKnowledgeBaseConfigurationType](../../models/operations/runagentknowledgebaseconfigurationtype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `query`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |