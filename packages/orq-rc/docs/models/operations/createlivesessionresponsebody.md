# CreateLiveSessionResponseBody

Returns the session ID and the WebRTC SDP answer.

## Example Usage

```typescript
import { CreateLiveSessionResponseBody } from "@orq-ai/node/models/operations";

let value: CreateLiveSessionResponseBody = {
  session: {
    id: "<id>",
  },
  transport: {
    sdp: "<value>",
    type: "webrtc",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `session`                                                                                  | [operations.CreateLiveSessionSession](../../models/operations/createlivesessionsession.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `transport`                                                                                | [components.PublicLiveTransport](../../models/components/publiclivetransport.md)           | :heavy_check_mark:                                                                         | N/A                                                                                        |