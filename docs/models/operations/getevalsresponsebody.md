# GetEvalsResponseBody

Returns a list of evals

## Example Usage

```typescript
import { GetEvalsResponseBody } from "@orq-ai/node/models/operations";

let value: GetEvalsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      description: "ah boo tame ethyl without consequently",
      created: "2026-01-28T17:32:28.916Z",
      updated: "2026-01-28T17:32:28.916Z",
      type: "function_eval",
      functionParams: {
        type: "meteor_score",
      },
      key: "<key>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `object`                                                 | [operations.ObjectT](../../models/operations/objectt.md) | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | *operations.Data*[]                                      | :heavy_check_mark:                                       | N/A                                                      |
| `hasMore`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |