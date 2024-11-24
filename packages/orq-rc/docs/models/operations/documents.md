# Documents

## Example Usage

```typescript
import { Documents } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Documents = {
  id: "b5fe5eb8-445e-49d4-8c08-e47d0197d90f",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "image",
  },
  score: 4593.14,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The id of the resource                                                                                   |
| `text`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Text content of the document                                                                             |
| `metadata`                                                                                               | [operations.GetV2LogsIdResponseBodyMetadata](../../models/operations/getv2logsidresponsebodymetadata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `score`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The score of the document                                                                                |
| `rerankScore`                                                                                            | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The rerank score of the document                                                                         |