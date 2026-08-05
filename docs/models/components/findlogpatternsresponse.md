# FindLogPatternsResponse

## Example Usage

```typescript
import { FindLogPatternsResponse } from "@orq-ai/node/models/components";

let value: FindLogPatternsResponse = {
  object: "<value>",
  data: [],
  meta: {
    requestId: "<id>",
    from: new Date("2026-04-02T18:32:34.435Z"),
    to: new Date("2024-07-11T16:29:58.717Z"),
    totalCount: "<value>",
    sampledCount: "<value>",
    truncated: true,
    warnings: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `object`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Object discriminator; always "list".                                             |
| `data`                                                                           | [components.LogPattern](../../models/components/logpattern.md)[]                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `meta`                                                                           | [components.FindLogPatternsMeta](../../models/components/findlogpatternsmeta.md) | :heavy_check_mark:                                                               | N/A                                                                              |