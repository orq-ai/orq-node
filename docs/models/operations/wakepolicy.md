# WakePolicy

## Example Usage

```typescript
import { WakePolicy } from "@orq-ai/node/models/operations";

let value: WakePolicy = {
  type: "speech",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [operations.CreateLiveSessionLiveType](../../models/operations/createlivesessionlivetype.md) | :heavy_check_mark:                                                                           | Wait for speech before starting inference.                                                   |
| `vadThreshold`                                                                               | *number*                                                                                     | :heavy_minus_sign:                                                                           | Evidence of speech required to wake from standby.                                            |