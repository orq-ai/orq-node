/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Contact profile information
 */
export type CreateContactRequestBody = {
  /**
   * Unique string value to identify the contact user in the customer's system. This should be the same ID you use in your system to reference this user.
   */
  externalId: string;
  /**
   * Display name or nickname of the contact user. This is typically shown in user interfaces.
   */
  displayName?: string | null | undefined;
  /**
   * Email address of the contact user
   */
  email?: string | null | undefined;
  /**
   * URL linking to the contact user's avatar image
   */
  avatarUrl?: string | null | undefined;
  /**
   * Array of tags associated with the contact. Useful for organizing and filtering contacts by categories, departments, or custom classifications.
   */
  tags?: Array<string> | undefined;
  /**
   * Additional custom metadata associated with the contact as key-value pairs. Use this to store any extra information specific to your application.
   */
  metadata?: { [k: string]: any } | undefined;
};

/**
 * Created Contact
 */
export type CreateContactResponseBody = {
  /**
   * Unique ULID (Universally Unique Lexicographically Sortable Identifier) for the contact
   */
  id: string;
  /**
   * Unique string value to identify the contact user in the customer's system. This should be the same ID you use in your system to reference this user.
   */
  externalId: string;
  /**
   * Unique identifier for the workspace to which the contact belongs
   */
  workspaceId: string;
  /**
   * Display name or nickname of the contact user. This is typically shown in user interfaces.
   */
  displayName?: string | null | undefined;
  /**
   * Email address of the contact user
   */
  email?: string | null | undefined;
  /**
   * URL linking to the contact user's avatar image
   */
  avatarUrl?: string | null | undefined;
  /**
   * Array of tags associated with the contact. Useful for organizing and filtering contacts by categories, departments, or custom classifications.
   */
  tags?: Array<string> | undefined;
  /**
   * Additional custom metadata associated with the contact as key-value pairs. Use this to store any extra information specific to your application.
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
  _id: z.string(),
  external_id: z.string(),
  workspace_id: z.string(),
  display_name: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  avatar_url: z.nullable(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  metadata: z.record(z.any()).optional(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2025-07-25T10:00:00.471Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "external_id": "externalId",
    "workspace_id": "workspaceId",
    "display_name": "displayName",
    "avatar_url": "avatarUrl",
  });
});

/** @internal */
export type CreateContactResponseBody$Outbound = {
  _id: string;
  external_id: string;
  workspace_id: string;
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
  workspaceId: z.string(),
  displayName: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  avatarUrl: z.nullable(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  metadata: z.record(z.any()).optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2025-07-25T10:00:00.471Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    externalId: "external_id",
    workspaceId: "workspace_id",
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
