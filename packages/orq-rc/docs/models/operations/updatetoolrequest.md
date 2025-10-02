# UpdateToolRequest

## Example Usage

```typescript
import { UpdateToolRequest } from "@orq-ai/node/models/operations";

let value: UpdateToolRequest = {
  toolId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `toolId`                           | *string*                           | :heavy_check_mark:                 | N/A                                |
| `requestBody`                      | *operations.UpdateToolRequestBody* | :heavy_minus_sign:                 | The tool to update                 |