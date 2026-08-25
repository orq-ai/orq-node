# IPAllowlist

## Example Usage

```typescript
import { IPAllowlist } from "@orq-ai/node/models/components";

let value: IPAllowlist = {
  enabled: false,
  ranges: [
    {
      id: "<id>",
      cidr: "<value>",
      description:
        "golden anti weakly embody optimistically separately soulful",
      createdAt: new Date("2024-05-05T21:28:06.484Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `enabled`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `ranges`                                                   | [components.IPRange](../../models/components/iprange.md)[] | :heavy_check_mark:                                         | N/A                                                        |