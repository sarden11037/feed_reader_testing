/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("check if the URL is defined", function() { 
        for(var i in allFeeds) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url).not.toBe('' || ' ' || " " || "");
        }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("checks that the names are not empty", function() {
            
            for(var i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('' || '' || "" || " ");
            }
        })
    });
    


    /* TODO: Write a new test suite named "The menu" */
    /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
 describe('The menu', function() {
     it("check if the menu is hidden by defaut", function() {
         expect($("body").hasClass("menu-hidden")).toBe(true);
         //expect($(".menu-hidden").toBe(true));
     })
     it('checks if menu changes from visible to hidden', function() {
         //double click, hide and unhide
         $('.menu-icon-link').dblclick();
         expect($('body').hasClass('menu-hidden')).toEqual(true);
         //single click check to see if menu pops
         $('.menu-icon-link').click();
         expect($('body').hasClass('menu-hidden')).toEqual(false);
         
     })
 });
         
        

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
       
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });// end of beforeEach async function
        it('RSS feed contains a minimum of 1 entry', function() {
            var entryNumber =$('.entry').length;
            expect(entryNumber).toBeGreaterThan(1);
        })
        
    });//end of initial enteries suite 

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {
        var first, second;
        beforeEach(function(done) {
          loadFeed(1,function() {
              first = $('.feed').html();
              loadFeed(2, function() {
                  done();
              });
          });  
        });//end before each
        afterEach(function() { 
        loadFeed(0);
        });//end of after each 
        it(' check-test for feed content change',function() {
            expect(first).toBeDefined();
            second = $('.feed').html();
            expect(second).toBeDefined();
            expect(first).not.toEqual(second);// testing does-not equal statement
        })// end of it
        
    });//end of new feed selection suite 
}());
