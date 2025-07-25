/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { OrqError } from "./orqerror.js";

/**
 * Workspace ID is not found on the request
 */
export type UpdateEvalResponseBodyData = {
  message: string;
};

/**
 * Workspace ID is not found on the request
 */
export class UpdateEvalResponseBody extends OrqError {
  /** The original data that was passed to this error instance. */
  data$: UpdateEvalResponseBodyData;

  constructor(
    err: UpdateEvalResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "UpdateEvalResponseBody";
  }
}

/** @internal */
export const UpdateEvalResponseBody$inboundSchema: z.ZodType<
  UpdateEvalResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UpdateEvalResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UpdateEvalResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const UpdateEvalResponseBody$outboundSchema: z.ZodType<
  UpdateEvalResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateEvalResponseBody
> = z.instanceof(UpdateEvalResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEvalResponseBody$ {
  /** @deprecated use `UpdateEvalResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateEvalResponseBody$inboundSchema;
  /** @deprecated use `UpdateEvalResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateEvalResponseBody$outboundSchema;
  /** @deprecated use `UpdateEvalResponseBody$Outbound` instead. */
  export type Outbound = UpdateEvalResponseBody$Outbound;
}
