/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Not Found - The prompt or prompt version does not exist.
 */
export type GetPromptVersionResponseBodyData = {
  message: string;
};

/**
 * Not Found - The prompt or prompt version does not exist.
 */
export class GetPromptVersionResponseBody extends Error {
  /** The original data that was passed to this error instance. */
  data$: GetPromptVersionResponseBodyData;

  constructor(err: GetPromptVersionResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "GetPromptVersionResponseBody";
  }
}

/** @internal */
export const GetPromptVersionResponseBody$inboundSchema: z.ZodType<
  GetPromptVersionResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
})
  .transform((v) => {
    return new GetPromptVersionResponseBody(v);
  });

/** @internal */
export type GetPromptVersionResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const GetPromptVersionResponseBody$outboundSchema: z.ZodType<
  GetPromptVersionResponseBody$Outbound,
  z.ZodTypeDef,
  GetPromptVersionResponseBody
> = z.instanceof(GetPromptVersionResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPromptVersionResponseBody$ {
  /** @deprecated use `GetPromptVersionResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetPromptVersionResponseBody$inboundSchema;
  /** @deprecated use `GetPromptVersionResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetPromptVersionResponseBody$outboundSchema;
  /** @deprecated use `GetPromptVersionResponseBody$Outbound` instead. */
  export type Outbound = GetPromptVersionResponseBody$Outbound;
}
