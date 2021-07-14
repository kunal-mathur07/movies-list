# Movies list
Web application to help users search about their favourite movies, tv shows and web series. 
They can view their details like Year of release, rated , plot and ratings given on platforms like IMDB, rotten tomatoes and metacritic.
It uses [OMDB API](http://www.omdbapi.com/) as source for the movies, tv shows series etc..

# Features
1. User can search for movies. tv shows etc. by entering the full or partial name of the movie, show etc. On search it will display the movies, shows etc as individual cards in a grid layout. 
2. Movies are shown as Individual cards with their title, poster and a link to view details. On click of view details the card will expand and show the details about the selected card.
3. Application is responsive and works on all mobile devices and tablets.

[Live Demo](https://kunal-mathur07.github.io/movies-list)





## Installation

 To install and run the application you need to have [**npm**](https://docs.npmjs.com/getting-started)  installed
 

Then either download the .zip of the application or git clone the repository via command line in terminal. Go to the folder(extracted folder in case of .zip) and run the following commands in terminal.

`npm install`

 `npm run build`

`npm start`

  Then you can open the application in browser at  http://localhost:3000

   ### Dependencies
The application has following npm packages as dependencies
 - **webpack** 
	 For bundling all .js files into one bundle.js
 - **webpack-cli** 
	 webpack  command line interface to execute build and server
 - **webpack-dev-server**
	     development server to serve the application locally

 - **style-loader**
		
 - **css-loader**
		 style-loader and css loader to resolve css files and inject in DOM. 
 
 - **html-webpack-plugin**
		To generate the final index.html with the .js bundle and css.
	 

##  Tech Stack and Framework

Application is developed using HTML, Javascript and CSS with webpack as a build tool to generate a single bundle. It is divided into multiple components defined using javascript functions 
All the components are created using DOM APIs on HTML.

### Component
A component in this application  is a javascript function which has name in TitleCase and accepts two parameters domNode and props. 

 - **domNode**
	   Is the Id of the HTML element where the component will be created.
	
 - **props**
		Props is an optional parameter passed as an object. This can contain parent methods or data properties. This is also useful in passing parent methods to child component in case of API calling at the parent level.

e.g

    export  default  function  SearchBar(domNode, props = {})
### Templates
Each component mostly contains html template variables defined using [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Event Binding
Event binding in the component happens on the DOM level by adding eventListeners to the respective template element once the component is mounted on the HTML. Methods to the eventListeners can be passed through props parameter of the component definition.

##  Project structure
	

 - **dist**
	  Build folder containing the production ready code with single index.html file 

 - **src**
		Here the whole code of the application resides all the components and javascript functions  api  methods and style.css
		
	 - **index.js** 
 This is the entry point of the application the **init** method loads the main component and creates the base layout of the application.
 
	 - **components** 
 This folder contains all the components of the application. There are three main components in the application.
 
		 
		 - **Main** 
		 This component is defined in the **index.js** and contains the basic layout of the application.
		 - **SearchBar**
			 Defines the top search bar and binds the search button to search API call passed through props from the main component.
				 
		 - **SearchResults**
			 Defines the search results container and the grid layout . This component contains two child components
			 
			 - **Cards**
				 Each card is a movie result  with a poster image, Title of the movie and a view details link.
			 - **MovieDetails**
Displays the movie details with year of release, rated, ratings and plot of the movie.

	 - **style.css**
		 This is the single styling file for the whole application. The css classes in the file are defined in the order of the components.

 - **index.html**
	 Template for **html-webpack-plugin** to generate final index.html injected with js bundle in the **dist** folder.

 - **webpack.config.js**
	 Build configuration for bundling of the .js, css and running dev server
	 

 - **package.json**
	 Holds application dependency list and metadata.
# Future improvements

 - A complete framework can be built upon this code base with the wrappers around the native DOM manipulation to make the component code lightweight.
 - Implement Lazy load images and debounce api calls 


 

		 

				 

	 

 

  

