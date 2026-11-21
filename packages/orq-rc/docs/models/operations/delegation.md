# Delegation

## Example Usage

```typescript
import { Delegation } from "@orq-ai/node/models/operations";

let value: Delegation = {
  type: "client",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [operations.CreateLiveSessionType](../../models/operations/createlivesessiontype.md) | :heavy_check_mark:                                                                   | Delegate work to the calling application.                                            |
| `additionalProperties`                                                               | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |