# GetAllPromptTemplatesRequestBody

## Example Usage

```typescript
import { GetAllPromptTemplatesRequestBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesRequestBody = {
  filters: [
    {
      type: "string_array",
      operator: "in",
      values: [
        "<value>",
      ],
      path: "/boot/defaults",
    },
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `filters`              | *operations.Filters*[] | :heavy_check_mark:     | N/A                    |