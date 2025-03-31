/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetOneKnowledgeRequest = {
  /**
   * Unique identifier of the knowledge base
   */
  knowledgeId: string;
};

/**
 * The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.
 */
export const GetOneKnowledgeRetrievalType = {
  VectorSearch: "vector_search",
  KeywordSearch: "keyword_search",
  HybridSearch: "hybrid_search",
} as const;
/**
 * The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.
 */
export type GetOneKnowledgeRetrievalType = ClosedEnum<
  typeof GetOneKnowledgeRetrievalType
>;

/**
 * The rerank configuration for the knowledge base. In case the model is provided it will be used to enhance the search precision.
 */
export type GetOneKnowledgeRerankConfig = {
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
export type GetOneKnowledgeRetrievalSettings = {
  /**
   * The retrieval type to use for the knowledge base. If not provided, Hybrid Search will be used as a default query strategy.
   */
  retrievalType?: GetOneKnowledgeRetrievalType | undefined;
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
  rerankConfig?: GetOneKnowledgeRerankConfig | undefined;
};

/**
 * Knowledge Base object
 */
export type GetOneKnowledgeResponseBody = {
  /**
   * The unique identifier of the knowledge base.
   */
  id: string;
  /**
   * The id of the resource
   */
  createdById: string;
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
  retrievalSettings?: GetOneKnowledgeRetrievalSettings | undefined;
  /**
   * The id of the resource
   */
  updateById: string;
  /**
   * The last update date of the knowledge base.
   */
  updated: string;
};

/** @internal */
export const GetOneKnowledgeRequest$inboundSchema: z.ZodType<
  GetOneKnowledgeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowledge_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "knowledge_id": "knowledgeId",
  });
});

/** @internal */
export type GetOneKnowledgeRequest$Outbound = {
  knowledge_id: string;
};

/** @internal */
export const GetOneKnowledgeRequest$outboundSchema: z.ZodType<
  GetOneKnowledgeRequest$Outbound,
  z.ZodTypeDef,
  GetOneKnowledgeRequest
> = z.object({
  knowledgeId: z.string(),
}).transform((v) => {
  return remap$(v, {
    knowledgeId: "knowledge_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneKnowledgeRequest$ {
  /** @deprecated use `GetOneKnowledgeRequest$inboundSchema` instead. */
  export const inboundSchema = GetOneKnowledgeRequest$inboundSchema;
  /** @deprecated use `GetOneKnowledgeRequest$outboundSchema` instead. */
  export const outboundSchema = GetOneKnowledgeRequest$outboundSchema;
  /** @deprecated use `GetOneKnowledgeRequest$Outbound` instead. */
  export type Outbound = GetOneKnowledgeRequest$Outbound;
}

export function getOneKnowledgeRequestToJSON(
  getOneKnowledgeRequest: GetOneKnowledgeRequest,
): string {
  return JSON.stringify(
    GetOneKnowledgeRequest$outboundSchema.parse(getOneKnowledgeRequest),
  );
}

export function getOneKnowledgeRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetOneKnowledgeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOneKnowledgeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneKnowledgeRequest' from JSON`,
  );
}

/** @internal */
export const GetOneKnowledgeRetrievalType$inboundSchema: z.ZodNativeEnum<
  typeof GetOneKnowledgeRetrievalType
> = z.nativeEnum(GetOneKnowledgeRetrievalType);

/** @internal */
export const GetOneKnowledgeRetrievalType$outboundSchema: z.ZodNativeEnum<
  typeof GetOneKnowledgeRetrievalType
> = GetOneKnowledgeRetrievalType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneKnowledgeRetrievalType$ {
  /** @deprecated use `GetOneKnowledgeRetrievalType$inboundSchema` instead. */
  export const inboundSchema = GetOneKnowledgeRetrievalType$inboundSchema;
  /** @deprecated use `GetOneKnowledgeRetrievalType$outboundSchema` instead. */
  export const outboundSchema = GetOneKnowledgeRetrievalType$outboundSchema;
}

/** @internal */
export const GetOneKnowledgeRerankConfig$inboundSchema: z.ZodType<
  GetOneKnowledgeRerankConfig,
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
export type GetOneKnowledgeRerankConfig$Outbound = {
  rerank_threshold: number;
  rerank_model: string;
};

/** @internal */
export const GetOneKnowledgeRerankConfig$outboundSchema: z.ZodType<
  GetOneKnowledgeRerankConfig$Outbound,
  z.ZodTypeDef,
  GetOneKnowledgeRerankConfig
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
export namespace GetOneKnowledgeRerankConfig$ {
  /** @deprecated use `GetOneKnowledgeRerankConfig$inboundSchema` instead. */
  export const inboundSchema = GetOneKnowledgeRerankConfig$inboundSchema;
  /** @deprecated use `GetOneKnowledgeRerankConfig$outboundSchema` instead. */
  export const outboundSchema = GetOneKnowledgeRerankConfig$outboundSchema;
  /** @deprecated use `GetOneKnowledgeRerankConfig$Outbound` instead. */
  export type Outbound = GetOneKnowledgeRerankConfig$Outbound;
}

export function getOneKnowledgeRerankConfigToJSON(
  getOneKnowledgeRerankConfig: GetOneKnowledgeRerankConfig,
): string {
  return JSON.stringify(
    GetOneKnowledgeRerankConfig$outboundSchema.parse(
      getOneKnowledgeRerankConfig,
    ),
  );
}

export function getOneKnowledgeRerankConfigFromJSON(
  jsonString: string,
): SafeParseResult<GetOneKnowledgeRerankConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOneKnowledgeRerankConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneKnowledgeRerankConfig' from JSON`,
  );
}

/** @internal */
export const GetOneKnowledgeRetrievalSettings$inboundSchema: z.ZodType<
  GetOneKnowledgeRetrievalSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  retrieval_type: GetOneKnowledgeRetrievalType$inboundSchema.default(
    "hybrid_search",
  ),
  top_k: z.number().int().default(5),
  threshold: z.number().default(0),
  rerank_config: z.lazy(() => GetOneKnowledgeRerankConfig$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "retrieval_type": "retrievalType",
    "top_k": "topK",
    "rerank_config": "rerankConfig",
  });
});

/** @internal */
export type GetOneKnowledgeRetrievalSettings$Outbound = {
  retrieval_type: string;
  top_k: number;
  threshold: number;
  rerank_config?: GetOneKnowledgeRerankConfig$Outbound | undefined;
};

/** @internal */
export const GetOneKnowledgeRetrievalSettings$outboundSchema: z.ZodType<
  GetOneKnowledgeRetrievalSettings$Outbound,
  z.ZodTypeDef,
  GetOneKnowledgeRetrievalSettings
> = z.object({
  retrievalType: GetOneKnowledgeRetrievalType$outboundSchema.default(
    "hybrid_search",
  ),
  topK: z.number().int().default(5),
  threshold: z.number().default(0),
  rerankConfig: z.lazy(() => GetOneKnowledgeRerankConfig$outboundSchema)
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
export namespace GetOneKnowledgeRetrievalSettings$ {
  /** @deprecated use `GetOneKnowledgeRetrievalSettings$inboundSchema` instead. */
  export const inboundSchema = GetOneKnowledgeRetrievalSettings$inboundSchema;
  /** @deprecated use `GetOneKnowledgeRetrievalSettings$outboundSchema` instead. */
  export const outboundSchema = GetOneKnowledgeRetrievalSettings$outboundSchema;
  /** @deprecated use `GetOneKnowledgeRetrievalSettings$Outbound` instead. */
  export type Outbound = GetOneKnowledgeRetrievalSettings$Outbound;
}

export function getOneKnowledgeRetrievalSettingsToJSON(
  getOneKnowledgeRetrievalSettings: GetOneKnowledgeRetrievalSettings,
): string {
  return JSON.stringify(
    GetOneKnowledgeRetrievalSettings$outboundSchema.parse(
      getOneKnowledgeRetrievalSettings,
    ),
  );
}

export function getOneKnowledgeRetrievalSettingsFromJSON(
  jsonString: string,
): SafeParseResult<GetOneKnowledgeRetrievalSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOneKnowledgeRetrievalSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneKnowledgeRetrievalSettings' from JSON`,
  );
}

/** @internal */
export const GetOneKnowledgeResponseBody$inboundSchema: z.ZodType<
  GetOneKnowledgeResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  created_by_id: z.string(),
  created: z.string(),
  description: z.string().optional(),
  key: z.string(),
  model: z.string(),
  path: z.string().optional(),
  retrieval_settings: z.lazy(() =>
    GetOneKnowledgeRetrievalSettings$inboundSchema
  ).optional(),
  update_by_id: z.string(),
  updated: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "created_by_id": "createdById",
    "retrieval_settings": "retrievalSettings",
    "update_by_id": "updateById",
  });
});

/** @internal */
export type GetOneKnowledgeResponseBody$Outbound = {
  _id: string;
  created_by_id: string;
  created: string;
  description?: string | undefined;
  key: string;
  model: string;
  path?: string | undefined;
  retrieval_settings?: GetOneKnowledgeRetrievalSettings$Outbound | undefined;
  update_by_id: string;
  updated: string;
};

/** @internal */
export const GetOneKnowledgeResponseBody$outboundSchema: z.ZodType<
  GetOneKnowledgeResponseBody$Outbound,
  z.ZodTypeDef,
  GetOneKnowledgeResponseBody
> = z.object({
  id: z.string(),
  createdById: z.string(),
  created: z.string(),
  description: z.string().optional(),
  key: z.string(),
  model: z.string(),
  path: z.string().optional(),
  retrievalSettings: z.lazy(() =>
    GetOneKnowledgeRetrievalSettings$outboundSchema
  ).optional(),
  updateById: z.string(),
  updated: z.string(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    createdById: "created_by_id",
    retrievalSettings: "retrieval_settings",
    updateById: "update_by_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneKnowledgeResponseBody$ {
  /** @deprecated use `GetOneKnowledgeResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetOneKnowledgeResponseBody$inboundSchema;
  /** @deprecated use `GetOneKnowledgeResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetOneKnowledgeResponseBody$outboundSchema;
  /** @deprecated use `GetOneKnowledgeResponseBody$Outbound` instead. */
  export type Outbound = GetOneKnowledgeResponseBody$Outbound;
}

export function getOneKnowledgeResponseBodyToJSON(
  getOneKnowledgeResponseBody: GetOneKnowledgeResponseBody,
): string {
  return JSON.stringify(
    GetOneKnowledgeResponseBody$outboundSchema.parse(
      getOneKnowledgeResponseBody,
    ),
  );
}

export function getOneKnowledgeResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetOneKnowledgeResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOneKnowledgeResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneKnowledgeResponseBody' from JSON`,
  );
}
