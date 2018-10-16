# Top Five Places 

Top Five places is a website that gives visitors a local's choice of where to go. From Attractions, Bars, restaurants and accommodation.
There are some beautiful pictures to show our wonderful city to newcomers with a local's point of view. 
The map of Dublin shows some great places that are broken down to different categories 

# UX

The website is designed for anyone who is not local to the city. There is an interactive map that shows the user where to find the best places. Chosen by locals. 

#### User Story

1. A couple comes to the website looking for a weekend getaway in the city.  
2. The carousel at the top of the page shows them three choices Dublin map, attractions and accommodation. 
3. Below the carousel, they are directed to the Dublin Map button. When they click on it they brought to map. Highlighting all the areas to choose from. 
4. The couple clicks each button to the right-hand side of the map. Zooming in or out to the cluster of markers. 
5. They choose accommodation the map zooms into the center of the city with five hotels to choose from.
Clicking the marker will bring up a pop window with the link "Enjoy your stay" This brings the user away from the sight to the hotel in question to look at it.
6. If they were to pick the seaside option. Five markers would appear with a place to stay, two restaurants and two attractions.
7. If the couple ignored the map and were just to use the navigation bar. Attractions and accommodation would bring them to information cards. Each card has some detail and link to the specific website.
8. Bars & Restaurants tab brings the user to a list of the best places. They can click to see the menu or make a phone call to book a table. 

# Features 

* Responsive Navbar with all the buttons linking to import parts of the project. 
* A carousel with three images of Dublin. Buttons on each picture that bring the user to the most important parts of the website. 
* Into card directing the user to the map. Project file for the map is in map.js 
* Information cards for attractions, bars, restaurants and accommodation.
* Map. With zoom features, cluster marks with information windows. Buttons that will remove other marks and zoom in or out as necessary to show the cluster.
* Search bar at the top of the map so the user can find where they are in relation to other locations. 
* Attractions and accommodation cards with information on each place link to there website by the picture or links towards the bottom of the card. 
* A colorful list of bars and restaurants. A personal recommendation and links to all menus, websites and phone numbers.
* The footer contains links on the weather, transport and tourist information 

#### Features left to Implement
* Adding how to get there from current location on the map markers. 

# Technologies Used

* Bootswatch styling theme https://bootswatch.com/4/minty/bootstrap.min.css
* Google maps API https://maps.googleapis.com/maps/api/js?key=AIzaSyCNe6UmR7Cb_o__XnRezEUk17J7li0-Xhg&libraries=places&callback=initAutocomplete
* Jquery https://code.jquery.com/jquery-3.3.1.js
* Cloudflare https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js

# Testing

* Throughout the building of the website, I checked each link internal and external would work. 
* Responsive design was checked with adjusting the window size and toggle device toolbar. 

#### Map testing
* The code was taken from google map API
* The building of the map was over three HTML tests. The first one to ensure the link to the API was working and that the basic map features worked. 
* The second map2.html page was testing the markers and how to place them. 
* Map3.html is testing the buttons would react with the makers. 
* I took some of the working functions from map HTML test and added them in.
* I set about getting the lat and long for each place and placing markers on the map. 
* Adding buttons that would link to the markers ensure a reset button. 
* Correcting the zoom and setting the zoom center for seeing all the cluster locations.
* Adding the search button was the last step. Random address that was not in the top fives or in the country were searched.  
* All buttons related to the map were checked that bars would take the user to a bar location. 


# Credits

Content
* All discriptions have been taken from wikipedia or there specific websites

Hotel links
* http://www.buswells.ie/
* http://www.westburymayfair.com/#local-area/?PS=LGEN_AA_DEMA_CGGL_TPRP&SWAQ=7M96&audland=&audbrand=&auddest=
* http://www.merrionhotel.com/=
* https://www.theshelbournevouchers.ie/afternoon-tea-vouchers?gclid=EAIaIQobChMI2-eDuIS42wIVxG4bCh2O9gCPEAAYASAAEgIe-fD_BwE
* https://www.fitzwilliamhoteldublin.com/
* http://www.royalmarine.ie/?r=3748031&keyword=royal%20marine%20hotel&gclid=EAIaIQobChMIz9-Q54y42wIVh7HtCh0TwwAzEAAYASAAEgLk2_D_BwE

Attractions links
* https://www.tcd.ie/visitors/book-of-kells/
* https://www.nationalgallery.ie/
* https://www.guinness-storehouse.com/en?gclid=EAIaIQobChMI1eLIjdK32wIVEpkbCh0n2AzfEAAYASAAEgJtOPD_BwE
* https://en.wikipedia.org/wiki/Famine 
* https://en.wikipedia.org/wiki/Sandycove

Bars and restaurants
* http://www.fishshack.ie/
* https://restaurantpatrickguilbaud.ie/
* https://delahunt.ie/
* https://www.nightmarket.ie/
* http://www.tonerspub.ie/
* http://dohenyandnesbitts.ie/
* https://www.dublintown.ie/business/hogans/
* https://www.fadestreetsocial.com/
* https://peruke.ie/

Media 
* Images where taken from google images.

Acknowledgements
* Jim Richmond 