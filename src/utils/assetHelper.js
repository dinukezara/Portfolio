// Utility to resolve asset paths with Vite's BASE_URL
export const getAssetUrl = (path) => {
    if (!path) return "";
    if (path.startsWith('http') || path.startsWith('data:')) return path;

    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // BASE_URL always ends with a slash in Vite if configured correctly
    const baseUrl = import.meta.env.BASE_URL || "/";

    return `${baseUrl}${cleanPath}`;
};
