# AggregateBucket

## Example Usage

```typescript
import { AggregateBucket } from "@orq-ai/node/models/components";

let value: AggregateBucket = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `severityCounts`                                                                              | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | severity_number → count                                                                       |
| `totalCount`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |