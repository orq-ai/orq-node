# DeploymentGetLogsEvalsEvals


## Supported Types

### `operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBody1`

```typescript
const value:
  operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBody1 =
    {
      type: "string",
      id: "<id>",
      status: "failed",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "account",
          accountId: "03320b27-156e-4be7-9269-8e94f27eb8b7",
        },
      ],
      evaluatorType: "input_guardrail",
    };
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBody2`

```typescript
const value:
  operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBody2 =
    {
      type: "number",
      value: 7370.08,
      id: "<id>",
      status: "failed",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "<id>",
        },
      ],
      evaluatorType: "output_guardrail",
    };
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBody3`

```typescript
const value:
  operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBody3 =
    {
      type: "boolean",
      value: false,
      id: "<id>",
      status: "failed",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "account",
          accountId: "1aafc699-c96a-4351-ad14-e83fe13a382a",
        },
      ],
      evaluatorType: "output_guardrail",
    };
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBody4`

```typescript
const value:
  operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBody4 =
    {
      type: "string_array",
      values: [
        "<value>",
      ],
      id: "<id>",
      status: "pending",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "human_eval",
          humanEvalId: "<id>",
        },
      ],
      evaluatorType: "output_evaluator",
    };
```

