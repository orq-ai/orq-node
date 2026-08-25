# ListGuardrailRulesResponse

## Example Usage

```typescript
import { ListGuardrailRulesResponse } from "@orq-ai/node/models/components";

let value: ListGuardrailRulesResponse = {
  object: "<value>",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `object`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.GuardrailRule](../../models/components/guardrailrule.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |