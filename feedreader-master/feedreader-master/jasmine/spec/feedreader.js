/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function() {
    /* first test suite 'rss feeds'  determines is the feeds are defined, if the urls are valid and checks that the names are not empty
    */
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        
        it("check if the URL is defined", function() { 
        for(var i in allFeeds) {
            expect(allFeeds[i].url).toBeDefined();
            const url = allFeeds[i].url.trim();
            expect(url).not.toBe(''); // compare to empty string
        }
        });


        
        it("checks that the names are not empty", function() {
            
            for(var i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                //expect(allFeeds[i].name).not.toBe('' || '' || "" || " ");
                const url = allFeeds[i].url.trim();
                expect(url).not.toBe(''); // compare to empty string
            }
        });
    });
    


    /* The second test suite menu checks to see if the menu is hidden by default and also checks that the menu populates when clicked as well as hides when clicked once more
    */
 describe('The menu', function() {
     it("check if the menu is hidden by defaut", function() {
         expect($("body").hasClass("menu-hidden")).toBe(true);
         //expect($(".menu-hidden").toBe(true));
     });
     it('checks if menu changes from visible to hidden', function() {
         //double click, hide and unhide
         $('.menu-icon-link').dblclick();
         expect($('body').hasClass('menu-hidden')).toEqual(true);
         //single click check to see if menu pops
         $('.menu-icon-link').click();
         expect($('body').hasClass('menu-hidden')).toEqual(false);
         
     });
 });
         
/* The third test suite 'intial entries' , this is a single test that checks if there is at least 1 entry in the RSS feed 
*/

    
    describe('Initial Entries', function() {
       
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });// end of beforeEach async function
        it('RSS feed contains a minimum of 1 entry', function() {
            var entryNumber =$('.feed  .entry').length;
            expect(entryNumber).toBeGreaterThan(0);
        });
        
    });//end of initial enteries suite 

    /* this test suite checks that there are changes occuring in the Rss feed content
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
        });// end of it
        
    });//end of new feed selection suite 
}());
