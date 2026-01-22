# CreateModerationResponseBody

Returns moderation classification results

## Example Usage

```typescript
import { CreateModerationResponseBody } from "@orq-ai/node/models/operations";

let value: CreateModerationResponseBody = {
  id: "<id>",
  model: "Grand Cherokee",
  results: [],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The unique identifier for the moderation request  |
| `model`                                           | *string*                                          | :heavy_check_mark:                                | The model used to generate the moderation results |
| `results`                                         | *operations.Results*[]                            | :heavy_check_mark:                                | A list of moderation objects                      |