# FindLogPatternsMeta

## Example Usage

```typescript
import { FindLogPatternsMeta } from "@orq-ai/node/models/components";

let value: FindLogPatternsMeta = {
  requestId: "<id>",
  from: new Date("2026-10-14T18:33:18.447Z"),
  to: new Date("2026-02-20T06:49:53.077Z"),
  totalCount: "<value>",
  sampledCount: "<value>",
  truncated: true,
  warnings: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalCount`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Exact number of records matching the request before bounded sampling.                         |
| `sampledCount`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `truncated`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warnings`                                                                                    | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |