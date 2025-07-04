/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EvalsRagasContextRecallRequestBody = {
  /**
   * Latest user message
   */
  query?: string | undefined;
  /**
   * The generated response from the model
   */
  output?: string | undefined;
  model: string;
  /**
   * The ground truth answer to evaluate context recall against
   */
  reference: string;
  /**
   * Knowledge base retrievals
   */
  retrievals?: Array<string> | undefined;
};

/**
 * Returns the context recall evaluation result
 */
export type EvalsRagasContextRecallResponseBody = {
  value: number | null;
};

/** @internal */
export const EvalsRagasContextRecallRequestBody$inboundSchema: z.ZodType<
  EvalsRagasContextRecallRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string().optional(),
  output: z.string().optional(),
  model: z.string(),
  reference: z.string(),
  retrievals: z.array(z.string()).optional(),
});

/** @internal */
export type EvalsRagasContextRecallRequestBody$Outbound = {
  query?: string | undefined;
  output?: string | undefined;
  model: string;
  reference: string;
  retrievals?: Array<string> | undefined;
};

/** @internal */
export const EvalsRagasContextRecallRequestBody$outboundSchema: z.ZodType<
  EvalsRagasContextRecallRequestBody$Outbound,
  z.ZodTypeDef,
  EvalsRagasContextRecallRequestBody
> = z.object({
  query: z.string().optional(),
  output: z.string().optional(),
  model: z.string(),
  reference: z.string(),
  retrievals: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsRagasContextRecallRequestBody$ {
  /** @deprecated use `EvalsRagasContextRecallRequestBody$inboundSchema` instead. */
  export const inboundSchema = EvalsRagasContextRecallRequestBody$inboundSchema;
  /** @deprecated use `EvalsRagasContextRecallRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    EvalsRagasContextRecallRequestBody$outboundSchema;
  /** @deprecated use `EvalsRagasContextRecallRequestBody$Outbound` instead. */
  export type Outbound = EvalsRagasContextRecallRequestBody$Outbound;
}

export function evalsRagasContextRecallRequestBodyToJSON(
  evalsRagasContextRecallRequestBody: EvalsRagasContextRecallRequestBody,
): string {
  return JSON.stringify(
    EvalsRagasContextRecallRequestBody$outboundSchema.parse(
      evalsRagasContextRecallRequestBody,
    ),
  );
}

export function evalsRagasContextRecallRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsRagasContextRecallRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      EvalsRagasContextRecallRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsRagasContextRecallRequestBody' from JSON`,
  );
}

/** @internal */
export const EvalsRagasContextRecallResponseBody$inboundSchema: z.ZodType<
  EvalsRagasContextRecallResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.number()),
});

/** @internal */
export type EvalsRagasContextRecallResponseBody$Outbound = {
  value: number | null;
};

/** @internal */
export const EvalsRagasContextRecallResponseBody$outboundSchema: z.ZodType<
  EvalsRagasContextRecallResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsRagasContextRecallResponseBody
> = z.object({
  value: z.nullable(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsRagasContextRecallResponseBody$ {
  /** @deprecated use `EvalsRagasContextRecallResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    EvalsRagasContextRecallResponseBody$inboundSchema;
  /** @deprecated use `EvalsRagasContextRecallResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    EvalsRagasContextRecallResponseBody$outboundSchema;
  /** @deprecated use `EvalsRagasContextRecallResponseBody$Outbound` instead. */
  export type Outbound = EvalsRagasContextRecallResponseBody$Outbound;
}

export function evalsRagasContextRecallResponseBodyToJSON(
  evalsRagasContextRecallResponseBody: EvalsRagasContextRecallResponseBody,
): string {
  return JSON.stringify(
    EvalsRagasContextRecallResponseBody$outboundSchema.parse(
      evalsRagasContextRecallResponseBody,
    ),
  );
}

export function evalsRagasContextRecallResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsRagasContextRecallResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      EvalsRagasContextRecallResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsRagasContextRecallResponseBody' from JSON`,
  );
}
