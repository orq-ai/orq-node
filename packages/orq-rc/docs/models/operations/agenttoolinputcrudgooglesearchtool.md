# AgentToolInputCRUDGoogleSearchTool

Performs Google searches to retrieve web content

## Example Usage

```typescript
import { AgentToolInputCRUDGoogleSearchTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDGoogleSearchTool = {
  type: "google_search",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.UpdateAgentAgentToolInputCRUDType](../../models/operations/updateagentagenttoolinputcrudtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requiresApproval`                                                                                           | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether this tool requires approval before execution                                                         |
| `configuration`                                                                                              | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time.          |