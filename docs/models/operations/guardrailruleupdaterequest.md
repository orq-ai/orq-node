# GuardrailRuleUpdateRequest

## Example Usage

```typescript
import { GuardrailRuleUpdateRequest } from "@orq-ai/node/models/operations";

let value: GuardrailRuleUpdateRequest = {
  guardrailRuleId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `guardrailRuleId`                                                                                      | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the guardrail rule                                                                           |
| `requestBody`                                                                                          | [operations.GuardrailRuleUpdateRequestBody](../../models/operations/guardrailruleupdaterequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |