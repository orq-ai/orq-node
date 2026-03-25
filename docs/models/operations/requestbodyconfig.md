# RequestBodyConfig

The configuration for a range human review

## Example Usage

```typescript
import { RequestBodyConfig } from "@orq-ai/node/models/operations";

let value: RequestBodyConfig = {
  min: 695934,
  max: 976835,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `min`                           | *number*                        | :heavy_check_mark:              | The minimum value for the range |
| `max`                           | *number*                        | :heavy_check_mark:              | The maximum value for the range |