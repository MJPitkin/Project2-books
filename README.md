# Project 2: Online Library

# Description

The project is a React app designed to act as an online book lookup; when fed a book title it queries the openlibrary.org API collection, searching for matches and presenting a list of books that fit. Clicking on the titles of any of the books in the list takes the user to another page that gives further details on the specific book.

# Deployment Link

https://mjpitkin.github.io/Project2-books/

# Getting Started/Code Installation

Clone the code from the repo at https://github.com/MJPitkin/Project2-books .
Assuming you are using Node Package Manager, run “npm install” in the cloned directory to install dependencies (or equivalent for your chosen package manager).
Run “npm start” to start the app.

# Timeframe and working team

The timeframe for this project was 20 hours of class time, spread over 10 days plus any extra time we could put in during the window. The initial working team size was two (working with Amal Mukhtar), but after the second class session it became an independent project as we decided we would each prefer to work solo. The team split amicably, though this necessitated a reduction in project scope. 

# Technologies used

- React
- JavaScript
- CSS
- HTML
- React Router
- Openlibrary.org’s various book APIs

# Brief

Project #2: Reacathon
Overview
The second project is to build a React application that consumes a public API.

Technical Requirements
Your app must:

- Consume a public API –this could be anything but it must make sense for your project.
- The app should include a router -with several "pages".
- Include wireframes -that you designed before building the app.
- Have semantically clean HTML -you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
- Be deployed online and accessible to the public.

# Planning

The initial plan was to have four major page components; the homepage with a search bar, featured books (manually selected by ourselves), and books the user had recently viewed, the results list that presented the user with the results of their search, the individual detail pages that provided more information on specific books, and finally the reading list page where books the user had added to the list could be referred back to. When the team split the scope of the project had to be reduced, leading to the recently viewed element and the reading list page getting axed.

During the initial stages of the project we had also made use of a Trello board to organise ourselves and designate tasks, which up until the split had worked well.

# Build process

Our first step was in deciding upon an API to use; we ended up selecting openlibrary.org’s APIs, as while it was complex it provided all the data we required for the project (cover images and book descriptions in particular), while other available APIs either lacked a key piece of data or would have presented access issues. After reading through the documentation and discussion with our instructor Kevin we realised that there was a sub-API dedicated for searching through openlibrary.org’s database, which we chose to use as the basis for our search engine. Amal wrote the initial search function, which I then expanded on and used for creating the results page; a key improvement was adding a text filter to replace spaces with ‘+’s, to translate a naturally written query into something the search API could parse. I also found out from an instructor that as the API was based on the same framework as one he was very familiar with, that there were additional parameters I could pass in the fetch to both limit the data fields retrieved (cutting down on unused data in the fetch) as well as limiting the number of individual entries fetched.




```
 function handleClick(e) {
   e.preventDefault();
   fetch("http://openlibrary.org/search.json?title=" + search.replace(' ', '+')+'&limit=10&fields=key,author_name,cover_i,title')
     .then((response) => response.json())
     .then((bookData) => {
       console.log("Book data ->", bookData);
       setBooks(bookData.docs);
       console.log(books);
       navigate("/results");
     })
     .catch(console.error);
 }
```

After this point the group split, and I chose to continue with the current project (but trimmed out the reading list and recently viewed component). My next task was to create the details page component, which would take a key from the search result and use that for a second fetch request when an individual books link was clicked, calling on the book API to fetch more data from the book (specifically, the blurb). This should have been straightforward, but as detailed in the challenges section the inconsistent formatting of the book API resulted in a lot of error handling code being needed. As this was a key part of the entire project, this ended up taking the majority of the remaining time I had; part of it was becoming more familiar with inline conditionals, which I had initially struggled with parsing correctly (it turned out the issue was that checking to see if an array element was undefined would throw an error if the array itself was undefined, but for my purposes all I needed to do was check if the array was undefined).
```
return (
   <>
   <Header/>
   <div id="detailsWrapper">
    
    
       <div id="cover">
        {details.covers === undefined ? "no image available" : <img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} alt='Book Cover' />}
       </div>
 
       <div id="description">
        <h3>{details.title}</h3>
        <h4>{author.name}</h4>
        <p>{details.description === undefined ? "No Description Available." : (
           typeof details.description === 'object' ? details.description.value : details.description
         )}</p>
       </div>
    
   </div>
   <Footer/>
   </>
 )}
```

After much debugging of the error handling code I then had an app that was essentially functional. All that was left was applying some basic CSS to neaten various components up.

# Challenges

Aside from the team halving itself in the early stages of the project and some of the difficulties I’d had with understanding React concepts, the biggest challenge was dealing with the openlibrary API itself; apart from it being split into multiple separate APIs, it was also very inconsistent with the data it returned. Some books would lack certain key properties entirely, or would have the properties formatted in a different way (e.g. most provide the description as a string, but Lord of the Rings will return it as an object with two properties, those being the data type and the actual text). As a result of this what should have been a fairly straightforward bit of information retrieval and display became a major task, necessitating specific error handling code and experimentation to account for the myriad different ways the data had been formatted.

# Wins

As much as it was an irritation to have to do, I was happiest with the code that handled the inconsistent way data was arranged and formatted for the details page; the initial version was a mess of nested if else statements, but I was able to refactor it into something more elegant and DRY via inline conditionals.

# Key Learnings/takeaways

Pick your APIs carefully, because a badly made API is an absolute nightmare to work with. Were I to do this again, I’d spend a lot more time on testing the API first to make sure its outputs are consistent and sanitised, rather than finding that out at the 11th hour.

# Bugs

Even with the error handling code for dealing with the API’s inconsistencies, there are still more poorly formatted records that result in errors when searched for. I was unable to find (and subsequently write exceptions for) every permutation of incorrect formatting; my most likely solution to the issue would be to switch to a different API.

# Future Improvements

- Switch to a different, better sanitised and more consistent API.
- Add recently viewed component and reading list.
- Improve CSS.
- Add pagination to return more search results in a manner that isn’t a single massive, resource intensive data block (doable with current API but ran out of time).


