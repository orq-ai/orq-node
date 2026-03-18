# ResponseBodyConfig

The configuration for a range human review

## Example Usage

```typescript
import { ResponseBodyConfig } from "@orq-ai/node/models/operations";

let value: ResponseBodyConfig = {
  min: 877889,
  max: 32534,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `min`                           | *number*                        | :heavy_check_mark:              | The minimum value for the range |
| `max`                           | *number*                        | :heavy_check_mark:              | The maximum value for the range |