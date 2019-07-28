# Publishing a Project to Heroku

1. Make sure you have correct project structure
- Heroku will look for a `package.json` file to build your node project, be sure you have this in your directory.
- If you don't have a package.json run `npm init -y` to create one.
- Make sure all your project dependencies are in your `package.json`.  You must install your node modules with `npm install --save [project-name]` in order to save your projects to your `package.json` file.

2. Make sure you entry file is at the root of your project directory.
- This will be our server.js file.  This needs to be available at the root level of your project so heroku can use it to run your project.

3. Make sure you are a standalone git directory.
- Your project should be a in its own git directory.  You can ensure this by creating a new repository on git and cloning somewhere on your computer, outside of the class repo.

4. Check your git remotes
```bash
git remote -v
```
- If you cloned your directory from git you should an `origin` remote pointing to your github repo.

5. Create your project on heroku
```bash
heroku create [appname]
```
- Follow instructions if this command fails, usually for having illegal characters or a name that is already taken

6. Verify that the heroku remote was added
```bash
git remote -v
```
- This should add a `heroku` remote.  If not run `heroku git:remote -a [appname]` to add one for a previously created heroku app.

7. Add changes and Push to Heorku deployment
```bash
git add .
git commit -m 'your commit message'
git push heroku master
```
- adds changes and pushes them to heroku from the master git branch.
- use `git push heroku [branch]:master` to push from a different git branch.

8. Verify deployment
- Use `heroku logs --tail` to check build logs
  - You might need to add `-a [appname]` if it needs you to specify an app.
- `heroku open` will open your browser and point your URL to your heroku deployed app!

