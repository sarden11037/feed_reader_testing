# feed reader testing

#This application is a brief display in running test scripts in Jasmine against various Javascript functions.

#This application opens a small webpage that displays different RSS feeds provided by the RSS google API. Before the feeds are loaded onto the webpage and displayed they go through a series of tests handled by Jasmine.

#The first Jasmine test suite is calls `RSS Feeds` and determines if the feeds are defined and saved in variables, checks if the URLs are defined, and checks that the names are not empty. 

#The second test suite checks the menu on the page. There are two tests in the second suite, one to check the menu is hidden by default and a second to check that the menu expands and hides once more. 

#The third test suite checks the entries into the actual RSS feeds. There is only a single test and it is to check that there is a minmum of 1 entry into the RSS feed.

#The last test suite checks Rss feed selection with one test. The test checks to see if the content has change in the Rss feed, as it should. 

#If there are any errors , the Jasmine error page should load when reloading the webpage.
#If no errors are found, the web page should load as normal and the test suite that have passed should be displayed at the bottom of the page under the Jasmine section. 
