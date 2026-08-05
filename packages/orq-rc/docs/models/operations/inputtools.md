# InputTools

## Example Usage

```typescript
import { InputTools } from "@orq-ai/node/models/operations";

let value: InputTools = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemInputAnnotationQueuesResponse200ApplicationJSONResponseBodyType](../../models/operations/retrieveannotationqueueiteminputannotationqueuesresponse200applicationjsonresponsebodytype.md) | :heavy_minus_sign:                                                                                                                                                                                                             | The type of the tool. Currently, only function is supported.                                                                                                                                                                   |
| `function`                                                                                                                                                                                                                     | [operations.InputFunction](../../models/operations/inputfunction.md)                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |