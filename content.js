// This is the function that will be executed before the page loads
function browsingTopics() {


document.browsingTopics = function () {
    const topics = [
          { "ID": 1, "Topic": "/Arts & Entertainment" },
          { "ID": 2, "Topic": "/Arts & Entertainment/Acting & Theater" },
          { "ID": 3, "Topic": "/Arts & Entertainment/Comics" },
          { "ID": 4, "Topic": "/Arts & Entertainment/Concerts & Music Festivals" },
          { "ID": 5, "Topic": "/Arts & Entertainment/Dance" },
          { "ID": 6, "Topic": "/Arts & Entertainment/Entertainment Industry" },
          { "ID": 7, "Topic": "/Arts & Entertainment/Humor" },
          { "ID": 8, "Topic": "/Arts & Entertainment/Humor/Live Comedy" },
          { "ID": 9, "Topic": "/Arts & Entertainment/Live Sporting Events" },
          { "ID": 10, "Topic": "/Arts & Entertainment/Magic" },
          { "ID": 11, "Topic": "/Arts & Entertainment/Movie Listings & Theater Showtimes" },
          { "ID": 12, "Topic": "/Arts & Entertainment/Movies" },
          { "ID": 13, "Topic": "/Arts & Entertainment/Movies/Action & Adventure Films" },
          { "ID": 14, "Topic": "/Arts & Entertainment/Movies/Animated Films" },
          { "ID": 15, "Topic": "/Arts & Entertainment/Movies/Comedy Films" },
          { "ID": 16, "Topic": "/Arts & Entertainment/Movies/Cult & Indie Films" },
          { "ID": 17, "Topic": "/Arts & Entertainment/Movies/Documentary Films" },
          { "ID": 18, "Topic": "/Arts & Entertainment/Movies/Drama Films" },
          { "ID": 19, "Topic": "/Arts & Entertainment/Movies/Family Films" },
          { "ID": 20, "Topic": "/Arts & Entertainment/Movies/Horror Films" },
          { "ID": 21, "Topic": "/Arts & Entertainment/Movies/Romance Films" },
          { "ID": 22, "Topic": "/Arts & Entertainment/Movies/Thriller, Crime & Mystery Films" },
          { "ID": 23, "Topic": "/Arts & Entertainment/Music & Audio" },
          { "ID": 24, "Topic": "/Arts & Entertainment/Music & Audio/Blues" },
          { "ID": 25, "Topic": "/Arts & Entertainment/Music & Audio/Classical Music" },
          { "ID": 26, "Topic": "/Arts & Entertainment/Music & Audio/Country Music" },
          { "ID": 27, "Topic": "/Arts & Entertainment/Music & Audio/Dance & Electronic Music" },
          { "ID": 28, "Topic": "/Arts & Entertainment/Music & Audio/Folk & Traditional Music" },
          { "ID": 29, "Topic": "/Arts & Entertainment/Music & Audio/Jazz" },
          { "ID": 30, "Topic": "/Arts & Entertainment/Music & Audio/Musical Instruments" },
          { "ID": 31, "Topic": "/Arts & Entertainment/Music & Audio/Pop Music" },
          { "ID": 32, "Topic": "/Arts & Entertainment/Music & Audio/Rap & Hip-Hop" },
          { "ID": 33, "Topic": "/Arts & Entertainment/Music & Audio/Rock Music" },
          { "ID": 34, "Topic": "/Arts & Entertainment/Music & Audio/Rock Music/Classic Rock & Oldies" },
          { "ID": 35, "Topic": "/Arts & Entertainment/Music & Audio/Rock Music/Hard Rock & Progressive" },
          { "ID": 36, "Topic": "/Arts & Entertainment/Music & Audio/Rock Music/Indie & Alternative Music" },
          { "ID": 37, "Topic": "/Arts & Entertainment/Music & Audio/Soul & R&B" },
          { "ID": 38, "Topic": "/Arts & Entertainment/Music & Audio/Soundtracks" },
          { "ID": 39, "Topic": "/Arts & Entertainment/Music & Audio/Talk Radio" },
          { "ID": 40, "Topic": "/Arts & Entertainment/Music & Audio/World Music" },
          { "ID": 41, "Topic": "/Arts & Entertainment/Music & Audio/World Music/Reggae & Caribbean Music" },
          { "ID": 42, "Topic": "/Arts & Entertainment/Online Image Galleries" },
          { "ID": 43, "Topic": "/Arts & Entertainment/Online Video" },
          { "ID": 44, "Topic": "/Arts & Entertainment/Opera" },
          { "ID": 45, "Topic": "/Arts & Entertainment/TV Shows & Programs" },
          { "ID": 46, "Topic": "/Arts & Entertainment/TV Shows & Programs/TV Comedies" },
          { "ID": 47, "Topic": "/Arts & Entertainment/TV Shows & Programs/TV Documentary & Nonfiction" },
          { "ID": 48, "Topic": "/Arts & Entertainment/TV Shows & Programs/TV Dramas" },
          { "ID": 49, "Topic": "/Arts & Entertainment/TV Shows & Programs/TV Dramas/TV Soap Operas" },
          { "ID": 50, "Topic": "/Arts & Entertainment/TV Shows & Programs/TV Family-Oriented Shows" },
          { "ID": 51, "Topic": "/Arts & Entertainment/TV Shows & Programs/TV Reality Shows" },
          { "ID": 52, "Topic": "/Arts & Entertainment/TV Shows & Programs/TV Sci-Fi & Fantasy Shows" },
          { "ID": 53, "Topic": "/Arts & Entertainment/Visual Art & Design" },
          { "ID": 54, "Topic": "/Arts & Entertainment/Visual Art & Design/Design" },
          { "ID": 55, "Topic": "/Arts & Entertainment/Visual Art & Design/Painting" },
          { "ID": 56, "Topic": "/Arts & Entertainment/Visual Art & Design/Photographic & Digital Arts" },
          { "ID": 57, "Topic": "/Autos & Vehicles" },
          { "ID": 58, "Topic": "/Autos & Vehicles/Cargo Trucks & Trailers" },
          { "ID": 59, "Topic": "/Autos & Vehicles/Classic Vehicles" },
          { "ID": 60, "Topic": "/Autos & Vehicles/Custom & Performance Vehicles" },
          { "ID": 61, "Topic": "/Autos & Vehicles/Gas Prices & Vehicle Fueling" },
          { "ID": 62, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)" },
          { "ID": 63, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Autonomous Vehicles" },
          { "ID": 64, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Convertibles" },
          { "ID": 65, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Coupes" },
          { "ID": 66, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Hatchbacks" },
          { "ID": 67, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Hybrid & Alternative Vehicles" },
          { "ID": 68, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Luxury Vehicles" },
          { "ID": 69, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Microcars & Subcompacts" },
          { "ID": 70, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Motorcycles" },
          { "ID": 71, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Off-Road Vehicles" },
          { "ID": 72, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Pickup Trucks" },
          { "ID": 73, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Scooters & Mopeds" },
          { "ID": 74, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Sedans" },
          { "ID": 75, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Station Wagons" },
          { "ID": 76, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/SUVs & Crossovers" },
          { "ID": 77, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/SUVs & Crossovers/Crossovers" },
          { "ID": 78, "Topic": "/Autos & Vehicles/Motor Vehicles (By Type)/Vans & Minivans" },
          { "ID": 79, "Topic": "/Autos & Vehicles/Towing & Roadside Assistance" },
          { "ID": 80, "Topic": "/Autos & Vehicles/Vehicle & Traffic Safety" },
          { "ID": 81, "Topic": "/Autos & Vehicles/Vehicle Parts & Accessories" },
          { "ID": 82, "Topic": "/Autos & Vehicles/Vehicle Repair & Maintenance" },
          { "ID": 83, "Topic": "/Autos & Vehicles/Vehicle Shopping" },
          { "ID": 84, "Topic": "/Autos & Vehicles/Vehicle Shopping/Used Vehicles" },
          { "ID": 85, "Topic": "/Autos & Vehicles/Vehicle Shows" },
          { "ID": 86, "Topic": "/Beauty & Fitness" },
          { "ID": 87, "Topic": "/Beauty & Fitness/Body Art" },
          { "ID": 88, "Topic": "/Beauty & Fitness/Face & Body Care" },
          { "ID": 89, "Topic": "/Beauty & Fitness/Face & Body Care/Antiperspirants, Deodorants & Body Sprays" },
          { "ID": 90, "Topic": "/Beauty & Fitness/Face & Body Care/Bath & Body Products" },
          { "ID": 91, "Topic": "/Beauty & Fitness/Face & Body Care/Clean Beauty" },
          { "ID": 92, "Topic": "/Beauty & Fitness/Face & Body Care/Make-Up & Cosmetics" },
          { "ID": 93, "Topic": "/Beauty & Fitness/Face & Body Care/Nail Care Products" },
          { "ID": 94, "Topic": "/Beauty & Fitness/Face & Body Care/Perfumes & Fragrances" },
          { "ID": 95, "Topic": "/Beauty & Fitness/Face & Body Care/Razors & Shavers" },
          { "ID": 96, "Topic": "/Beauty & Fitness/Fashion & Style" },
          { "ID": 97, "Topic": "/Beauty & Fitness/Fitness" },
          { "ID": 98, "Topic": "/Beauty & Fitness/Fitness/Bodybuilding" },
          { "ID": 99, "Topic": "/Beauty & Fitness/Hair Care" },
          { "ID": 100, "Topic": "/Books & Literature" },
          { "ID": 101, "Topic": "/Books & Literature/Children's Literature" },
          { "ID": 102, "Topic": "/Books & Literature/Poetry" },
          { "ID": 103, "Topic": "/Business & Industrial" },
          { "ID": 104, "Topic": "/Business & Industrial/Advertising & Marketing" },
          { "ID": 105, "Topic": "/Business & Industrial/Advertising & Marketing/Sales" },
          { "ID": 106, "Topic": "/Business & Industrial/Agriculture & Forestry" },
          { "ID": 107, "Topic": "/Business & Industrial/Agriculture & Forestry/Food Production" },
    ];
      


    const getRandomTopic = () => topics[Math.floor(Math.random() * topics.length)];
  
    const result = [];

    for (let i = 0; i < 3; i++) { // chrome returns 3 topics
        const randomTopic = getRandomTopic();

        result.push({
            "value": randomTopic.ID,
            "taxonomyVersion": "1",
            "modelVersion": "2"
        });
    }

    return result;
};

// Example usage
const browsingTopicsResult = document.browsingTopics();
console.log(browsingTopicsResult);

}
  
// Inject the function into the webpage
var script = document.createElement('script');
script.textContent = '(' + browsingTopics + ')();';
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
