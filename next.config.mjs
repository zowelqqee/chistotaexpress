import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ofer.html",
        destination: "/ofer",
        permanent: true,
      },
      {
        source: "/ximchistka/index.html",
        destination: "/ximchistka",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
