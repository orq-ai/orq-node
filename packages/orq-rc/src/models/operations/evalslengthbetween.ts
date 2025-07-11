/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EvalsLengthBetweenFunctionParams = {
  minLength: number;
  maxLength: number;
};

export type EvalsLengthBetweenRequestBody = {
  output: string;
  functionParams: EvalsLengthBetweenFunctionParams;
};

export type EvalsLengthBetweenValue = boolean | string | number;

/**
 * Returns the result of the evaluator run
 */
export type EvalsLengthBetweenResponseBody = {
  value: boolean | string | number | null;
};

/** @internal */
export const EvalsLengthBetweenFunctionParams$inboundSchema: z.ZodType<
  EvalsLengthBetweenFunctionParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  min_length: z.number(),
  max_length: z.number(),
}).transform((v) => {
  return remap$(v, {
    "min_length": "minLength",
    "max_length": "maxLength",
  });
});

/** @internal */
export type EvalsLengthBetweenFunctionParams$Outbound = {
  min_length: number;
  max_length: number;
};

/** @internal */
export const EvalsLengthBetweenFunctionParams$outboundSchema: z.ZodType<
  EvalsLengthBetweenFunctionParams$Outbound,
  z.ZodTypeDef,
  EvalsLengthBetweenFunctionParams
> = z.object({
  minLength: z.number(),
  maxLength: z.number(),
}).transform((v) => {
  return remap$(v, {
    minLength: "min_length",
    maxLength: "max_length",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsLengthBetweenFunctionParams$ {
  /** @deprecated use `EvalsLengthBetweenFunctionParams$inboundSchema` instead. */
  export const inboundSchema = EvalsLengthBetweenFunctionParams$inboundSchema;
  /** @deprecated use `EvalsLengthBetweenFunctionParams$outboundSchema` instead. */
  export const outboundSchema = EvalsLengthBetweenFunctionParams$outboundSchema;
  /** @deprecated use `EvalsLengthBetweenFunctionParams$Outbound` instead. */
  export type Outbound = EvalsLengthBetweenFunctionParams$Outbound;
}

export function evalsLengthBetweenFunctionParamsToJSON(
  evalsLengthBetweenFunctionParams: EvalsLengthBetweenFunctionParams,
): string {
  return JSON.stringify(
    EvalsLengthBetweenFunctionParams$outboundSchema.parse(
      evalsLengthBetweenFunctionParams,
    ),
  );
}

export function evalsLengthBetweenFunctionParamsFromJSON(
  jsonString: string,
): SafeParseResult<EvalsLengthBetweenFunctionParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsLengthBetweenFunctionParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsLengthBetweenFunctionParams' from JSON`,
  );
}

/** @internal */
export const EvalsLengthBetweenRequestBody$inboundSchema: z.ZodType<
  EvalsLengthBetweenRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  output: z.string(),
  function_params: z.lazy(() => EvalsLengthBetweenFunctionParams$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "function_params": "functionParams",
  });
});

/** @internal */
export type EvalsLengthBetweenRequestBody$Outbound = {
  output: string;
  function_params: EvalsLengthBetweenFunctionParams$Outbound;
};

/** @internal */
export const EvalsLengthBetweenRequestBody$outboundSchema: z.ZodType<
  EvalsLengthBetweenRequestBody$Outbound,
  z.ZodTypeDef,
  EvalsLengthBetweenRequestBody
> = z.object({
  output: z.string(),
  functionParams: z.lazy(() => EvalsLengthBetweenFunctionParams$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    functionParams: "function_params",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsLengthBetweenRequestBody$ {
  /** @deprecated use `EvalsLengthBetweenRequestBody$inboundSchema` instead. */
  export const inboundSchema = EvalsLengthBetweenRequestBody$inboundSchema;
  /** @deprecated use `EvalsLengthBetweenRequestBody$outboundSchema` instead. */
  export const outboundSchema = EvalsLengthBetweenRequestBody$outboundSchema;
  /** @deprecated use `EvalsLengthBetweenRequestBody$Outbound` instead. */
  export type Outbound = EvalsLengthBetweenRequestBody$Outbound;
}

export function evalsLengthBetweenRequestBodyToJSON(
  evalsLengthBetweenRequestBody: EvalsLengthBetweenRequestBody,
): string {
  return JSON.stringify(
    EvalsLengthBetweenRequestBody$outboundSchema.parse(
      evalsLengthBetweenRequestBody,
    ),
  );
}

export function evalsLengthBetweenRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsLengthBetweenRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsLengthBetweenRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsLengthBetweenRequestBody' from JSON`,
  );
}

/** @internal */
export const EvalsLengthBetweenValue$inboundSchema: z.ZodType<
  EvalsLengthBetweenValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.boolean(), z.string(), z.number()]);

/** @internal */
export type EvalsLengthBetweenValue$Outbound = boolean | string | number;

/** @internal */
export const EvalsLengthBetweenValue$outboundSchema: z.ZodType<
  EvalsLengthBetweenValue$Outbound,
  z.ZodTypeDef,
  EvalsLengthBetweenValue
> = z.union([z.boolean(), z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsLengthBetweenValue$ {
  /** @deprecated use `EvalsLengthBetweenValue$inboundSchema` instead. */
  export const inboundSchema = EvalsLengthBetweenValue$inboundSchema;
  /** @deprecated use `EvalsLengthBetweenValue$outboundSchema` instead. */
  export const outboundSchema = EvalsLengthBetweenValue$outboundSchema;
  /** @deprecated use `EvalsLengthBetweenValue$Outbound` instead. */
  export type Outbound = EvalsLengthBetweenValue$Outbound;
}

export function evalsLengthBetweenValueToJSON(
  evalsLengthBetweenValue: EvalsLengthBetweenValue,
): string {
  return JSON.stringify(
    EvalsLengthBetweenValue$outboundSchema.parse(evalsLengthBetweenValue),
  );
}

export function evalsLengthBetweenValueFromJSON(
  jsonString: string,
): SafeParseResult<EvalsLengthBetweenValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsLengthBetweenValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsLengthBetweenValue' from JSON`,
  );
}

/** @internal */
export const EvalsLengthBetweenResponseBody$inboundSchema: z.ZodType<
  EvalsLengthBetweenResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.union([z.boolean(), z.string(), z.number()])),
});

/** @internal */
export type EvalsLengthBetweenResponseBody$Outbound = {
  value: boolean | string | number | null;
};

/** @internal */
export const EvalsLengthBetweenResponseBody$outboundSchema: z.ZodType<
  EvalsLengthBetweenResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsLengthBetweenResponseBody
> = z.object({
  value: z.nullable(z.union([z.boolean(), z.string(), z.number()])),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsLengthBetweenResponseBody$ {
  /** @deprecated use `EvalsLengthBetweenResponseBody$inboundSchema` instead. */
  export const inboundSchema = EvalsLengthBetweenResponseBody$inboundSchema;
  /** @deprecated use `EvalsLengthBetweenResponseBody$outboundSchema` instead. */
  export const outboundSchema = EvalsLengthBetweenResponseBody$outboundSchema;
  /** @deprecated use `EvalsLengthBetweenResponseBody$Outbound` instead. */
  export type Outbound = EvalsLengthBetweenResponseBody$Outbound;
}

export function evalsLengthBetweenResponseBodyToJSON(
  evalsLengthBetweenResponseBody: EvalsLengthBetweenResponseBody,
): string {
  return JSON.stringify(
    EvalsLengthBetweenResponseBody$outboundSchema.parse(
      evalsLengthBetweenResponseBody,
    ),
  );
}

export function evalsLengthBetweenResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsLengthBetweenResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsLengthBetweenResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsLengthBetweenResponseBody' from JSON`,
  );
}
