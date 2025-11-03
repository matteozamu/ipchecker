# IP Range Checker

A web tool to verify if IP addresses belong to cloud provider ranges.

## Why I Built This

I was reviewing incoming connections to my homelab in my UDM Pro and noticed traffic from unexpected countries. Since I only allow incoming connections from Cloudflare CDN IPs, I wanted to verify if these IPs were legitimate. I couldn't find a simple tool to do this, so I built one.

## What It Does

- Check if an IP address belongs to Cloudflare, AWS, GCP, Azure, or DigitalOcean
- Browse complete IP ranges for each provider
- Validate both IPv4 and IPv6 addresses

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Usage

Enter an IP address and click "Check IP" to see if it matches any known cloud provider ranges. You can also browse the complete list of IP ranges for each provider.

## Tech Stack

Next.js 14, TypeScript, Tailwind CSS, shadcn-ui

## License

MIT
