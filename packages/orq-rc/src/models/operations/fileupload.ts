/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileT = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/**
 * The intended purpose of the uploaded file.
 */
export const Purpose = {
  Retrieval: "retrieval",
} as const;
/**
 * The intended purpose of the uploaded file.
 */
export type Purpose = ClosedEnum<typeof Purpose>;

export type FileUploadRequestBody = {
  /**
   * The file to be uploaded.
   */
  file?: FileT | Blob | undefined;
  /**
   * The intended purpose of the uploaded file.
   */
  purpose?: Purpose | undefined;
};

/**
 * The intended purpose of the uploaded file.
 */
export const FileUploadPurpose = {
  Retrieval: "retrieval",
} as const;
/**
 * The intended purpose of the uploaded file.
 */
export type FileUploadPurpose = ClosedEnum<typeof FileUploadPurpose>;

/**
 * File uploaded successfully
 */
export type FileUploadResponseBody = {
  id: string;
  /**
   * path to the file in the storage
   */
  objectName: string;
  /**
   * The intended purpose of the uploaded file.
   */
  purpose: FileUploadPurpose;
  bytes: number;
  fileName: string;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
};

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    fileName: z.string(),
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
  });

/** @internal */
export type FileT$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

export function fileTToJSON(fileT: FileT): string {
  return JSON.stringify(FileT$outboundSchema.parse(fileT));
}

export function fileTFromJSON(
  jsonString: string,
): SafeParseResult<FileT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileT' from JSON`,
  );
}

/** @internal */
export const Purpose$inboundSchema: z.ZodNativeEnum<typeof Purpose> = z
  .nativeEnum(Purpose);

/** @internal */
export const Purpose$outboundSchema: z.ZodNativeEnum<typeof Purpose> =
  Purpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Purpose$ {
  /** @deprecated use `Purpose$inboundSchema` instead. */
  export const inboundSchema = Purpose$inboundSchema;
  /** @deprecated use `Purpose$outboundSchema` instead. */
  export const outboundSchema = Purpose$outboundSchema;
}

/** @internal */
export const FileUploadRequestBody$inboundSchema: z.ZodType<
  FileUploadRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => FileT$inboundSchema).optional(),
  purpose: Purpose$inboundSchema.default("retrieval"),
});

/** @internal */
export type FileUploadRequestBody$Outbound = {
  file?: FileT$Outbound | Blob | undefined;
  purpose: string;
};

/** @internal */
export const FileUploadRequestBody$outboundSchema: z.ZodType<
  FileUploadRequestBody$Outbound,
  z.ZodTypeDef,
  FileUploadRequestBody
> = z.object({
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema).optional(),
  purpose: Purpose$outboundSchema.default("retrieval"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileUploadRequestBody$ {
  /** @deprecated use `FileUploadRequestBody$inboundSchema` instead. */
  export const inboundSchema = FileUploadRequestBody$inboundSchema;
  /** @deprecated use `FileUploadRequestBody$outboundSchema` instead. */
  export const outboundSchema = FileUploadRequestBody$outboundSchema;
  /** @deprecated use `FileUploadRequestBody$Outbound` instead. */
  export type Outbound = FileUploadRequestBody$Outbound;
}

export function fileUploadRequestBodyToJSON(
  fileUploadRequestBody: FileUploadRequestBody,
): string {
  return JSON.stringify(
    FileUploadRequestBody$outboundSchema.parse(fileUploadRequestBody),
  );
}

export function fileUploadRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<FileUploadRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileUploadRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileUploadRequestBody' from JSON`,
  );
}

/** @internal */
export const FileUploadPurpose$inboundSchema: z.ZodNativeEnum<
  typeof FileUploadPurpose
> = z.nativeEnum(FileUploadPurpose);

/** @internal */
export const FileUploadPurpose$outboundSchema: z.ZodNativeEnum<
  typeof FileUploadPurpose
> = FileUploadPurpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileUploadPurpose$ {
  /** @deprecated use `FileUploadPurpose$inboundSchema` instead. */
  export const inboundSchema = FileUploadPurpose$inboundSchema;
  /** @deprecated use `FileUploadPurpose$outboundSchema` instead. */
  export const outboundSchema = FileUploadPurpose$outboundSchema;
}

/** @internal */
export const FileUploadResponseBody$inboundSchema: z.ZodType<
  FileUploadResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  object_name: z.string(),
  purpose: FileUploadPurpose$inboundSchema,
  bytes: z.number(),
  file_name: z.string(),
  created: z.string().datetime({ offset: true }).default(
    "2024-11-26T03:01:21.984Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "object_name": "objectName",
    "file_name": "fileName",
  });
});

/** @internal */
export type FileUploadResponseBody$Outbound = {
  _id: string;
  object_name: string;
  purpose: string;
  bytes: number;
  file_name: string;
  created: string;
};

/** @internal */
export const FileUploadResponseBody$outboundSchema: z.ZodType<
  FileUploadResponseBody$Outbound,
  z.ZodTypeDef,
  FileUploadResponseBody
> = z.object({
  id: z.string(),
  objectName: z.string(),
  purpose: FileUploadPurpose$outboundSchema,
  bytes: z.number(),
  fileName: z.string(),
  created: z.date().default(() => new Date("2024-11-26T03:01:21.984Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    objectName: "object_name",
    fileName: "file_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileUploadResponseBody$ {
  /** @deprecated use `FileUploadResponseBody$inboundSchema` instead. */
  export const inboundSchema = FileUploadResponseBody$inboundSchema;
  /** @deprecated use `FileUploadResponseBody$outboundSchema` instead. */
  export const outboundSchema = FileUploadResponseBody$outboundSchema;
  /** @deprecated use `FileUploadResponseBody$Outbound` instead. */
  export type Outbound = FileUploadResponseBody$Outbound;
}

export function fileUploadResponseBodyToJSON(
  fileUploadResponseBody: FileUploadResponseBody,
): string {
  return JSON.stringify(
    FileUploadResponseBody$outboundSchema.parse(fileUploadResponseBody),
  );
}

export function fileUploadResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<FileUploadResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileUploadResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileUploadResponseBody' from JSON`,
  );
}
