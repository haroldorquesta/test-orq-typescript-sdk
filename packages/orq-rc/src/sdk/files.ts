/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesBulkUpload } from "../funcs/filesBulkUpload.js";
import { filesUpload } from "../funcs/filesUpload.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Files extends ClientSDK {
  /**
   * Upload file
   *
   * @remarks
   * Files are used to upload documents that can be used with features like [Deployments](https://docs.orq.ai/reference/post_v2-deployments-get-config).
   */
  async upload(
    request?: operations.FileUploadRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.FileUploadResponseBody> {
    return unwrapAsync(filesUpload(
      this,
      request,
      options,
    ));
  }

  /**
   * Bulk upload file
   *
   * @remarks
   * Files are used to upload documents that can be used with features like [Deployments](https://docs.orq.ai/reference/post_v2-deployments-get-config).
   */
  async bulkUpload(
    request: operations.BulkFileUploadRequestBody,
    options?: RequestOptions,
  ): Promise<Array<operations.ResponseBody>> {
    return unwrapAsync(filesBulkUpload(
      this,
      request,
      options,
    ));
  }
}
