# ModelProvider

## Example Usage

```typescript
import { ModelProvider } from "@orq-ai/node/models/components";

let value: ModelProvider = {
  id: "<id>",
  logo: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | Catalog provider key (openai, anthropic, aws, ...).             |
| `logo`                                                          | *string*                                                        | :heavy_check_mark:                                              | Absolute URL of the provider logo. Empty when no logo is known. |