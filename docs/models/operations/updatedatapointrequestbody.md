# UpdateDatapointRequestBody

## Example Usage

```typescript
import { UpdateDatapointRequestBody } from "@orq-ai/node/models/operations";

let value: UpdateDatapointRequestBody = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputs`                                                                                                                                       | Record<string, *any*>                                                                                                                          | :heavy_minus_sign:                                                                                                                             | The inputs of the dataset. Key value pairs where the key is the input name and the value is the input value. Nested objects are not supported. |
| `messages`                                                                                                                                     | *operations.UpdateDatapointMessages*[]                                                                                                         | :heavy_minus_sign:                                                                                                                             | A list of messages comprising the conversation so far                                                                                          |
| `expectedOutput`                                                                                                                               | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |