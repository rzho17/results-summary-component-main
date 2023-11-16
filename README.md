# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is my version of the results summary component.

### Screenshot

![](./assets/images/desktopResults.jpg)

### Links

- Solution URL: [Here](https://github.com/rzho17/results-summary-component-main)
- Live Site URL: [Here](https://rzho17.github.io/results-summary-component-main/)

## My process

I started by planning out what containers would be needed for my html and css elements. Once I felt confident I found a layout that would work with my ideas I began styling.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile first work-flow
- Flexbox
- Javascript
- JSON

### What I learned

I learned to achieve the effects of the corner borders on each summary component I had to create empty divs to act as a pseudo border to achieve the effects I wanted.

### Continued development

I need to continue learning about how sizing works. I read from the Odin Project that we should try to avoid using set widths and heights on elements that should be resizable so I feel I need more practice on how to use these principles.

Even though I was able to make this solution with my HTML layout, I feel it is not efficient and could be better. I feel I use too many divs to make my layout, but I am just not sure if what I am doing is correct or if there is another way I can make things simpler why still achieving a similar result.

ex: Too many divs to lay things out

```
<div class="scoreBox reaction">
            <div class="topRight"></div>
            <div class="topLeft"></div>
            <div class="btmRight"></div>
            <div class="btmLeft"></div>
            <div class="titleContainer">
              <img
                src="assets/images/icon-reaction.svg"
                alt="red lightning symbol"
              />
              <div>Reaction</div>
            </div>
            <div class="scoreContainer">
              <div class="yourScore"></div>
              <div class="yourBaseScore">/ 100</div>
            </div>
          </div>
```

## Author

- Github - [Here](https://github.com/rzho17)
- Frontend Mentor - [@rzho17](https://www.frontendmentor.io/profile/rzho17)
