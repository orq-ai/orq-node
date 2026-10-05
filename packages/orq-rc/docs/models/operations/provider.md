# Provider

Provider to run this search. Exa uses auto, Linkup uses standard depth, and Tavily uses basic depth. Workspace credentials are selected automatically for this provider.

## Example Usage

```typescript
import { Provider } from "@orq-ai/node/models/operations";

let value: Provider = "exa";
```

## Values

```typescript
"exa" | "ceramic" | "linkup" | "tavily" | "serper"
```