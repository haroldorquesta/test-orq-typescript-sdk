# PostV2LogsQueryItemsResponseRetrievals

## Example Usage

```typescript
import { PostV2LogsQueryItemsResponseRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsResponseRetrievals = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "c7c28d27-92c1-4f75-916a-14da32e42f41",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "image",
      },
      score: 9268.02,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique id of the knowledge base                                                                        |
| `documents`                                                                                            | [operations.PostV2LogsQueryItemsDocuments](../../models/operations/postv2logsqueryitemsdocuments.md)[] | :heavy_check_mark:                                                                                     | The documents returned                                                                                 |
| `knowledgeKey`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | The key of the knowledge base                                                                          |
| `query`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The query used to search the knowledge base                                                            |