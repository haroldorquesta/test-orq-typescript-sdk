# PostV2LogsQuery2Response2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { PostV2LogsQuery2Response2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQuery2Response2 = {
  type: "image_url",
  imageUrl: {
    url: "https://french-armchair.org",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.PostV2LogsQuery2Response200ApplicationJSONType](../../models/operations/postv2logsquery2response200applicationjsontype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `imageUrl`                                                                                                                             | [operations.PostV2LogsQuery2ResponseImageUrl](../../models/operations/postv2logsquery2responseimageurl.md)                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |