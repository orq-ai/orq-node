/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { OrqError } from "./orqerror.js";

/**
 * Internal server error
 */
export type EvalsContainsAllEvalsResponseBodyData = {
  message: string;
};

/**
 * Internal server error
 */
export class EvalsContainsAllEvalsResponseBody extends OrqError {
  /** The original data that was passed to this error instance. */
  data$: EvalsContainsAllEvalsResponseBodyData;

  constructor(
    err: EvalsContainsAllEvalsResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "EvalsContainsAllEvalsResponseBody";
  }
}

/**
 * Evaluator not found
 */
export type EvalsContainsAllResponseBodyData = {
  message: string;
};

/**
 * Evaluator not found
 */
export class EvalsContainsAllResponseBody extends OrqError {
  /** The original data that was passed to this error instance. */
  data$: EvalsContainsAllResponseBodyData;

  constructor(
    err: EvalsContainsAllResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "EvalsContainsAllResponseBody";
  }
}

/** @internal */
export const EvalsContainsAllEvalsResponseBody$inboundSchema: z.ZodType<
  EvalsContainsAllEvalsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new EvalsContainsAllEvalsResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type EvalsContainsAllEvalsResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const EvalsContainsAllEvalsResponseBody$outboundSchema: z.ZodType<
  EvalsContainsAllEvalsResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsContainsAllEvalsResponseBody
> = z.instanceof(EvalsContainsAllEvalsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsContainsAllEvalsResponseBody$ {
  /** @deprecated use `EvalsContainsAllEvalsResponseBody$inboundSchema` instead. */
  export const inboundSchema = EvalsContainsAllEvalsResponseBody$inboundSchema;
  /** @deprecated use `EvalsContainsAllEvalsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    EvalsContainsAllEvalsResponseBody$outboundSchema;
  /** @deprecated use `EvalsContainsAllEvalsResponseBody$Outbound` instead. */
  export type Outbound = EvalsContainsAllEvalsResponseBody$Outbound;
}

/** @internal */
export const EvalsContainsAllResponseBody$inboundSchema: z.ZodType<
  EvalsContainsAllResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new EvalsContainsAllResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type EvalsContainsAllResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const EvalsContainsAllResponseBody$outboundSchema: z.ZodType<
  EvalsContainsAllResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsContainsAllResponseBody
> = z.instanceof(EvalsContainsAllResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsContainsAllResponseBody$ {
  /** @deprecated use `EvalsContainsAllResponseBody$inboundSchema` instead. */
  export const inboundSchema = EvalsContainsAllResponseBody$inboundSchema;
  /** @deprecated use `EvalsContainsAllResponseBody$outboundSchema` instead. */
  export const outboundSchema = EvalsContainsAllResponseBody$outboundSchema;
  /** @deprecated use `EvalsContainsAllResponseBody$Outbound` instead. */
  export type Outbound = EvalsContainsAllResponseBody$Outbound;
}
