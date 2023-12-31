import { hash } from "ohash";
import { d as useRuntimeConfig } from "../server.mjs";
import "vue";
import "destr";
import "devalue";
import "klona";
import { q as queryContent, e as encodeQueryParams, j as jsonStringify } from "./query-d22ece3f.js";
import { w as withContentBase, b as addPrerenderPath, s as shouldUseClientDB } from "./utils-f8f3cd09.js";
import { u as useContentPreview } from "./preview-b7a8fe22.js";
const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig().public;
  if (typeof (queryBuilder == null ? void 0 : queryBuilder.params) !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import("./client-db-5496c52a.js").then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
export {
  fetchContentNavigation as f
};
//# sourceMappingURL=navigation-d7436e97.js.map
