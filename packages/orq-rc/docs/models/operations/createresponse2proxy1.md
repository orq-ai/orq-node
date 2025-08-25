# CreateResponse2Proxy1

A text input content part

## Example Usage

```typescript
import { CreateResponse2Proxy1 } from "@orq-ai/node/models/operations";

let value: CreateResponse2Proxy1 = {
  type: "input_text",
  text: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [operations.CreateResponse2Type](../../models/operations/createresponse2type.md) | :heavy_check_mark:                                                               | The type of input content                                                        |
| `text`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | The text content                                                                 |