/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { datasetsCreateDatapoints } from "../../funcs/datasetsCreateDatapoints.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.BulkCreateDatapointsRequest$inboundSchema,
};

export const tool$datasetsCreateDatapoints: ToolDefinition<typeof args> = {
  name: "datasets_create-datapoints",
  description: `Create multiple datapoints

Create multiple datapoints at once.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await datasetsCreateDatapoints(
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
