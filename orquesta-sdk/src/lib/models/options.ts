/**
 * Options for configuring the Orquesta client.
 *
 * @type
 * @property {string} apiKey - The API key for authenticating requests. This is a required field.
 * @property {string} [environment] - The environment the client is interacting with, e.g., 'production' or 'development'.
 *                                    This field is optional.
 */
export type OrquestaClientOptions = {
  apiKey: string;
  environment?: string;
};
