# GetAllPromptTemplatesRequestBody

## Example Usage

```typescript
import { GetAllPromptTemplatesRequestBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesRequestBody = {
  filters: [
    {
      type: "search",
      value: "<value>",
      searchPaths: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `filters`                                   | *operations.GetAllPromptTemplatesFilters*[] | :heavy_check_mark:                          | N/A                                         |