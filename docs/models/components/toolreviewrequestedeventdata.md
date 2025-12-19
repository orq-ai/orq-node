# ToolReviewRequestedEventData

## Example Usage

```typescript
import { ToolReviewRequestedEventData } from "@orq-ai/node/models/components";

let value: ToolReviewRequestedEventData = {
  toolId: "<id>",
  toolCallId: "<id>",
  arguments: {},
  requiresApproval: false,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `toolId`                                            | *string*                                            | :heavy_check_mark:                                  | Unique identifier for the tool in the tool registry |
| `toolCallId`                                        | *string*                                            | :heavy_check_mark:                                  | The tool call ID requiring review                   |
| `toolName`                                          | *string*                                            | :heavy_minus_sign:                                  | Name of the tool requiring approval                 |
| `arguments`                                         | Record<string, *any*>                               | :heavy_check_mark:                                  | Arguments that will be passed to the tool           |
| `requiresApproval`                                  | *boolean*                                           | :heavy_check_mark:                                  | Whether approval is mandatory before execution      |