# ExperimentListRequest

## Example Usage

```typescript
import { ExperimentListRequest } from "@orq-ai/node/models/operations";

let value: ExperimentListRequest = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `limit`                                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Page size, 1 to 200. Defaults to 25.                                                                  |
| `startingAfter`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Cursor for forward pagination. Set to the `experiment_id` of the last item<br/> from the previous page. |
| `endingBefore`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Cursor for backward pagination. Set to the `experiment_id` of the first<br/> item from the previous page. |
| `projectId`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Restrict results to one project. Omit to list every project the caller<br/> can access.               |