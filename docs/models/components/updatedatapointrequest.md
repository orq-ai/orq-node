# UpdateDatapointRequest

## Example Usage

```typescript
import { UpdateDatapointRequest } from "@orq-ai/node/models/components";

let value: UpdateDatapointRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `inputs`                                               | Record<string, *any*>                                  | :heavy_minus_sign:                                     | Structured variables passed to the prompt or workflow. |
| `messages`                                             | *any*[]                                                | :heavy_minus_sign:                                     | A JSON array containing dynamically typed values.      |
| `expectedOutput`                                       | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |