# Webhooks

### Webhook validation

> [!WARNING]  
> We do require the raw body of the request to perform signature verification. If you are using a framework, make sure
> it doesn't manipulate the raw body. Any manipulation to the raw body of the request causes the verification fail.

```ts
import express, { Request, Response } from 'express';
import { WebhookEvent, WebhookEventType } from '@orq-ai/node';

const app = express();
const port = 3000;

const webhookSecret = 'orq_wk_...';

app.post('/webhooks', (req: Request, res: Response) => {
  const signature = req.headers['x-orq-signature'] as string;
  const rawBody = req.body;

  let event: WebhookEvent;

  try {
    const requestBody = JSON.parse(rawBody.toString());

    event = client.webhooks.constructEvent(
      requestBody,
      signature,
      webhookSecret
    );

    switch (event.type) {
      case WebhookEventType.DeploymentInvoked:
        console.log('Deployment invoked:', event.data);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Error validating webhook event:', e);
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```
