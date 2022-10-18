# Cosmic docs

This site is built using Docusaurus.

It is published to github-pages when there are new pushes to `main`. Do not attempt
to publish manually.

Local development:

```bash
git clone https://github.com/warehouse-13/cosmic
cd cosmic/site
```

Because I develop on multiple machines over SSH, I have configured the site to run
from `0.0.0.0`. If you do not need this (ie the machine you are typing on is the
same as the one on which you are looking at the UI), open `package.json` and edit
line 7, removing the `--host 0.0.0.0`.

```bash
npm ci
npm run start
```

Navigate to localhost:3000 (or `http://<device ip>:3000` if you did not change `package.json`).

## Contributing

- Fork this repo
- Create a feature branch
- Follow the instructions at the top of this page to start your local environment
- Make your changes
- Check they look okay, take some screenshots if you changed more than just text
- Open a PR, include your screenshots
- Profit
