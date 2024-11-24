# PostV2LogsQueryItemsResponseDocuments

## Example Usage

```typescript
import { PostV2LogsQueryItemsResponseDocuments } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsResponseDocuments = {
  id: "2c49927d-f029-40c9-9a99-1375ca4fade3",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "video",
  },
  score: 1478.21,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The id of the resource                                                                             |
| `text`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Text content of the document                                                                       |
| `metadata`                                                                                         | [operations.PostV2LogsQueryItemsMetadata](../../models/operations/postv2logsqueryitemsmetadata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `score`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | The score of the document                                                                          |
| `rerankScore`                                                                                      | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The rerank score of the document                                                                   |