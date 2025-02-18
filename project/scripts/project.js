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
let schedule2024Container = document.querySelector("#schedule-container-2024");
let schedule2025Container = document.querySelector("#schedule-container-2025");
let schedule2024 = [
{
    date: "Sat, Aug 31",
    opponent: "Southern Illinois",
    result: "41-13 BYU",
    opponentFinalWL: "2-6 conference, 4-8 overall",
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/79.png&h=200&w=200"
},
{
    date: "Fri, Sep 6",
    opponent: "SMU",
    result: "18-15 BYU", 
    opponentFinalWL: " 8-0 conference, 11-3 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2567.png&h=200&w=200",
},
{
    date: "Fri, Sep 6",
    opponent: "Wyoming",
    result: "34-14 BYU", 
    opponentFinalWL: "2-5 conference, 3-9 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2751.png&h=200&w=200",
},
{
    date: "Sat, Sep 21",
    opponent: "Kansas State",
    result: "38-9 BYU", 
    opponentFinalWL: "5-4 conference, 9-4 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2306.png&h=200&w=200",
},
{
    date: "Sat, Sep 28",
    opponent: "Baylor",
    result: "34-28 BYU", 
    opponentFinalWL: "6-3 conference, 8-5 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/239.png&h=200&w=200",
},
{
    date: "Sat, Oct 12",
    opponent: "Arizona",
    result: "41-19 BYU", 
    opponentFinalWL: "2-7 conference, 4-8 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/12.png&h=200&w=200",
},
{
    date: "Fri, Oct 18",
    opponent: "Oklahoma State",
    result: "38-35 BYU", 
    opponentFinalWL: "0-9 conference, 3-9 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/197.png&h=200&w=200",
},
{
    date: "Sat, Oct 26",
    opponent: "UCF",
    result: "37-24 BYU", 
    opponentFinalWL: "2-7 conference, 4-8 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2116.png&h=200&w=200",
},
{
    date: "Sat, Nov 9",
    opponent: "Utah",
    result: "22-21 BYU", 
    opponentFinalWL: "2-7 conference, 5-7 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/254.png&h=200&w=200",
},
{
    date: "Sat, Nov 16",
    opponent: "Kansas",
    result: "17-13 Kansas", 
    opponentFinalWL: "4-5 conference, 5-7 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2305.png&h=200&w=200",
},
{
    date: "Sat, Nov 23",
    opponent: "Arizona State",
    result: "28-23 Arizona State", 
    opponentFinalWL: "7-2 conference, 11-3 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/9.png&h=200&w=200",
},
{
    date: "Sat, Nov 30",
    opponent: "Houston",
    result: "30-18 BYU", 
    opponentFinalWL: "3-6 conference, 4-8 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/248.png&h=200&w=200",
},
{
    date: "Sat, Dec 28",
    opponent: "Colorado",
    result: "36-14 BYU", 
    opponentFinalWL: "7-2 conference, 9-4 overall", 
    image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/38.png&h=200&w=200",
},
];
let schedule2025 = [
    {
        date: "Sat, Aug 30",
        opponent: "Portland State",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2502.png&h=200&w=200"
    },
    {
        date: "Sat, Sep 6",
        opponent: "Stanford",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/24.png&h=200&w=200"
    },
    {
        date: "Sat, Sep 20",
        opponent: "East Carolina",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/151.png&h=200&w=200"
    },
    {
        date: "Sat, Sep 27",
        opponent: "Colorado",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/38.png&h=200&w=200"
    },
    {
        date: "Fri, Oct 3",
        opponent: "West Virginia",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/277.png&h=200&w=200"
    },
    {
        date: "Sat, Oct 11",
        opponent: "Arizona",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/12.png&h=200&w=200"
    },
    {
        date: "Sat, Oct 18",
        opponent: "Utah",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/254.png&h=200&w=200"
    },
    {
        date: "Sat, Oct 25",
        opponent: "Iowa State",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/66.png&h=200&w=200"
    },
    {
        date: "Sat, Nov 8",
        opponent: "Texas Tech",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2641.png&h=200&w=200"
    },
    {
        date: "Sat, Nov 15",
        opponent: "TCU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2628.png&h=200&w=200"
    },
    {
        date: "Sat, Nov 22",
        opponent: "Cincinati",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2132.png&h=200&w=200"
    },
    {
        date: "Sat, Nov 29",
        opponent: "UCF",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2116.png&h=200&w=200"
    },
];
/********************************** */
/**Greatest Wins Variables */
let greatestWinsContainer = document.querySelector("#greatest-wins-container");
let greatestWins = [
    {
        date: "Dec 21, 1984",
        opponent: "Michigan",
        score: "24-17 BYU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/130.png&h=200&w=200"
    },
    {
        date: "Sep 8, 1990",
        opponent: "#1 Miami",
        score: "28-21 BYU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2390.png&h=200&w=200"
    },
    {
        date: "Nov 25, 2006",
        opponent: "Utah",
        score: "33-31 BYU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/254.png&h=200&w=200"
    },
    {
        date: "Dec 19, 1980",
        opponent: "SMU",
        score: "46-45 BYU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2567.png&h=200&w=200"
    },
    {
        date: "Oct 15, 1994",
        opponent: "#17 Notre Dame",
        score: "17-14 BYU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/87.png&h=200&w=200"
    },
    {
        date: "Sep 5, 2009",
        opponent: "#3 Oklahoma",
        score: "14-13 BYU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/201.png&h=200&w=200"
    },
    {
        date: "Nov 28, 2009",
        opponent: "Utah",
        score: "26-23 BYU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/254.png&h=200&w=200"
    },
    {
        date: "Aug 24, 1996",
        opponent: "#12 Texas A&M",
        score: "41-37",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/245.png&h=200&w=200"
    },
    {
        date: "Sep 5, 2015",
        opponent: "Nebraska",
        score: "33-28 BYU",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/158.png&h=200&w=200"
    },
    {
        date: "Sep 1, 1984",
        opponent: "#3 Pittsburgh",
        score: "20-14",
        image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/221.png&h=200&w=200"
    }
];
/******************** */
/**MAIN CODE************ */

hamMenu();
footerContent();

if(window.location.href.includes("/index.html")) {
    currentNews(news);
}
if(window.location.href.includes("/2024-schedule.html")) {
    schedule2024Assembly(schedule2024);
}
if(window.location.href.includes("/2025-schedule.html")) {
    schedule2025Assembly(schedule2025);
}
if(window.location.href.includes("/greatest-wins.html")) {
    greatestWinsAssembly(greatestWins);
}




/******************************* */
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

function schedule2025Assembly(schedule) {
    schedule2025Container.innerHTML = "";
  for (let i = 0; i < schedule.length; i++) {
    schedule2025Container.innerHTML += `<div class='card'><img src='${schedule[i].image}' alt='${schedule[i].opponent}' loading="lazy"><h2>${schedule[i].opponent}</h2><p>${schedule[i].date}</p></div>`;
  }
}

function greatestWinsAssembly(greatestWins) {
    greatestWinsContainer.innerHTML = "";
    for (let i = 0; i < greatestWins.length; i++) {
        greatestWinsContainer.innerHTML += `<div class='card'><img src='${greatestWins[i].image}' alt='${greatestWins[i].opponent}' loading="lazy"><h2>${greatestWins[i].opponent}</h2><p>${greatestWins[i].date}</p><p>Final Score: ${greatestWins[i].score}</p></div>`;
      }
}