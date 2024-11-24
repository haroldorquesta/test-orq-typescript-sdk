# PostV2LogsQueryItemsDocuments

## Example Usage

```typescript
import { PostV2LogsQueryItemsDocuments } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsDocuments = {
  id: "5697c065-9c12-4ab9-9f72-a998f2123993",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "image",
  },
  score: 4531.11,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The id of the resource                                                                                                   |
| `text`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Text content of the document                                                                                             |
| `metadata`                                                                                                               | [operations.PostV2LogsQueryItemsResponse200Metadata](../../models/operations/postv2logsqueryitemsresponse200metadata.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `score`                                                                                                                  | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The score of the document                                                                                                |
| `rerankScore`                                                                                                            | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The rerank score of the document                                                                                         |