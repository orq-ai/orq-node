# McpOpenApiConfigInput

## Example Usage

```typescript
import { McpOpenApiConfigInput } from "@orq-ai/node/models/components";

let value: McpOpenApiConfigInput = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `document`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | OpenAPI 3.x document as JSON or YAML; accepted on write and never stored or returned. |
| `documentUrl`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | URL the document is fetched from; `:sync` fetches it again.                           |
| `operations`                                                                          | *string*[]                                                                            | :heavy_minus_sign:                                                                    | Tool names of the operations to expose; empty exposes every operation.                |