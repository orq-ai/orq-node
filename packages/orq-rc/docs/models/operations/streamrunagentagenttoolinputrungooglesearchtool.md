# StreamRunAgentAgentToolInputRunGoogleSearchTool

Performs Google searches to retrieve web content

## Example Usage

```typescript
import { StreamRunAgentAgentToolInputRunGoogleSearchTool } from "@orq-ai/node/models/operations";

let value: StreamRunAgentAgentToolInputRunGoogleSearchTool = {
  type: "google_search",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"google_search"*                                    | :heavy_check_mark:                                   | N/A                                                  |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |