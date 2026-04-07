import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Transforma o Next.js em arquivos estáticos (HTML/CSS/JS) para a Hostinger
  output: 'export', 

  trailingSlash: true,
  
  // Essencial para exportação estática se você for usar o componente <Image /> do next/image
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;