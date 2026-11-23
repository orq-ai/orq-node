# ResourceCatalog

Get returns the shared catalog. Sync returns the caller's catalog for user-specific credentials or discovery variables. List omits this field.

## Example Usage

```typescript
import { ResourceCatalog } from "@orq-ai/node/models/components";

let value: ResourceCatalog = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `resources`                                                                        | [components.McpResource](../../models/components/mcpresource.md)[]                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `resourceTemplates`                                                                | [components.McpResourceTemplate](../../models/components/mcpresourcetemplate.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `resourcesStatus`                                                                  | [components.McpDiscoveryStatus](../../models/components/mcpdiscoverystatus.md)     | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `resourceTemplatesStatus`                                                          | [components.McpDiscoveryStatus](../../models/components/mcpdiscoverystatus.md)     | :heavy_minus_sign:                                                                 | N/A                                                                                |