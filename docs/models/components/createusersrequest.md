# CreateUsersRequest

## Example Usage

```typescript
import { CreateUsersRequest } from "@orq-ai/node/models/components";

let value: CreateUsersRequest = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `emails`                                                                                                                          | *string*[]                                                                                                                        | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `roles`                                                                                                                           | *string*[]                                                                                                                        | :heavy_minus_sign:                                                                                                                | One effective workspace role is required. The first entry is retained for<br/> wire compatibility with the legacy invitation payload. |