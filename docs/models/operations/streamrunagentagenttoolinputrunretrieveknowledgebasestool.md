# StreamRunAgentAgentToolInputRunRetrieveKnowledgeBasesTool

Lists available knowledge bases

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunRetrieveKnowledgeBasesTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunRetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                       | [operations.StreamRunAgentAgentToolInputRunAgentsRequestRequestBodySettingsTools9Type](../../models/operations/streamrunagentagenttoolinputrunagentsrequestrequestbodysettingstools9type.md) | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `requiresApproval`                                                                                                                                                                           | *boolean*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                           | Whether this tool requires approval before execution                                                                                                                                         |