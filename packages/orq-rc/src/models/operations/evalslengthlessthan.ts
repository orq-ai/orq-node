/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EvalsLengthLessThanFunctionParams = {
  length: number;
};

export type EvalsLengthLessThanRequestBody = {
  output: string;
  functionParams: EvalsLengthLessThanFunctionParams;
};

export type EvalsLengthLessThanValue = boolean | string | number;

/**
 * Returns the result of the evaluator run
 */
export type EvalsLengthLessThanResponseBody = {
  value: boolean | string | number | null;
};

/** @internal */
export const EvalsLengthLessThanFunctionParams$inboundSchema: z.ZodType<
  EvalsLengthLessThanFunctionParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  length: z.number(),
});

/** @internal */
export type EvalsLengthLessThanFunctionParams$Outbound = {
  length: number;
};

/** @internal */
export const EvalsLengthLessThanFunctionParams$outboundSchema: z.ZodType<
  EvalsLengthLessThanFunctionParams$Outbound,
  z.ZodTypeDef,
  EvalsLengthLessThanFunctionParams
> = z.object({
  length: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsLengthLessThanFunctionParams$ {
  /** @deprecated use `EvalsLengthLessThanFunctionParams$inboundSchema` instead. */
  export const inboundSchema = EvalsLengthLessThanFunctionParams$inboundSchema;
  /** @deprecated use `EvalsLengthLessThanFunctionParams$outboundSchema` instead. */
  export const outboundSchema =
    EvalsLengthLessThanFunctionParams$outboundSchema;
  /** @deprecated use `EvalsLengthLessThanFunctionParams$Outbound` instead. */
  export type Outbound = EvalsLengthLessThanFunctionParams$Outbound;
}

export function evalsLengthLessThanFunctionParamsToJSON(
  evalsLengthLessThanFunctionParams: EvalsLengthLessThanFunctionParams,
): string {
  return JSON.stringify(
    EvalsLengthLessThanFunctionParams$outboundSchema.parse(
      evalsLengthLessThanFunctionParams,
    ),
  );
}

export function evalsLengthLessThanFunctionParamsFromJSON(
  jsonString: string,
): SafeParseResult<EvalsLengthLessThanFunctionParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsLengthLessThanFunctionParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsLengthLessThanFunctionParams' from JSON`,
  );
}

/** @internal */
export const EvalsLengthLessThanRequestBody$inboundSchema: z.ZodType<
  EvalsLengthLessThanRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  output: z.string(),
  function_params: z.lazy(() =>
    EvalsLengthLessThanFunctionParams$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "function_params": "functionParams",
  });
});

/** @internal */
export type EvalsLengthLessThanRequestBody$Outbound = {
  output: string;
  function_params: EvalsLengthLessThanFunctionParams$Outbound;
};

/** @internal */
export const EvalsLengthLessThanRequestBody$outboundSchema: z.ZodType<
  EvalsLengthLessThanRequestBody$Outbound,
  z.ZodTypeDef,
  EvalsLengthLessThanRequestBody
> = z.object({
  output: z.string(),
  functionParams: z.lazy(() =>
    EvalsLengthLessThanFunctionParams$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    functionParams: "function_params",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsLengthLessThanRequestBody$ {
  /** @deprecated use `EvalsLengthLessThanRequestBody$inboundSchema` instead. */
  export const inboundSchema = EvalsLengthLessThanRequestBody$inboundSchema;
  /** @deprecated use `EvalsLengthLessThanRequestBody$outboundSchema` instead. */
  export const outboundSchema = EvalsLengthLessThanRequestBody$outboundSchema;
  /** @deprecated use `EvalsLengthLessThanRequestBody$Outbound` instead. */
  export type Outbound = EvalsLengthLessThanRequestBody$Outbound;
}

export function evalsLengthLessThanRequestBodyToJSON(
  evalsLengthLessThanRequestBody: EvalsLengthLessThanRequestBody,
): string {
  return JSON.stringify(
    EvalsLengthLessThanRequestBody$outboundSchema.parse(
      evalsLengthLessThanRequestBody,
    ),
  );
}

export function evalsLengthLessThanRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsLengthLessThanRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsLengthLessThanRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsLengthLessThanRequestBody' from JSON`,
  );
}

/** @internal */
export const EvalsLengthLessThanValue$inboundSchema: z.ZodType<
  EvalsLengthLessThanValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.boolean(), z.string(), z.number()]);

/** @internal */
export type EvalsLengthLessThanValue$Outbound = boolean | string | number;

/** @internal */
export const EvalsLengthLessThanValue$outboundSchema: z.ZodType<
  EvalsLengthLessThanValue$Outbound,
  z.ZodTypeDef,
  EvalsLengthLessThanValue
> = z.union([z.boolean(), z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsLengthLessThanValue$ {
  /** @deprecated use `EvalsLengthLessThanValue$inboundSchema` instead. */
  export const inboundSchema = EvalsLengthLessThanValue$inboundSchema;
  /** @deprecated use `EvalsLengthLessThanValue$outboundSchema` instead. */
  export const outboundSchema = EvalsLengthLessThanValue$outboundSchema;
  /** @deprecated use `EvalsLengthLessThanValue$Outbound` instead. */
  export type Outbound = EvalsLengthLessThanValue$Outbound;
}

export function evalsLengthLessThanValueToJSON(
  evalsLengthLessThanValue: EvalsLengthLessThanValue,
): string {
  return JSON.stringify(
    EvalsLengthLessThanValue$outboundSchema.parse(evalsLengthLessThanValue),
  );
}

export function evalsLengthLessThanValueFromJSON(
  jsonString: string,
): SafeParseResult<EvalsLengthLessThanValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsLengthLessThanValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsLengthLessThanValue' from JSON`,
  );
}

/** @internal */
export const EvalsLengthLessThanResponseBody$inboundSchema: z.ZodType<
  EvalsLengthLessThanResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.union([z.boolean(), z.string(), z.number()])),
});

/** @internal */
export type EvalsLengthLessThanResponseBody$Outbound = {
  value: boolean | string | number | null;
};

/** @internal */
export const EvalsLengthLessThanResponseBody$outboundSchema: z.ZodType<
  EvalsLengthLessThanResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsLengthLessThanResponseBody
> = z.object({
  value: z.nullable(z.union([z.boolean(), z.string(), z.number()])),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsLengthLessThanResponseBody$ {
  /** @deprecated use `EvalsLengthLessThanResponseBody$inboundSchema` instead. */
  export const inboundSchema = EvalsLengthLessThanResponseBody$inboundSchema;
  /** @deprecated use `EvalsLengthLessThanResponseBody$outboundSchema` instead. */
  export const outboundSchema = EvalsLengthLessThanResponseBody$outboundSchema;
  /** @deprecated use `EvalsLengthLessThanResponseBody$Outbound` instead. */
  export type Outbound = EvalsLengthLessThanResponseBody$Outbound;
}

export function evalsLengthLessThanResponseBodyToJSON(
  evalsLengthLessThanResponseBody: EvalsLengthLessThanResponseBody,
): string {
  return JSON.stringify(
    EvalsLengthLessThanResponseBody$outboundSchema.parse(
      evalsLengthLessThanResponseBody,
    ),
  );
}

export function evalsLengthLessThanResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsLengthLessThanResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsLengthLessThanResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsLengthLessThanResponseBody' from JSON`,
  );
}
