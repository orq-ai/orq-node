# PolicyUpdateResponseBody

Policy updated successfully

## Example Usage

```typescript
import { PolicyUpdateResponseBody } from "@orq-ai/node/models/operations";

let value: PolicyUpdateResponseBody = {
  id: "<id>",
  createdAt: new Date("2026-03-23T06:55:12.769Z"),
  createdById: "<id>",
  displayName: "Monty.Bartoletti94",
  enabled: false,
  projectId: "<id>",
  slug: "<value>",
  timeout: 934937,
  updatedAt: new Date("2026-12-03T16:19:22.371Z"),
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
| `retryConfig`                                                                                 | [components.PolicyRetryConfig](../../models/components/policyretryconfig.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timeout`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |