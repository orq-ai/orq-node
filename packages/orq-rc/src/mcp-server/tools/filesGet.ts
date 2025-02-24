/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesGet } from "../../funcs/filesGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FileGetRequest$inboundSchema,
};

export const tool$filesGet: ToolDefinition<typeof args> = {
  name: "files_get",
  description: `Retrieve a file

Retrieves the details of an existing file object. After you supply a unique file ID, orq.ai returns the corresponding file object`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await filesGet(
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
