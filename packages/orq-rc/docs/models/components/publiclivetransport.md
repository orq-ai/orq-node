# PublicLiveTransport

## Example Usage

```typescript
import { PublicLiveTransport } from "@orq-ai/node/models/components";

let value: PublicLiveTransport = {
  sdp: "<value>",
  type: "webrtc",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `sdp`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | SDP answer to apply as the remote description.                                           |
| `type`                                                                                   | [components.PublicLiveTransportType](../../models/components/publiclivetransporttype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |