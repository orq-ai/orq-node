# Config

The configuration for a range human review

## Example Usage

```typescript
import { Config } from "@orq-ai/node/models/operations";

let value: Config = {
  min: 988952,
  max: 646657,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `min`                           | *number*                        | :heavy_check_mark:              | The minimum value for the range |
| `max`                           | *number*                        | :heavy_check_mark:              | The maximum value for the range |