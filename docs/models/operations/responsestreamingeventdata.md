# ResponseStreamingEventData

## Example Usage

```typescript
import { ResponseStreamingEventData } from "@orq-ai/node/models/operations";

let value: ResponseStreamingEventData = {
  partId: "text_01hxyz123abc",
  delta: {
    kind: "file",
    file: {
      bytes: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `partId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier for this part. Format: {kind}_{ulid}. Use to correlate with part.done event. | text_01hxyz123abc                                                                              |
| `delta`                                                                                        | *any*                                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |