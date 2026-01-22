# UserLocation

User location for search localization

## Example Usage

```typescript
import { UserLocation } from "@orq-ai/node/models/operations";

let value: UserLocation = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.CreateResponseToolsRouterResponsesRequestType](../../models/operations/createresponsetoolsrouterresponsesrequesttype.md) | :heavy_minus_sign:                                                                                                                   | The type of location                                                                                                                 |
| `city`                                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The city name                                                                                                                        |
| `country`                                                                                                                            | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The country code                                                                                                                     |
| `region`                                                                                                                             | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The region/state                                                                                                                     |
| `timezone`                                                                                                                           | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The timezone                                                                                                                         |