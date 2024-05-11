# emeraldjava-astro

https://github.com/emeraldjava/emeraldjava-astro

https://emeraldjava.github.io/emeraldjava-astro/

## 11-05-2024

Use this conditional for the base path loading

    base: import.meta.env.DEV ? "." : "/my-sub-path",

- https://github.com/withastro/astro/issues/5512#issuecomment-1751687848
- https://keystatic.com/

## 10-05-2024

Error when not using the 'dist' folder.

    Run actions/upload-pages-artifact@v3
    with:
    path: ./dist/
    name: github-pages
    retention-days: 1
    env:
    PACKAGE_MANAGER: npm
    LOCKFILE: package-lock.json
    VERSION: latest
    Run echo ::group::Archive artifact
    Archive artifact
    tar: dist/: Cannot open: No such file or directory
    tar: Error is not recoverable: exiting now
    Error: Process completed with exit code 2.

## 04-05-2024

- https://github.com/withastro/github-pages
- https://docs.astro.build/en/guides/deploy/github/
- https://about.gitlab.com/blog/2022/10/24/publishing-an-astro-site-with-pages/
- https://www.cmsoftdev.com/01-github-deploy/

Actions
- https://github.com/emeraldjava/emeraldjava-astro/actions
- https://blackgirlbytes.dev/how-to-deploy-an-astro-site-to-github-pages
- https://dev.to/davorg/deploying-github-pages-site-with-github-workflows-3bhh
