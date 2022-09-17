# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./Screenshot%202022-09-17%20at%2016.03.51.png)

## My process

Mobile first design approach.

I used javascript modules to import the data JSON file.

I added dataset values to index the day in line with javascript Date's getDay function.
This meant that I could style the current day's bar accordingly

### What I learned

I learned to contemplate what data I will be applying to which elements before implementing the html
so that I don't have to waste time refactoring.

I also learned that I should use tailwind's @apply directive when styling elements that possess
similiar attributes such as the bars in the chart. Having to add classes to them all simultaneously
became very difficult

I discovered limitations to Tailwind that I should consider in the future. Tailwind cannot dynamically
add classes to elements using javascript if they haven't already appeared in the document. This is
due to the CSS being rendered when the page is loaded containing only the classes that are present
in the html at the time of loading.
