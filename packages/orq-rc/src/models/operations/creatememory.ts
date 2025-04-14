/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateMemoryRequestBody = {
  entityId: string;
  tags: { [k: string]: string };
};

export type CreateMemoryRequest = {
  /**
   * The unique key identifier of the memory store
   */
  memoryStoreKey: string;
  requestBody?: CreateMemoryRequestBody | undefined;
};

/**
 * Memory successfully created.
 */
export type CreateMemoryResponseBody = {
  id: string;
  entityId: string;
  created: string;
  updated: string;
  createdById?: string | null | undefined;
  updatedById?: string | null | undefined;
  storeId: string;
  tags: { [k: string]: string };
  workspaceId: string;
};

/** @internal */
export const CreateMemoryRequestBody$inboundSchema: z.ZodType<
  CreateMemoryRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  entity_id: z.string(),
  tags: z.record(z.string()),
}).transform((v) => {
  return remap$(v, {
    "entity_id": "entityId",
  });
});

/** @internal */
export type CreateMemoryRequestBody$Outbound = {
  entity_id: string;
  tags: { [k: string]: string };
};

/** @internal */
export const CreateMemoryRequestBody$outboundSchema: z.ZodType<
  CreateMemoryRequestBody$Outbound,
  z.ZodTypeDef,
  CreateMemoryRequestBody
> = z.object({
  entityId: z.string(),
  tags: z.record(z.string()),
}).transform((v) => {
  return remap$(v, {
    entityId: "entity_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMemoryRequestBody$ {
  /** @deprecated use `CreateMemoryRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateMemoryRequestBody$inboundSchema;
  /** @deprecated use `CreateMemoryRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateMemoryRequestBody$outboundSchema;
  /** @deprecated use `CreateMemoryRequestBody$Outbound` instead. */
  export type Outbound = CreateMemoryRequestBody$Outbound;
}

export function createMemoryRequestBodyToJSON(
  createMemoryRequestBody: CreateMemoryRequestBody,
): string {
  return JSON.stringify(
    CreateMemoryRequestBody$outboundSchema.parse(createMemoryRequestBody),
  );
}

export function createMemoryRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateMemoryRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMemoryRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMemoryRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateMemoryRequest$inboundSchema: z.ZodType<
  CreateMemoryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  memory_store_key: z.string(),
  RequestBody: z.lazy(() => CreateMemoryRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "memory_store_key": "memoryStoreKey",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateMemoryRequest$Outbound = {
  memory_store_key: string;
  RequestBody?: CreateMemoryRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateMemoryRequest$outboundSchema: z.ZodType<
  CreateMemoryRequest$Outbound,
  z.ZodTypeDef,
  CreateMemoryRequest
> = z.object({
  memoryStoreKey: z.string(),
  requestBody: z.lazy(() => CreateMemoryRequestBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    memoryStoreKey: "memory_store_key",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMemoryRequest$ {
  /** @deprecated use `CreateMemoryRequest$inboundSchema` instead. */
  export const inboundSchema = CreateMemoryRequest$inboundSchema;
  /** @deprecated use `CreateMemoryRequest$outboundSchema` instead. */
  export const outboundSchema = CreateMemoryRequest$outboundSchema;
  /** @deprecated use `CreateMemoryRequest$Outbound` instead. */
  export type Outbound = CreateMemoryRequest$Outbound;
}

export function createMemoryRequestToJSON(
  createMemoryRequest: CreateMemoryRequest,
): string {
  return JSON.stringify(
    CreateMemoryRequest$outboundSchema.parse(createMemoryRequest),
  );
}

export function createMemoryRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateMemoryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMemoryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMemoryRequest' from JSON`,
  );
}

/** @internal */
export const CreateMemoryResponseBody$inboundSchema: z.ZodType<
  CreateMemoryResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  entity_id: z.string(),
  created: z.string(),
  updated: z.string(),
  created_by_id: z.nullable(z.string()).optional(),
  updated_by_id: z.nullable(z.string()).optional(),
  store_id: z.string(),
  tags: z.record(z.string()),
  workspace_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "entity_id": "entityId",
    "created_by_id": "createdById",
    "updated_by_id": "updatedById",
    "store_id": "storeId",
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type CreateMemoryResponseBody$Outbound = {
  _id: string;
  entity_id: string;
  created: string;
  updated: string;
  created_by_id?: string | null | undefined;
  updated_by_id?: string | null | undefined;
  store_id: string;
  tags: { [k: string]: string };
  workspace_id: string;
};

/** @internal */
export const CreateMemoryResponseBody$outboundSchema: z.ZodType<
  CreateMemoryResponseBody$Outbound,
  z.ZodTypeDef,
  CreateMemoryResponseBody
> = z.object({
  id: z.string(),
  entityId: z.string(),
  created: z.string(),
  updated: z.string(),
  createdById: z.nullable(z.string()).optional(),
  updatedById: z.nullable(z.string()).optional(),
  storeId: z.string(),
  tags: z.record(z.string()),
  workspaceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    entityId: "entity_id",
    createdById: "created_by_id",
    updatedById: "updated_by_id",
    storeId: "store_id",
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMemoryResponseBody$ {
  /** @deprecated use `CreateMemoryResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateMemoryResponseBody$inboundSchema;
  /** @deprecated use `CreateMemoryResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateMemoryResponseBody$outboundSchema;
  /** @deprecated use `CreateMemoryResponseBody$Outbound` instead. */
  export type Outbound = CreateMemoryResponseBody$Outbound;
}

export function createMemoryResponseBodyToJSON(
  createMemoryResponseBody: CreateMemoryResponseBody,
): string {
  return JSON.stringify(
    CreateMemoryResponseBody$outboundSchema.parse(createMemoryResponseBody),
  );
}

export function createMemoryResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateMemoryResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMemoryResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMemoryResponseBody' from JSON`,
  );
}
