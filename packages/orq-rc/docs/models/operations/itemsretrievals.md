# ItemsRetrievals

## Example Usage

```typescript
import { ItemsRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsRetrievals = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "987b46f9-ab76-47d5-9e04-ee33c5334d72",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "audio",
      },
      score: 761.02,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Unique id of the knowledge base                                                                                        |
| `documents`                                                                                                            | [operations.PostV2LogsQueryItemsResponseDocuments](../../models/operations/postv2logsqueryitemsresponsedocuments.md)[] | :heavy_check_mark:                                                                                                     | The documents returned                                                                                                 |
| `knowledgeKey`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The key of the knowledge base                                                                                          |
| `query`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The query used to search the knowledge base                                                                            |