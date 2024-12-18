# GetAllPromptsRequestBody

## Example Usage

```typescript
import { GetAllPromptsRequestBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptsRequestBody = {
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

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `filters`                           | *operations.GetAllPromptsFilters*[] | :heavy_check_mark:                  | N/A                                 |