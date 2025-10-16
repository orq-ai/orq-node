# AgentToolInputRunWebScraperTool

Scrapes and extracts content from web pages

## Example Usage

```typescript
import { AgentToolInputRunWebScraperTool } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunWebScraperTool = {
  type: "web_scraper",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.RunAgentAgentToolInputRunType](../../models/operations/runagentagenttoolinputruntype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requiresApproval`                                                                                   | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Whether this tool requires approval before execution                                                 |