/*
 * Entry point for the watch app
 */
import document from "document";

const data = [{"title":"FrontCon Day 1","events":[{"time":"08:00 - 09:00","title":"Registration, Breakfast, and Booths Open"},{"time":"09:00 - 09:30","title":"Opening of the Conference"},{"time":"09:30 - 10:00","title":"DevTools and Headless Chrome – The Automation Power-Couple"},{"time":"10:05 - 10:35","title":"Web performance in large-scale applications"},{"time":"10:40 - 11:10","title":"Backends for frontends with GraphQL"},{"time":"11:10 - 11:45","title":"Break"},{"time":"11:45 - 12:15","title":"JavaScript security: a retrospective"},{"time":"12:20 - 12:50","title":"Moving Web applications into Virtual Reality"},{"time":"12:55 - 13:50","title":"Lunch"},{"time":"13:55 - 14:20","title":"OpenSpace opening"},{"time":"14:25 - 14:55","title":"Channel your inner rockstar with the web audio API."},{"time":"15:00 - 15:25","title":"Break"},{"time":"15:30 - 16:00","title":"Challenge Accepted: Scoping Errors in “Multi-App” Environment"},{"time":"16:05 - 16:40","title":"Getting rid of runtime errors with Elm"},{"time":"16:40 - 17:00","title":"Close Day"},{"time":"19:00 - ...","title":"Dinner and Party"}]},{"title":"FrontCon Day 2","events":[{"time":"08:00 - 09:20","title":"Registration, Breakfast, and Booths Open"},{"time":"09:20 - 09:30","title":"Day 2 – Opening Welcome"},{"time":"09:30 - 10:00","title":"Building lightning-fast sites for the mobile web"},{"time":"10:05 - 10:35","title":"The Variable Crimes We Commit Against JavaScript"},{"time":"10:40 - 11:10","title":"Composing Classes with TypeScript"},{"time":"11:15 - 11:45","title":"Break"},{"time":"11:45 - 12:15","title":"Building a Private React Component Gallery"},{"time":"12:20 - 12:50","title":"Web Speed in Perfection"},{"time":"12:55 - 13:50","title":"Lunch"},{"time":"13:55 - 14:00","title":"Ignite/Lightning talk – Jest & Enzyme – testing your React application"},{"time":"14:05 - 14:10","title":"Ignite/Lightning talk – Will You Help Me End Pixelated Images on the Internet?"},{"time":"14:25 - 14:55","title":"GraphQL ecosystem walkthrough"},{"time":"15:00 - 15:25","title":"Break"},{"time":"15:30 - 16:00","title":"Delivering Fast and Beautiful Images and Video"},{"time":"16:05 - 16:35","title":"Make coding fun: developing a game in the browser"},{"time":"16:40 - 17:00","title":"Closing event"}]}];

const pageElements = document.getElementsByClassName('page');

pageElements.forEach(function(pageElement, pageIndex) {
  const info = data[pageIndex];
  if(!info) {
    pageElement.style.display = 'none';
    return;
  }
  pageElement.getElementsByClassName('header')[0].text = info.title;
  
  const itemElements = pageElement.getElementsByClassName('item');
  itemElements.forEach(function(itemElement, itemIndex) {
    const info = data[pageIndex].events[itemIndex];
    if(!info) {
      itemElement.style.display = 'none';
      return;
    }
    itemElement.getElementById("time").text = info.time;
    itemElement.getElementById("desc").text = info.title;
  });
});
