# GetV2LogsIdResponseBodyRetrievals

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyRetrievals = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "277c81fe-855b-411d-b738-099f5b02cddc",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "video",
      },
      score: 1449.80,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Unique id of the knowledge base                                                        |
| `documents`                                                                            | [operations.ResponseBodyDocuments](../../models/operations/responsebodydocuments.md)[] | :heavy_check_mark:                                                                     | The documents returned                                                                 |
| `knowledgeKey`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | The key of the knowledge base                                                          |
| `query`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The query used to search the knowledge base                                            |