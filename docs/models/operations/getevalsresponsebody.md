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
      created: "2025-07-03T19:12:13.169Z",
      updated: "2025-07-03T19:12:13.169Z",
      type: "function_eval",
      functionParams: {
        type: "moderations_openai",
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