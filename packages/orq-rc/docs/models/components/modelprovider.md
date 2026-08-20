# ModelProvider

## Example Usage

```typescript
import { ModelProvider } from "@orq-ai/node/models/components";

let value: ModelProvider = {
  id: "<id>",
  name: "<value>",
  logo: "<value>",
  docsUrl: "https://grubby-overheard.com",
  pricingUrl: "https://skeletal-receptor.biz/",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | Catalog provider key (openai, anthropic, aws, ...).             |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | Provider display name.                                          |
| `logo`                                                          | *string*                                                        | :heavy_check_mark:                                              | Absolute URL of the provider logo. Empty when no logo is known. |
| `docsUrl`                                                       | *string*                                                        | :heavy_check_mark:                                              | Provider documentation URL.                                     |
| `pricingUrl`                                                    | *string*                                                        | :heavy_check_mark:                                              | Provider pricing page URL.                                      |