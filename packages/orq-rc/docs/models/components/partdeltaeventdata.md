# PartDeltaEventData

## Example Usage

```typescript
import { PartDeltaEventData } from "@orq-ai/node/models/components";

let value: PartDeltaEventData = {
  partId: "text_01hxyz123abc",
  delta: {
    kind: "file",
    file: {
      uri: "https://narrow-rim.info/",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `partId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier for this part. Format: {kind}_{ulid}. Use to correlate with part.done event. | text_01hxyz123abc                                                                              |
| `delta`                                                                                        | *components.PartDelta*                                                                         | :heavy_check_mark:                                                                             | The content chunk being streamed. Discriminated by kind field (text or reasoning).             |                                                                                                |