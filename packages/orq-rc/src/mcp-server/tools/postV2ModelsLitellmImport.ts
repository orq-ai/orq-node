/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { postV2ModelsLitellmImport } from "../../funcs/postV2ModelsLitellmImport.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: z.array(operations.RequestBody$inboundSchema).optional(),
};

export const tool$postV2ModelsLitellmImport: ToolDefinition<typeof args> = {
  name: "post-v2-models-litellm-import",
  description: `Import models from LiteLLM

Imports selected models from LiteLLM instance into the model garden`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await postV2ModelsLitellmImport(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
