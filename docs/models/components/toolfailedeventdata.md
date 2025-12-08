# ToolFailedEventData

## Example Usage

```typescript
import { ToolFailedEventData } from "@orq-ai/node/models/components";

let value: ToolFailedEventData = {
  toolId: "<id>",
  toolCallId: "<id>",
  error: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `toolId`                                             | *string*                                             | :heavy_check_mark:                                   | Unique identifier for the tool in the tool registry  |
| `toolCallId`                                         | *string*                                             | :heavy_check_mark:                                   | Unique identifier matching the tool call that failed |
| `error`                                              | *string*                                             | :heavy_check_mark:                                   | Error message describing why the tool failed         |