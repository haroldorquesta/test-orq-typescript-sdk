/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetV2ResourcesEvaluatorsTemplatesObject = {
  List: "list",
} as const;
export type GetV2ResourcesEvaluatorsTemplatesObject = ClosedEnum<
  typeof GetV2ResourcesEvaluatorsTemplatesObject
>;

export const DataFunction = {
  IsValidJson: "is_valid_json",
  BertScore: "bert_score",
  BleuScore: "bleu_score",
  RougeN: "rouge_n",
  MeteorScore: "meteor_score",
  CosineSimilarity: "cosine_similarity",
  LevenshteinDistance: "levenshtein_distance",
  ExactMatch: "exact_match",
  Contains: "contains",
  ContainsAll: "contains_all",
  ContainsAny: "contains_any",
  ContainsEmail: "contains_email",
  ContainsUrl: "contains_url",
  ContainsNone: "contains_none",
  ContainsValidLink: "contains_valid_link",
  EndsWith: "ends_with",
  LengthBetween: "length_between",
  LengthGreaterThan: "length_greater_than",
  LengthLessThan: "length_less_than",
  ModerationsOpenai: "moderations_openai",
  ModerationsGoogle: "moderations_google",
  OneLine: "one_line",
  Regex: "regex",
  StartWith: "start_with",
} as const;
export type DataFunction = ClosedEnum<typeof DataFunction>;

export const DataOutputType = {
  Boolean: "boolean",
  Number: "number",
  String: "string",
  Enum: "enum",
} as const;
export type DataOutputType = ClosedEnum<typeof DataOutputType>;

export type DataMetadata = {
  requiredModelWithToolsSupport?: boolean | undefined;
  requiredRetrievalContext?: boolean | undefined;
  requiredExpectedOutput?: boolean | undefined;
  supportedOnInputType?: boolean | undefined;
  supportedOnOutputType?: boolean | undefined;
};

export const GetV2ResourcesEvaluatorsTemplatesDataType = {
  FunctionEval: "function_eval",
} as const;
export type GetV2ResourcesEvaluatorsTemplatesDataType = ClosedEnum<
  typeof GetV2ResourcesEvaluatorsTemplatesDataType
>;

export type Data2 = {
  id: string;
  displayName: string;
  description: string;
  enabled?: boolean | undefined;
  function: DataFunction;
  outputType: DataOutputType;
  metadata?: DataMetadata | undefined;
  type: GetV2ResourcesEvaluatorsTemplatesDataType;
};

export const OutputType = {
  Boolean: "boolean",
  Number: "number",
  String: "string",
  Enum: "enum",
} as const;
export type OutputType = ClosedEnum<typeof OutputType>;

export const DataType = {
  LlmEval: "llm_eval",
} as const;
export type DataType = ClosedEnum<typeof DataType>;

export type Data1 = {
  id: string;
  displayName: string;
  description: string;
  enabled?: boolean | undefined;
  prompt: string;
  outputType: OutputType;
  type: DataType;
};

export type GetV2ResourcesEvaluatorsTemplatesData = Data1 | Data2;

/**
 * Successful operation
 */
export type GetV2ResourcesEvaluatorsTemplatesResponseBody = {
  object: GetV2ResourcesEvaluatorsTemplatesObject;
  data: Array<Data1 | Data2>;
  hasMore: boolean;
};

/** @internal */
export const GetV2ResourcesEvaluatorsTemplatesObject$inboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesEvaluatorsTemplatesObject> = z
    .nativeEnum(GetV2ResourcesEvaluatorsTemplatesObject);

/** @internal */
export const GetV2ResourcesEvaluatorsTemplatesObject$outboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesEvaluatorsTemplatesObject> =
    GetV2ResourcesEvaluatorsTemplatesObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesEvaluatorsTemplatesObject$ {
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesObject$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesEvaluatorsTemplatesObject$inboundSchema;
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesObject$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesEvaluatorsTemplatesObject$outboundSchema;
}

/** @internal */
export const DataFunction$inboundSchema: z.ZodNativeEnum<typeof DataFunction> =
  z.nativeEnum(DataFunction);

/** @internal */
export const DataFunction$outboundSchema: z.ZodNativeEnum<typeof DataFunction> =
  DataFunction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataFunction$ {
  /** @deprecated use `DataFunction$inboundSchema` instead. */
  export const inboundSchema = DataFunction$inboundSchema;
  /** @deprecated use `DataFunction$outboundSchema` instead. */
  export const outboundSchema = DataFunction$outboundSchema;
}

/** @internal */
export const DataOutputType$inboundSchema: z.ZodNativeEnum<
  typeof DataOutputType
> = z.nativeEnum(DataOutputType);

/** @internal */
export const DataOutputType$outboundSchema: z.ZodNativeEnum<
  typeof DataOutputType
> = DataOutputType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataOutputType$ {
  /** @deprecated use `DataOutputType$inboundSchema` instead. */
  export const inboundSchema = DataOutputType$inboundSchema;
  /** @deprecated use `DataOutputType$outboundSchema` instead. */
  export const outboundSchema = DataOutputType$outboundSchema;
}

/** @internal */
export const DataMetadata$inboundSchema: z.ZodType<
  DataMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  required_model_with_tools_support: z.boolean().optional(),
  required_retrieval_context: z.boolean().optional(),
  required_expected_output: z.boolean().optional(),
  supported_on_input_type: z.boolean().optional(),
  supported_on_output_type: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "required_model_with_tools_support": "requiredModelWithToolsSupport",
    "required_retrieval_context": "requiredRetrievalContext",
    "required_expected_output": "requiredExpectedOutput",
    "supported_on_input_type": "supportedOnInputType",
    "supported_on_output_type": "supportedOnOutputType",
  });
});

/** @internal */
export type DataMetadata$Outbound = {
  required_model_with_tools_support?: boolean | undefined;
  required_retrieval_context?: boolean | undefined;
  required_expected_output?: boolean | undefined;
  supported_on_input_type?: boolean | undefined;
  supported_on_output_type?: boolean | undefined;
};

/** @internal */
export const DataMetadata$outboundSchema: z.ZodType<
  DataMetadata$Outbound,
  z.ZodTypeDef,
  DataMetadata
> = z.object({
  requiredModelWithToolsSupport: z.boolean().optional(),
  requiredRetrievalContext: z.boolean().optional(),
  requiredExpectedOutput: z.boolean().optional(),
  supportedOnInputType: z.boolean().optional(),
  supportedOnOutputType: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    requiredModelWithToolsSupport: "required_model_with_tools_support",
    requiredRetrievalContext: "required_retrieval_context",
    requiredExpectedOutput: "required_expected_output",
    supportedOnInputType: "supported_on_input_type",
    supportedOnOutputType: "supported_on_output_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataMetadata$ {
  /** @deprecated use `DataMetadata$inboundSchema` instead. */
  export const inboundSchema = DataMetadata$inboundSchema;
  /** @deprecated use `DataMetadata$outboundSchema` instead. */
  export const outboundSchema = DataMetadata$outboundSchema;
  /** @deprecated use `DataMetadata$Outbound` instead. */
  export type Outbound = DataMetadata$Outbound;
}

export function dataMetadataToJSON(dataMetadata: DataMetadata): string {
  return JSON.stringify(DataMetadata$outboundSchema.parse(dataMetadata));
}

export function dataMetadataFromJSON(
  jsonString: string,
): SafeParseResult<DataMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataMetadata' from JSON`,
  );
}

/** @internal */
export const GetV2ResourcesEvaluatorsTemplatesDataType$inboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesEvaluatorsTemplatesDataType> = z
    .nativeEnum(GetV2ResourcesEvaluatorsTemplatesDataType);

/** @internal */
export const GetV2ResourcesEvaluatorsTemplatesDataType$outboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesEvaluatorsTemplatesDataType> =
    GetV2ResourcesEvaluatorsTemplatesDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesEvaluatorsTemplatesDataType$ {
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesDataType$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesEvaluatorsTemplatesDataType$inboundSchema;
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesDataType$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesEvaluatorsTemplatesDataType$outboundSchema;
}

/** @internal */
export const Data2$inboundSchema: z.ZodType<Data2, z.ZodTypeDef, unknown> = z
  .object({
    _id: z.string(),
    display_name: z.string(),
    description: z.string(),
    enabled: z.boolean().default(true),
    function: DataFunction$inboundSchema,
    output_type: DataOutputType$inboundSchema,
    metadata: z.lazy(() => DataMetadata$inboundSchema).optional(),
    type: GetV2ResourcesEvaluatorsTemplatesDataType$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "_id": "id",
      "display_name": "displayName",
      "output_type": "outputType",
    });
  });

/** @internal */
export type Data2$Outbound = {
  _id: string;
  display_name: string;
  description: string;
  enabled: boolean;
  function: string;
  output_type: string;
  metadata?: DataMetadata$Outbound | undefined;
  type: string;
};

/** @internal */
export const Data2$outboundSchema: z.ZodType<
  Data2$Outbound,
  z.ZodTypeDef,
  Data2
> = z.object({
  id: z.string(),
  displayName: z.string(),
  description: z.string(),
  enabled: z.boolean().default(true),
  function: DataFunction$outboundSchema,
  outputType: DataOutputType$outboundSchema,
  metadata: z.lazy(() => DataMetadata$outboundSchema).optional(),
  type: GetV2ResourcesEvaluatorsTemplatesDataType$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    displayName: "display_name",
    outputType: "output_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data2$ {
  /** @deprecated use `Data2$inboundSchema` instead. */
  export const inboundSchema = Data2$inboundSchema;
  /** @deprecated use `Data2$outboundSchema` instead. */
  export const outboundSchema = Data2$outboundSchema;
  /** @deprecated use `Data2$Outbound` instead. */
  export type Outbound = Data2$Outbound;
}

export function data2ToJSON(data2: Data2): string {
  return JSON.stringify(Data2$outboundSchema.parse(data2));
}

export function data2FromJSON(
  jsonString: string,
): SafeParseResult<Data2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data2' from JSON`,
  );
}

/** @internal */
export const OutputType$inboundSchema: z.ZodNativeEnum<typeof OutputType> = z
  .nativeEnum(OutputType);

/** @internal */
export const OutputType$outboundSchema: z.ZodNativeEnum<typeof OutputType> =
  OutputType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputType$ {
  /** @deprecated use `OutputType$inboundSchema` instead. */
  export const inboundSchema = OutputType$inboundSchema;
  /** @deprecated use `OutputType$outboundSchema` instead. */
  export const outboundSchema = OutputType$outboundSchema;
}

/** @internal */
export const DataType$inboundSchema: z.ZodNativeEnum<typeof DataType> = z
  .nativeEnum(DataType);

/** @internal */
export const DataType$outboundSchema: z.ZodNativeEnum<typeof DataType> =
  DataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataType$ {
  /** @deprecated use `DataType$inboundSchema` instead. */
  export const inboundSchema = DataType$inboundSchema;
  /** @deprecated use `DataType$outboundSchema` instead. */
  export const outboundSchema = DataType$outboundSchema;
}

/** @internal */
export const Data1$inboundSchema: z.ZodType<Data1, z.ZodTypeDef, unknown> = z
  .object({
    _id: z.string(),
    display_name: z.string(),
    description: z.string(),
    enabled: z.boolean().default(true),
    prompt: z.string(),
    output_type: OutputType$inboundSchema,
    type: DataType$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "_id": "id",
      "display_name": "displayName",
      "output_type": "outputType",
    });
  });

/** @internal */
export type Data1$Outbound = {
  _id: string;
  display_name: string;
  description: string;
  enabled: boolean;
  prompt: string;
  output_type: string;
  type: string;
};

/** @internal */
export const Data1$outboundSchema: z.ZodType<
  Data1$Outbound,
  z.ZodTypeDef,
  Data1
> = z.object({
  id: z.string(),
  displayName: z.string(),
  description: z.string(),
  enabled: z.boolean().default(true),
  prompt: z.string(),
  outputType: OutputType$outboundSchema,
  type: DataType$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    displayName: "display_name",
    outputType: "output_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data1$ {
  /** @deprecated use `Data1$inboundSchema` instead. */
  export const inboundSchema = Data1$inboundSchema;
  /** @deprecated use `Data1$outboundSchema` instead. */
  export const outboundSchema = Data1$outboundSchema;
  /** @deprecated use `Data1$Outbound` instead. */
  export type Outbound = Data1$Outbound;
}

export function data1ToJSON(data1: Data1): string {
  return JSON.stringify(Data1$outboundSchema.parse(data1));
}

export function data1FromJSON(
  jsonString: string,
): SafeParseResult<Data1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data1' from JSON`,
  );
}

/** @internal */
export const GetV2ResourcesEvaluatorsTemplatesData$inboundSchema: z.ZodType<
  GetV2ResourcesEvaluatorsTemplatesData,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Data1$inboundSchema),
  z.lazy(() => Data2$inboundSchema),
]);

/** @internal */
export type GetV2ResourcesEvaluatorsTemplatesData$Outbound =
  | Data1$Outbound
  | Data2$Outbound;

/** @internal */
export const GetV2ResourcesEvaluatorsTemplatesData$outboundSchema: z.ZodType<
  GetV2ResourcesEvaluatorsTemplatesData$Outbound,
  z.ZodTypeDef,
  GetV2ResourcesEvaluatorsTemplatesData
> = z.union([
  z.lazy(() => Data1$outboundSchema),
  z.lazy(() => Data2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesEvaluatorsTemplatesData$ {
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesData$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesEvaluatorsTemplatesData$inboundSchema;
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesData$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesEvaluatorsTemplatesData$outboundSchema;
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesData$Outbound` instead. */
  export type Outbound = GetV2ResourcesEvaluatorsTemplatesData$Outbound;
}

export function getV2ResourcesEvaluatorsTemplatesDataToJSON(
  getV2ResourcesEvaluatorsTemplatesData: GetV2ResourcesEvaluatorsTemplatesData,
): string {
  return JSON.stringify(
    GetV2ResourcesEvaluatorsTemplatesData$outboundSchema.parse(
      getV2ResourcesEvaluatorsTemplatesData,
    ),
  );
}

export function getV2ResourcesEvaluatorsTemplatesDataFromJSON(
  jsonString: string,
): SafeParseResult<GetV2ResourcesEvaluatorsTemplatesData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetV2ResourcesEvaluatorsTemplatesData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetV2ResourcesEvaluatorsTemplatesData' from JSON`,
  );
}

/** @internal */
export const GetV2ResourcesEvaluatorsTemplatesResponseBody$inboundSchema:
  z.ZodType<
    GetV2ResourcesEvaluatorsTemplatesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    object: GetV2ResourcesEvaluatorsTemplatesObject$inboundSchema,
    data: z.array(
      z.union([
        z.lazy(() => Data1$inboundSchema),
        z.lazy(() => Data2$inboundSchema),
      ]),
    ),
    has_more: z.boolean(),
  }).transform((v) => {
    return remap$(v, {
      "has_more": "hasMore",
    });
  });

/** @internal */
export type GetV2ResourcesEvaluatorsTemplatesResponseBody$Outbound = {
  object: string;
  data: Array<Data1$Outbound | Data2$Outbound>;
  has_more: boolean;
};

/** @internal */
export const GetV2ResourcesEvaluatorsTemplatesResponseBody$outboundSchema:
  z.ZodType<
    GetV2ResourcesEvaluatorsTemplatesResponseBody$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesEvaluatorsTemplatesResponseBody
  > = z.object({
    object: GetV2ResourcesEvaluatorsTemplatesObject$outboundSchema,
    data: z.array(
      z.union([
        z.lazy(() => Data1$outboundSchema),
        z.lazy(() => Data2$outboundSchema),
      ]),
    ),
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
export namespace GetV2ResourcesEvaluatorsTemplatesResponseBody$ {
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesEvaluatorsTemplatesResponseBody$inboundSchema;
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesEvaluatorsTemplatesResponseBody$outboundSchema;
  /** @deprecated use `GetV2ResourcesEvaluatorsTemplatesResponseBody$Outbound` instead. */
  export type Outbound = GetV2ResourcesEvaluatorsTemplatesResponseBody$Outbound;
}

export function getV2ResourcesEvaluatorsTemplatesResponseBodyToJSON(
  getV2ResourcesEvaluatorsTemplatesResponseBody:
    GetV2ResourcesEvaluatorsTemplatesResponseBody,
): string {
  return JSON.stringify(
    GetV2ResourcesEvaluatorsTemplatesResponseBody$outboundSchema.parse(
      getV2ResourcesEvaluatorsTemplatesResponseBody,
    ),
  );
}

export function getV2ResourcesEvaluatorsTemplatesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetV2ResourcesEvaluatorsTemplatesResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetV2ResourcesEvaluatorsTemplatesResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetV2ResourcesEvaluatorsTemplatesResponseBody' from JSON`,
  );
}