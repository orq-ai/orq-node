# CreateDomainResponse

## Example Usage

```typescript
import { CreateDomainResponse } from "@orq-ai/node/models/components";

let value: CreateDomainResponse = {
  domain: {
    id: "<id>",
    domain: "silver-minor.biz",
    status: "DOMAIN_VERIFICATION_STATUS_PENDING",
    txtName: "<value>",
    txtValue: "<value>",
    createdAt: new Date("2025-06-13T16:20:04.957Z"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `domain`                                                                       | [components.DomainVerification](../../models/components/domainverification.md) | :heavy_check_mark:                                                             | N/A                                                                            |