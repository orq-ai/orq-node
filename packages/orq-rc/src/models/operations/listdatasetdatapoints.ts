/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * List sorting preference.
 */
export const ListDatasetDatapointsQueryParamSort = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * List sorting preference.
 */
export type ListDatasetDatapointsQueryParamSort = ClosedEnum<
  typeof ListDatasetDatapointsQueryParamSort
>;

export type ListDatasetDatapointsRequest = {
  datasetId: string;
  /**
   * List sorting preference.
   */
  sort?: ListDatasetDatapointsQueryParamSort | undefined;
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

export const ListDatasetDatapointsObject = {
  List: "list",
} as const;
export type ListDatasetDatapointsObject = ClosedEnum<
  typeof ListDatasetDatapointsObject
>;

/**
 * The role of the prompt message
 */
export const ListDatasetDatapointsRole = {
  System: "system",
  Assistant: "assistant",
  User: "user",
  Exception: "exception",
  Tool: "tool",
  Prompt: "prompt",
  Correction: "correction",
  ExpectedOutput: "expected_output",
} as const;
/**
 * The role of the prompt message
 */
export type ListDatasetDatapointsRole = ClosedEnum<
  typeof ListDatasetDatapointsRole
>;

export const ListDatasetDatapoints2DatasetsType = {
  ImageUrl: "image_url",
} as const;
export type ListDatasetDatapoints2DatasetsType = ClosedEnum<
  typeof ListDatasetDatapoints2DatasetsType
>;

export type ListDatasetDatapoints2ImageUrl = {
  /**
   * The orq.ai id of the image
   */
  id?: string | undefined;
  /**
   * Either a URL of the image or the base64 encoded data URI.
   */
  url: string;
  /**
   * Specifies the detail level of the image. Currently only supported with OpenAI models
   */
  detail?: string | undefined;
};

/**
 * The image part of the prompt message. Only supported with vision models.
 */
export type ListDatasetDatapoints22 = {
  type: ListDatasetDatapoints2DatasetsType;
  imageUrl: ListDatasetDatapoints2ImageUrl;
};

export const ListDatasetDatapoints2Type = {
  Text: "text",
} as const;
export type ListDatasetDatapoints2Type = ClosedEnum<
  typeof ListDatasetDatapoints2Type
>;

/**
 * Text content part of a prompt message
 */
export type ListDatasetDatapoints21 = {
  type: ListDatasetDatapoints2Type;
  text: string;
};

export type ListDatasetDatapointsContent2 =
  | ListDatasetDatapoints21
  | ListDatasetDatapoints22;

/**
 * The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.
 */
export type ListDatasetDatapointsContent =
  | string
  | Array<ListDatasetDatapoints21 | ListDatasetDatapoints22>;

export const ListDatasetDatapointsType = {
  Function: "function",
} as const;
export type ListDatasetDatapointsType = ClosedEnum<
  typeof ListDatasetDatapointsType
>;

export type ListDatasetDatapointsFunction = {
  name: string;
  /**
   * JSON string arguments for the functions
   */
  arguments: string;
};

export type ListDatasetDatapointsToolCalls = {
  id?: string | undefined;
  index?: number | undefined;
  type: ListDatasetDatapointsType;
  function: ListDatasetDatapointsFunction;
};

export type ListDatasetDatapointsMessages = {
  /**
   * The role of the prompt message
   */
  role: ListDatasetDatapointsRole;
  /**
   * The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.
   */
  content: string | Array<ListDatasetDatapoints21 | ListDatasetDatapoints22>;
  toolCalls?: Array<ListDatasetDatapointsToolCalls> | undefined;
};

export type ListDatasetDatapointsData = {
  /**
   * The unique identifier of the dataset item
   */
  id: string;
  /**
   * The unique identifier of the workspace it belongs to
   */
  workspaceId: string;
  /**
   * The inputs of the dataset. Key value pairs where the key is the input name and the value is the input value. Nested objects are not supported.
   */
  inputs?: { [k: string]: any } | undefined;
  /**
   * The prompt template messages
   */
  messages?: Array<ListDatasetDatapointsMessages> | undefined;
  expectedOutput?: string | undefined;
  /**
   * The unique identifier of the dataset
   */
  datasetId: string;
  /**
   * The unique identifier of the user who created the dataset
   */
  createdById?: string | undefined;
  /**
   * The unique identifier of the user who last updated the dataset
   */
  updatedById?: string | undefined;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
  /**
   * The date and time the resource was last updated
   */
  updated?: Date | undefined;
};

/**
 * Datapoints retrieved successfully. Returns a paginated list of datapoints.
 */
export type ListDatasetDatapointsResponseBody = {
  object: ListDatasetDatapointsObject;
  data: Array<ListDatasetDatapointsData>;
  hasMore: boolean;
};

/** @internal */
export const ListDatasetDatapointsQueryParamSort$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapointsQueryParamSort
> = z.nativeEnum(ListDatasetDatapointsQueryParamSort);

/** @internal */
export const ListDatasetDatapointsQueryParamSort$outboundSchema:
  z.ZodNativeEnum<typeof ListDatasetDatapointsQueryParamSort> =
    ListDatasetDatapointsQueryParamSort$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsQueryParamSort$ {
  /** @deprecated use `ListDatasetDatapointsQueryParamSort$inboundSchema` instead. */
  export const inboundSchema =
    ListDatasetDatapointsQueryParamSort$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsQueryParamSort$outboundSchema` instead. */
  export const outboundSchema =
    ListDatasetDatapointsQueryParamSort$outboundSchema;
}

/** @internal */
export const ListDatasetDatapointsRequest$inboundSchema: z.ZodType<
  ListDatasetDatapointsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataset_id: z.string(),
  sort: ListDatasetDatapointsQueryParamSort$inboundSchema.default("asc"),
  limit: z.number().default(10),
  starting_after: z.string().optional(),
  ending_before: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "dataset_id": "datasetId",
    "starting_after": "startingAfter",
    "ending_before": "endingBefore",
  });
});

/** @internal */
export type ListDatasetDatapointsRequest$Outbound = {
  dataset_id: string;
  sort: string;
  limit: number;
  starting_after?: string | undefined;
  ending_before?: string | undefined;
};

/** @internal */
export const ListDatasetDatapointsRequest$outboundSchema: z.ZodType<
  ListDatasetDatapointsRequest$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapointsRequest
> = z.object({
  datasetId: z.string(),
  sort: ListDatasetDatapointsQueryParamSort$outboundSchema.default("asc"),
  limit: z.number().default(10),
  startingAfter: z.string().optional(),
  endingBefore: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    datasetId: "dataset_id",
    startingAfter: "starting_after",
    endingBefore: "ending_before",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsRequest$ {
  /** @deprecated use `ListDatasetDatapointsRequest$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsRequest$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsRequest$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsRequest$outboundSchema;
  /** @deprecated use `ListDatasetDatapointsRequest$Outbound` instead. */
  export type Outbound = ListDatasetDatapointsRequest$Outbound;
}

export function listDatasetDatapointsRequestToJSON(
  listDatasetDatapointsRequest: ListDatasetDatapointsRequest,
): string {
  return JSON.stringify(
    ListDatasetDatapointsRequest$outboundSchema.parse(
      listDatasetDatapointsRequest,
    ),
  );
}

export function listDatasetDatapointsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapointsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapointsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapointsRequest' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapointsObject$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapointsObject
> = z.nativeEnum(ListDatasetDatapointsObject);

/** @internal */
export const ListDatasetDatapointsObject$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapointsObject
> = ListDatasetDatapointsObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsObject$ {
  /** @deprecated use `ListDatasetDatapointsObject$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsObject$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsObject$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsObject$outboundSchema;
}

/** @internal */
export const ListDatasetDatapointsRole$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapointsRole
> = z.nativeEnum(ListDatasetDatapointsRole);

/** @internal */
export const ListDatasetDatapointsRole$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapointsRole
> = ListDatasetDatapointsRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsRole$ {
  /** @deprecated use `ListDatasetDatapointsRole$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsRole$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsRole$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsRole$outboundSchema;
}

/** @internal */
export const ListDatasetDatapoints2DatasetsType$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapoints2DatasetsType
> = z.nativeEnum(ListDatasetDatapoints2DatasetsType);

/** @internal */
export const ListDatasetDatapoints2DatasetsType$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapoints2DatasetsType
> = ListDatasetDatapoints2DatasetsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapoints2DatasetsType$ {
  /** @deprecated use `ListDatasetDatapoints2DatasetsType$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapoints2DatasetsType$inboundSchema;
  /** @deprecated use `ListDatasetDatapoints2DatasetsType$outboundSchema` instead. */
  export const outboundSchema =
    ListDatasetDatapoints2DatasetsType$outboundSchema;
}

/** @internal */
export const ListDatasetDatapoints2ImageUrl$inboundSchema: z.ZodType<
  ListDatasetDatapoints2ImageUrl,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  url: z.string(),
  detail: z.string().optional(),
});

/** @internal */
export type ListDatasetDatapoints2ImageUrl$Outbound = {
  id?: string | undefined;
  url: string;
  detail?: string | undefined;
};

/** @internal */
export const ListDatasetDatapoints2ImageUrl$outboundSchema: z.ZodType<
  ListDatasetDatapoints2ImageUrl$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapoints2ImageUrl
> = z.object({
  id: z.string().optional(),
  url: z.string(),
  detail: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapoints2ImageUrl$ {
  /** @deprecated use `ListDatasetDatapoints2ImageUrl$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapoints2ImageUrl$inboundSchema;
  /** @deprecated use `ListDatasetDatapoints2ImageUrl$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapoints2ImageUrl$outboundSchema;
  /** @deprecated use `ListDatasetDatapoints2ImageUrl$Outbound` instead. */
  export type Outbound = ListDatasetDatapoints2ImageUrl$Outbound;
}

export function listDatasetDatapoints2ImageUrlToJSON(
  listDatasetDatapoints2ImageUrl: ListDatasetDatapoints2ImageUrl,
): string {
  return JSON.stringify(
    ListDatasetDatapoints2ImageUrl$outboundSchema.parse(
      listDatasetDatapoints2ImageUrl,
    ),
  );
}

export function listDatasetDatapoints2ImageUrlFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapoints2ImageUrl, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapoints2ImageUrl$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapoints2ImageUrl' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapoints22$inboundSchema: z.ZodType<
  ListDatasetDatapoints22,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ListDatasetDatapoints2DatasetsType$inboundSchema,
  image_url: z.lazy(() => ListDatasetDatapoints2ImageUrl$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "image_url": "imageUrl",
  });
});

/** @internal */
export type ListDatasetDatapoints22$Outbound = {
  type: string;
  image_url: ListDatasetDatapoints2ImageUrl$Outbound;
};

/** @internal */
export const ListDatasetDatapoints22$outboundSchema: z.ZodType<
  ListDatasetDatapoints22$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapoints22
> = z.object({
  type: ListDatasetDatapoints2DatasetsType$outboundSchema,
  imageUrl: z.lazy(() => ListDatasetDatapoints2ImageUrl$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    imageUrl: "image_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapoints22$ {
  /** @deprecated use `ListDatasetDatapoints22$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapoints22$inboundSchema;
  /** @deprecated use `ListDatasetDatapoints22$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapoints22$outboundSchema;
  /** @deprecated use `ListDatasetDatapoints22$Outbound` instead. */
  export type Outbound = ListDatasetDatapoints22$Outbound;
}

export function listDatasetDatapoints22ToJSON(
  listDatasetDatapoints22: ListDatasetDatapoints22,
): string {
  return JSON.stringify(
    ListDatasetDatapoints22$outboundSchema.parse(listDatasetDatapoints22),
  );
}

export function listDatasetDatapoints22FromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapoints22, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapoints22$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapoints22' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapoints2Type$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapoints2Type
> = z.nativeEnum(ListDatasetDatapoints2Type);

/** @internal */
export const ListDatasetDatapoints2Type$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapoints2Type
> = ListDatasetDatapoints2Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapoints2Type$ {
  /** @deprecated use `ListDatasetDatapoints2Type$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapoints2Type$inboundSchema;
  /** @deprecated use `ListDatasetDatapoints2Type$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapoints2Type$outboundSchema;
}

/** @internal */
export const ListDatasetDatapoints21$inboundSchema: z.ZodType<
  ListDatasetDatapoints21,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ListDatasetDatapoints2Type$inboundSchema,
  text: z.string(),
});

/** @internal */
export type ListDatasetDatapoints21$Outbound = {
  type: string;
  text: string;
};

/** @internal */
export const ListDatasetDatapoints21$outboundSchema: z.ZodType<
  ListDatasetDatapoints21$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapoints21
> = z.object({
  type: ListDatasetDatapoints2Type$outboundSchema,
  text: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapoints21$ {
  /** @deprecated use `ListDatasetDatapoints21$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapoints21$inboundSchema;
  /** @deprecated use `ListDatasetDatapoints21$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapoints21$outboundSchema;
  /** @deprecated use `ListDatasetDatapoints21$Outbound` instead. */
  export type Outbound = ListDatasetDatapoints21$Outbound;
}

export function listDatasetDatapoints21ToJSON(
  listDatasetDatapoints21: ListDatasetDatapoints21,
): string {
  return JSON.stringify(
    ListDatasetDatapoints21$outboundSchema.parse(listDatasetDatapoints21),
  );
}

export function listDatasetDatapoints21FromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapoints21, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapoints21$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapoints21' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapointsContent2$inboundSchema: z.ZodType<
  ListDatasetDatapointsContent2,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ListDatasetDatapoints21$inboundSchema),
  z.lazy(() => ListDatasetDatapoints22$inboundSchema),
]);

/** @internal */
export type ListDatasetDatapointsContent2$Outbound =
  | ListDatasetDatapoints21$Outbound
  | ListDatasetDatapoints22$Outbound;

/** @internal */
export const ListDatasetDatapointsContent2$outboundSchema: z.ZodType<
  ListDatasetDatapointsContent2$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapointsContent2
> = z.union([
  z.lazy(() => ListDatasetDatapoints21$outboundSchema),
  z.lazy(() => ListDatasetDatapoints22$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsContent2$ {
  /** @deprecated use `ListDatasetDatapointsContent2$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsContent2$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsContent2$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsContent2$outboundSchema;
  /** @deprecated use `ListDatasetDatapointsContent2$Outbound` instead. */
  export type Outbound = ListDatasetDatapointsContent2$Outbound;
}

export function listDatasetDatapointsContent2ToJSON(
  listDatasetDatapointsContent2: ListDatasetDatapointsContent2,
): string {
  return JSON.stringify(
    ListDatasetDatapointsContent2$outboundSchema.parse(
      listDatasetDatapointsContent2,
    ),
  );
}

export function listDatasetDatapointsContent2FromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapointsContent2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapointsContent2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapointsContent2' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapointsContent$inboundSchema: z.ZodType<
  ListDatasetDatapointsContent,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.array(z.union([
    z.lazy(() => ListDatasetDatapoints21$inboundSchema),
    z.lazy(() => ListDatasetDatapoints22$inboundSchema),
  ])),
]);

/** @internal */
export type ListDatasetDatapointsContent$Outbound =
  | string
  | Array<ListDatasetDatapoints21$Outbound | ListDatasetDatapoints22$Outbound>;

/** @internal */
export const ListDatasetDatapointsContent$outboundSchema: z.ZodType<
  ListDatasetDatapointsContent$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapointsContent
> = z.union([
  z.string(),
  z.array(z.union([
    z.lazy(() => ListDatasetDatapoints21$outboundSchema),
    z.lazy(() => ListDatasetDatapoints22$outboundSchema),
  ])),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsContent$ {
  /** @deprecated use `ListDatasetDatapointsContent$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsContent$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsContent$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsContent$outboundSchema;
  /** @deprecated use `ListDatasetDatapointsContent$Outbound` instead. */
  export type Outbound = ListDatasetDatapointsContent$Outbound;
}

export function listDatasetDatapointsContentToJSON(
  listDatasetDatapointsContent: ListDatasetDatapointsContent,
): string {
  return JSON.stringify(
    ListDatasetDatapointsContent$outboundSchema.parse(
      listDatasetDatapointsContent,
    ),
  );
}

export function listDatasetDatapointsContentFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapointsContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapointsContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapointsContent' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapointsType$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapointsType
> = z.nativeEnum(ListDatasetDatapointsType);

/** @internal */
export const ListDatasetDatapointsType$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasetDatapointsType
> = ListDatasetDatapointsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsType$ {
  /** @deprecated use `ListDatasetDatapointsType$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsType$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsType$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsType$outboundSchema;
}

/** @internal */
export const ListDatasetDatapointsFunction$inboundSchema: z.ZodType<
  ListDatasetDatapointsFunction,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  arguments: z.string(),
});

/** @internal */
export type ListDatasetDatapointsFunction$Outbound = {
  name: string;
  arguments: string;
};

/** @internal */
export const ListDatasetDatapointsFunction$outboundSchema: z.ZodType<
  ListDatasetDatapointsFunction$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapointsFunction
> = z.object({
  name: z.string(),
  arguments: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsFunction$ {
  /** @deprecated use `ListDatasetDatapointsFunction$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsFunction$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsFunction$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsFunction$outboundSchema;
  /** @deprecated use `ListDatasetDatapointsFunction$Outbound` instead. */
  export type Outbound = ListDatasetDatapointsFunction$Outbound;
}

export function listDatasetDatapointsFunctionToJSON(
  listDatasetDatapointsFunction: ListDatasetDatapointsFunction,
): string {
  return JSON.stringify(
    ListDatasetDatapointsFunction$outboundSchema.parse(
      listDatasetDatapointsFunction,
    ),
  );
}

export function listDatasetDatapointsFunctionFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapointsFunction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapointsFunction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapointsFunction' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapointsToolCalls$inboundSchema: z.ZodType<
  ListDatasetDatapointsToolCalls,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  index: z.number().optional(),
  type: ListDatasetDatapointsType$inboundSchema,
  function: z.lazy(() => ListDatasetDatapointsFunction$inboundSchema),
});

/** @internal */
export type ListDatasetDatapointsToolCalls$Outbound = {
  id?: string | undefined;
  index?: number | undefined;
  type: string;
  function: ListDatasetDatapointsFunction$Outbound;
};

/** @internal */
export const ListDatasetDatapointsToolCalls$outboundSchema: z.ZodType<
  ListDatasetDatapointsToolCalls$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapointsToolCalls
> = z.object({
  id: z.string().optional(),
  index: z.number().optional(),
  type: ListDatasetDatapointsType$outboundSchema,
  function: z.lazy(() => ListDatasetDatapointsFunction$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsToolCalls$ {
  /** @deprecated use `ListDatasetDatapointsToolCalls$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsToolCalls$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsToolCalls$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsToolCalls$outboundSchema;
  /** @deprecated use `ListDatasetDatapointsToolCalls$Outbound` instead. */
  export type Outbound = ListDatasetDatapointsToolCalls$Outbound;
}

export function listDatasetDatapointsToolCallsToJSON(
  listDatasetDatapointsToolCalls: ListDatasetDatapointsToolCalls,
): string {
  return JSON.stringify(
    ListDatasetDatapointsToolCalls$outboundSchema.parse(
      listDatasetDatapointsToolCalls,
    ),
  );
}

export function listDatasetDatapointsToolCallsFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapointsToolCalls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapointsToolCalls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapointsToolCalls' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapointsMessages$inboundSchema: z.ZodType<
  ListDatasetDatapointsMessages,
  z.ZodTypeDef,
  unknown
> = z.object({
  role: ListDatasetDatapointsRole$inboundSchema,
  content: z.union([
    z.string(),
    z.array(z.union([
      z.lazy(() => ListDatasetDatapoints21$inboundSchema),
      z.lazy(() => ListDatasetDatapoints22$inboundSchema),
    ])),
  ]),
  tool_calls: z.array(
    z.lazy(() => ListDatasetDatapointsToolCalls$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "tool_calls": "toolCalls",
  });
});

/** @internal */
export type ListDatasetDatapointsMessages$Outbound = {
  role: string;
  content:
    | string
    | Array<
      ListDatasetDatapoints21$Outbound | ListDatasetDatapoints22$Outbound
    >;
  tool_calls?: Array<ListDatasetDatapointsToolCalls$Outbound> | undefined;
};

/** @internal */
export const ListDatasetDatapointsMessages$outboundSchema: z.ZodType<
  ListDatasetDatapointsMessages$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapointsMessages
> = z.object({
  role: ListDatasetDatapointsRole$outboundSchema,
  content: z.union([
    z.string(),
    z.array(z.union([
      z.lazy(() => ListDatasetDatapoints21$outboundSchema),
      z.lazy(() => ListDatasetDatapoints22$outboundSchema),
    ])),
  ]),
  toolCalls: z.array(
    z.lazy(() => ListDatasetDatapointsToolCalls$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    toolCalls: "tool_calls",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsMessages$ {
  /** @deprecated use `ListDatasetDatapointsMessages$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsMessages$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsMessages$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsMessages$outboundSchema;
  /** @deprecated use `ListDatasetDatapointsMessages$Outbound` instead. */
  export type Outbound = ListDatasetDatapointsMessages$Outbound;
}

export function listDatasetDatapointsMessagesToJSON(
  listDatasetDatapointsMessages: ListDatasetDatapointsMessages,
): string {
  return JSON.stringify(
    ListDatasetDatapointsMessages$outboundSchema.parse(
      listDatasetDatapointsMessages,
    ),
  );
}

export function listDatasetDatapointsMessagesFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapointsMessages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapointsMessages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapointsMessages' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapointsData$inboundSchema: z.ZodType<
  ListDatasetDatapointsData,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  workspace_id: z.string(),
  inputs: z.record(z.any()).optional(),
  messages: z.array(z.lazy(() => ListDatasetDatapointsMessages$inboundSchema))
    .optional(),
  expected_output: z.string().optional(),
  dataset_id: z.string(),
  created_by_id: z.string().optional(),
  updated_by_id: z.string().optional(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2025-03-10T11:10:33.958Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "workspace_id": "workspaceId",
    "expected_output": "expectedOutput",
    "dataset_id": "datasetId",
    "created_by_id": "createdById",
    "updated_by_id": "updatedById",
  });
});

/** @internal */
export type ListDatasetDatapointsData$Outbound = {
  _id: string;
  workspace_id: string;
  inputs?: { [k: string]: any } | undefined;
  messages?: Array<ListDatasetDatapointsMessages$Outbound> | undefined;
  expected_output?: string | undefined;
  dataset_id: string;
  created_by_id?: string | undefined;
  updated_by_id?: string | undefined;
  created?: string | undefined;
  updated: string;
};

/** @internal */
export const ListDatasetDatapointsData$outboundSchema: z.ZodType<
  ListDatasetDatapointsData$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapointsData
> = z.object({
  id: z.string(),
  workspaceId: z.string(),
  inputs: z.record(z.any()).optional(),
  messages: z.array(z.lazy(() => ListDatasetDatapointsMessages$outboundSchema))
    .optional(),
  expectedOutput: z.string().optional(),
  datasetId: z.string(),
  createdById: z.string().optional(),
  updatedById: z.string().optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2025-03-10T11:10:33.958Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    workspaceId: "workspace_id",
    expectedOutput: "expected_output",
    datasetId: "dataset_id",
    createdById: "created_by_id",
    updatedById: "updated_by_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetDatapointsData$ {
  /** @deprecated use `ListDatasetDatapointsData$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsData$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsData$outboundSchema` instead. */
  export const outboundSchema = ListDatasetDatapointsData$outboundSchema;
  /** @deprecated use `ListDatasetDatapointsData$Outbound` instead. */
  export type Outbound = ListDatasetDatapointsData$Outbound;
}

export function listDatasetDatapointsDataToJSON(
  listDatasetDatapointsData: ListDatasetDatapointsData,
): string {
  return JSON.stringify(
    ListDatasetDatapointsData$outboundSchema.parse(listDatasetDatapointsData),
  );
}

export function listDatasetDatapointsDataFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapointsData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapointsData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapointsData' from JSON`,
  );
}

/** @internal */
export const ListDatasetDatapointsResponseBody$inboundSchema: z.ZodType<
  ListDatasetDatapointsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: ListDatasetDatapointsObject$inboundSchema,
  data: z.array(z.lazy(() => ListDatasetDatapointsData$inboundSchema)),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "has_more": "hasMore",
  });
});

/** @internal */
export type ListDatasetDatapointsResponseBody$Outbound = {
  object: string;
  data: Array<ListDatasetDatapointsData$Outbound>;
  has_more: boolean;
};

/** @internal */
export const ListDatasetDatapointsResponseBody$outboundSchema: z.ZodType<
  ListDatasetDatapointsResponseBody$Outbound,
  z.ZodTypeDef,
  ListDatasetDatapointsResponseBody
> = z.object({
  object: ListDatasetDatapointsObject$outboundSchema,
  data: z.array(z.lazy(() => ListDatasetDatapointsData$outboundSchema)),
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
export namespace ListDatasetDatapointsResponseBody$ {
  /** @deprecated use `ListDatasetDatapointsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListDatasetDatapointsResponseBody$inboundSchema;
  /** @deprecated use `ListDatasetDatapointsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListDatasetDatapointsResponseBody$outboundSchema;
  /** @deprecated use `ListDatasetDatapointsResponseBody$Outbound` instead. */
  export type Outbound = ListDatasetDatapointsResponseBody$Outbound;
}

export function listDatasetDatapointsResponseBodyToJSON(
  listDatasetDatapointsResponseBody: ListDatasetDatapointsResponseBody,
): string {
  return JSON.stringify(
    ListDatasetDatapointsResponseBody$outboundSchema.parse(
      listDatasetDatapointsResponseBody,
    ),
  );
}

export function listDatasetDatapointsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetDatapointsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetDatapointsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetDatapointsResponseBody' from JSON`,
  );
}
