# NotifierListRequest

## Example Usage

```typescript
import { NotifierListRequest } from "@orq-ai/node/models/operations";

let value: NotifierListRequest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `limit`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | Optional. Number of notifiers to return. Defaults to 25 and must be between 1 and 200.     |
| `startingAfter`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | Cursor for forward pagination. Set to the `_id` of the last item from the previous page.   |
| `endingBefore`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | Cursor for backward pagination. Set to the `_id` of the first item from the previous page. |
| `projectId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | Restrict results to one project. Must be a project the caller is authorized for.           |
| `search`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | Optional. Case-insensitive substring match on the notifier name.                           |
| `type`                                                                                     | [components.NotifierType](../../models/components/notifiertype.md)[]                       | :heavy_minus_sign:                                                                         | Optional. Restrict results to these notifier types.                                        |