# Future Proof Works website

A lightweight static homepage for `futureproofworks.com`.

## Preview locally

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Recommended deployment: Cloudflare Pages

1. Create a GitHub repository such as `futureproofworks-site`.
2. Push these files to the repository root.
3. In Cloudflare, open **Workers & Pages** and create a Pages project from the repository.
4. Leave the build command blank and use `/` as the output directory.
5. Add `futureproofworks.com` under **Custom domains**.
6. For the apex domain, Cloudflare will ask you to use Cloudflare DNS and change the nameservers at your registrar.
7. Add `www.futureproofworks.com` and redirect it to the apex domain.

## Before launch

- Replace the email address if needed.
- Add links for Saga, NewsThread, and DHM when available.
- Add a social sharing image later.
- Review the short biography.
