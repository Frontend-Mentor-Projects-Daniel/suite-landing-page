# Frontend Mentor - Suite landing page solution

This is a solution to the [Suite landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/suite-landing-page-tj_eaU-Ra). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

## Screenshot

[screenshot](./develop/build/assets/images/suite-screenshot.png)

## Links

- Solution URL: [Add solution URL here](https://github.com/Frontend-Mentor-Projects-Daniel/suite-landing-page)
- Live Site URL: [Add live site URL here](https://comforting-sopapillas-ee3e45.netlify.app)

## Built with

- Semantic HTML5 markup
- CSS
- CUBE CSS Methodology
- Grunt TaskRunner

## My Process

I used plain html and css to make this project and I decided to try using a task runner to pipe my files together so that I don't have to make several extra network requests because I have several stylesheets to match the CUBE css methodology. (_As an added bonus I also compressed my images and minified my styles_)

I used fluid type and space scales generated with the tool [utopia](https://utopia.fyi/) in order to have the font size and spacing change along with the view port width

I created this site by breaking it up into components (_e.g. header_) then I made each component responsive and styled it before moving on to the next one

## Challenges

- I had to stop and think about how to implement the SVG above the word `solution` because my font-size changed along with the viewport, not through a media query so I had to have the svg match the font size as it was changing.

In order to solve this problem, I actually used the `em` unit for the width and height of the svg which I had made as a `::before` pseudo-element

## What I learned

- Many grunt packages are very old and even the most used ones often don't work as they should, the tutorials are out of date and the documentation didn't explain what I wanted to know

- I can use calc very easily to create responsive typography and I can use that along with the `em` unit for padding on a button in order to make it change size without media queries

- Headers should be in sequentially descending order

- Sometimes a value has to be changed such as flex-direction going from column to row, it's better to use tailwind in order to avoid having to write code both in the html and css

## Author

- [Portfolio Website](https://daniel-arzani-portfolio.netlify.app/)
- [Frontend Mentor Profile](https://www.frontendmentor.io/profile/DanielArzani)
