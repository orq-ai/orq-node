# GetAllPromptsRequestBody

## Example Usage

```typescript
import { GetAllPromptsRequestBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptsRequestBody = {
  filters: [
    {
      type: "id",
      id: "<id>",
      path: "/proc",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `pagination`                                                                                   | [operations.GetAllPromptsPagination](../../models/operations/getallpromptspagination.md)       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `sortingProps`                                                                                 | [operations.GetAllPromptsSortingProps](../../models/operations/getallpromptssortingprops.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `query`                                                                                        | [operations.GetAllPromptsQuery](../../models/operations/getallpromptsquery.md)                 | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `filters`                                                                                      | *operations.GetAllPromptsPromptsFilters*[]                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `includedFields`                                                                               | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |