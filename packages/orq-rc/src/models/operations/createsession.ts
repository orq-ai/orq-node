/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Billing = {
  /**
   * Total cost of the session
   */
  inputCost: number;
  /**
   * Total cost of the session
   */
  outputCost: number;
  /**
   * Total usage of the session
   */
  totalCost: number;
};

export type CreateSessionUsage = {
  /**
   * Total input tokens of the session
   */
  promptTokens: number;
  /**
   * Total output tokens of the session
   */
  completionTokens: number;
  /**
   * Total tokens of the session
   */
  totalTokens: number;
};

export type CreateSessionRequestBody = {
  externalId: string;
  /**
   * Duration of the session in ms
   */
  duration: number;
  /**
   * List of contact ids
   */
  contactIds: Array<string>;
  billing: Billing;
  usage: CreateSessionUsage;
  /**
   * Total traces of the session
   */
  tracesCount: number;
  tags: Array<string>;
  /**
   * The project id
   */
  projectId?: string | null | undefined;
  /**
   * The time when the session was created
   */
  startedAt?: Date | undefined;
  /**
   * The time when the session was updated
   */
  updatedAt?: Date | undefined;
};

export type CreateSessionBilling = {
  /**
   * Total cost of the session
   */
  inputCost: number;
  /**
   * Total cost of the session
   */
  outputCost: number;
  /**
   * Total usage of the session
   */
  totalCost: number;
};

export type CreateSessionSessionsUsage = {
  /**
   * Total input tokens of the session
   */
  promptTokens: number;
  /**
   * Total output tokens of the session
   */
  completionTokens: number;
  /**
   * Total tokens of the session
   */
  totalTokens: number;
};

/**
 * Session created
 */
export type CreateSessionResponseBody = {
  id: string;
  externalId: string;
  /**
   * Duration of the session in ms
   */
  duration: number;
  /**
   * List of contact ids
   */
  contactIds: Array<string>;
  billing: CreateSessionBilling;
  usage: CreateSessionSessionsUsage;
  /**
   * Total traces of the session
   */
  tracesCount: number;
  tags: Array<string>;
  /**
   * The workspace id
   */
  workspaceId: string;
  /**
   * The project id
   */
  projectId?: string | null | undefined;
  /**
   * The time when the session was created
   */
  startedAt?: Date | undefined;
  /**
   * The time when the session was updated
   */
  updatedAt?: Date | undefined;
};

/** @internal */
export const Billing$inboundSchema: z.ZodType<Billing, z.ZodTypeDef, unknown> =
  z.object({
    input_cost: z.number(),
    output_cost: z.number(),
    total_cost: z.number(),
  }).transform((v) => {
    return remap$(v, {
      "input_cost": "inputCost",
      "output_cost": "outputCost",
      "total_cost": "totalCost",
    });
  });

/** @internal */
export type Billing$Outbound = {
  input_cost: number;
  output_cost: number;
  total_cost: number;
};

/** @internal */
export const Billing$outboundSchema: z.ZodType<
  Billing$Outbound,
  z.ZodTypeDef,
  Billing
> = z.object({
  inputCost: z.number(),
  outputCost: z.number(),
  totalCost: z.number(),
}).transform((v) => {
  return remap$(v, {
    inputCost: "input_cost",
    outputCost: "output_cost",
    totalCost: "total_cost",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Billing$ {
  /** @deprecated use `Billing$inboundSchema` instead. */
  export const inboundSchema = Billing$inboundSchema;
  /** @deprecated use `Billing$outboundSchema` instead. */
  export const outboundSchema = Billing$outboundSchema;
  /** @deprecated use `Billing$Outbound` instead. */
  export type Outbound = Billing$Outbound;
}

export function billingToJSON(billing: Billing): string {
  return JSON.stringify(Billing$outboundSchema.parse(billing));
}

export function billingFromJSON(
  jsonString: string,
): SafeParseResult<Billing, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Billing$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Billing' from JSON`,
  );
}

/** @internal */
export const CreateSessionUsage$inboundSchema: z.ZodType<
  CreateSessionUsage,
  z.ZodTypeDef,
  unknown
> = z.object({
  prompt_tokens: z.number(),
  completion_tokens: z.number(),
  total_tokens: z.number(),
}).transform((v) => {
  return remap$(v, {
    "prompt_tokens": "promptTokens",
    "completion_tokens": "completionTokens",
    "total_tokens": "totalTokens",
  });
});

/** @internal */
export type CreateSessionUsage$Outbound = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};

/** @internal */
export const CreateSessionUsage$outboundSchema: z.ZodType<
  CreateSessionUsage$Outbound,
  z.ZodTypeDef,
  CreateSessionUsage
> = z.object({
  promptTokens: z.number(),
  completionTokens: z.number(),
  totalTokens: z.number(),
}).transform((v) => {
  return remap$(v, {
    promptTokens: "prompt_tokens",
    completionTokens: "completion_tokens",
    totalTokens: "total_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionUsage$ {
  /** @deprecated use `CreateSessionUsage$inboundSchema` instead. */
  export const inboundSchema = CreateSessionUsage$inboundSchema;
  /** @deprecated use `CreateSessionUsage$outboundSchema` instead. */
  export const outboundSchema = CreateSessionUsage$outboundSchema;
  /** @deprecated use `CreateSessionUsage$Outbound` instead. */
  export type Outbound = CreateSessionUsage$Outbound;
}

export function createSessionUsageToJSON(
  createSessionUsage: CreateSessionUsage,
): string {
  return JSON.stringify(
    CreateSessionUsage$outboundSchema.parse(createSessionUsage),
  );
}

export function createSessionUsageFromJSON(
  jsonString: string,
): SafeParseResult<CreateSessionUsage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSessionUsage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSessionUsage' from JSON`,
  );
}

/** @internal */
export const CreateSessionRequestBody$inboundSchema: z.ZodType<
  CreateSessionRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_id: z.string(),
  duration: z.number(),
  contact_ids: z.array(z.string()),
  billing: z.lazy(() => Billing$inboundSchema),
  usage: z.lazy(() => CreateSessionUsage$inboundSchema),
  traces_count: z.number(),
  tags: z.array(z.string()),
  project_id: z.nullable(z.string()).optional(),
  started_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
    "contact_ids": "contactIds",
    "traces_count": "tracesCount",
    "project_id": "projectId",
    "started_at": "startedAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CreateSessionRequestBody$Outbound = {
  external_id: string;
  duration: number;
  contact_ids: Array<string>;
  billing: Billing$Outbound;
  usage: CreateSessionUsage$Outbound;
  traces_count: number;
  tags: Array<string>;
  project_id?: string | null | undefined;
  started_at?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const CreateSessionRequestBody$outboundSchema: z.ZodType<
  CreateSessionRequestBody$Outbound,
  z.ZodTypeDef,
  CreateSessionRequestBody
> = z.object({
  externalId: z.string(),
  duration: z.number(),
  contactIds: z.array(z.string()),
  billing: z.lazy(() => Billing$outboundSchema),
  usage: z.lazy(() => CreateSessionUsage$outboundSchema),
  tracesCount: z.number(),
  tags: z.array(z.string()),
  projectId: z.nullable(z.string()).optional(),
  startedAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
    contactIds: "contact_ids",
    tracesCount: "traces_count",
    projectId: "project_id",
    startedAt: "started_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionRequestBody$ {
  /** @deprecated use `CreateSessionRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateSessionRequestBody$inboundSchema;
  /** @deprecated use `CreateSessionRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateSessionRequestBody$outboundSchema;
  /** @deprecated use `CreateSessionRequestBody$Outbound` instead. */
  export type Outbound = CreateSessionRequestBody$Outbound;
}

export function createSessionRequestBodyToJSON(
  createSessionRequestBody: CreateSessionRequestBody,
): string {
  return JSON.stringify(
    CreateSessionRequestBody$outboundSchema.parse(createSessionRequestBody),
  );
}

export function createSessionRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateSessionRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSessionRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSessionRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateSessionBilling$inboundSchema: z.ZodType<
  CreateSessionBilling,
  z.ZodTypeDef,
  unknown
> = z.object({
  input_cost: z.number(),
  output_cost: z.number(),
  total_cost: z.number(),
}).transform((v) => {
  return remap$(v, {
    "input_cost": "inputCost",
    "output_cost": "outputCost",
    "total_cost": "totalCost",
  });
});

/** @internal */
export type CreateSessionBilling$Outbound = {
  input_cost: number;
  output_cost: number;
  total_cost: number;
};

/** @internal */
export const CreateSessionBilling$outboundSchema: z.ZodType<
  CreateSessionBilling$Outbound,
  z.ZodTypeDef,
  CreateSessionBilling
> = z.object({
  inputCost: z.number(),
  outputCost: z.number(),
  totalCost: z.number(),
}).transform((v) => {
  return remap$(v, {
    inputCost: "input_cost",
    outputCost: "output_cost",
    totalCost: "total_cost",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionBilling$ {
  /** @deprecated use `CreateSessionBilling$inboundSchema` instead. */
  export const inboundSchema = CreateSessionBilling$inboundSchema;
  /** @deprecated use `CreateSessionBilling$outboundSchema` instead. */
  export const outboundSchema = CreateSessionBilling$outboundSchema;
  /** @deprecated use `CreateSessionBilling$Outbound` instead. */
  export type Outbound = CreateSessionBilling$Outbound;
}

export function createSessionBillingToJSON(
  createSessionBilling: CreateSessionBilling,
): string {
  return JSON.stringify(
    CreateSessionBilling$outboundSchema.parse(createSessionBilling),
  );
}

export function createSessionBillingFromJSON(
  jsonString: string,
): SafeParseResult<CreateSessionBilling, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSessionBilling$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSessionBilling' from JSON`,
  );
}

/** @internal */
export const CreateSessionSessionsUsage$inboundSchema: z.ZodType<
  CreateSessionSessionsUsage,
  z.ZodTypeDef,
  unknown
> = z.object({
  prompt_tokens: z.number(),
  completion_tokens: z.number(),
  total_tokens: z.number(),
}).transform((v) => {
  return remap$(v, {
    "prompt_tokens": "promptTokens",
    "completion_tokens": "completionTokens",
    "total_tokens": "totalTokens",
  });
});

/** @internal */
export type CreateSessionSessionsUsage$Outbound = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};

/** @internal */
export const CreateSessionSessionsUsage$outboundSchema: z.ZodType<
  CreateSessionSessionsUsage$Outbound,
  z.ZodTypeDef,
  CreateSessionSessionsUsage
> = z.object({
  promptTokens: z.number(),
  completionTokens: z.number(),
  totalTokens: z.number(),
}).transform((v) => {
  return remap$(v, {
    promptTokens: "prompt_tokens",
    completionTokens: "completion_tokens",
    totalTokens: "total_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionSessionsUsage$ {
  /** @deprecated use `CreateSessionSessionsUsage$inboundSchema` instead. */
  export const inboundSchema = CreateSessionSessionsUsage$inboundSchema;
  /** @deprecated use `CreateSessionSessionsUsage$outboundSchema` instead. */
  export const outboundSchema = CreateSessionSessionsUsage$outboundSchema;
  /** @deprecated use `CreateSessionSessionsUsage$Outbound` instead. */
  export type Outbound = CreateSessionSessionsUsage$Outbound;
}

export function createSessionSessionsUsageToJSON(
  createSessionSessionsUsage: CreateSessionSessionsUsage,
): string {
  return JSON.stringify(
    CreateSessionSessionsUsage$outboundSchema.parse(createSessionSessionsUsage),
  );
}

export function createSessionSessionsUsageFromJSON(
  jsonString: string,
): SafeParseResult<CreateSessionSessionsUsage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSessionSessionsUsage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSessionSessionsUsage' from JSON`,
  );
}

/** @internal */
export const CreateSessionResponseBody$inboundSchema: z.ZodType<
  CreateSessionResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  external_id: z.string(),
  duration: z.number(),
  contact_ids: z.array(z.string()),
  billing: z.lazy(() => CreateSessionBilling$inboundSchema),
  usage: z.lazy(() => CreateSessionSessionsUsage$inboundSchema),
  traces_count: z.number(),
  tags: z.array(z.string()),
  workspace_id: z.string(),
  project_id: z.nullable(z.string()).optional(),
  started_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "external_id": "externalId",
    "contact_ids": "contactIds",
    "traces_count": "tracesCount",
    "workspace_id": "workspaceId",
    "project_id": "projectId",
    "started_at": "startedAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CreateSessionResponseBody$Outbound = {
  _id: string;
  external_id: string;
  duration: number;
  contact_ids: Array<string>;
  billing: CreateSessionBilling$Outbound;
  usage: CreateSessionSessionsUsage$Outbound;
  traces_count: number;
  tags: Array<string>;
  workspace_id: string;
  project_id?: string | null | undefined;
  started_at?: string | undefined;
  updated_at?: string | undefined;
};

/** @internal */
export const CreateSessionResponseBody$outboundSchema: z.ZodType<
  CreateSessionResponseBody$Outbound,
  z.ZodTypeDef,
  CreateSessionResponseBody
> = z.object({
  id: z.string(),
  externalId: z.string(),
  duration: z.number(),
  contactIds: z.array(z.string()),
  billing: z.lazy(() => CreateSessionBilling$outboundSchema),
  usage: z.lazy(() => CreateSessionSessionsUsage$outboundSchema),
  tracesCount: z.number(),
  tags: z.array(z.string()),
  workspaceId: z.string(),
  projectId: z.nullable(z.string()).optional(),
  startedAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    externalId: "external_id",
    contactIds: "contact_ids",
    tracesCount: "traces_count",
    workspaceId: "workspace_id",
    projectId: "project_id",
    startedAt: "started_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionResponseBody$ {
  /** @deprecated use `CreateSessionResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateSessionResponseBody$inboundSchema;
  /** @deprecated use `CreateSessionResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateSessionResponseBody$outboundSchema;
  /** @deprecated use `CreateSessionResponseBody$Outbound` instead. */
  export type Outbound = CreateSessionResponseBody$Outbound;
}

export function createSessionResponseBodyToJSON(
  createSessionResponseBody: CreateSessionResponseBody,
): string {
  return JSON.stringify(
    CreateSessionResponseBody$outboundSchema.parse(createSessionResponseBody),
  );
}

export function createSessionResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateSessionResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSessionResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSessionResponseBody' from JSON`,
  );
}
