# UpdateToolRequest

## Example Usage

```typescript
import { UpdateToolRequest } from "@orq-ai/node/models/operations";

let value: UpdateToolRequest = {
  toolKey: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `toolKey`                          | *string*                           | :heavy_check_mark:                 | N/A                                |
| `requestBody`                      | *operations.UpdateToolRequestBody* | :heavy_minus_sign:                 | The tool to update                 |