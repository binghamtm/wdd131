/* variables for footer content */
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
/******************************* */
/* Hamburger Menu variables */
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
/******************************** */
/* Current News variables */
let cardContainer = document.querySelector("#card-container");
let news = [
{
    headline: "3 takeaways from Puka Nacua’s appearance on the ‘Mina Kimes Show’",
    url: "https://www.deseret.com/sports/2025/02/14/puka-nacua-kyle-hamilton-mina-kimes-show/",
    image: "https://www.deseret.com/resizer/v2/62XGMHPRDFAMLCCUDDRFLN3TPQ.jpg?auth=6b1f5a2cb54523f347037a442a8bd8c07a7dc1cd534d82802dc938335717482a&focal=3817%2C1524&width=800&height=533",
    alt: "Puka Nakua"
},
{
    headline: "BYU football has hired a longtime Bronco Mendenhall coach — and Army veteran — to its staff",
    url: "https://www.deseret.com/sports/2025/02/13/byu-football-hires-nate-pototschnik/",
    image: "https://www.deseret.com/resizer/v2/NEGW23FQFNEIBIUBT5DUUW7FQQ.JPG?auth=ce50ca0e07cdb72d3dc8d24959a6003703f9aacc3ed49b815ee2ec77d05ee620&focal=0%2C0&width=800&height=515",
    alt: "Lavell Edwards Stadium"
},
{
    headline: "Steve Young tips his hat to Tom Holmoe, the ‘right man for the job’",
    url: "https://www.deseret.com/sports/2025/02/13/steve-young-comments-on-byu-ad-tom-holmoe-retirement-what-made-holmoe-special/",
    image: "https://www.deseret.com/resizer/v2/TNQ4Y5S43NG7RDEOP5BSZPIV3Q.jpg?auth=7e14cd9e063a1995b668988b9933d692fcf9cf41afb665b7214d5e149b78154a&focal=0%2C0&width=800&height=418",
    alt: "Tom Holmoe"
},
{
    headline: "How much will BYU’s offensive personnel change in 2025?",
    url: "https://www.deseret.com/sports/2025/02/13/byu-football-depth-chart-offense/",
    image: "https://www.deseret.com/resizer/v2/5V2TCCCJHNEUVKWRTXTIPRMASY.JPG?auth=2d0dcd0c83836b824aa77ac6a0a2733b1776d8b1afba868725a836aeef382610&focal=0%2C0&width=800&height=570",
    alt: "BYU Football Players"
},
{
    headline: "BYU Will Conduct National Search For Next Athletics Director",
    url: "https://kslsports.com/ncaa/byu/athletics-director-search-shane-reese/538778",
    image: "https://www.deseret.com/resizer/v2/KOWJDLY4ZUVRMWQBUJTXSDX4KY.jpg?auth=7c015af85f72b2fd16e75e8d1cb058c37a95af9d9dac0441f704d5577ccfcb6d&focal=0%2C0&width=800&height=533",
    alt: "salor"
},
{
    headline: "‘This is the right time’: Why Tom Holmoe is retiring after 20 years as BYU’s athletic director",
    url: "https://www.deseret.com/sports/2025/02/12/byu-ad-tom-holmoe-future-replacement-candidate-provo-news-conference/",
    image: "https://www.deseret.com/resizer/v2/JE3DORM6MZB7FJ23W3OGSMP7JY.jpg?auth=4fe3bf7c51eae1b784668863daf54c0390cc972682b48b9db04af33239babd10&focal=3995%2C1241&width=800&height=533",
    alt: "Tom Holmoe"
},
{
    headline: "Have You Seen This? Puka, Luka swap jerseys after Doncic debut in LA",
    url: "https://www.ksl.com/article/51250807/have-you-seen-this-puka-luka-swap-jerseys-after-doncic-debut-in-la",
    image: "https://img.ksl.com/slc/3041/304122/30412247.jpg?filter=kslv2/responsive_story_lg",
    alt: "Luka Nakua"
},
{
    headline: "Mandel’s Mailbag: Alabama, Ohio State, Georgia make up CFB’s Tier 1, but where do others fit?",
    url: "https://www.nytimes.com/athletic/6130487/2025/02/12/college-football-tiers-alabama-ohio-state-georgia/",
    image: "https://static01.nyt.com/athletic/uploads/wp/2025/02/11212949/GettyImages-2196222162-scaled-e1739327439646-1024x688.jpg?width=770&quality=70&auto=webp",
    alt: "Ohio State Fans"
},
{
    headline: "What was said at Tom Holmoe’s retirement press conference",
    url: "https://www.deseret.com/sports/2025/02/12/tom-holmoe-retirement-press-conference/",
    image: "https://www.deseret.com/resizer/v2/KOVDKKDF4NG3HKAO6QC7IUB2WA.jpg?auth=a8b5817cda476f5dca9d70c10d854dde5ebb22255e83262f1a3558d2d0f9ec59&focal=3606%2C1762&width=800&height=533",
    alt: "Tom Holmoe"
},
{
    headline: "Tom Holmoe leaves a BYU legacy of class, monumental milestones and big moves",
    url: "https://www.deseret.com/sports/2025/02/11/byu-athletic-director-tom-holmo-leaves-lasting-legacy-independence-big-12/",
    image: "https://www.deseret.com/resizer/v2/4SH6ZBVJ4OIBKO4AXG5Y63EE4A.jpg?auth=b450ff8a9ed5f5d4c191cd92a85d42da96fde7953db12e4e3dd0fb0ba6502361&focal=0%2C0&width=800&height=561",
    alt: "Tom Holmoe"
},
{
    headline: "Here are some of the possible candidates to replace Tom Holmoe as BYU’s athletic director",
    url: "https://www.deseret.com/sports/2025/02/11/who-will-replace-tom-holmoe-as-byu-athletic-director/",
    image: "https://www.deseret.com/resizer/v2/NEGW23FQFNEIBIUBT5DUUW7FQQ.JPG?auth=ce50ca0e07cdb72d3dc8d24959a6003703f9aacc3ed49b815ee2ec77d05ee620&focal=0%2C0&width=800&height=515",
    alt: "Lavell Edwards Stadium"
},
];

/*************************** */
/**both schedule function variables */
let schedule2024Container = document.querySelector("#schedule-container-2024")
let schedule2024 = [
{
    date: "Sat, Aug 31",
    opponent: "Southern Illinois",
    result: "41-13 BYU",
    opponentFinalWL: "4-8 overall, 2-6 conference",
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/79.png&h=200&w=200"
},
{
    date: "Fri, Sep 6",
    opponent: "SMU",
    result: "18-15 BYU", 
    opponentFinalWL: "", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2567.png&h=200&w=200",
},
{
    date: "Fri, Sep 6",
    opponent: "Wyoming",
    result: "34-14 BYU", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Sep 21",
    opponent: "Kansas State",
    result: "38-9 BYU", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Sep 28",
    opponent: "Baylor",
    result: "34-28 BYU", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Oct 12",
    opponent: "Arizona",
    result: "41-19 BYU", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Fri, Oct 18",
    opponent: "Oklahoma State",
    result: "38-35 BYU", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Oct 26",
    opponent: "UCF",
    result: "37-24 BYU", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Nov 9",
    opponent: "Utah",
    result: "22-21 BYU", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Nov 16",
    opponent: "Kansas",
    result: "17-13 Kansas", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Nov 23",
    opponent: "Arizona State",
    result: "28-23 Arizona State", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Nov 30",
    opponent: "Houston",
    result: "30-18 BYU", 
    opponentFinalWL: "", 
    image: "",
},
{
    date: "Sat, Dec 28",
    opponent: "Colorado",
    result: "36-14 BYU", 
    opponentFinalWL: "", 
    image: "",
},
]


/********************************** */


hamMenu();
footerContent();

if(window.location.href.includes("/index.html")) {
    currentNews(news);
}
if(window.location.href.includes("/2024-schedule.html")) {
    schedule2024Assembly(schedule2024);
}







/* FUNCTIONS */
function hamMenu() {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    })
}

function footerContent() {
    currentYear.innerHTML = today.getFullYear();
    lastModified.innerHTML = document.lastModified;
}

function currentNews(news) {
    cardContainer.innerHTML = "";
  for (let i = 0; i < news.length; i++) {
    cardContainer.innerHTML += `<div class='card card-set-one'><a href="${news[i].url}" target="_blank" rel="noopener noreferrer"><img src='${news[i].image}' alt='${news[i].alt}' loading="lazy"><h2>${news[i].headline}</h2></a></div>`;
  }
}

function schedule2024Assembly(schedule) {
    schedule2024Container.innerHTML = "";
  for (let i = 0; i < schedule.length; i++) {
    schedule2024Container.innerHTML += `<div class='card'><img src='${schedule[i].image}' alt='${schedule[i].opponent}' loading="lazy"><h2>${schedule[i].opponent}</h2><p>${schedule[i].date}</p><p>Final Score: ${schedule[i].result}</p><p>Record: ${schedule[i].opponentFinalWL}</p></div>`;
  }
}