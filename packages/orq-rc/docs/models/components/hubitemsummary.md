# HubItemSummary

## Example Usage

```typescript
import { HubItemSummary } from "@orq-ai/node/models/components";

let value: HubItemSummary = {
  id: "<id>",
  displayName: "Lance.Herman93",
  description: "throughout fork venom ascertain troubled till",
  type: "<value>",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Unique hub search item ID.                                                                                                      |
| `entityId`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | ID of the workspace entity represented by this hub item. Empty on search results: the field is not part of the Typesense index. |
| `displayName`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Human-readable hub item name.                                                                                                   |
| `description`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Hub item description.                                                                                                           |
| `type`                                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Hub item type.                                                                                                                  |