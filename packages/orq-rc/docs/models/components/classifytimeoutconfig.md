# ClassifyTimeoutConfig

## Example Usage

```typescript
import { ClassifyTimeoutConfig } from "@orq-ai/node/models/components";

let value: ClassifyTimeoutConfig = {
  callTimeout: 815851,
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `callTimeout`                                                                                                                                    | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Timeout in milliseconds for each model call. Set 2000 for two seconds. When retry is configured, timeout errors (408) are automatically retried. |