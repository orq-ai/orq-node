/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesCreate } from "../../funcs/filesCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FileUploadRequestBody$inboundSchema.optional(),
};

export const tool$filesCreate: ToolDefinition<typeof args> = {
  name: "files_create",
  description: `Create file

Files are used to upload documents that can be used with features like [Deployments](https://docs.orq.ai/reference/post_v2-deployments-get-config).`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await filesCreate(
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
