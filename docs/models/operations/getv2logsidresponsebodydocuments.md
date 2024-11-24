# GetV2LogsIdResponseBodyDocuments

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyDocuments } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyDocuments = {
  id: "84571517-39d3-4627-a77f-05a3b27a1e5e",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "video",
  },
  score: 9262.45,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The id of the resource                                                                                                         |
| `text`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Text content of the document                                                                                                   |
| `metadata`                                                                                                                     | [operations.GetV2LogsIdResponseBodyResponse200Metadata](../../models/operations/getv2logsidresponsebodyresponse200metadata.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `score`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The score of the document                                                                                                      |
| `rerankScore`                                                                                                                  | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The rerank score of the document                                                                                               |