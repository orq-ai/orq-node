# UpdateSmartRouterRequest

## Example Usage

```typescript
import { UpdateSmartRouterRequest } from "@orq-ai/node/models/components";

let value: UpdateSmartRouterRequest = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `models`                                                                                                                      | *string*[]                                                                                                                    | :heavy_minus_sign:                                                                                                            | Replacement pool of 2 to 50 distinct eligible models. Each value uses `provider/model` format. Omit to keep the current pool. |
| `profile`                                                                                                                     | [components.SmartRouterProfile](../../models/components/smartrouterprofile.md)                                                | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |