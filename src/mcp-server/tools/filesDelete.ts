/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesDelete } from "../../funcs/filesDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FileDeleteRequest$inboundSchema,
};

export const tool$filesDelete: ToolDefinition<typeof args> = {
  name: "files-delete",
  description: `Delete file`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await filesDelete(
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

    return formatResult(void 0, apiCall);
  },
};
