# ResponseBodyDocuments

## Example Usage

```typescript
import { ResponseBodyDocuments } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyDocuments = {
  id: "83936d8d-d8d7-4e26-9e3c-6c4718333c72",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "application",
  },
  score: 9040.23,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The id of the resource                                                                                                   |
| `text`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Text content of the document                                                                                             |
| `metadata`                                                                                                               | [operations.GetV2LogsIdResponseBodyResponseMetadata](../../models/operations/getv2logsidresponsebodyresponsemetadata.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `score`                                                                                                                  | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The score of the document                                                                                                |
| `rerankScore`                                                                                                            | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The rerank score of the document                                                                                         |