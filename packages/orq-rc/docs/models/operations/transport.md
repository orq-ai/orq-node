# Transport

## Example Usage

```typescript
import { Transport } from "@orq-ai/node/models/operations";

let value: Transport = {
  sdp: "<value>",
  type: "webrtc",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `sdp`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | SDP offer from the WebRTC peer connection.                                                                 |
| `type`                                                                                                     | [operations.CreateLiveSessionLiveRequestType](../../models/operations/createlivesessionliverequesttype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |