/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EvalsSummarizationRequestBody = {
  query: string;
  output: string;
  model: string;
};

export type EvalsSummarizationEvalsValue = number | boolean | string;

export type EvalsSummarizationValue = {
  value: number | boolean | string;
  explanation?: string | null | undefined;
};

/**
 * Returns the result of the evaluator run
 */
export type EvalsSummarizationResponseBody = {
  value: EvalsSummarizationValue | null;
};

/** @internal */
export const EvalsSummarizationRequestBody$inboundSchema: z.ZodType<
  EvalsSummarizationRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string(),
  output: z.string(),
  model: z.string(),
});

/** @internal */
export type EvalsSummarizationRequestBody$Outbound = {
  query: string;
  output: string;
  model: string;
};

/** @internal */
export const EvalsSummarizationRequestBody$outboundSchema: z.ZodType<
  EvalsSummarizationRequestBody$Outbound,
  z.ZodTypeDef,
  EvalsSummarizationRequestBody
> = z.object({
  query: z.string(),
  output: z.string(),
  model: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsSummarizationRequestBody$ {
  /** @deprecated use `EvalsSummarizationRequestBody$inboundSchema` instead. */
  export const inboundSchema = EvalsSummarizationRequestBody$inboundSchema;
  /** @deprecated use `EvalsSummarizationRequestBody$outboundSchema` instead. */
  export const outboundSchema = EvalsSummarizationRequestBody$outboundSchema;
  /** @deprecated use `EvalsSummarizationRequestBody$Outbound` instead. */
  export type Outbound = EvalsSummarizationRequestBody$Outbound;
}

export function evalsSummarizationRequestBodyToJSON(
  evalsSummarizationRequestBody: EvalsSummarizationRequestBody,
): string {
  return JSON.stringify(
    EvalsSummarizationRequestBody$outboundSchema.parse(
      evalsSummarizationRequestBody,
    ),
  );
}

export function evalsSummarizationRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsSummarizationRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsSummarizationRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsSummarizationRequestBody' from JSON`,
  );
}

/** @internal */
export const EvalsSummarizationEvalsValue$inboundSchema: z.ZodType<
  EvalsSummarizationEvalsValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number(), z.boolean(), z.string()]);

/** @internal */
export type EvalsSummarizationEvalsValue$Outbound = number | boolean | string;

/** @internal */
export const EvalsSummarizationEvalsValue$outboundSchema: z.ZodType<
  EvalsSummarizationEvalsValue$Outbound,
  z.ZodTypeDef,
  EvalsSummarizationEvalsValue
> = z.union([z.number(), z.boolean(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsSummarizationEvalsValue$ {
  /** @deprecated use `EvalsSummarizationEvalsValue$inboundSchema` instead. */
  export const inboundSchema = EvalsSummarizationEvalsValue$inboundSchema;
  /** @deprecated use `EvalsSummarizationEvalsValue$outboundSchema` instead. */
  export const outboundSchema = EvalsSummarizationEvalsValue$outboundSchema;
  /** @deprecated use `EvalsSummarizationEvalsValue$Outbound` instead. */
  export type Outbound = EvalsSummarizationEvalsValue$Outbound;
}

export function evalsSummarizationEvalsValueToJSON(
  evalsSummarizationEvalsValue: EvalsSummarizationEvalsValue,
): string {
  return JSON.stringify(
    EvalsSummarizationEvalsValue$outboundSchema.parse(
      evalsSummarizationEvalsValue,
    ),
  );
}

export function evalsSummarizationEvalsValueFromJSON(
  jsonString: string,
): SafeParseResult<EvalsSummarizationEvalsValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsSummarizationEvalsValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsSummarizationEvalsValue' from JSON`,
  );
}

/** @internal */
export const EvalsSummarizationValue$inboundSchema: z.ZodType<
  EvalsSummarizationValue,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.union([z.number(), z.boolean(), z.string()]),
  explanation: z.nullable(z.string()).optional(),
});

/** @internal */
export type EvalsSummarizationValue$Outbound = {
  value: number | boolean | string;
  explanation?: string | null | undefined;
};

/** @internal */
export const EvalsSummarizationValue$outboundSchema: z.ZodType<
  EvalsSummarizationValue$Outbound,
  z.ZodTypeDef,
  EvalsSummarizationValue
> = z.object({
  value: z.union([z.number(), z.boolean(), z.string()]),
  explanation: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsSummarizationValue$ {
  /** @deprecated use `EvalsSummarizationValue$inboundSchema` instead. */
  export const inboundSchema = EvalsSummarizationValue$inboundSchema;
  /** @deprecated use `EvalsSummarizationValue$outboundSchema` instead. */
  export const outboundSchema = EvalsSummarizationValue$outboundSchema;
  /** @deprecated use `EvalsSummarizationValue$Outbound` instead. */
  export type Outbound = EvalsSummarizationValue$Outbound;
}

export function evalsSummarizationValueToJSON(
  evalsSummarizationValue: EvalsSummarizationValue,
): string {
  return JSON.stringify(
    EvalsSummarizationValue$outboundSchema.parse(evalsSummarizationValue),
  );
}

export function evalsSummarizationValueFromJSON(
  jsonString: string,
): SafeParseResult<EvalsSummarizationValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsSummarizationValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsSummarizationValue' from JSON`,
  );
}

/** @internal */
export const EvalsSummarizationResponseBody$inboundSchema: z.ZodType<
  EvalsSummarizationResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(z.lazy(() => EvalsSummarizationValue$inboundSchema)),
});

/** @internal */
export type EvalsSummarizationResponseBody$Outbound = {
  value: EvalsSummarizationValue$Outbound | null;
};

/** @internal */
export const EvalsSummarizationResponseBody$outboundSchema: z.ZodType<
  EvalsSummarizationResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsSummarizationResponseBody
> = z.object({
  value: z.nullable(z.lazy(() => EvalsSummarizationValue$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsSummarizationResponseBody$ {
  /** @deprecated use `EvalsSummarizationResponseBody$inboundSchema` instead. */
  export const inboundSchema = EvalsSummarizationResponseBody$inboundSchema;
  /** @deprecated use `EvalsSummarizationResponseBody$outboundSchema` instead. */
  export const outboundSchema = EvalsSummarizationResponseBody$outboundSchema;
  /** @deprecated use `EvalsSummarizationResponseBody$Outbound` instead. */
  export type Outbound = EvalsSummarizationResponseBody$Outbound;
}

export function evalsSummarizationResponseBodyToJSON(
  evalsSummarizationResponseBody: EvalsSummarizationResponseBody,
): string {
  return JSON.stringify(
    EvalsSummarizationResponseBody$outboundSchema.parse(
      evalsSummarizationResponseBody,
    ),
  );
}

export function evalsSummarizationResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<EvalsSummarizationResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsSummarizationResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsSummarizationResponseBody' from JSON`,
  );
}
