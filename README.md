# AnalMyList - Analyze My Playlist

The goal of this project is to create a full stack web application for analyzing spotify playlist. This project uses Nx as a mono repo and take advantage of Heroku pipeline to create a dev snapshots, staging and production. Because it is a mono repo, it contains both the backend and frontend codes, which allows Heroku to package everything up as a single full stack application.

## Mono Repo

Using Nx as the mono repo framework allows us to keep both frontend and backend code within the same repository but still compile and perform just as fast as separate repo. On top of that, this allows code and depdencency sharings that improve build time both locally and in CI/CD.

### Front-end / webapp

The frontend webapp is a SPA built with React and Redux.

### Back-end / api

The backend application is a simple Express NodeJS application that provide API interfaces and process tasks for analyzing playlist.

## Heroku

Heroku Platform is easy to use and allows for easy scaling. There is a free-tier we can use while developing and still very affortable when moving into production.

### Pipeline

The ability to create a snapshot on every PR is a huge benefits for development. Furthermore, the integration with GitHub create a full automated CI/CD with little to no interaction from developers.

There is also different environments for dev, staging and production. Moving a new version of the application from staging to production is a simple promote command with virtually no downtime.

### Add-ons

There are numerous addons provided by Heroku that we can take advantages of, such as PosgreSQL for database and Redis for cache.

## Guide

To get started, make sure you clone and install all dependencies by running the command

`$ npm install`

### Build Project

`$ nx affected --target=build`

### Test Project

`$ nx affected --target=test`

### Running Project

`$ nx run api:serve`

`$ nx run webapp:serve`

## Road Map

### February 1st - Project Initialized

- Start work on Frontend webapp
  - Login Page
  - Playlist Selection
  - Result Page
- Start work on Backend api server
  - Provide Auth API
  - Provide Playlist Selection API
  - Support Playlist Analyzation
  - Provide Result API
- Support Spotify API
  - Auth API
  - Playlist API
  - Songs Meta Data API

### March 15th - Minimum Viable Product Finished

- MVP supports logging in, selecting playlist and showing result
- Start work on Machine Learning
- Polish project and prepare for launch

### April 1st - Product Launched

- Monitor and Scale as needed
- Add support for Apple Music
- Mobile App Support
