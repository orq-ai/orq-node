# StreamRunAgentAgentToolInputRunWebScraperTool

Scrapes and extracts content from web pages

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunWebScraperTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunWebScraperTool = {
  type: "web_scraper",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"web_scraper"*                                      | :heavy_check_mark:                                   | N/A                                                  |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |