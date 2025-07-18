/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EvalsSentimentClassificationRequestBody = {
  query: string;
  output: string;
  model: string;
};

export type EvalsSentimentClassificationEvalsValue = number | boolean | string;

export type EvalsSentimentClassificationValue = {
  value: number | boolean | string;
  explanation?: string | null | undefined;
};

/**
 * Returns the result of the evaluator run
 */
export type EvalsSentimentClassificationResponseBody = {
  value: EvalsSentimentClassificationValue | null;
};

/** @internal */
export const EvalsSentimentClassificationRequestBody$inboundSchema: z.ZodType<
  EvalsSentimentClassificationRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string(),
  output: z.string(),
  model: z.string(),
});

/** @internal */
export type EvalsSentimentClassificationRequestBody$Outbound = {
  query: string;
  output: string;
  model: string;
};

/** @internal */
export const EvalsSentimentClassificationRequestBody$outboundSchema: z.ZodType<
  EvalsSentimentClassificationRequestBody$Outbound,
  z.ZodTypeDef,
  EvalsSentimentClassificationRequestBody
> = z.object({
  query: z.string(),
  output: z.string(),
  model: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsSentimentClassificationRequestBody$ {
  /** @deprecated use `EvalsSentimentClassificationRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    EvalsSentimentClassificationRequestBody$inboundSchema;
  /** @deprecated use `EvalsSentimentClassificationRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    EvalsSentimentClassificationRequestBody$outboundSchema;
  /** @deprecated use `EvalsSentimentClassificationRequestBody$Outbound` instead. */
  export type Outbound = EvalsSentimentClassificationRequestBody$Outbound;
}

export function evalsSentimentClassificationRequestBodyToJSON(
  evalsSentimentClassificationRequestBody:
    EvalsSentimentClassificationRequestBody,
): string {
  return JSON.stringify(
    EvalsSentimentClassificationRequestBody$outboundSchema.parse(
      evalsSentimentClassificationRequestBody,
    ),
  );
}

export function evalsSentimentClassificationRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  EvalsSentimentClassificationRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      EvalsSentimentClassificationRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'EvalsSentimentClassificationRequestBody' from JSON`,
  );
}

/** @internal */
export const EvalsSentimentClassificationEvalsValue$inboundSchema: z.ZodType<
  EvalsSentimentClassificationEvalsValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number(), z.boolean(), z.string()]);

/** @internal */
export type EvalsSentimentClassificationEvalsValue$Outbound =
  | number
  | boolean
  | string;

/** @internal */
export const EvalsSentimentClassificationEvalsValue$outboundSchema: z.ZodType<
  EvalsSentimentClassificationEvalsValue$Outbound,
  z.ZodTypeDef,
  EvalsSentimentClassificationEvalsValue
> = z.union([z.number(), z.boolean(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsSentimentClassificationEvalsValue$ {
  /** @deprecated use `EvalsSentimentClassificationEvalsValue$inboundSchema` instead. */
  export const inboundSchema =
    EvalsSentimentClassificationEvalsValue$inboundSchema;
  /** @deprecated use `EvalsSentimentClassificationEvalsValue$outboundSchema` instead. */
  export const outboundSchema =
    EvalsSentimentClassificationEvalsValue$outboundSchema;
  /** @deprecated use `EvalsSentimentClassificationEvalsValue$Outbound` instead. */
  export type Outbound = EvalsSentimentClassificationEvalsValue$Outbound;
}

export function evalsSentimentClassificationEvalsValueToJSON(
  evalsSentimentClassificationEvalsValue:
    EvalsSentimentClassificationEvalsValue,
): string {
  return JSON.stringify(
    EvalsSentimentClassificationEvalsValue$outboundSchema.parse(
      evalsSentimentClassificationEvalsValue,
    ),
  );
}

export function evalsSentimentClassificationEvalsValueFromJSON(
  jsonString: string,
): SafeParseResult<EvalsSentimentClassificationEvalsValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      EvalsSentimentClassificationEvalsValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsSentimentClassificationEvalsValue' from JSON`,
  );
}

/** @internal */
export const EvalsSentimentClassificationValue$inboundSchema: z.ZodType<
  EvalsSentimentClassificationValue,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.union([z.number(), z.boolean(), z.string()]),
  explanation: z.nullable(z.string()).optional(),
});

/** @internal */
export type EvalsSentimentClassificationValue$Outbound = {
  value: number | boolean | string;
  explanation?: string | null | undefined;
};

/** @internal */
export const EvalsSentimentClassificationValue$outboundSchema: z.ZodType<
  EvalsSentimentClassificationValue$Outbound,
  z.ZodTypeDef,
  EvalsSentimentClassificationValue
> = z.object({
  value: z.union([z.number(), z.boolean(), z.string()]),
  explanation: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsSentimentClassificationValue$ {
  /** @deprecated use `EvalsSentimentClassificationValue$inboundSchema` instead. */
  export const inboundSchema = EvalsSentimentClassificationValue$inboundSchema;
  /** @deprecated use `EvalsSentimentClassificationValue$outboundSchema` instead. */
  export const outboundSchema =
    EvalsSentimentClassificationValue$outboundSchema;
  /** @deprecated use `EvalsSentimentClassificationValue$Outbound` instead. */
  export type Outbound = EvalsSentimentClassificationValue$Outbound;
}

export function evalsSentimentClassificationValueToJSON(
  evalsSentimentClassificationValue: EvalsSentimentClassificationValue,
): string {
  return JSON.stringify(
    EvalsSentimentClassificationValue$outboundSchema.parse(
      evalsSentimentClassificationValue,
    ),
  );
}

export function evalsSentimentClassificationValueFromJSON(
  jsonString: string,
): SafeParseResult<EvalsSentimentClassificationValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EvalsSentimentClassificationValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EvalsSentimentClassificationValue' from JSON`,
  );
}

/** @internal */
export const EvalsSentimentClassificationResponseBody$inboundSchema: z.ZodType<
  EvalsSentimentClassificationResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.nullable(
    z.lazy(() => EvalsSentimentClassificationValue$inboundSchema),
  ),
});

/** @internal */
export type EvalsSentimentClassificationResponseBody$Outbound = {
  value: EvalsSentimentClassificationValue$Outbound | null;
};

/** @internal */
export const EvalsSentimentClassificationResponseBody$outboundSchema: z.ZodType<
  EvalsSentimentClassificationResponseBody$Outbound,
  z.ZodTypeDef,
  EvalsSentimentClassificationResponseBody
> = z.object({
  value: z.nullable(
    z.lazy(() => EvalsSentimentClassificationValue$outboundSchema),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EvalsSentimentClassificationResponseBody$ {
  /** @deprecated use `EvalsSentimentClassificationResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    EvalsSentimentClassificationResponseBody$inboundSchema;
  /** @deprecated use `EvalsSentimentClassificationResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    EvalsSentimentClassificationResponseBody$outboundSchema;
  /** @deprecated use `EvalsSentimentClassificationResponseBody$Outbound` instead. */
  export type Outbound = EvalsSentimentClassificationResponseBody$Outbound;
}

export function evalsSentimentClassificationResponseBodyToJSON(
  evalsSentimentClassificationResponseBody:
    EvalsSentimentClassificationResponseBody,
): string {
  return JSON.stringify(
    EvalsSentimentClassificationResponseBody$outboundSchema.parse(
      evalsSentimentClassificationResponseBody,
    ),
  );
}

export function evalsSentimentClassificationResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  EvalsSentimentClassificationResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      EvalsSentimentClassificationResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'EvalsSentimentClassificationResponseBody' from JSON`,
  );
}
