# PostV2LogsQueryItemsRetrievals

## Example Usage

```typescript
import { PostV2LogsQueryItemsRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsRetrievals = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "99cfb2fd-41cf-42a0-80cd-57cd4c37ba8a",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "audio",
      },
      score: 2162.73,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `knowledgeId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Unique id of the knowledge base                                          |
| `documents`                                                              | [operations.ItemsDocuments](../../models/operations/itemsdocuments.md)[] | :heavy_check_mark:                                                       | The documents returned                                                   |
| `knowledgeKey`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | The key of the knowledge base                                            |
| `query`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The query used to search the knowledge base                              |