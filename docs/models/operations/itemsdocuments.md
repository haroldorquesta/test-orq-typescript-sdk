# ItemsDocuments

## Example Usage

```typescript
import { ItemsDocuments } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsDocuments = {
  id: "034fca1c-22d0-41e4-bca1-c3b68f44459c",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "video",
  },
  score: 6500.97,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The id of the resource                                                                                             |
| `text`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Text content of the document                                                                                       |
| `metadata`                                                                                                         | [operations.PostV2LogsQueryItemsResponseMetadata](../../models/operations/postv2logsqueryitemsresponsemetadata.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `score`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The score of the document                                                                                          |
| `rerankScore`                                                                                                      | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The rerank score of the document                                                                                   |