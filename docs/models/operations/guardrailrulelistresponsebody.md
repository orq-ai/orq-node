# GuardrailRuleListResponseBody

Guardrail rules retrieved successfully

## Example Usage

```typescript
import { GuardrailRuleListResponseBody } from "@orq-ai/node/models/operations";

let value: GuardrailRuleListResponseBody = {
  data: [
    {
      id: "<id>",
      createdAt: new Date("2024-12-31T10:26:12.254Z"),
      createdById: "<id>",
      displayName: "Delmer41",
      enabled: false,
      projectId: "<id>",
      updatedAt: new Date("2025-08-20T12:02:43.988Z"),
      updatedById: "<id>",
    },
  ],
  hasMore: false,
  object: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [components.GuardrailRule](../../models/components/guardrailrule.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `object`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |