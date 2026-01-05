# ToolStartedEventData

## Example Usage

```typescript
import { ToolStartedEventData } from "@orq-ai/node/models/components";

let value: ToolStartedEventData = {
  toolId: "<id>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `toolId`                                      | *string*                                      | :heavy_check_mark:                            | Unique identifier for the tool                |
| `toolName`                                    | *string*                                      | :heavy_minus_sign:                            | Display name of the tool                      |
| `toolCallId`                                  | *string*                                      | :heavy_check_mark:                            | Unique identifier for this specific tool call |
| `arguments`                                   | Record<string, *any*>                         | :heavy_check_mark:                            | Arguments passed to the tool                  |