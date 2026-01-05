# WebScraperTool

Scrapes and extracts content from web pages

## Example Usage

```typescript
import { WebScraperTool } from "@orq-ai/node/models/operations";

let value: WebScraperTool = {
  type: "web_scraper",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.CreateAgentRequestAgentToolInputCRUDType](../../models/operations/createagentrequestagenttoolinputcrudtype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `requiresApproval`                                                                                                         | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Whether this tool requires approval before execution                                                                       |