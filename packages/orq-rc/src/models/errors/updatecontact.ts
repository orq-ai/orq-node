/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { OrqError } from "./orqerror.js";

/**
 * Contact not found
 */
export type UpdateContactResponseBodyData = {
  /**
   * Error message
   */
  message: string;
};

/**
 * Contact not found
 */
export class UpdateContactResponseBody extends OrqError {
  /** The original data that was passed to this error instance. */
  data$: UpdateContactResponseBodyData;

  constructor(
    err: UpdateContactResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "UpdateContactResponseBody";
  }
}

/** @internal */
export const UpdateContactResponseBody$inboundSchema: z.ZodType<
  UpdateContactResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new UpdateContactResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UpdateContactResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const UpdateContactResponseBody$outboundSchema: z.ZodType<
  UpdateContactResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateContactResponseBody
> = z.instanceof(UpdateContactResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateContactResponseBody$ {
  /** @deprecated use `UpdateContactResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateContactResponseBody$inboundSchema;
  /** @deprecated use `UpdateContactResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateContactResponseBody$outboundSchema;
  /** @deprecated use `UpdateContactResponseBody$Outbound` instead. */
  export type Outbound = UpdateContactResponseBody$Outbound;
}
