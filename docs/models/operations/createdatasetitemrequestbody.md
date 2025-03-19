# CreateDatasetItemRequestBody

## Example Usage

```typescript
import { CreateDatasetItemRequestBody } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemRequestBody = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputs`                                                                                                                                       | Record<string, *any*>                                                                                                                          | :heavy_minus_sign:                                                                                                                             | The inputs of the dataset. Key value pairs where the key is the input name and the value is the input value. Nested objects are not supported. |
| `messages`                                                                                                                                     | [operations.CreateDatasetItemMessages](../../models/operations/createdatasetitemmessages.md)[]                                                 | :heavy_minus_sign:                                                                                                                             | The prompt template messages                                                                                                                   |
| `expectedOutput`                                                                                                                               | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |