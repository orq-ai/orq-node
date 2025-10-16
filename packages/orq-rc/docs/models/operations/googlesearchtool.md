# GoogleSearchTool

Performs Google searches to retrieve web content

## Example Usage

```typescript
import { GoogleSearchTool } from "@orq-ai/node/models/operations";

let value: GoogleSearchTool = {
  type: "google_search",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [operations.AgentToolInputCRUDType](../../models/operations/agenttoolinputcrudtype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `requiresApproval`                                                                     | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether this tool requires approval before execution                                   |