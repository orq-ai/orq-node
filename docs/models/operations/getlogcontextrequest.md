# GetLogContextRequest

## Example Usage

```typescript
import { GetLogContextRequest } from "@orq-ai/node/models/operations";

let value: GetLogContextRequest = {
  id: "<id>",
  getLogContextRequest: {
    from: new Date("2025-06-06T17:58:03.771Z"),
    to: new Date("2026-10-18T10:18:54.852Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `getLogContextRequest`                                                             | [components.GetLogContextRequest](../../models/components/getlogcontextrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |