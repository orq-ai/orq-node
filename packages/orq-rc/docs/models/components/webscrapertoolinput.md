# WebScraperToolInput

Scrapes and extracts content from web pages

## Example Usage

```typescript
import { WebScraperToolInput } from "@orq-ai/node/models/components";

let value: WebScraperToolInput = {
  type: "web_scraper",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"web_scraper"*                                                                                     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |