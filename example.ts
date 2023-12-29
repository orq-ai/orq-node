import { createClient } from './orquesta-sdk/src';
import { isContentChoice } from './orquesta-sdk/src/lib/utils';

// Initiate the client with the Orquesta API key:
const client = createClient({
  apiKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VJZCI6ImUzYTIwMmE2LTQ2MWItNDQ3Yy1hYmUyLTAxOGJhNGQwNGNkMCIsImlhdCI6MTY5NzEyNTQ1NDczN30.3kBW_RfS104S2DAlSvPpr3tQiq15nTxNuUv2gE0Nxd0',
  environment: 'develop',
});

export async function getDeploymentConfig() {
  const deployment = await client.deployments.invoke({
    key: 'customer_service',
    context: { environments: 'production', country: 'NLD' },
    inputs: { firstname: 'John', city: 'New York' },
    metadata: { customer_id: 'Qwtqwty90281' },
  });

  if (deployment && isContentChoice(deployment.choices[0].message)) {
    console.log(deployment.choices[0].message.content);
  }
}

// export async function getDeploymentConfig() {
//   const stream = client.deployments.invokeWithStream({
//     key: 'withFallback',
//   });

//   for await (const chunk of stream) {
//     console.log(chunk['id']);
//   }
// }

getDeploymentConfig();
