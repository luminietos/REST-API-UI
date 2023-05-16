# REST-API UI
## "Mflix Movies Midnight Madness"
A Node.js REST API application where the user can look up movies from a database.

<img width="346" alt="mflix movies, tablet size" src="https://github.com/luminietos/REST-API-UI/assets/77718358/127cdb92-58ba-418b-a7a5-49a5be3b0569">

(screen size: tablet view)

## Description
This is a REST API application (with front-end styling/layout) created in April/May 2023. 

It's deployed on [Render]() (and [GitHub]()), and made using and utilizing JavaScript, JSON and React, alongside a bit of HTML and CSS. The database used in this project is from [MongoDB](https://www.mongodb.com/) (sample_mflix).

This site is currently under construction due to issues with deployment (while the site itself is still functional!). Please hold.

## Step-by-step guide - *"How do I actually use this site?"*

[This site]() is a movie database. It utilizes the [Atlas MongoDB database "sample_mflix"](https://www.mongodb.com/). 

At the top of the website (below the heading) is a search field. Below the search field, there are three buttons, and thus three different things you can do with a user input that matches an existing movie in the database.

### the "Submit" button

The first button is the submit button. If the user enters the name or ID of a movie that's in the database, it —— and only it —— will be displayed in the table. If it's not found, nothing will show up.

<img width="334" alt="mflix movies, mobile size, submit button" src="https://github.com/luminietos/REST-API-UI/assets/77718358/96a33ca2-69b6-4873-ba76-d522764d2d3c">

(screen size: mobile view)

### the "Search all" button

By clicking on the second button (titled "Search all"), the user will see an array of no more than ten movies from the database in a table.
This table, at first glance, displays the movie's title, publishing year, director/s, IMDB rating, as well as an image of its poster. 

<img width="960" alt="mflix movies, normal size, search all button" src="https://github.com/luminietos/REST-API-UI/assets/77718358/bbe9618e-d5ce-4bdf-b64b-13582f2d78f4">

(screen size: normal view)

When, however, when the title of the movie (which is underlined and changes color on hover to indicate it's clickable) is clicked, a toggle menu opens up. This toggle menu displays more data on the movie that was clicked: its plot, genre/s and cast.

The toggle menu can be closed (and re-opened, etc. etc.) by clicking the title again, and the user can have as many toggle menus open at once as they please. Only the movie you clicked on will open a toggle - you can have several open at once, but you need to click each movie you wish to know more of individually.

<img width="546" alt="mflix movies, normal size, toggle view" src="https://github.com/luminietos/REST-API-UI/assets/77718358/2a0676ab-6bcc-4885-9f23-25e93a3e3d5c">

(toggle menu view of more data on the movie "Traffic in Souls (1913)")

### the "Modify" button

There's also a third button, titled simply "Modify". This button serves to put one of the five routes mentioned in the previous project (where I built this project's server). 
First, after the user has written a valid movie title into the search field, by pressing the "Modify" button, the selected movie is modified with dummy data detailed in the server (restapi.js). This change is not permanent for obvious reasons. 

<img width="487" alt="dev tools, modify movie button" src="https://github.com/luminietos/REST-API-UI/assets/77718358/60299ae9-fe9a-4dc0-bee1-a7e6f402a446">

(DevTools example)


## Running from a desktop file
If you download my code to your own computer, you can get it running by first running the Rest app (command: <code>npm start</code>) and then its server (command: <code>node restapi.js</code>) -- which includes the connection to the movies' database -- as the two are running on separate localhost ports.

## Purpose
This is the third of the three projects (first being [a Node.js Guestbook](https://github.com/luminietos/GB) and the second technically being the first part to this project: [REST API routes] without the UI I'm making in this one) I created for my University's Full Stack course. 

Note: Technically, while I'm counting this as its own project like my course, it's simultaneously just continuation to the aforementioned [second REST API project](https://github.com/luminietos/REST-API). In this project, I add the front-end styling and layouts to what I coded previously. Some minor changes to the back-end may also occur, should the situation require it.   

Technically, the third project is a continuation of this project, as I simply create a UI for the code I have here. However, for clarity, the 'third project' (or project 2.2, really) is [in its own, separate repository](https://github.com/luminietos/REST-API). Much of the same code will be used for obvious reasons.  

### AKA 
P1: [Guestbook](https://github.com/luminietos/GB) \
P2: [REST API (no UI)](https://github.com/luminietos/REST-API) \
P3: [the REST API's UI/front-end](https://github.com/luminietos/REST-API) 

## Status
The development of this project is ongoing.

## License
[MIT](https://choosealicense.com/licenses/mit/)
