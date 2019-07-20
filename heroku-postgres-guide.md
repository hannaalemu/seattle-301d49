# Steps For Provisioning a Postgres Database on Heroku
## 1. Use the `heroku addons` command to provision **heroku postgres**:
```bash
$ heroku addons:create heroku-postgres:hobby-dev
```
<br/>


## 2. Check to make sure your provision has been added to your heroku app:
```bash
$ heroku addons
```
> *You should see your provision in the terminal output:*
![Terminal output](https://code-fellows-city-explorer.s3-us-west-2.amazonaws.com/Screen+Shot+2019-07-20+at+12.08.04+PM.png)

<br/>


## 3. Make sure your local database schema is up to date with `psql`
```bash
$ psql -d city_explorer -f path/to/schema.sql
```
<br/>


## 4.  Push your local database Schema to your provision:
```bash
$ heroku pg:push city_explorer DATABASE_URL --app your-app-name
```
> *You'll see a long list of heroku output strings.  When This is done run:* <br/>`$ heroku logs --tail` <br/> to verify your config vars and `pg:push` were successful.
