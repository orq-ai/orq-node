# CreateRouterResponseTools

A tool definition. The "type" field determines the tool kind.


## Supported Types

### `operations.ToolsFunction`

```typescript
const value: operations.ToolsFunction = {
  name: "<value>",
  type: "function",
};
```

### `operations.OpenAIToolSearch`

```typescript
const value: operations.OpenAIToolSearch = {
  type: "tool_search",
};
```

### `operations.OpenAIToolNamespace`

```typescript
const value: operations.OpenAIToolNamespace = {
  description: "inasmuch degenerate blah and lazily",
  name: "<value>",
  tools: [
    {
      name: "<value>",
      type: "custom",
    },
  ],
  type: "namespace",
};
```

### `operations.OpenAIMCPTool`

```typescript
const value: operations.OpenAIMCPTool = {
  serverLabel: "<value>",
  type: "mcp",
};
```

### `operations.ToolsCustom`

```typescript
const value: operations.ToolsCustom = {
  name: "<value>",
  type: "custom",
};
```

### `components.OrqAdvisorTool`

```typescript
const value: components.OrqAdvisorTool = {
  model: "XC90",
  type: "orq:advisor",
};
```

### `components.OrqSidekickTool`

```typescript
const value: components.OrqSidekickTool = {
  model: "Challenger",
  type: "orq:subagent",
};
```

### `operations.OrqAiTool`

```typescript
const value: operations.OrqAiTool = {
  type: "orq:http",
};
```

### `operations.MCPTool`

```typescript
const value: operations.MCPTool = {
  type: "mcp",
};
```

