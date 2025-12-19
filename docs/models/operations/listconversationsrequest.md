# ListConversationsRequest

## Example Usage

```typescript
import { ListConversationsRequest } from "@orq-ai/node/models/operations";

let value: ListConversationsRequest = {
  limit: 10,
  startingAfter: "conv_01jj1hdhn79xas7a01wb3hysdb",
  endingBefore: "conv_01jj1hdhn79xas7a01wb3hysdb",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. | 10                                                                                                         |
| `startingAfter`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A cursor for use in pagination. `startingAfter` is a conversation ID that defines your place in the list.  | conv_01jj1hdhn79xas7a01wb3hysdb                                                                            |
| `endingBefore`                                                                                             | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A cursor for use in pagination. `endingBefore` is a conversation ID that defines your place in the list.   | conv_01jj1hdhn79xas7a01wb3hysdb                                                                            |