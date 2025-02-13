/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Update user information payload
 */
export type CreateContactRequestBody = {
  /**
   * Unique string value to identify the contact user in the customer's system
   */
  externalId: string;
  /**
   * Display name or nickname of the user
   */
  displayName?: string | null | undefined;
  /**
   * Email address of the user
   */
  email?: string | null | undefined;
  /**
   * URL linking to the user's avatar image
   */
  avatarUrl?: string | null | undefined;
  /**
   * Array of UUIDs representing tags associated with the user
   */
  tags?: Array<string> | undefined;
  /**
   * Additional custom metadata associated with the user as key-value pairs
   */
  metadata?: { [k: string]: any } | undefined;
};

/**
 * Successful operation
 */
export type CreateContactResponseBody = {
  /**
   * Unique ULID (Universally Unique Lexicographically Sortable Identifier) for the user
   */
  id: string;
  /**
   * Unique string value to identify the contact user in the customer's system
   */
  externalId: string;
  /**
   * Display name or nickname of the user
   */
  displayName?: string | null | undefined;
  /**
   * Email address of the user
   */
  email?: string | null | undefined;
  /**
   * URL linking to the user's avatar image
   */
  avatarUrl?: string | null | undefined;
  /**
   * Array of UUIDs representing tags associated with the user
   */
  tags?: Array<string> | undefined;
  /**
   * Additional custom metadata associated with the user as key-value pairs
   */
  metadata?: { [k: string]: any } | undefined;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
  /**
   * The date and time the resource was last updated
   */
  updated?: Date | undefined;
};

/** @internal */
export const CreateContactRequestBody$inboundSchema: z.ZodType<
  CreateContactRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_id: z.string(),
  display_name: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  avatar_url: z.nullable(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  metadata: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
    "display_name": "displayName",
    "avatar_url": "avatarUrl",
  });
});

/** @internal */
export type CreateContactRequestBody$Outbound = {
  external_id: string;
  display_name?: string | null | undefined;
  email?: string | null | undefined;
  avatar_url?: string | null | undefined;
  tags?: Array<string> | undefined;
  metadata?: { [k: string]: any } | undefined;
};

/** @internal */
export const CreateContactRequestBody$outboundSchema: z.ZodType<
  CreateContactRequestBody$Outbound,
  z.ZodTypeDef,
  CreateContactRequestBody
> = z.object({
  externalId: z.string(),
  displayName: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  avatarUrl: z.nullable(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  metadata: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
    displayName: "display_name",
    avatarUrl: "avatar_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateContactRequestBody$ {
  /** @deprecated use `CreateContactRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateContactRequestBody$inboundSchema;
  /** @deprecated use `CreateContactRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateContactRequestBody$outboundSchema;
  /** @deprecated use `CreateContactRequestBody$Outbound` instead. */
  export type Outbound = CreateContactRequestBody$Outbound;
}

export function createContactRequestBodyToJSON(
  createContactRequestBody: CreateContactRequestBody,
): string {
  return JSON.stringify(
    CreateContactRequestBody$outboundSchema.parse(createContactRequestBody),
  );
}

export function createContactRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateContactRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateContactRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateContactRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateContactResponseBody$inboundSchema: z.ZodType<
  CreateContactResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  external_id: z.string(),
  display_name: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  avatar_url: z.nullable(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  metadata: z.record(z.any()).optional(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2025-02-13T15:49:15.702Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
    "display_name": "displayName",
    "avatar_url": "avatarUrl",
  });
});

/** @internal */
export type CreateContactResponseBody$Outbound = {
  id: string;
  external_id: string;
  display_name?: string | null | undefined;
  email?: string | null | undefined;
  avatar_url?: string | null | undefined;
  tags?: Array<string> | undefined;
  metadata?: { [k: string]: any } | undefined;
  created?: string | undefined;
  updated: string;
};

/** @internal */
export const CreateContactResponseBody$outboundSchema: z.ZodType<
  CreateContactResponseBody$Outbound,
  z.ZodTypeDef,
  CreateContactResponseBody
> = z.object({
  id: z.string(),
  externalId: z.string(),
  displayName: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  avatarUrl: z.nullable(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  metadata: z.record(z.any()).optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2025-02-13T15:49:15.702Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
    displayName: "display_name",
    avatarUrl: "avatar_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateContactResponseBody$ {
  /** @deprecated use `CreateContactResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateContactResponseBody$inboundSchema;
  /** @deprecated use `CreateContactResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateContactResponseBody$outboundSchema;
  /** @deprecated use `CreateContactResponseBody$Outbound` instead. */
  export type Outbound = CreateContactResponseBody$Outbound;
}

export function createContactResponseBodyToJSON(
  createContactResponseBody: CreateContactResponseBody,
): string {
  return JSON.stringify(
    CreateContactResponseBody$outboundSchema.parse(createContactResponseBody),
  );
}

export function createContactResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateContactResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateContactResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateContactResponseBody' from JSON`,
  );
}
