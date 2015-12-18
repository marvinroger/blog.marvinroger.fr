![Marvin Roger](http://i.imgur.com/cXDR3YL.jpg "Marvin Roger")

# [blog.marvinroger.fr](https://blog.marvinroger.fr) [![wercker status](https://img.shields.io/wercker/ci/marvinroger/blog.marvinroger.fr.svg?style=flat-square "wercker status")](https://app.wercker.com/project/bykey/882a47bd98ba2e7b67bd99dea9ebe341)

Sources of my very own personal blog, not to be selfish.
It is automatically built and deployed to a dokku server.

## Usage (or note to self)

In wercker, set variables `SERVER_HOSTNAME`, `PROJECT_NAME`, `SERVER_FINGERPRINT` and `SSH` at deploy time.

In dokku, set `MAILGUN_PASSWORD` and add following docker options:

* `-v /appdata/blog/data:/app/content/data`
* `-v /appdata/blog/images:/app/content/images`
