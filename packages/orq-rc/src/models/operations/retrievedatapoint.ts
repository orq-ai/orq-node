/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveDatapointRequest = {
  datasetId: string;
  datapointId: string;
};

/**
 * The role of the prompt message
 */
export const RetrieveDatapointRole = {
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
export type RetrieveDatapointRole = ClosedEnum<typeof RetrieveDatapointRole>;

export const RetrieveDatapoint2DatasetsType = {
  ImageUrl: "image_url",
} as const;
export type RetrieveDatapoint2DatasetsType = ClosedEnum<
  typeof RetrieveDatapoint2DatasetsType
>;

export type RetrieveDatapoint2ImageUrl = {
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
export type RetrieveDatapoint22 = {
  type: RetrieveDatapoint2DatasetsType;
  imageUrl: RetrieveDatapoint2ImageUrl;
};

export const RetrieveDatapoint2Type = {
  Text: "text",
} as const;
export type RetrieveDatapoint2Type = ClosedEnum<typeof RetrieveDatapoint2Type>;

/**
 * Text content part of a prompt message
 */
export type RetrieveDatapoint21 = {
  type: RetrieveDatapoint2Type;
  text: string;
};

export type RetrieveDatapointContent2 =
  | RetrieveDatapoint21
  | RetrieveDatapoint22;

/**
 * The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.
 */
export type RetrieveDatapointContent =
  | string
  | Array<RetrieveDatapoint21 | RetrieveDatapoint22>;

export const RetrieveDatapointType = {
  Function: "function",
} as const;
export type RetrieveDatapointType = ClosedEnum<typeof RetrieveDatapointType>;

export type RetrieveDatapointFunction = {
  name: string;
  /**
   * JSON string arguments for the functions
   */
  arguments: string;
};

export type RetrieveDatapointToolCalls = {
  id?: string | undefined;
  index?: number | undefined;
  type: RetrieveDatapointType;
  function: RetrieveDatapointFunction;
};

export type RetrieveDatapointMessages = {
  /**
   * The role of the prompt message
   */
  role: RetrieveDatapointRole;
  /**
   * The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.
   */
  content: string | Array<RetrieveDatapoint21 | RetrieveDatapoint22>;
  toolCalls?: Array<RetrieveDatapointToolCalls> | undefined;
};

/**
 * Datapoint retrieved.
 */
export type RetrieveDatapointResponseBody = {
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
  messages?: Array<RetrieveDatapointMessages> | undefined;
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

/** @internal */
export const RetrieveDatapointRequest$inboundSchema: z.ZodType<
  RetrieveDatapointRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataset_id: z.string(),
  datapoint_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "dataset_id": "datasetId",
    "datapoint_id": "datapointId",
  });
});

/** @internal */
export type RetrieveDatapointRequest$Outbound = {
  dataset_id: string;
  datapoint_id: string;
};

/** @internal */
export const RetrieveDatapointRequest$outboundSchema: z.ZodType<
  RetrieveDatapointRequest$Outbound,
  z.ZodTypeDef,
  RetrieveDatapointRequest
> = z.object({
  datasetId: z.string(),
  datapointId: z.string(),
}).transform((v) => {
  return remap$(v, {
    datasetId: "dataset_id",
    datapointId: "datapoint_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapointRequest$ {
  /** @deprecated use `RetrieveDatapointRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointRequest$inboundSchema;
  /** @deprecated use `RetrieveDatapointRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointRequest$outboundSchema;
  /** @deprecated use `RetrieveDatapointRequest$Outbound` instead. */
  export type Outbound = RetrieveDatapointRequest$Outbound;
}

export function retrieveDatapointRequestToJSON(
  retrieveDatapointRequest: RetrieveDatapointRequest,
): string {
  return JSON.stringify(
    RetrieveDatapointRequest$outboundSchema.parse(retrieveDatapointRequest),
  );
}

export function retrieveDatapointRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapointRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapointRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapointRequest' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapointRole$inboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatapointRole
> = z.nativeEnum(RetrieveDatapointRole);

/** @internal */
export const RetrieveDatapointRole$outboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatapointRole
> = RetrieveDatapointRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapointRole$ {
  /** @deprecated use `RetrieveDatapointRole$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointRole$inboundSchema;
  /** @deprecated use `RetrieveDatapointRole$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointRole$outboundSchema;
}

/** @internal */
export const RetrieveDatapoint2DatasetsType$inboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatapoint2DatasetsType
> = z.nativeEnum(RetrieveDatapoint2DatasetsType);

/** @internal */
export const RetrieveDatapoint2DatasetsType$outboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatapoint2DatasetsType
> = RetrieveDatapoint2DatasetsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapoint2DatasetsType$ {
  /** @deprecated use `RetrieveDatapoint2DatasetsType$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapoint2DatasetsType$inboundSchema;
  /** @deprecated use `RetrieveDatapoint2DatasetsType$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapoint2DatasetsType$outboundSchema;
}

/** @internal */
export const RetrieveDatapoint2ImageUrl$inboundSchema: z.ZodType<
  RetrieveDatapoint2ImageUrl,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  url: z.string(),
  detail: z.string().optional(),
});

/** @internal */
export type RetrieveDatapoint2ImageUrl$Outbound = {
  id?: string | undefined;
  url: string;
  detail?: string | undefined;
};

/** @internal */
export const RetrieveDatapoint2ImageUrl$outboundSchema: z.ZodType<
  RetrieveDatapoint2ImageUrl$Outbound,
  z.ZodTypeDef,
  RetrieveDatapoint2ImageUrl
> = z.object({
  id: z.string().optional(),
  url: z.string(),
  detail: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapoint2ImageUrl$ {
  /** @deprecated use `RetrieveDatapoint2ImageUrl$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapoint2ImageUrl$inboundSchema;
  /** @deprecated use `RetrieveDatapoint2ImageUrl$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapoint2ImageUrl$outboundSchema;
  /** @deprecated use `RetrieveDatapoint2ImageUrl$Outbound` instead. */
  export type Outbound = RetrieveDatapoint2ImageUrl$Outbound;
}

export function retrieveDatapoint2ImageUrlToJSON(
  retrieveDatapoint2ImageUrl: RetrieveDatapoint2ImageUrl,
): string {
  return JSON.stringify(
    RetrieveDatapoint2ImageUrl$outboundSchema.parse(retrieveDatapoint2ImageUrl),
  );
}

export function retrieveDatapoint2ImageUrlFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapoint2ImageUrl, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapoint2ImageUrl$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapoint2ImageUrl' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapoint22$inboundSchema: z.ZodType<
  RetrieveDatapoint22,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: RetrieveDatapoint2DatasetsType$inboundSchema,
  image_url: z.lazy(() => RetrieveDatapoint2ImageUrl$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "image_url": "imageUrl",
  });
});

/** @internal */
export type RetrieveDatapoint22$Outbound = {
  type: string;
  image_url: RetrieveDatapoint2ImageUrl$Outbound;
};

/** @internal */
export const RetrieveDatapoint22$outboundSchema: z.ZodType<
  RetrieveDatapoint22$Outbound,
  z.ZodTypeDef,
  RetrieveDatapoint22
> = z.object({
  type: RetrieveDatapoint2DatasetsType$outboundSchema,
  imageUrl: z.lazy(() => RetrieveDatapoint2ImageUrl$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    imageUrl: "image_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapoint22$ {
  /** @deprecated use `RetrieveDatapoint22$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapoint22$inboundSchema;
  /** @deprecated use `RetrieveDatapoint22$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapoint22$outboundSchema;
  /** @deprecated use `RetrieveDatapoint22$Outbound` instead. */
  export type Outbound = RetrieveDatapoint22$Outbound;
}

export function retrieveDatapoint22ToJSON(
  retrieveDatapoint22: RetrieveDatapoint22,
): string {
  return JSON.stringify(
    RetrieveDatapoint22$outboundSchema.parse(retrieveDatapoint22),
  );
}

export function retrieveDatapoint22FromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapoint22, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapoint22$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapoint22' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapoint2Type$inboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatapoint2Type
> = z.nativeEnum(RetrieveDatapoint2Type);

/** @internal */
export const RetrieveDatapoint2Type$outboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatapoint2Type
> = RetrieveDatapoint2Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapoint2Type$ {
  /** @deprecated use `RetrieveDatapoint2Type$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapoint2Type$inboundSchema;
  /** @deprecated use `RetrieveDatapoint2Type$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapoint2Type$outboundSchema;
}

/** @internal */
export const RetrieveDatapoint21$inboundSchema: z.ZodType<
  RetrieveDatapoint21,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: RetrieveDatapoint2Type$inboundSchema,
  text: z.string(),
});

/** @internal */
export type RetrieveDatapoint21$Outbound = {
  type: string;
  text: string;
};

/** @internal */
export const RetrieveDatapoint21$outboundSchema: z.ZodType<
  RetrieveDatapoint21$Outbound,
  z.ZodTypeDef,
  RetrieveDatapoint21
> = z.object({
  type: RetrieveDatapoint2Type$outboundSchema,
  text: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapoint21$ {
  /** @deprecated use `RetrieveDatapoint21$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapoint21$inboundSchema;
  /** @deprecated use `RetrieveDatapoint21$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapoint21$outboundSchema;
  /** @deprecated use `RetrieveDatapoint21$Outbound` instead. */
  export type Outbound = RetrieveDatapoint21$Outbound;
}

export function retrieveDatapoint21ToJSON(
  retrieveDatapoint21: RetrieveDatapoint21,
): string {
  return JSON.stringify(
    RetrieveDatapoint21$outboundSchema.parse(retrieveDatapoint21),
  );
}

export function retrieveDatapoint21FromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapoint21, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapoint21$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapoint21' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapointContent2$inboundSchema: z.ZodType<
  RetrieveDatapointContent2,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => RetrieveDatapoint21$inboundSchema),
  z.lazy(() => RetrieveDatapoint22$inboundSchema),
]);

/** @internal */
export type RetrieveDatapointContent2$Outbound =
  | RetrieveDatapoint21$Outbound
  | RetrieveDatapoint22$Outbound;

/** @internal */
export const RetrieveDatapointContent2$outboundSchema: z.ZodType<
  RetrieveDatapointContent2$Outbound,
  z.ZodTypeDef,
  RetrieveDatapointContent2
> = z.union([
  z.lazy(() => RetrieveDatapoint21$outboundSchema),
  z.lazy(() => RetrieveDatapoint22$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapointContent2$ {
  /** @deprecated use `RetrieveDatapointContent2$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointContent2$inboundSchema;
  /** @deprecated use `RetrieveDatapointContent2$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointContent2$outboundSchema;
  /** @deprecated use `RetrieveDatapointContent2$Outbound` instead. */
  export type Outbound = RetrieveDatapointContent2$Outbound;
}

export function retrieveDatapointContent2ToJSON(
  retrieveDatapointContent2: RetrieveDatapointContent2,
): string {
  return JSON.stringify(
    RetrieveDatapointContent2$outboundSchema.parse(retrieveDatapointContent2),
  );
}

export function retrieveDatapointContent2FromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapointContent2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapointContent2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapointContent2' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapointContent$inboundSchema: z.ZodType<
  RetrieveDatapointContent,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.array(z.union([
    z.lazy(() => RetrieveDatapoint21$inboundSchema),
    z.lazy(() => RetrieveDatapoint22$inboundSchema),
  ])),
]);

/** @internal */
export type RetrieveDatapointContent$Outbound =
  | string
  | Array<RetrieveDatapoint21$Outbound | RetrieveDatapoint22$Outbound>;

/** @internal */
export const RetrieveDatapointContent$outboundSchema: z.ZodType<
  RetrieveDatapointContent$Outbound,
  z.ZodTypeDef,
  RetrieveDatapointContent
> = z.union([
  z.string(),
  z.array(z.union([
    z.lazy(() => RetrieveDatapoint21$outboundSchema),
    z.lazy(() => RetrieveDatapoint22$outboundSchema),
  ])),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapointContent$ {
  /** @deprecated use `RetrieveDatapointContent$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointContent$inboundSchema;
  /** @deprecated use `RetrieveDatapointContent$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointContent$outboundSchema;
  /** @deprecated use `RetrieveDatapointContent$Outbound` instead. */
  export type Outbound = RetrieveDatapointContent$Outbound;
}

export function retrieveDatapointContentToJSON(
  retrieveDatapointContent: RetrieveDatapointContent,
): string {
  return JSON.stringify(
    RetrieveDatapointContent$outboundSchema.parse(retrieveDatapointContent),
  );
}

export function retrieveDatapointContentFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapointContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapointContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapointContent' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapointType$inboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatapointType
> = z.nativeEnum(RetrieveDatapointType);

/** @internal */
export const RetrieveDatapointType$outboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatapointType
> = RetrieveDatapointType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapointType$ {
  /** @deprecated use `RetrieveDatapointType$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointType$inboundSchema;
  /** @deprecated use `RetrieveDatapointType$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointType$outboundSchema;
}

/** @internal */
export const RetrieveDatapointFunction$inboundSchema: z.ZodType<
  RetrieveDatapointFunction,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  arguments: z.string(),
});

/** @internal */
export type RetrieveDatapointFunction$Outbound = {
  name: string;
  arguments: string;
};

/** @internal */
export const RetrieveDatapointFunction$outboundSchema: z.ZodType<
  RetrieveDatapointFunction$Outbound,
  z.ZodTypeDef,
  RetrieveDatapointFunction
> = z.object({
  name: z.string(),
  arguments: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapointFunction$ {
  /** @deprecated use `RetrieveDatapointFunction$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointFunction$inboundSchema;
  /** @deprecated use `RetrieveDatapointFunction$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointFunction$outboundSchema;
  /** @deprecated use `RetrieveDatapointFunction$Outbound` instead. */
  export type Outbound = RetrieveDatapointFunction$Outbound;
}

export function retrieveDatapointFunctionToJSON(
  retrieveDatapointFunction: RetrieveDatapointFunction,
): string {
  return JSON.stringify(
    RetrieveDatapointFunction$outboundSchema.parse(retrieveDatapointFunction),
  );
}

export function retrieveDatapointFunctionFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapointFunction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapointFunction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapointFunction' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapointToolCalls$inboundSchema: z.ZodType<
  RetrieveDatapointToolCalls,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  index: z.number().optional(),
  type: RetrieveDatapointType$inboundSchema,
  function: z.lazy(() => RetrieveDatapointFunction$inboundSchema),
});

/** @internal */
export type RetrieveDatapointToolCalls$Outbound = {
  id?: string | undefined;
  index?: number | undefined;
  type: string;
  function: RetrieveDatapointFunction$Outbound;
};

/** @internal */
export const RetrieveDatapointToolCalls$outboundSchema: z.ZodType<
  RetrieveDatapointToolCalls$Outbound,
  z.ZodTypeDef,
  RetrieveDatapointToolCalls
> = z.object({
  id: z.string().optional(),
  index: z.number().optional(),
  type: RetrieveDatapointType$outboundSchema,
  function: z.lazy(() => RetrieveDatapointFunction$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapointToolCalls$ {
  /** @deprecated use `RetrieveDatapointToolCalls$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointToolCalls$inboundSchema;
  /** @deprecated use `RetrieveDatapointToolCalls$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointToolCalls$outboundSchema;
  /** @deprecated use `RetrieveDatapointToolCalls$Outbound` instead. */
  export type Outbound = RetrieveDatapointToolCalls$Outbound;
}

export function retrieveDatapointToolCallsToJSON(
  retrieveDatapointToolCalls: RetrieveDatapointToolCalls,
): string {
  return JSON.stringify(
    RetrieveDatapointToolCalls$outboundSchema.parse(retrieveDatapointToolCalls),
  );
}

export function retrieveDatapointToolCallsFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapointToolCalls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapointToolCalls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapointToolCalls' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapointMessages$inboundSchema: z.ZodType<
  RetrieveDatapointMessages,
  z.ZodTypeDef,
  unknown
> = z.object({
  role: RetrieveDatapointRole$inboundSchema,
  content: z.union([
    z.string(),
    z.array(z.union([
      z.lazy(() => RetrieveDatapoint21$inboundSchema),
      z.lazy(() => RetrieveDatapoint22$inboundSchema),
    ])),
  ]),
  tool_calls: z.array(z.lazy(() => RetrieveDatapointToolCalls$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "tool_calls": "toolCalls",
  });
});

/** @internal */
export type RetrieveDatapointMessages$Outbound = {
  role: string;
  content:
    | string
    | Array<RetrieveDatapoint21$Outbound | RetrieveDatapoint22$Outbound>;
  tool_calls?: Array<RetrieveDatapointToolCalls$Outbound> | undefined;
};

/** @internal */
export const RetrieveDatapointMessages$outboundSchema: z.ZodType<
  RetrieveDatapointMessages$Outbound,
  z.ZodTypeDef,
  RetrieveDatapointMessages
> = z.object({
  role: RetrieveDatapointRole$outboundSchema,
  content: z.union([
    z.string(),
    z.array(z.union([
      z.lazy(() => RetrieveDatapoint21$outboundSchema),
      z.lazy(() => RetrieveDatapoint22$outboundSchema),
    ])),
  ]),
  toolCalls: z.array(z.lazy(() => RetrieveDatapointToolCalls$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    toolCalls: "tool_calls",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatapointMessages$ {
  /** @deprecated use `RetrieveDatapointMessages$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointMessages$inboundSchema;
  /** @deprecated use `RetrieveDatapointMessages$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointMessages$outboundSchema;
  /** @deprecated use `RetrieveDatapointMessages$Outbound` instead. */
  export type Outbound = RetrieveDatapointMessages$Outbound;
}

export function retrieveDatapointMessagesToJSON(
  retrieveDatapointMessages: RetrieveDatapointMessages,
): string {
  return JSON.stringify(
    RetrieveDatapointMessages$outboundSchema.parse(retrieveDatapointMessages),
  );
}

export function retrieveDatapointMessagesFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapointMessages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapointMessages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapointMessages' from JSON`,
  );
}

/** @internal */
export const RetrieveDatapointResponseBody$inboundSchema: z.ZodType<
  RetrieveDatapointResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  workspace_id: z.string(),
  inputs: z.record(z.any()).optional(),
  messages: z.array(z.lazy(() => RetrieveDatapointMessages$inboundSchema))
    .optional(),
  expected_output: z.string().optional(),
  dataset_id: z.string(),
  created_by_id: z.string().optional(),
  updated_by_id: z.string().optional(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2025-03-27T22:14:48.594Z",
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
export type RetrieveDatapointResponseBody$Outbound = {
  _id: string;
  workspace_id: string;
  inputs?: { [k: string]: any } | undefined;
  messages?: Array<RetrieveDatapointMessages$Outbound> | undefined;
  expected_output?: string | undefined;
  dataset_id: string;
  created_by_id?: string | undefined;
  updated_by_id?: string | undefined;
  created?: string | undefined;
  updated: string;
};

/** @internal */
export const RetrieveDatapointResponseBody$outboundSchema: z.ZodType<
  RetrieveDatapointResponseBody$Outbound,
  z.ZodTypeDef,
  RetrieveDatapointResponseBody
> = z.object({
  id: z.string(),
  workspaceId: z.string(),
  inputs: z.record(z.any()).optional(),
  messages: z.array(z.lazy(() => RetrieveDatapointMessages$outboundSchema))
    .optional(),
  expectedOutput: z.string().optional(),
  datasetId: z.string(),
  createdById: z.string().optional(),
  updatedById: z.string().optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2025-03-27T22:14:48.594Z"))
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
export namespace RetrieveDatapointResponseBody$ {
  /** @deprecated use `RetrieveDatapointResponseBody$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatapointResponseBody$inboundSchema;
  /** @deprecated use `RetrieveDatapointResponseBody$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatapointResponseBody$outboundSchema;
  /** @deprecated use `RetrieveDatapointResponseBody$Outbound` instead. */
  export type Outbound = RetrieveDatapointResponseBody$Outbound;
}

export function retrieveDatapointResponseBodyToJSON(
  retrieveDatapointResponseBody: RetrieveDatapointResponseBody,
): string {
  return JSON.stringify(
    RetrieveDatapointResponseBody$outboundSchema.parse(
      retrieveDatapointResponseBody,
    ),
  );
}

export function retrieveDatapointResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatapointResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatapointResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatapointResponseBody' from JSON`,
  );
}
