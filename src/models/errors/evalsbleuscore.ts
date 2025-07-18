/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { OrqError } from "./orqerror.js";

/**
 * Internal server error
 */
export type EvalsBleuScoreEvalsResponseBodyData = {
  message: string;
};

/**
 * Internal server error
 */
export class EvalsBleuScoreEvalsResponseBody extends OrqError {
  /** The original data that was passed to this error instance. */
  data$: EvalsBleuScoreEvalsResponseBodyData;

  constructor(
    err: EvalsBleuScoreEvalsResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "EvalsBleuScoreEvalsResponseBody";
  }
}

/**
 * Evaluator not found
 */
export type EvalsBleuScoreResponseBodyData = {
  message: string;
};

/**
 * Evaluator not found
 */
export class EvalsBleuScoreResponseBody extends OrqError {
  /** The original data that was passed to this error instance. */
  data$: EvalsBleuScoreResponseBodyData;

  constructor(
    err: EvalsBleuScoreResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "EvalsBleuScoreResponseBody";
  }
}

/** @internal */
export const EvalsBleuScoreEvalsResponseBody$inboundSchema: z.ZodType<
  EvalsBleuScoreEvalsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new EvalsBleuScoreEvalsResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type EvalsBleuScoreEvalsResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const EvalsBleuScoreEvalsResponseBody$outboundSchema: z.ZodType<
  EvalsBleuScoreEvalsResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsBleuScoreEvalsResponseBody
> = z.instanceof(EvalsBleuScoreEvalsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsBleuScoreEvalsResponseBody$ {
  /** @deprecated use `EvalsBleuScoreEvalsResponseBody$inboundSchema` instead. */
  export const inboundSchema = EvalsBleuScoreEvalsResponseBody$inboundSchema;
  /** @deprecated use `EvalsBleuScoreEvalsResponseBody$outboundSchema` instead. */
  export const outboundSchema = EvalsBleuScoreEvalsResponseBody$outboundSchema;
  /** @deprecated use `EvalsBleuScoreEvalsResponseBody$Outbound` instead. */
  export type Outbound = EvalsBleuScoreEvalsResponseBody$Outbound;
}

/** @internal */
export const EvalsBleuScoreResponseBody$inboundSchema: z.ZodType<
  EvalsBleuScoreResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new EvalsBleuScoreResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type EvalsBleuScoreResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const EvalsBleuScoreResponseBody$outboundSchema: z.ZodType<
  EvalsBleuScoreResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsBleuScoreResponseBody
> = z.instanceof(EvalsBleuScoreResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsBleuScoreResponseBody$ {
  /** @deprecated use `EvalsBleuScoreResponseBody$inboundSchema` instead. */
  export const inboundSchema = EvalsBleuScoreResponseBody$inboundSchema;
  /** @deprecated use `EvalsBleuScoreResponseBody$outboundSchema` instead. */
  export const outboundSchema = EvalsBleuScoreResponseBody$outboundSchema;
  /** @deprecated use `EvalsBleuScoreResponseBody$Outbound` instead. */
  export type Outbound = EvalsBleuScoreResponseBody$Outbound;
}
