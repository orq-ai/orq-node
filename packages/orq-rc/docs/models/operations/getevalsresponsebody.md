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
      created: "2025-11-27T14:02:13.857Z",
      updated: "2025-11-27T14:02:13.857Z",
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `object`                                                               | [operations.GetEvalsObject](../../models/operations/getevalsobject.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | *operations.GetEvalsData*[]                                            | :heavy_check_mark:                                                     | N/A                                                                    |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |