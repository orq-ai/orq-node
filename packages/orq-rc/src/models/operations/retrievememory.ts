/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveMemoryRequest = {
  /**
   * The unique key identifier of the memory store
   */
  memoryStoreKey: string;
  /**
   * The unique identifier of the memory
   */
  memoryId: string;
};

/**
 * Memory successfully retrieved.
 */
export type RetrieveMemoryResponseBody = {
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
export const RetrieveMemoryRequest$inboundSchema: z.ZodType<
  RetrieveMemoryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  memory_store_key: z.string(),
  memory_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "memory_store_key": "memoryStoreKey",
    "memory_id": "memoryId",
  });
});

/** @internal */
export type RetrieveMemoryRequest$Outbound = {
  memory_store_key: string;
  memory_id: string;
};

/** @internal */
export const RetrieveMemoryRequest$outboundSchema: z.ZodType<
  RetrieveMemoryRequest$Outbound,
  z.ZodTypeDef,
  RetrieveMemoryRequest
> = z.object({
  memoryStoreKey: z.string(),
  memoryId: z.string(),
}).transform((v) => {
  return remap$(v, {
    memoryStoreKey: "memory_store_key",
    memoryId: "memory_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveMemoryRequest$ {
  /** @deprecated use `RetrieveMemoryRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveMemoryRequest$inboundSchema;
  /** @deprecated use `RetrieveMemoryRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveMemoryRequest$outboundSchema;
  /** @deprecated use `RetrieveMemoryRequest$Outbound` instead. */
  export type Outbound = RetrieveMemoryRequest$Outbound;
}

export function retrieveMemoryRequestToJSON(
  retrieveMemoryRequest: RetrieveMemoryRequest,
): string {
  return JSON.stringify(
    RetrieveMemoryRequest$outboundSchema.parse(retrieveMemoryRequest),
  );
}

export function retrieveMemoryRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveMemoryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveMemoryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveMemoryRequest' from JSON`,
  );
}

/** @internal */
export const RetrieveMemoryResponseBody$inboundSchema: z.ZodType<
  RetrieveMemoryResponseBody,
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
export type RetrieveMemoryResponseBody$Outbound = {
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
export const RetrieveMemoryResponseBody$outboundSchema: z.ZodType<
  RetrieveMemoryResponseBody$Outbound,
  z.ZodTypeDef,
  RetrieveMemoryResponseBody
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
export namespace RetrieveMemoryResponseBody$ {
  /** @deprecated use `RetrieveMemoryResponseBody$inboundSchema` instead. */
  export const inboundSchema = RetrieveMemoryResponseBody$inboundSchema;
  /** @deprecated use `RetrieveMemoryResponseBody$outboundSchema` instead. */
  export const outboundSchema = RetrieveMemoryResponseBody$outboundSchema;
  /** @deprecated use `RetrieveMemoryResponseBody$Outbound` instead. */
  export type Outbound = RetrieveMemoryResponseBody$Outbound;
}

export function retrieveMemoryResponseBodyToJSON(
  retrieveMemoryResponseBody: RetrieveMemoryResponseBody,
): string {
  return JSON.stringify(
    RetrieveMemoryResponseBody$outboundSchema.parse(retrieveMemoryResponseBody),
  );
}

export function retrieveMemoryResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveMemoryResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveMemoryResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveMemoryResponseBody' from JSON`,
  );
}
