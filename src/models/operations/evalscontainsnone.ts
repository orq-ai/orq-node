/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EvalsContainsNoneFunctionParams = {
  keywords: Array<string>;
};

export type EvalsContainsNoneRequestBody = {
  output: string;
  functionParams: EvalsContainsNoneFunctionParams;
};

export type EvalsContainsNoneValue = boolean | string | number;

/**
 * Returns the result of the evaluator run
 */
export type EvalsContainsNoneResponseBody = {
  value: boolean | string | number | null;
};

/** @internal */
export const EvalsContainsNoneFunctionParams$inboundSchema: z.ZodType<
  EvalsContainsNoneFunctionParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  keywords: z.array(z.string()),
});

/** @internal */
export type EvalsContainsNoneFunctionParams$Outbound = {
  keywords: Array<string>;
};

/** @internal */
export const EvalsContainsNoneFunctionParams$outboundSchema: z.ZodType<
  EvalsContainsNoneFunctionParams$Outbound,
  z.ZodTypeDef,
  EvalsContainsNoneFunctionParams
> = z.object({
  keywords: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsContainsNoneFunctionParams$ {
  /** @deprecated use `EvalsContainsNoneFunctionParams$inboundSchema` instead. */
  export const inboundSchema = EvalsContainsNoneFunctionParams$inboundSchema;
  /** @deprecated use `EvalsContainsNoneFunctionParams$outboundSchema` instead. */
  export const outboundSchema = EvalsContainsNoneFunctionParams$outboundSchema;
  /** @deprecated use `EvalsContainsNoneFunctionParams$Outbound` instead. */
  export type Outbound = EvalsContainsNoneFunctionParams$Outbound;
}

export function evalsContainsNoneFunctionParamsToJSON(
  evalsContainsNoneFunctionParams: EvalsContainsNoneFunctionParams,
): string {
  return JSON.stringify(
    EvalsContainsNoneFunctionParams$outboundSchema.parse(
      evalsContainsNoneFunctionParams,
    ),
  );
}

export function evalsContainsNoneFunctionParamsFromJSON(
  jsonString: string,
): SafeParseResult<EvalsContainsNoneFunctionParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsContainsNoneFunctionParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsContainsNoneFunctionParams' from JSON`,
  );
}

/** @internal */
export const EvalsContainsNoneRequestBody$inboundSchema: z.ZodType<
  EvalsContainsNoneRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  output: z.string(),
  function_params: z.lazy(() => EvalsContainsNoneFunctionParams$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "function_params": "functionParams",
  });
});

/** @internal */
export type EvalsContainsNoneRequestBody$Outbound = {
  output: string;
  function_params: EvalsContainsNoneFunctionParams$Outbound;
};

/** @internal */
export const EvalsContainsNoneRequestBody$outboundSchema: z.ZodType<
  EvalsContainsNoneRequestBody$Outbound,
  z.ZodTypeDef,
  EvalsContainsNoneRequestBody
> = z.object({
  output: z.string(),
  functionParams: z.lazy(() => EvalsContainsNoneFunctionParams$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    functionParams: "function_params",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsContainsNoneRequestBody$ {
  /** @deprecated use `EvalsContainsNoneRequestBody$inboundSchema` instead. */
  export const inboundSchema = EvalsContainsNoneRequestBody$inboundSchema;
  /** @deprecated use `EvalsContainsNoneRequestBody$outboundSchema` instead. */
  export const outboundSchema = EvalsContainsNoneRequestBody$outboundSchema;
  /** @deprecated use `EvalsContainsNoneRequestBody$Outbound` instead. */
  export type Outbound = EvalsContainsNoneRequestBody$Outbound;
}

export function evalsContainsNoneRequestBodyToJSON(
  evalsContainsNoneRequestBody: EvalsContainsNoneRequestBody,
): string {
  return JSON.stringify(
    EvalsContainsNoneRequestBody$outboundSchema.parse(
      evalsContainsNoneRequestBody,
    ),
  );
}

export function evalsContainsNoneRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsContainsNoneRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsContainsNoneRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsContainsNoneRequestBody' from JSON`,
  );
}

/** @internal */
export const EvalsContainsNoneValue$inboundSchema: z.ZodType<
  EvalsContainsNoneValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.boolean(), z.string(), z.number()]);

/** @internal */
export type EvalsContainsNoneValue$Outbound = boolean | string | number;

/** @internal */
export const EvalsContainsNoneValue$outboundSchema: z.ZodType<
  EvalsContainsNoneValue$Outbound,
  z.ZodTypeDef,
  EvalsContainsNoneValue
> = z.union([z.boolean(), z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsContainsNoneValue$ {
  /** @deprecated use `EvalsContainsNoneValue$inboundSchema` instead. */
  export const inboundSchema = EvalsContainsNoneValue$inboundSchema;
  /** @deprecated use `EvalsContainsNoneValue$outboundSchema` instead. */
  export const outboundSchema = EvalsContainsNoneValue$outboundSchema;
  /** @deprecated use `EvalsContainsNoneValue$Outbound` instead. */
  export type Outbound = EvalsContainsNoneValue$Outbound;
}

export function evalsContainsNoneValueToJSON(
  evalsContainsNoneValue: EvalsContainsNoneValue,
): string {
  return JSON.stringify(
    EvalsContainsNoneValue$outboundSchema.parse(evalsContainsNoneValue),
  );
}

export function evalsContainsNoneValueFromJSON(
  jsonString: string,
): SafeParseResult<EvalsContainsNoneValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsContainsNoneValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsContainsNoneValue' from JSON`,
  );
}

/** @internal */
export const EvalsContainsNoneResponseBody$inboundSchema: z.ZodType<
  EvalsContainsNoneResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.union([z.boolean(), z.string(), z.number()])),
});

/** @internal */
export type EvalsContainsNoneResponseBody$Outbound = {
  value: boolean | string | number | null;
};

/** @internal */
export const EvalsContainsNoneResponseBody$outboundSchema: z.ZodType<
  EvalsContainsNoneResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsContainsNoneResponseBody
> = z.object({
  value: z.nullable(z.union([z.boolean(), z.string(), z.number()])),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsContainsNoneResponseBody$ {
  /** @deprecated use `EvalsContainsNoneResponseBody$inboundSchema` instead. */
  export const inboundSchema = EvalsContainsNoneResponseBody$inboundSchema;
  /** @deprecated use `EvalsContainsNoneResponseBody$outboundSchema` instead. */
  export const outboundSchema = EvalsContainsNoneResponseBody$outboundSchema;
  /** @deprecated use `EvalsContainsNoneResponseBody$Outbound` instead. */
  export type Outbound = EvalsContainsNoneResponseBody$Outbound;
}

export function evalsContainsNoneResponseBodyToJSON(
  evalsContainsNoneResponseBody: EvalsContainsNoneResponseBody,
): string {
  return JSON.stringify(
    EvalsContainsNoneResponseBody$outboundSchema.parse(
      evalsContainsNoneResponseBody,
    ),
  );
}

export function evalsContainsNoneResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsContainsNoneResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsContainsNoneResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsContainsNoneResponseBody' from JSON`,
  );
}
