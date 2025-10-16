# AgentToolInputCRUDWebScraperTool

Scrapes and extracts content from web pages

## Example Usage

```typescript
import { AgentToolInputCRUDWebScraperTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputCRUDWebScraperTool = {
  type: "web_scraper",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.UpdateAgentAgentToolInputCRUDAgentsType](../../models/operations/updateagentagenttoolinputcrudagentstype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `requiresApproval`                                                                                                       | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Whether this tool requires approval before execution                                                                     |