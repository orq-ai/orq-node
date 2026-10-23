# TwoText

A text content part.

## Example Usage

```typescript
import { TwoText } from "@orq-ai/node/models/operations";

let value: TwoText = {
  text: "<value>",
  type: "input_text",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `cacheControl`                                                                                               | [operations.CreateRouterResponse2CacheControl](../../models/operations/createrouterresponse2cachecontrol.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `text`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The text content.                                                                                            |
| `type`                                                                                                       | *"input_text"*                                                                                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |