# Live

## Overview

### Available Operations

* [createSession](#createsession) - Create a Live WebRTC session

## createSession

Exchanges a WebRTC SDP offer for an answer and starts a GPT-Live session. Apply the returned answer to the peer connection and send Live events over the data channel. Requires an API key with `realtime.execute`.

Voice usage is billed by the second at the active or standby rate. Set `wake_policy.type` to `speech` to start inference on speech. Set `idle_timeout_s` to return the session to standby after inactivity. Use client delegation to run backend work in your application.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-live-session" method="post" path="/v3/router/live/sessions" example="standby" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.live.createSession({
    session: {
      idleTimeoutS: 15,
      model: "openai/gpt-live-1.1",
      wakePolicy: {
        type: "speech",
      },
    },
    transport: {
      sdp: "<SDP offer>",
      type: "webrtc",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { liveCreateSession } from "@orq-ai/node/funcs/liveCreateSession.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await liveCreateSession(orq, {
    session: {
      idleTimeoutS: 15,
      model: "openai/gpt-live-1.1",
      wakePolicy: {
        type: "speech",
      },
    },
    transport: {
      sdp: "<SDP offer>",
      type: "webrtc",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("liveCreateSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLiveSessionRequestBody](../../models/operations/createlivesessionrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateLiveSessionResponseBody](../../models/operations/createlivesessionresponsebody.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.CreateLiveSessionResponseBody                | 400                                                 | application/json                                    |
| errors.CreateLiveSessionLiveResponseBody            | 401                                                 | application/json                                    |
| errors.CreateLiveSessionLiveResponseResponseBody    | 402                                                 | application/json                                    |
| errors.CreateLiveSessionLiveResponse403ResponseBody | 403                                                 | application/json                                    |
| errors.CreateLiveSessionLiveResponse404ResponseBody | 404                                                 | application/json                                    |
| errors.CreateLiveSessionLiveResponse429ResponseBody | 429                                                 | application/json                                    |
| errors.CreateLiveSessionLiveResponse502ResponseBody | 502                                                 | application/json                                    |
| errors.CreateLiveSessionLiveResponse503ResponseBody | 503                                                 | application/json                                    |
| errors.APIError                                     | 4XX, 5XX                                            | \*/\*                                               |