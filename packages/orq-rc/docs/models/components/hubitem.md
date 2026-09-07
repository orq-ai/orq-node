# HubItem

## Example Usage

```typescript
import { HubItem } from "@orq-ai/node/models/components";

let value: HubItem = {
  entityId: "<id>",
  displayName: "Stone85",
  description: "considering instead dimly",
  type: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | Unique hub item ID.                                          |
| `entityId`                                                   | *string*                                                     | :heavy_check_mark:                                           | ID of the workspace entity represented by this hub item.     |
| `displayName`                                                | *string*                                                     | :heavy_check_mark:                                           | Human-readable hub item name.                                |
| `description`                                                | *string*                                                     | :heavy_check_mark:                                           | Hub item description.                                        |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | Hub item type.                                               |
| `isActive`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Whether a vendor hub item is active.                         |
| `isPrivate`                                                  | *boolean*                                                    | :heavy_minus_sign:                                           | Whether a vendor hub item is private.                        |
| `isProvidedByOrq`                                            | *boolean*                                                    | :heavy_minus_sign:                                           | Whether the hub item is provided by orq.                     |
| `engine`                                                     | *string*                                                     | :heavy_minus_sign:                                           | Execution engine for vendor hub item templates.              |
| `key`                                                        | *string*                                                     | :heavy_minus_sign:                                           | Stable vendor template key.                                  |
| `evaluator`                                                  | [components.Evaluator](../../models/components/evaluator.md) | :heavy_minus_sign:                                           | Evaluator template payload.                                  |
| `prompt`                                                     | [components.Prompt](../../models/components/prompt.md)       | :heavy_minus_sign:                                           | Prompt template payload.                                     |