# ModelConfigurationTimeout

Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.

## Example Usage

```typescript
import { ModelConfigurationTimeout } from "@orq-ai/node/models/operations";

let value: ModelConfigurationTimeout = {
  callTimeout: 30000,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `callTimeout`                 | *number*                      | :heavy_check_mark:            | Timeout value in milliseconds | 30000                         |