# GuardrailRuleGuardrail

## Example Usage

```typescript
import { GuardrailRuleGuardrail } from "@orq-ai/node/models/components";

let value: GuardrailRuleGuardrail = {
  id: "<id>",
  executeOn: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `executeOn`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `sampleRate`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `isGuardrail`                                            | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `options`                                                | [components.Options](../../models/components/options.md) | :heavy_minus_sign:                                       | N/A                                                      |