/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListChunksRequest = {
  /**
   * The unique identifier of the knowledge base
   */
  knowledgeId: string;
  /**
   * The unique identifier of the datasource.
   */
  datasourceId: string;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 50, and the default is 10
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 20 objects, ending with `01JJ1HDHN79XAS7A01WB3HYSDB`, your subsequent call can include `after=01JJ1HDHN79XAS7A01WB3HYSDB` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 20 objects, starting with `01JJ1HDHN79XAS7A01WB3HYSDB`, your subsequent call can include `before=01JJ1HDHN79XAS7A01WB3HYSDB` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
};

export const ListChunksObject = {
  List: "list",
} as const;
export type ListChunksObject = ClosedEnum<typeof ListChunksObject>;

/**
 * The status of the chunk
 */
export const ListChunksStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  Queued: "queued",
} as const;
/**
 * The status of the chunk
 */
export type ListChunksStatus = ClosedEnum<typeof ListChunksStatus>;

export type ListChunksData = {
  /**
   * The unique identifier of the chunk
   */
  id: string;
  /**
   * The text content of the chunk
   */
  text: string;
  /**
   * Metadata of the chunk. Can include `page_number` or any other key-value pairs. Only values of type string are supported.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Whether the chunk is enabled
   */
  enabled: boolean;
  /**
   * The status of the chunk
   */
  status: ListChunksStatus;
  /**
   * The date and time the chunk was created
   */
  created: string;
  /**
   * The date and time the chunk was updated
   */
  updated: string;
  /**
   * The unique identifier of the user who created the chunk
   */
  createdById?: string | undefined;
  /**
   * The unique identifier of the user who updated the chunk
   */
  updateById?: string | undefined;
};

/**
 * Chunks successfully retrieved
 */
export type ListChunksResponseBody = {
  object: ListChunksObject;
  data: Array<ListChunksData>;
  hasMore: boolean;
};

/** @internal */
export const ListChunksRequest$inboundSchema: z.ZodType<
  ListChunksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowledge_id: z.string(),
  datasource_id: z.string(),
  limit: z.number().default(10),
  starting_after: z.string().optional(),
  ending_before: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "knowledge_id": "knowledgeId",
    "datasource_id": "datasourceId",
    "starting_after": "startingAfter",
    "ending_before": "endingBefore",
  });
});

/** @internal */
export type ListChunksRequest$Outbound = {
  knowledge_id: string;
  datasource_id: string;
  limit: number;
  starting_after?: string | undefined;
  ending_before?: string | undefined;
};

/** @internal */
export const ListChunksRequest$outboundSchema: z.ZodType<
  ListChunksRequest$Outbound,
  z.ZodTypeDef,
  ListChunksRequest
> = z.object({
  knowledgeId: z.string(),
  datasourceId: z.string(),
  limit: z.number().default(10),
  startingAfter: z.string().optional(),
  endingBefore: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    knowledgeId: "knowledge_id",
    datasourceId: "datasource_id",
    startingAfter: "starting_after",
    endingBefore: "ending_before",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListChunksRequest$ {
  /** @deprecated use `ListChunksRequest$inboundSchema` instead. */
  export const inboundSchema = ListChunksRequest$inboundSchema;
  /** @deprecated use `ListChunksRequest$outboundSchema` instead. */
  export const outboundSchema = ListChunksRequest$outboundSchema;
  /** @deprecated use `ListChunksRequest$Outbound` instead. */
  export type Outbound = ListChunksRequest$Outbound;
}

export function listChunksRequestToJSON(
  listChunksRequest: ListChunksRequest,
): string {
  return JSON.stringify(
    ListChunksRequest$outboundSchema.parse(listChunksRequest),
  );
}

export function listChunksRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListChunksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListChunksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListChunksRequest' from JSON`,
  );
}

/** @internal */
export const ListChunksObject$inboundSchema: z.ZodNativeEnum<
  typeof ListChunksObject
> = z.nativeEnum(ListChunksObject);

/** @internal */
export const ListChunksObject$outboundSchema: z.ZodNativeEnum<
  typeof ListChunksObject
> = ListChunksObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListChunksObject$ {
  /** @deprecated use `ListChunksObject$inboundSchema` instead. */
  export const inboundSchema = ListChunksObject$inboundSchema;
  /** @deprecated use `ListChunksObject$outboundSchema` instead. */
  export const outboundSchema = ListChunksObject$outboundSchema;
}

/** @internal */
export const ListChunksStatus$inboundSchema: z.ZodNativeEnum<
  typeof ListChunksStatus
> = z.nativeEnum(ListChunksStatus);

/** @internal */
export const ListChunksStatus$outboundSchema: z.ZodNativeEnum<
  typeof ListChunksStatus
> = ListChunksStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListChunksStatus$ {
  /** @deprecated use `ListChunksStatus$inboundSchema` instead. */
  export const inboundSchema = ListChunksStatus$inboundSchema;
  /** @deprecated use `ListChunksStatus$outboundSchema` instead. */
  export const outboundSchema = ListChunksStatus$outboundSchema;
}

/** @internal */
export const ListChunksData$inboundSchema: z.ZodType<
  ListChunksData,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  text: z.string(),
  metadata: z.record(z.string()).optional(),
  enabled: z.boolean(),
  status: ListChunksStatus$inboundSchema,
  created: z.string(),
  updated: z.string(),
  created_by_id: z.string().optional(),
  update_by_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "created_by_id": "createdById",
    "update_by_id": "updateById",
  });
});

/** @internal */
export type ListChunksData$Outbound = {
  _id: string;
  text: string;
  metadata?: { [k: string]: string } | undefined;
  enabled: boolean;
  status: string;
  created: string;
  updated: string;
  created_by_id?: string | undefined;
  update_by_id?: string | undefined;
};

/** @internal */
export const ListChunksData$outboundSchema: z.ZodType<
  ListChunksData$Outbound,
  z.ZodTypeDef,
  ListChunksData
> = z.object({
  id: z.string(),
  text: z.string(),
  metadata: z.record(z.string()).optional(),
  enabled: z.boolean(),
  status: ListChunksStatus$outboundSchema,
  created: z.string(),
  updated: z.string(),
  createdById: z.string().optional(),
  updateById: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    createdById: "created_by_id",
    updateById: "update_by_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListChunksData$ {
  /** @deprecated use `ListChunksData$inboundSchema` instead. */
  export const inboundSchema = ListChunksData$inboundSchema;
  /** @deprecated use `ListChunksData$outboundSchema` instead. */
  export const outboundSchema = ListChunksData$outboundSchema;
  /** @deprecated use `ListChunksData$Outbound` instead. */
  export type Outbound = ListChunksData$Outbound;
}

export function listChunksDataToJSON(listChunksData: ListChunksData): string {
  return JSON.stringify(ListChunksData$outboundSchema.parse(listChunksData));
}

export function listChunksDataFromJSON(
  jsonString: string,
): SafeParseResult<ListChunksData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListChunksData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListChunksData' from JSON`,
  );
}

/** @internal */
export const ListChunksResponseBody$inboundSchema: z.ZodType<
  ListChunksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: ListChunksObject$inboundSchema,
  data: z.array(z.lazy(() => ListChunksData$inboundSchema)),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "has_more": "hasMore",
  });
});

/** @internal */
export type ListChunksResponseBody$Outbound = {
  object: string;
  data: Array<ListChunksData$Outbound>;
  has_more: boolean;
};

/** @internal */
export const ListChunksResponseBody$outboundSchema: z.ZodType<
  ListChunksResponseBody$Outbound,
  z.ZodTypeDef,
  ListChunksResponseBody
> = z.object({
  object: ListChunksObject$outboundSchema,
  data: z.array(z.lazy(() => ListChunksData$outboundSchema)),
  hasMore: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    hasMore: "has_more",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListChunksResponseBody$ {
  /** @deprecated use `ListChunksResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListChunksResponseBody$inboundSchema;
  /** @deprecated use `ListChunksResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListChunksResponseBody$outboundSchema;
  /** @deprecated use `ListChunksResponseBody$Outbound` instead. */
  export type Outbound = ListChunksResponseBody$Outbound;
}

export function listChunksResponseBodyToJSON(
  listChunksResponseBody: ListChunksResponseBody,
): string {
  return JSON.stringify(
    ListChunksResponseBody$outboundSchema.parse(listChunksResponseBody),
  );
}

export function listChunksResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListChunksResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListChunksResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListChunksResponseBody' from JSON`,
  );
}
