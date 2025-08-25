# PostV2ProxyModerationsResponseBody

Returns moderation classification results

## Example Usage

```typescript
import { PostV2ProxyModerationsResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyModerationsResponseBody = {
  id: "<id>",
  model: "Expedition",
  results: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | The unique identifier for the moderation request           |
| `model`                                                    | *string*                                                   | :heavy_check_mark:                                         | The model used to generate the moderation results          |
| `results`                                                  | [operations.Results](../../models/operations/results.md)[] | :heavy_check_mark:                                         | A list of moderation objects                               |