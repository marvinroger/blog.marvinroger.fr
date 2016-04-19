![Marvin Roger](http://i.imgur.com/cXDR3YL.jpg "Marvin Roger")

# [blog.marvinroger.fr](https://blog.marvinroger.fr) [![wercker status](https://img.shields.io/wercker/ci/marvinroger/blog.marvinroger.fr.svg?style=flat-square "wercker status")](https://app.wercker.com/project/bykey/882a47bd98ba2e7b67bd99dea9ebe341)

Sources of my very own personal blog, not to be selfish.
It is automatically built and deployed to a dokku server.

## Usage (or note to self)

In wercker, set variables `SERVER_HOSTNAME`, `PROJECT_NAME`, `SERVER_FINGERPRINT` and `SSH` at deploy time.

On the server, before deployment, run:

* `mkdir -p /var/lib/dokku/data/storage/blog/data`
* `mkdir -p /var/lib/dokku/data/storage/blog/images`
* `dokku storage:mount <appname> /var/lib/dokku/data/storage/blog/data:/app/content/data`
* `dokku storage:mount <appname> /var/lib/dokku/data/storage/blog/images:/app/content/images`
* `dokku config:set <appname> MAILGUN_PASSWORD=<password>`
