# ListResponseInputItemsResponseBody

Input items retrieved successfully.

## Example Usage

```typescript
import { ListResponseInputItemsResponseBody } from "@orq-ai/node/models/operations";

let value: ListResponseInputItemsResponseBody = {
  data: [
    "<value 1>",
  ],
  firstId: "<id>",
  hasMore: true,
  lastId: "<id>",
  object: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | *any*[]                                                        | :heavy_check_mark:                                             | Input items on the current page.                               |
| `firstId`                                                      | *string*                                                       | :heavy_check_mark:                                             | ID of the first item on the page. Null when the page is empty. |
| `hasMore`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | Whether further items exist beyond this page.                  |
| `lastId`                                                       | *string*                                                       | :heavy_check_mark:                                             | ID of the last item on the page. Null when the page is empty.  |
| `object`                                                       | *string*                                                       | :heavy_check_mark:                                             | Object type, always list.                                      |