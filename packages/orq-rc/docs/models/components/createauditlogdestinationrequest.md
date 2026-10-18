# CreateAuditLogDestinationRequest

## Example Usage

```typescript
import { CreateAuditLogDestinationRequest } from "@orq-ai/node/models/components";

let value: CreateAuditLogDestinationRequest = {
  displayName: "Adrianna42",
  url: "https://infinite-schnitzel.biz/",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `displayName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | Required. Human-readable destination name, unique within the workspace.    |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Optional. Description of the receiving system.                             |
| `url`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | Required. Absolute HTTPS URL. Private and loopback addresses are rejected. |