# RefusalContentPart

## Example Usage

```typescript
import { RefusalContentPart } from "@orq-ai/node/models/components";

let value: RefusalContentPart = {
  type: "refusal",
  refusal: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.Deployments2PrefixMessages4ContentType](../../models/components/deployments2prefixmessages4contenttype.md) | :heavy_check_mark:                                                                                                     | The type of the content part.                                                                                          |
| `refusal`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The refusal message generated by the model.                                                                            |