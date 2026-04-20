# Policy

## Example Usage

```typescript
import { Policy } from "@orq-ai/node/models/components";

let value: Policy = {
  id: "<id>",
  createdAt: new Date("2026-07-19T17:15:54.845Z"),
  createdById: "<id>",
  displayName: "Emelia5",
  enabled: true,
  projectId: "<id>",
  slug: "<value>",
  timeout: 19105,
  updatedAt: new Date("2026-04-25T06:56:56.476Z"),
  updatedById: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evaluators`                                                                                  | [components.EvaluatorRef](../../models/components/evaluatorref.md)[]                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limits`                                                                                      | [components.Limits](../../models/components/limits.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `modelsConfig`                                                                                | [components.ModelsConfig](../../models/components/modelsconfig.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `retryConfig`                                                                                 | [components.RetryConfig](../../models/components/retryconfig.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timeout`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |