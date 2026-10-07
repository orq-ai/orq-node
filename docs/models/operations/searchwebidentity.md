# SearchWebIdentity

Customer or end-user identity for attributing this search and its usage.

## Example Usage

```typescript
import { SearchWebIdentity } from "@orq-ai/node/models/operations";

let value: SearchWebIdentity = {
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Customer or end-user identifier used consistently across API requests. |