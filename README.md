# REST-API UI
A Node.js REST API application with five different routes, where the user can look up movies via ID.

## Description
This is a REST API application (with front-end styling/layout) created in April 2023. 

It's deployed on [Render]() (and [GitHub]()), and made using and utilizing JavaScript, JSON and React, alongside a bit of HTML and CSS. The database used in this project is from [MongoDB](https://www.mongodb.com/) (sample_mflix).

This site is currently under construction. Please hold.

## Step-by-step guide - *"How do I actually use this site?"*

[This site]() is a movie database. It utilizes the [Atlas MongoDB database "sample_mflix"](https://www.mongodb.com/). 

At the top of the website (below the heading) is a search field.

If the user enters the name or ID of a movie that's in the database, it -- and only it -- will be displayed in the table. If it's not found, nothing will show up.

By clicking on the "Search all" button, the user will see an array of no more than ten movies in a table.
This table, at first glance, displays the movie's title, publishing year, director/s, IMDB rating, as well as an image of its poster. 

When, however, when the title of the movie (which changes color on hover to indicate it's clickable) is clicked, a toggle menu opens up. This toggle menu displays more data on the movie that was clicked: its plot, genre/s and cast.

The toggle menu can be closed (and re-opened, etc. etc.) by clicking the title again, and the user can have as many toggle menus open at once as they please.

### Running from a desktop file
If you download my code to your own computer, you can get it running by first running the Rest app (command: npm start) and then its server (command: node restapi.js) -- which includes the connection to the movies' database -- as the two are running on separate localhost ports.

## Purpose
This is the third of the three projects (first being [a Node.js Guestbook](https://github.com/luminietos/GB) and the second technically being the first part to this project: [REST API routes] without the UI I'm making in this one) I created for my University's Full Stack course. 

Note: Technically, while I'm counting this as its own project like my course, it's simultaneously just continuation to the aforemntioned [second REST API project](https://github.com/luminietos/REST-API). In this project, I add the front-end styling and layouts to what I coded previously. Some minor changes to the back-end may also occur, should the situation require it.   

Technically, the third project is a continuation of this project, as I simply create a UI for the code I have here. However, for clarity, the 'third project' (or project 2.2, really) is [in its own, separate repository](https://github.com/luminietos/REST-API). Much of the same code will be used for obvious reasons.  

### AKA 
P1: [Guestbook](https://github.com/luminietos/GB) \
P2: [REST API (no UI)](https://github.com/luminietos/REST-API) \
P3: [the REST API's UI/front-end](https://github.com/luminietos/REST-API) 

## Status
The development of this project is ongoing.

## License
[MIT](https://choosealicense.com/licenses/mit/)
