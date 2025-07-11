/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { evalsRagasFaithfulness } from "../../funcs/evalsRagasFaithfulness.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.EvalsRagasFaithfulnessRequestBody$inboundSchema
    .optional(),
};

export const tool$evalsRagasFaithfulness: ToolDefinition<typeof args> = {
  name: "evals-ragas-faithfulness",
  description: `Run Faithfulness Evaluator`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await evalsRagasFaithfulness(
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
