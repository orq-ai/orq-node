# Tool

## Example Usage

```typescript
import { Tool } from "@orq-ai/node/models/operations";

let value: Tool = {
  id: "<id>",
  displayName: "Coy45",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `id`                | *string*            | :heavy_check_mark:  | The tool' id in orq |
| `displayName`       | *string*            | :heavy_check_mark:  | N/A                 |
| `requiresApproval`  | *boolean*           | :heavy_minus_sign:  | N/A                 |