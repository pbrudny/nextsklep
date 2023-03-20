/** @type {import('next').NextConfig} */
// dla bezpieczenstwa musimy podac url obrazkow
// przy zmianie tego pliku trzeba restartować serwer
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"]
  }
}

module.exports = nextConfig
