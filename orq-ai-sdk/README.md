<p align="left">
  <a href="https://orq.ai" target="_blank">
    <img src="https://asset.brandfetch.io/idtBhDRr2x/idcrPsCm4K.png" alt="Orq">
  </a>
</p>

Build AI Applications from Playground to Production

# orq.ai Node SDK

The orq.ai Node library enables easy orq.ai REST API integration in NodeJS 16+ apps.

# Documentation

The REST API documentation can be found on [docs.orq.ai](https://docs.orq.ai/reference/authentication).

## Installation

```bash
npm install @orq-ai/node
```

```bash
yarn add @orq-ai/node
```

## Usage

_You can get your workspace API key from the settings section in your orq.ai workspace. `https://my.orq.ai/<workspace>/settings/developers`_

Initialize the orq.ai client with your API key:

```ts
import { createClient } from '@orq-ai/node';

const client = createClient({
  apiKey: 'orquesta-api-key',
  environment: 'production',
});

generation = await client.deployments.invoke(
  key: 'customer_service',
  context: { environments: 'production', country: 'NLD' },
  inputs: { firstname: 'John', city: 'New York' },
  metadata: { customer_id: 'Qwtqwty90281' },
);
```

## Deployments

The Deployments API delivers text outputs, images or tool calls based on the configuration established within orq.ai for your deployments. Additionally, this API supports streaming. To ensure ease of use and minimize errors, using the code snippets from the orq.ai Admin panel is highly recommended.

### Invoke a deployment

#### `invoke()`

```ts
const generation = await client.deployments.invoke({
  key: 'customer_service',
  context: { environments: 'production', country: 'NLD' },
  inputs: { firstname: 'John', city: 'New York' },
  metadata: { customer_id: 'Qwtqwty90281' },
});

console.log(generation?.choices[0].message.content);
```

#### `invoke_with_stream()`

```ts
const deployment = await client.deployments.invoke({
  key: 'customer_service',
  context: { environments: 'production', country: 'NLD' },
  inputs: { firstname: 'John', city: 'New York' },
  metadata: { customer_id: 'Qwtqwty90281' },
});

for await (const chunk of stream) {
  console.log(chunk.choices[0]?.message.content);
}
```

#### Adding messages as part of your request

If you are using the `invoke` method, you can include `messages` in your request to the model. The `messages` property
allows you to combine `chat_history` with the prompt configuration in Orq, or to directly send `messages` to the
model if you are managing the prompt in your code.

```ts
generation = await client.deployments.invoke(
  key: 'customer_service',
  context:{
    language: [],
    environments: [],
  },
  metadata: {
    'custom-field-name': 'custom-metadata-value',
  },
  inputs:{ firstname: 'John', city: 'New York' },
  messages: [
    {
      role: 'user',
      content:
        'A customer is asking about the latest software update features. Generate a detailed and informative response highlighting the key new features and improvements in the latest update.',
    },
  ]
);
```

#### Logging metrics to the deployment configuration

After invoking, streaming or getting the configuration of a deployment, you can use the `add_metrics` method to add information to the deployment.

```ts
generation.addMetrics({
  user_id: 'e3a202a6-461b-447c-abe2-018ba4d04cd0',
  feedback: { score: 100 },
  metadata: {
    custom: 'custom_metadata',
    chain_id: 'ad1231xsdaABw',
  },
});
```

### Get deployment configuration

#### `get_config()`

```ts
const deploymentPromptConfig = await client.deployments.getConfig({
  key: 'customer_service',
  context: { environments: 'production', country: 'NLD' },
  inputs: { firstname: 'John', city: 'New York' },
  metadata: { customer_id: 'Qwtqwty90281' },
});

console.log(deploymentPromptConfig);
```

#### Logging metrics to the deployment configuration

After invoking, streaming or getting the configuration of a deployment, you can use the `add_metrics` method to add information to the deployment.

```ts
deploymentPromptConfig.addMetrics({
  chain_id: 'c4a75b53-62fa-401b-8e97-493f3d299316',
  user_id: 'e3a202a6-461b-447c-abe2-018ba4d04cd0',
  feedback: { score: 100 },
  metadata: {
    custom: 'custom_metadata',
    chain_id: 'ad1231xsdaABw',
  },
  usage: {
    prompt_tokens: 100,
    completion_tokens: 900,
    total_tokens: 1000,
  },
  performance: {
    latency: 9000,
    time_to_first_token: 250,
  },
});
```

### Logging LLM responses

Whether you use the `get_config` or `invoke`, you can log the model generations to the deployment. Here are some
examples of how to do it.

#### Logging the completion choices the model generated for the input prompt

```ts
generation.addMetrics(
  choices:[
    {
      index: 0,
      finish_reason: 'assistant',
      message: {
        role: 'assistant',
        content:
          "Dear customer: Thank you for your interest in our latest software update! We're excited to share with you the new features and improvements we've rolled out. Here's what you can look forward to in this update",
      },
    },
  ]
);
```

#### Logging the completion choices the model generated for the input prompt

You can save the images generated by the model in Orq. If the image format is `base64` we always store it as
a `png`.

```ts
generation.addMetrics(
  choices: [
    {
      index: 0,
      finish_reason: 'stop',
      message: {
        role: 'assistant',
        url: '<image_url>',
      },
    },
  ]
);
```

#### Logging the output of the tool calls

```ts
generation.addMetrics(
  choices: [
    {
      index: 0,
      message: {
        role: 'assistant',
        content: None,
        tool_calls: [
          {
            type: 'function',
            id: 'call_pDBPMMacPXOtoWhTWibW1D94',
            function: {
              name: 'get_weather',
              arguments: '{"location":"San Francisco, CA"}',
            },
          },
        ],
      },
      finish_reason: 'tool_calls',
    },
  ]
);
```

### API documentation

[Feedback API](https://github.com/orquestadev/orquesta-node/blob/main/orq-ai-sdk/src/lib/api/feedback/README.md)
