# CreateGuardrailRuleResponse

## Example Usage

```typescript
import { CreateGuardrailRuleResponse } from "@orq-ai/node/models/components";

let value: CreateGuardrailRuleResponse = {
  guardrailRule: {
    id: "<id>",
    createdAt: new Date("2024-03-11T12:47:09.507Z"),
    updatedAt: new Date("2025-03-09T12:53:07.405Z"),
    createdById: "<id>",
    updatedById: "<id>",
    projectId: "<id>",
    displayName: "Magali_Tillman55",
    description:
      "astonishing following ponder vastly meanwhile scent aside pfft",
    enabled: true,
    guardrails: [
      {
        id: "<id>",
        executeOn: "<value>",
      },
    ],
    plugins: [
      {},
    ],
    timeout: 894636,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `guardrailRule`                                                      | [components.GuardrailRule](../../models/components/guardrailrule.md) | :heavy_check_mark:                                                   | N/A                                                                  |