# PolicyUpdateRequest

## Example Usage

```typescript
import { PolicyUpdateRequest } from "@orq-ai/node/models/operations";

let value: PolicyUpdateRequest = {
  policyId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `policyId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the policy                                                                     |
| `requestBody`                                                                            | [operations.PolicyUpdateRequestBody](../../models/operations/policyupdaterequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |