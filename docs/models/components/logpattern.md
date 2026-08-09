# LogPattern

## Example Usage

```typescript
import { LogPattern } from "@orq-ai/node/models/components";

let value: LogPattern = {
  id: "<id>",
  template: "<value>",
  count: "<value>",
  percentage: 3832.82,
  firstSeen: new Date("2026-10-10T09:51:03.040Z"),
  lastSeen: new Date("2026-02-12T06:21:07.118Z"),
  sampleLogIds: [
    "<value 1>",
    "<value 2>",
  ],
  severitySummary: [
    {},
  ],
  serviceSummary: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Stable hash of the normalized template.                                                                                       |
| `template`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `count`                                                                                                                       | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Number of sampled records assigned to this pattern. This is exact when<br/> meta.truncated is false.                          |
| `percentage`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | Percentage of sampled records assigned to this pattern, from 0 to 100.                                                        |
| `firstSeen`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `lastSeen`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `sampleLogIds`                                                                                                                | *string*[]                                                                                                                    | :heavy_check_mark:                                                                                                            | A bounded set of example record identifiers; raw bodies are not repeated.                                                     |
| `severitySummary`                                                                                                             | [components.FacetValue](../../models/components/facetvalue.md)[]                                                              | :heavy_check_mark:                                                                                                            | Top severity and service values observed inside this pattern.                                                                 |
| `serviceSummary`                                                                                                              | [components.FacetValue](../../models/components/facetvalue.md)[]                                                              | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `suggestedQuery`                                                                                                              | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Bounded literal fragment that can be sent through SearchLogs to find<br/> representative raw records for this normalized pattern. |