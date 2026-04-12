export function useAssetPath() {
  const {
    app: { baseURL, cdnURL },
  } = useRuntimeConfig();

  const assetBase = cdnURL || baseURL;
  return (assetPath: string) => {
    const cleanBase = assetBase.endsWith("/") ? assetBase : `${assetBase}/`;
    const cleanPath = assetPath.replace(/^\/+/, "");

    if (/^https?:\/\//.test(cleanBase)) {
      return new URL(cleanPath, cleanBase).toString();
    }

    return `${cleanBase}${cleanPath}`;
  };
}
