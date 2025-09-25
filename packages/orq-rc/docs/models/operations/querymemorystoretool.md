# QueryMemoryStoreTool

Queries agent memory stores for context

## Example Usage

```typescript
import { QueryMemoryStoreTool } from "@orq-ai/node/models/operations";

let value: QueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [operations.RunAgentRunAgentRequestToolAgentsRequestRequestBodyType](../../models/operations/runagentrunagentrequesttoolagentsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `requiresApproval`                                                                                                                                       | *boolean*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |