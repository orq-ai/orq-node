/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListKnowledgeBasesRequest = {
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

export const ListKnowledgeBasesObject = {
  List: "list",
} as const;
export type ListKnowledgeBasesObject = ClosedEnum<
  typeof ListKnowledgeBasesObject
>;

/**
 * The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.
 */
export const ListKnowledgeBasesRetrievalType = {
  VectorSearch: "vector_search",
  KeywordSearch: "keyword_search",
  HybridSearch: "hybrid_search",
} as const;
/**
 * The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.
 */
export type ListKnowledgeBasesRetrievalType = ClosedEnum<
  typeof ListKnowledgeBasesRetrievalType
>;

/**
 * The rerank configuration for the knowledge base. In case the model is provided it will be used to enhance the search precision.
 */
export type ListKnowledgeBasesRerankConfig = {
  /**
   * The threshold value used to filter the rerank results, only documents with a relevance score greater than the threshold will be returned
   */
  rerankThreshold?: number | undefined;
  /**
   * The rerank model to use for the knowledge base.
   */
  rerankModel: string;
};

/**
 * The retrieval settings for the knowledge base. If not provider, Hybrid Search will be used as a default query strategy.
 */
export type ListKnowledgeBasesRetrievalSettings = {
  /**
   * The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.
   */
  retrievalType?: ListKnowledgeBasesRetrievalType | undefined;
  /**
   * The number of results to return from the search.
   */
  topK?: number | undefined;
  /**
   * The threshold value used to filter the search results, only documents with a relevance score greater than the threshold will be returned
   */
  threshold?: number | undefined;
  /**
   * The rerank configuration for the knowledge base. In case the model is provided it will be used to enhance the search precision.
   */
  rerankConfig?: ListKnowledgeBasesRerankConfig | undefined;
};

/**
 * Knowledge Base object
 */
export type ListKnowledgeBasesData = {
  /**
   * The unique identifier of the knowledge base.
   */
  id: string;
  /**
   * The creation date of the knowledge base.
   */
  created: string;
  /**
   * The description of the knowledge base.
   */
  description?: string | undefined;
  /**
   * The unique key of the knowledge base.
   */
  key: string;
  /**
   * The embeddings model used for the knowledge base.
   */
  model: string;
  /**
   * The path where the entity is stored in the project structure. The first element of the path always represents the project name. Any subsequent path element after the project will be created as a folder in the project if it does not exists.
   */
  path?: string | undefined;
  /**
   * The retrieval settings for the knowledge base. If not provider, Hybrid Search will be used as a default query strategy.
   */
  retrievalSettings?: ListKnowledgeBasesRetrievalSettings | undefined;
  createdById?: string | null | undefined;
  updatedById?: string | null | undefined;
  /**
   * The last update date of the knowledge base.
   */
  updated: string;
};

/**
 * Knowledge bases retrieved
 */
export type ListKnowledgeBasesResponseBody = {
  object: ListKnowledgeBasesObject;
  data: Array<ListKnowledgeBasesData>;
  hasMore: boolean;
};

/** @internal */
export const ListKnowledgeBasesRequest$inboundSchema: z.ZodType<
  ListKnowledgeBasesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().default(10),
  starting_after: z.string().optional(),
  ending_before: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "starting_after": "startingAfter",
    "ending_before": "endingBefore",
  });
});

/** @internal */
export type ListKnowledgeBasesRequest$Outbound = {
  limit: number;
  starting_after?: string | undefined;
  ending_before?: string | undefined;
};

/** @internal */
export const ListKnowledgeBasesRequest$outboundSchema: z.ZodType<
  ListKnowledgeBasesRequest$Outbound,
  z.ZodTypeDef,
  ListKnowledgeBasesRequest
> = z.object({
  limit: z.number().default(10),
  startingAfter: z.string().optional(),
  endingBefore: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    startingAfter: "starting_after",
    endingBefore: "ending_before",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListKnowledgeBasesRequest$ {
  /** @deprecated use `ListKnowledgeBasesRequest$inboundSchema` instead. */
  export const inboundSchema = ListKnowledgeBasesRequest$inboundSchema;
  /** @deprecated use `ListKnowledgeBasesRequest$outboundSchema` instead. */
  export const outboundSchema = ListKnowledgeBasesRequest$outboundSchema;
  /** @deprecated use `ListKnowledgeBasesRequest$Outbound` instead. */
  export type Outbound = ListKnowledgeBasesRequest$Outbound;
}

export function listKnowledgeBasesRequestToJSON(
  listKnowledgeBasesRequest: ListKnowledgeBasesRequest,
): string {
  return JSON.stringify(
    ListKnowledgeBasesRequest$outboundSchema.parse(listKnowledgeBasesRequest),
  );
}

export function listKnowledgeBasesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListKnowledgeBasesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListKnowledgeBasesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListKnowledgeBasesRequest' from JSON`,
  );
}

/** @internal */
export const ListKnowledgeBasesObject$inboundSchema: z.ZodNativeEnum<
  typeof ListKnowledgeBasesObject
> = z.nativeEnum(ListKnowledgeBasesObject);

/** @internal */
export const ListKnowledgeBasesObject$outboundSchema: z.ZodNativeEnum<
  typeof ListKnowledgeBasesObject
> = ListKnowledgeBasesObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListKnowledgeBasesObject$ {
  /** @deprecated use `ListKnowledgeBasesObject$inboundSchema` instead. */
  export const inboundSchema = ListKnowledgeBasesObject$inboundSchema;
  /** @deprecated use `ListKnowledgeBasesObject$outboundSchema` instead. */
  export const outboundSchema = ListKnowledgeBasesObject$outboundSchema;
}

/** @internal */
export const ListKnowledgeBasesRetrievalType$inboundSchema: z.ZodNativeEnum<
  typeof ListKnowledgeBasesRetrievalType
> = z.nativeEnum(ListKnowledgeBasesRetrievalType);

/** @internal */
export const ListKnowledgeBasesRetrievalType$outboundSchema: z.ZodNativeEnum<
  typeof ListKnowledgeBasesRetrievalType
> = ListKnowledgeBasesRetrievalType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListKnowledgeBasesRetrievalType$ {
  /** @deprecated use `ListKnowledgeBasesRetrievalType$inboundSchema` instead. */
  export const inboundSchema = ListKnowledgeBasesRetrievalType$inboundSchema;
  /** @deprecated use `ListKnowledgeBasesRetrievalType$outboundSchema` instead. */
  export const outboundSchema = ListKnowledgeBasesRetrievalType$outboundSchema;
}

/** @internal */
export const ListKnowledgeBasesRerankConfig$inboundSchema: z.ZodType<
  ListKnowledgeBasesRerankConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  rerank_threshold: z.number().default(0.5),
  rerank_model: z.string(),
}).transform((v) => {
  return remap$(v, {
    "rerank_threshold": "rerankThreshold",
    "rerank_model": "rerankModel",
  });
});

/** @internal */
export type ListKnowledgeBasesRerankConfig$Outbound = {
  rerank_threshold: number;
  rerank_model: string;
};

/** @internal */
export const ListKnowledgeBasesRerankConfig$outboundSchema: z.ZodType<
  ListKnowledgeBasesRerankConfig$Outbound,
  z.ZodTypeDef,
  ListKnowledgeBasesRerankConfig
> = z.object({
  rerankThreshold: z.number().default(0.5),
  rerankModel: z.string(),
}).transform((v) => {
  return remap$(v, {
    rerankThreshold: "rerank_threshold",
    rerankModel: "rerank_model",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListKnowledgeBasesRerankConfig$ {
  /** @deprecated use `ListKnowledgeBasesRerankConfig$inboundSchema` instead. */
  export const inboundSchema = ListKnowledgeBasesRerankConfig$inboundSchema;
  /** @deprecated use `ListKnowledgeBasesRerankConfig$outboundSchema` instead. */
  export const outboundSchema = ListKnowledgeBasesRerankConfig$outboundSchema;
  /** @deprecated use `ListKnowledgeBasesRerankConfig$Outbound` instead. */
  export type Outbound = ListKnowledgeBasesRerankConfig$Outbound;
}

export function listKnowledgeBasesRerankConfigToJSON(
  listKnowledgeBasesRerankConfig: ListKnowledgeBasesRerankConfig,
): string {
  return JSON.stringify(
    ListKnowledgeBasesRerankConfig$outboundSchema.parse(
      listKnowledgeBasesRerankConfig,
    ),
  );
}

export function listKnowledgeBasesRerankConfigFromJSON(
  jsonString: string,
): SafeParseResult<ListKnowledgeBasesRerankConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListKnowledgeBasesRerankConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListKnowledgeBasesRerankConfig' from JSON`,
  );
}

/** @internal */
export const ListKnowledgeBasesRetrievalSettings$inboundSchema: z.ZodType<
  ListKnowledgeBasesRetrievalSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  retrieval_type: ListKnowledgeBasesRetrievalType$inboundSchema.default(
    "hybrid_search",
  ),
  top_k: z.number().int().default(5),
  threshold: z.number().default(0),
  rerank_config: z.lazy(() => ListKnowledgeBasesRerankConfig$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "retrieval_type": "retrievalType",
    "top_k": "topK",
    "rerank_config": "rerankConfig",
  });
});

/** @internal */
export type ListKnowledgeBasesRetrievalSettings$Outbound = {
  retrieval_type: string;
  top_k: number;
  threshold: number;
  rerank_config?: ListKnowledgeBasesRerankConfig$Outbound | undefined;
};

/** @internal */
export const ListKnowledgeBasesRetrievalSettings$outboundSchema: z.ZodType<
  ListKnowledgeBasesRetrievalSettings$Outbound,
  z.ZodTypeDef,
  ListKnowledgeBasesRetrievalSettings
> = z.object({
  retrievalType: ListKnowledgeBasesRetrievalType$outboundSchema.default(
    "hybrid_search",
  ),
  topK: z.number().int().default(5),
  threshold: z.number().default(0),
  rerankConfig: z.lazy(() => ListKnowledgeBasesRerankConfig$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    retrievalType: "retrieval_type",
    topK: "top_k",
    rerankConfig: "rerank_config",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListKnowledgeBasesRetrievalSettings$ {
  /** @deprecated use `ListKnowledgeBasesRetrievalSettings$inboundSchema` instead. */
  export const inboundSchema =
    ListKnowledgeBasesRetrievalSettings$inboundSchema;
  /** @deprecated use `ListKnowledgeBasesRetrievalSettings$outboundSchema` instead. */
  export const outboundSchema =
    ListKnowledgeBasesRetrievalSettings$outboundSchema;
  /** @deprecated use `ListKnowledgeBasesRetrievalSettings$Outbound` instead. */
  export type Outbound = ListKnowledgeBasesRetrievalSettings$Outbound;
}

export function listKnowledgeBasesRetrievalSettingsToJSON(
  listKnowledgeBasesRetrievalSettings: ListKnowledgeBasesRetrievalSettings,
): string {
  return JSON.stringify(
    ListKnowledgeBasesRetrievalSettings$outboundSchema.parse(
      listKnowledgeBasesRetrievalSettings,
    ),
  );
}

export function listKnowledgeBasesRetrievalSettingsFromJSON(
  jsonString: string,
): SafeParseResult<ListKnowledgeBasesRetrievalSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListKnowledgeBasesRetrievalSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListKnowledgeBasesRetrievalSettings' from JSON`,
  );
}

/** @internal */
export const ListKnowledgeBasesData$inboundSchema: z.ZodType<
  ListKnowledgeBasesData,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  created: z.string(),
  description: z.string().optional(),
  key: z.string(),
  model: z.string(),
  path: z.string().optional(),
  retrieval_settings: z.lazy(() =>
    ListKnowledgeBasesRetrievalSettings$inboundSchema
  ).optional(),
  created_by_id: z.nullable(z.string()).optional(),
  updated_by_id: z.nullable(z.string()).optional(),
  updated: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "retrieval_settings": "retrievalSettings",
    "created_by_id": "createdById",
    "updated_by_id": "updatedById",
  });
});

/** @internal */
export type ListKnowledgeBasesData$Outbound = {
  _id: string;
  created: string;
  description?: string | undefined;
  key: string;
  model: string;
  path?: string | undefined;
  retrieval_settings?: ListKnowledgeBasesRetrievalSettings$Outbound | undefined;
  created_by_id?: string | null | undefined;
  updated_by_id?: string | null | undefined;
  updated: string;
};

/** @internal */
export const ListKnowledgeBasesData$outboundSchema: z.ZodType<
  ListKnowledgeBasesData$Outbound,
  z.ZodTypeDef,
  ListKnowledgeBasesData
> = z.object({
  id: z.string(),
  created: z.string(),
  description: z.string().optional(),
  key: z.string(),
  model: z.string(),
  path: z.string().optional(),
  retrievalSettings: z.lazy(() =>
    ListKnowledgeBasesRetrievalSettings$outboundSchema
  ).optional(),
  createdById: z.nullable(z.string()).optional(),
  updatedById: z.nullable(z.string()).optional(),
  updated: z.string(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    retrievalSettings: "retrieval_settings",
    createdById: "created_by_id",
    updatedById: "updated_by_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListKnowledgeBasesData$ {
  /** @deprecated use `ListKnowledgeBasesData$inboundSchema` instead. */
  export const inboundSchema = ListKnowledgeBasesData$inboundSchema;
  /** @deprecated use `ListKnowledgeBasesData$outboundSchema` instead. */
  export const outboundSchema = ListKnowledgeBasesData$outboundSchema;
  /** @deprecated use `ListKnowledgeBasesData$Outbound` instead. */
  export type Outbound = ListKnowledgeBasesData$Outbound;
}

export function listKnowledgeBasesDataToJSON(
  listKnowledgeBasesData: ListKnowledgeBasesData,
): string {
  return JSON.stringify(
    ListKnowledgeBasesData$outboundSchema.parse(listKnowledgeBasesData),
  );
}

export function listKnowledgeBasesDataFromJSON(
  jsonString: string,
): SafeParseResult<ListKnowledgeBasesData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListKnowledgeBasesData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListKnowledgeBasesData' from JSON`,
  );
}

/** @internal */
export const ListKnowledgeBasesResponseBody$inboundSchema: z.ZodType<
  ListKnowledgeBasesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: ListKnowledgeBasesObject$inboundSchema,
  data: z.array(z.lazy(() => ListKnowledgeBasesData$inboundSchema)),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "has_more": "hasMore",
  });
});

/** @internal */
export type ListKnowledgeBasesResponseBody$Outbound = {
  object: string;
  data: Array<ListKnowledgeBasesData$Outbound>;
  has_more: boolean;
};

/** @internal */
export const ListKnowledgeBasesResponseBody$outboundSchema: z.ZodType<
  ListKnowledgeBasesResponseBody$Outbound,
  z.ZodTypeDef,
  ListKnowledgeBasesResponseBody
> = z.object({
  object: ListKnowledgeBasesObject$outboundSchema,
  data: z.array(z.lazy(() => ListKnowledgeBasesData$outboundSchema)),
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
export namespace ListKnowledgeBasesResponseBody$ {
  /** @deprecated use `ListKnowledgeBasesResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListKnowledgeBasesResponseBody$inboundSchema;
  /** @deprecated use `ListKnowledgeBasesResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListKnowledgeBasesResponseBody$outboundSchema;
  /** @deprecated use `ListKnowledgeBasesResponseBody$Outbound` instead. */
  export type Outbound = ListKnowledgeBasesResponseBody$Outbound;
}

export function listKnowledgeBasesResponseBodyToJSON(
  listKnowledgeBasesResponseBody: ListKnowledgeBasesResponseBody,
): string {
  return JSON.stringify(
    ListKnowledgeBasesResponseBody$outboundSchema.parse(
      listKnowledgeBasesResponseBody,
    ),
  );
}

export function listKnowledgeBasesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListKnowledgeBasesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListKnowledgeBasesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListKnowledgeBasesResponseBody' from JSON`,
  );
}
