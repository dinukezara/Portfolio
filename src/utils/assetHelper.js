// Utility to resolve asset paths with Vite's BASE_URL
export const getAssetUrl = (path) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};
