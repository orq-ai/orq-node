# RetrieveIdentityRequest

## Example Usage

```typescript
import { RetrieveIdentityRequest } from "@orq-ai/node/models/operations";

let value: RetrieveIdentityRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Identity ID to retrieve.                                                                                     |
| `includeMetrics`                                                                                             | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Include aggregate usage metrics on the returned identity.                                                    |
| `includeBudget`                                                                                              | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | When true, embed the identity-scoped budget (config and limits only,<br/> no live usage) on the returned record. |