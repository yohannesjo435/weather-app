export let countriesAndCities = [];
//all the muring of the list happend at hte bottom of the code
const countryNames = [
  "Usa",
  "America",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const cityNames = [
  "Addis Ababa",
  "Gondar",
  "Lalibela",
  "Dire Dawa",
  "Mekelle",
  "Bahir Dar",
  "Harar",
  "Jimma",
  "Awasa",
  "Debre Markos",
  "New York",
  "Tokyo",
  "Paris",
  "London",
  "Sydney",
  "Rio de Janeiro",
  "Cairo",
  "Moscow",
  "Beijing",
  "Mumbai",
  "Aberdeen",
  "Abilene",
  "Akron",
  "Albany",
  "Albuquerque",
  "Alexandria",
  "Allentown",
  "Amarillo",
  "Anaheim",
  "Anchorage",
  "Ann Arbor",
  "Antioch",
  "Apple Valley",
  "Appleton",
  "Arlington",
  "Arvada",
  "Asheville",
  "Athens",
  "Atlanta",
  "Atlantic City",
  "Augusta",
  "Aurora",
  "Austin",
  "Bakersfield",
  "Baltimore",
  "Barnstable",
  "Baton Rouge",
  "Beaumont",
  "Bel Air",
  "Bellevue",
  "Berkeley",
  "Bethlehem",
  "Billings",
  "Birmingham",
  "Bloomington",
  "Boise",
  "Boise City",
  "Bonita Springs",
  "Boston",
  "Boulder",
  "Bradenton",
  "Bremerton",
  "Bridgeport",
  "Brighton",
  "Brownsville",
  "Bryan",
  "Buffalo",
  "Burbank",
  "Burlington",
  "Cambridge",
  "Canton",
  "Cape Coral",
  "Carrollton",
  "Cary",
  "Cathedral City",
  "Cedar Rapids",
  "Champaign",
  "Chandler",
  "Charleston",
  "Charlotte",
  "Chattanooga",
  "Chesapeake",
  "Chicago",
  "Chula Vista",
  "Cincinnati",
  "Clarke County",
  "Clarksville",
  "Clearwater",
  "Cleveland",
  "College Station",
  "Colorado Springs",
  "Columbia",
  "Columbus",
  "Concord",
  "Coral Springs",
  "Corona",
  "Corpus Christi",
  "Costa Mesa",
  "Dallas",
  "Daly City",
  "Danbury",
  "Davenport",
  "Davidson County",
  "Dayton",
  "Daytona Beach",
  "Deltona",
  "Denton",
  "Denver",
  "Des Moines",
  "Detroit",
  "Downey",
  "Duluth",
  "Durham",
  "El Monte",
  "El Paso",
  "Elizabeth",
  "Elk Grove",
  "Elkhart",
  "Erie",
  "Escondido",
  "Eugene",
  "Evansville",
  "Fairfield",
  "Fargo",
  "Fayetteville",
  "Fitchburg",
  "Flint",
  "Fontana",
  "Fort Collins",
  "Fort Lauderdale",
  "Fort Smith",
  "Fort Walton Beach",
  "Fort Wayne",
  "Fort Worth",
  "Frederick",
  "Fremont",
  "Fresno",
  "Fullerton",
  "Gainesville",
  "Garden Grove",
  "Garland",
  "Gastonia",
  "Gilbert",
  "Glendale",
  "Grand Prairie",
  "Grand Rapids",
  "Grayslake",
  "Green Bay",
  "GreenBay",
  "Greensboro",
  "Greenville",
  "Gulfport-Biloxi",
  "Hagerstown",
  "Hampton",
  "Harlingen",
  "Harrisburg",
  "Hartford",
  "Havre de Grace",
  "Hayward",
  "Hemet",
  "Henderson",
  "Hesperia",
  "Hialeah",
  "Hickory",
  "High Point",
  "Hollywood",
  "Honolulu",
  "Houma",
  "Houston",
  "Howell",
  "Huntington",
  "Huntington Beach",
  "Huntsville",
  "Independence",
  "Indianapolis",
  "Inglewood",
  "Irvine",
  "Irving",
  "Jackson",
  "Jacksonville",
  "Jefferson",
  "Jersey City",
  "Johnson City",
  "Joliet",
  "Kailua",
  "Kalamazoo",
  "Kaneohe",
  "Kansas City",
  "Kennewick",
];
countriesAndCities = countriesAndCities.concat(cityNames, countryNames);
