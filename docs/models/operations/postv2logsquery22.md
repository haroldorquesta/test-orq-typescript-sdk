# PostV2LogsQuery22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { PostV2LogsQuery22 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQuery22 = {
  type: "image_url",
  imageUrl: {
    url: "https://slight-chasuble.name",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.PostV2LogsQuery2ResponseType](../../models/operations/postv2logsquery2responsetype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `imageUrl`                                                                                         | [operations.PostV2LogsQuery2ImageUrl](../../models/operations/postv2logsquery2imageurl.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |