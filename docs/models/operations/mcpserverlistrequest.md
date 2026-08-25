# McpServerListRequest

## Example Usage

```typescript
import { McpServerListRequest } from "@orq-ai/node/models/operations";

let value: McpServerListRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `limit`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | Page size between 1 and 200. Defaults to 25.                                            |
| `startingAfter`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | Cursor for the page after the given item id. Mutually exclusive with `ending_before`.   |
| `endingBefore`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | Cursor for the page before the given item id. Mutually exclusive with `starting_after`. |
| `search`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | Case-insensitive match against the server key and display name.                         |