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
      created: "2026-05-02T11:03:54.377Z",
      updated: "2026-05-02T11:03:54.377Z",
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