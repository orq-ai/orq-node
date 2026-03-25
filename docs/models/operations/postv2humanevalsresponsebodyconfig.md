# PostV2HumanEvalsResponseBodyConfig

The configuration for a range human review

## Example Usage

```typescript
import { PostV2HumanEvalsResponseBodyConfig } from "@orq-ai/node/models/operations";

let value: PostV2HumanEvalsResponseBodyConfig = {
  min: 19607,
  max: 760906,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `min`                           | *number*                        | :heavy_check_mark:              | The minimum value for the range |
| `max`                           | *number*                        | :heavy_check_mark:              | The maximum value for the range |