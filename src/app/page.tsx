// src/app/page.tsx
import AboutPage, { generateMetadata as aboutGenerateMetadata } from "./about/page";

export async function generateMetadata() {
  const meta = await aboutGenerateMetadata();
  return { ...meta, path: "/" };
}

export default function Home() {
  return <AboutPage />;
}
