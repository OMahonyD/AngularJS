var tributeApp = angular.module('app', 
[]);

tributeApp.controller('controller1', 
function($scope){
  $scope.sheldon = {
    heading: "Sheldon Cooper",
    subheading1: "Bazinga!",
    imageURL: "http://www.fajnradio.cz/underwood/download/images/sheldon_2.jpg",
    subheading2: "Memorable Quotes",
    subheading3: "Your opinion is inaccurate and unwanted. Find out more about Sheldon:",
    linkURL: "http://bigbangtheory.wikia.com/wiki/Sheldon_Cooper"
  }
  
  $scope.quotes = [
    {quote: "- Love is in the air? Wrong, Nitrogen, Oxygen and Carbon Dioxide are in the air."},
    {quote: "- I'm not insane. My mother had me tested."},
    {quote: "- You can't make half a sandwich. If it's not half of a whole sandwich, it's just a small sandwich."},
    {quote: "- Not knowing is part of the fun .... Was that the motto at your community college?"},
    {quote: "- I never said you're not good at what you do. It's just that what you do is not worth doing."},
    {quote: "- When people are upset the cultural convention is to bring them a hot beverage"},
    {quote: "- Given enough startup capital and an adequate research facility, I could be Batman"},
    {quote: "- Interesting. You're afraid of insects and women. Ladybugs must render you catatonic."},
    {quote: "- One does not simply sit in my spot."}
  ]
 
  
});//end tributeApp controller