# CurrentDateTool

Returns the current date and time

## Example Usage

```typescript
import { CurrentDateTool } from "@orq-ai/node/models/operations";

let value: CurrentDateTool = {
  type: "current_date",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"current_date"*                                     | :heavy_check_mark:                                   | N/A                                                  |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |