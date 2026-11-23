# CreateLiveSessionRequestBody

## Example Usage

```typescript
import { CreateLiveSessionRequestBody } from "@orq-ai/node/models/operations";

let value: CreateLiveSessionRequestBody = {
  session: {
    model: "Alpine",
  },
  transport: {
    sdp: "<value>",
    type: "webrtc",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `session`                                                    | [operations.Session](../../models/operations/session.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `transport`                                                  | [operations.Transport](../../models/operations/transport.md) | :heavy_check_mark:                                           | N/A                                                          |