# ResponseBodyRetrievals

## Example Usage

```typescript
import { ResponseBodyRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyRetrievals = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "db271f79-314e-4959-9cff-bd6d9809ecd8",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "application",
      },
      score: 5562.33,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `knowledgeId`                                                  | *string*                                                       | :heavy_check_mark:                                             | Unique id of the knowledge base                                |
| `documents`                                                    | [operations.Documents](../../models/operations/documents.md)[] | :heavy_check_mark:                                             | The documents returned                                         |
| `knowledgeKey`                                                 | *string*                                                       | :heavy_check_mark:                                             | The key of the knowledge base                                  |
| `query`                                                        | *string*                                                       | :heavy_check_mark:                                             | The query used to search the knowledge base                    |