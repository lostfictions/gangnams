!function(e){function r(i){if(o[i])return o[i].exports;var a=o[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var o={};return r.m=e,r.c=o,r.p="",r(0)}([function(e,r,o){"use strict";var i=o(10),a=function(e){return e[Math.floor(Math.random()*e.length)]},n=function(e){return e[0].toUpperCase()+e.slice(1)},t=function(e){return e.split(" ").map(n).join(" ").split("-").map(n).join("-")},l=function(e){for(var r=e.reduce(function(e,r){return e+r[1]},0),o=0,i=0;i<e.length;i++){var a=e[i];a[1]=a[1]/r+o,o=a[1]}return e[e.length-1][1]=1,function(){for(var r=Math.random(),o=0;o<e.length;o++){var i=e[o];if(r<i[1])return i[0]}throw new Error("We goofed!")}},s={adjectives:o(9).adjs,metals:o(5).metals,animals:o(1).animals,appliances:o(8).appliances,colors:o(3).colors.map(function(e){return e.color.split(/(?=[A-Z])/).join(" ")}),flowers:o(7).flowers,monsters:o(6).names,rooms:o(2).rooms,vegetables:o(4).vegetables},c=l([[s.adjectives,1],[s.colors,.8],[s.metals,.2]]),u=l([[s.animals,1.3],[s.appliances,.1],[s.flowers,.2],[s.monsters,1.5],[s.rooms,.1],[s.vegetables,.25]]),d=function(){return["The",t(a(c())),t(i(a(u())))]};"undefined"!=typeof window?window.gangName=d:console.log(d().join(" "))},function(e,r){"use strict";e.exports={animals:["aardvark","alligator","alpaca","antelope","ape","armadillo","baboon","badger","bat","bear","beaver","bison","boar","buffalo","bull","camel","canary","capybara","cat","chameleon","cheetah","chimpanzee","chinchilla","chipmunk","cougar","cow","coyote","crocodile","crow","deer","dingo","dog","donkey","dromedary","elephant","elk","ewe","ferret","finch","fish","fox","frog","gazelle","gila monster","giraffe","gnu","goat","gopher","gorilla","grizzly bear","ground hog","guinea pig","hamster","hedgehog","hippopotamus","hog","horse","hyena","ibex","iguana","impala","jackal","jaguar","kangaroo","koala","lamb","lemur","leopard","lion","lizard","llama","lynx","mandrill","marmoset","mink","mole","mongoose","monkey","moose","mountain goat","mouse","mule","muskrat","mustang","mynah bird","newt","ocelot","opossum","orangutan","oryx","otter","ox","panda","panther","parakeet","parrot","pig","platypus","polar bear","porcupine","porpoise","prairie dog","puma","rabbit","raccoon","ram","rat","reindeer","reptile","rhinoceros","salamander","seal","sheep","shrew","silver fox","skunk","sloth","snake","squirrel","tapir","tiger","toad","turtle","walrus","warthog","weasel","whale","wildcat","wolf","wolverine","wombat","woodchuck","yak","zebra"]}},function(e,r){"use strict";e.exports={description:"Different kinds of rooms",rooms:["aerary","aircraft cabin","airport lounge","alcove","anatomical theatre","anechoic chamber","antechamber","anteroom","armory","assembly room","atelier","attic","auditorium","backroom","ballroom","basement","bathroom","bedroom","billiard room","boardroom","boiler room","boudoir","breakfast nook","breezeway","cabin","cafeteria","caldarium","cellar","changing room","chapel","classroom","clean room","cloakroom","closet","cold room","common room","computer lab","conference room","conservatory","control room","conversation pit","corner office","courtroom","cry room","darkroom","den","dining room","dormitory","drawing room","dressing room","electrical room","emergency room","engine room","equipment room","fallout shelter","family room","fitting room","foyer","game room","garage","guest room","gym","hotel room","kitchen","laundry room","library","living room","lobby","locker room","loft","lounge","mailroom","map room","motel room","mud room","newsroom","nursery","office","panic room","pantry","parlor","playroom","pool room","print room","rec room","salon","sauna","schoolroom","showroom","sitting room","staff room","stockroom","storm cellar","studio","study","sunroom","tearoom","throne room","transmission control room","tv room","utility room","waiting room","washroom","water closet","weight room","wine cellar","wiring closet","workshop"]}},function(e,r){"use strict";e.exports={description:"List of named HTML colors",colors:[{color:"AliceBlue",hex:"#F0F8FF"},{color:"AntiqueWhite",hex:"#FAEBD7"},{color:"Aqua",hex:"#00FFFF"},{color:"Aquamarine",hex:"#7FFFD4"},{color:"Azure",hex:"#F0FFFF"},{color:"Beige",hex:"#F5F5DC"},{color:"Bisque",hex:"#FFE4C4"},{color:"Black",hex:"#000000"},{color:"BlanchedAlmond",hex:"#FFEBCD"},{color:"Blue",hex:"#0000FF"},{color:"BlueViolet",hex:"#8A2BE2"},{color:"Brown",hex:"#A52A2A"},{color:"BurlyWood",hex:"#DEB887"},{color:"CadetBlue",hex:"#5F9EA0"},{color:"Chartreuse",hex:"#7FFF00"},{color:"Chocolate",hex:"#D2691E"},{color:"Coral",hex:"#FF7F50"},{color:"CornflowerBlue",hex:"#6495ED"},{color:"Cornsilk",hex:"#FFF8DC"},{color:"Crimson",hex:"#DC143C"},{color:"Cyan",hex:"#00FFFF"},{color:"DarkBlue",hex:"#00008B"},{color:"DarkCyan",hex:"#008B8B"},{color:"DarkGoldenRod",hex:"#B8860B"},{color:"DarkGray",hex:"#A9A9A9"},{color:"DarkGreen",hex:"#006400"},{color:"DarkKhaki",hex:"#BDB76B"},{color:"DarkMagenta",hex:"#8B008B"},{color:"DarkOliveGreen",hex:"#556B2F"},{color:"DarkOrange",hex:"#FF8C00"},{color:"DarkOrchid",hex:"#9932CC"},{color:"DarkRed",hex:"#8B0000"},{color:"DarkSalmon",hex:"#E9967A"},{color:"DarkSeaGreen",hex:"#8FBC8F"},{color:"DarkSlateBlue",hex:"#483D8B"},{color:"DarkSlateGray",hex:"#2F4F4F"},{color:"DarkTurquoise",hex:"#00CED1"},{color:"DarkViolet",hex:"#9400D3"},{color:"DeepPink",hex:"#FF1493"},{color:"DeepSkyBlue",hex:"#00BFFF"},{color:"DimGray",hex:"#696969"},{color:"DodgerBlue",hex:"#1E90FF"},{color:"FireBrick",hex:"#B22222"},{color:"FloralWhite",hex:"#FFFAF0"},{color:"ForestGreen",hex:"#228B22"},{color:"Fuchsia",hex:"#FF00FF"},{color:"Gainsboro",hex:"#DCDCDC"},{color:"GhostWhite",hex:"#F8F8FF"},{color:"Gold",hex:"#FFD700"},{color:"GoldenRod",hex:"#DAA520"},{color:"Gray",hex:"#808080"},{color:"Green",hex:"#008000"},{color:"GreenYellow",hex:"#ADFF2F"},{color:"HoneyDew",hex:"#F0FFF0"},{color:"HotPink",hex:"#FF69B4"},{color:"IndianRed ",hex:"#CD5C5C"},{color:"Indigo ",hex:"#4B0082"},{color:"Ivory",hex:"#FFFFF0"},{color:"Khaki",hex:"#F0E68C"},{color:"Lavender",hex:"#E6E6FA"},{color:"LavenderBlush",hex:"#FFF0F5"},{color:"LawnGreen",hex:"#7CFC00"},{color:"LemonChiffon",hex:"#FFFACD"},{color:"LightBlue",hex:"#ADD8E6"},{color:"LightCoral",hex:"#F08080"},{color:"LightCyan",hex:"#E0FFFF"},{color:"LightGoldenRodYellow",hex:"#FAFAD2"},{color:"LightGray",hex:"#D3D3D3"},{color:"LightGreen",hex:"#90EE90"},{color:"LightPink",hex:"#FFB6C1"},{color:"LightSalmon",hex:"#FFA07A"},{color:"LightSeaGreen",hex:"#20B2AA"},{color:"LightSkyBlue",hex:"#87CEFA"},{color:"LightSlateGray",hex:"#778899"},{color:"LightSteelBlue",hex:"#B0C4DE"},{color:"LightYellow",hex:"#FFFFE0"},{color:"Lime",hex:"#00FF00"},{color:"LimeGreen",hex:"#32CD32"},{color:"Linen",hex:"#FAF0E6"},{color:"Magenta",hex:"#FF00FF"},{color:"Maroon",hex:"#800000"},{color:"MediumAquaMarine",hex:"#66CDAA"},{color:"MediumBlue",hex:"#0000CD"},{color:"MediumOrchid",hex:"#BA55D3"},{color:"MediumPurple",hex:"#9370DB"},{color:"MediumSeaGreen",hex:"#3CB371"},{color:"MediumSlateBlue",hex:"#7B68EE"},{color:"MediumSpringGreen",hex:"#00FA9A"},{color:"MediumTurquoise",hex:"#48D1CC"},{color:"MediumVioletRed",hex:"#C71585"},{color:"MidnightBlue",hex:"#191970"},{color:"MintCream",hex:"#F5FFFA"},{color:"MistyRose",hex:"#FFE4E1"},{color:"Moccasin",hex:"#FFE4B5"},{color:"NavajoWhite",hex:"#FFDEAD"},{color:"Navy",hex:"#000080"},{color:"OldLace",hex:"#FDF5E6"},{color:"Olive",hex:"#808000"},{color:"OliveDrab",hex:"#6B8E23"},{color:"Orange",hex:"#FFA500"},{color:"OrangeRed",hex:"#FF4500"},{color:"Orchid",hex:"#DA70D6"},{color:"PaleGoldenRod",hex:"#EEE8AA"},{color:"PaleGreen",hex:"#98FB98"},{color:"PaleTurquoise",hex:"#AFEEEE"},{color:"PaleVioletRed",hex:"#DB7093"},{color:"PapayaWhip",hex:"#FFEFD5"},{color:"PeachPuff",hex:"#FFDAB9"},{color:"Peru",hex:"#CD853F"},{color:"Pink",hex:"#FFC0CB"},{color:"Plum",hex:"#DDA0DD"},{color:"PowderBlue",hex:"#B0E0E6"},{color:"Purple",hex:"#800080"},{color:"Red",hex:"#FF0000"},{color:"RosyBrown",hex:"#BC8F8F"},{color:"RoyalBlue",hex:"#4169E1"},{color:"SaddleBrown",hex:"#8B4513"},{color:"Salmon",hex:"#FA8072"},{color:"SandyBrown",hex:"#F4A460"},{color:"SeaGreen",hex:"#2E8B57"},{color:"SeaShell",hex:"#FFF5EE"},{color:"Sienna",hex:"#A0522D"},{color:"Silver",hex:"#C0C0C0"},{color:"SkyBlue",hex:"#87CEEB"},{color:"SlateBlue",hex:"#6A5ACD"},{color:"SlateGray",hex:"#708090"},{color:"Snow",hex:"#FFFAFA"},{color:"SpringGreen",hex:"#00FF7F"},{color:"SteelBlue",hex:"#4682B4"},{color:"Tan",hex:"#D2B48C"},{color:"Teal",hex:"#008080"},{color:"Thistle",hex:"#D8BFD8"},{color:"Tomato",hex:"#FF6347"},{color:"Turquoise",hex:"#40E0D0"},{color:"Violet",hex:"#EE82EE"},{color:"Wheat",hex:"#F5DEB3"},{color:"White",hex:"#FFFFFF"},{color:"WhiteSmoke",hex:"#F5F5F5"},{color:"Yellow",hex:"#FFFF00"},{color:"YellowGreen",hex:"#9ACD32"}]}},function(e,r){"use strict";e.exports={description:"A list of vegetables.",vegetables:["acorn squash","alfalfa sprout","amaranth","anise","artichoke","arugula","asparagus","aubergine","azuki bean","banana squash","basil","bean sprout","beet","black bean","black-eyed pea","bok choy","borlotti bean","broad beans","broccoflower","broccoli","brussels sprout","butternut squash","cabbage","calabrese","caraway","carrot","cauliflower","cayenne pepper","celeriac","celery","chamomile","chard","chayote","chickpea","chives","cilantro","collard green","corn","corn salad","courgette","cucumber","daikon","delicata","dill","eggplant","endive","fennel","fiddlehead","frisee","garlic","gem squash","ginger","green bean","green pepper","habanero","herbs and spice","horseradish","hubbard squash","jalapeno","jerusalem artichoke","jicama","kale","kidney bean","kohlrabi","lavender","leek ","legume","lemon grass","lentils","lettuce","lima bean","mamey","mangetout","marjoram","mung bean","mushrooms","mustard green","navy bean","nettles","new zealand spinach","nopale","okra","onion","oregano","paprika","parsley","parsnip","patty pan","peas","pinto bean","potato","pumpkin","radicchio","radish","rhubarb","rosemary","runner bean","rutabaga","sage","scallion","shallot","skirret","snap pea","soy bean","spaghetti squash","spinach","squash ","sweet potato","tabasco pepper","taro","tat soi","thyme","tomato","topinambur","tubers","turnip","wasabi","water chestnut","watercress","white radish","yam","zucchini"]}},function(e,r){"use strict";e.exports={description:"metals",metals:["actinium","aluminium","americium","barium","berkelium","beryllium","bismuth","bohrium","cadmium","calcium","californium","cerium","cesium","chromium","cobalt","copper","curium","darmstadtium","dubnium","dysprosium","einsteinium","erbium","europium","fermium","francium","gadolinium","gallium","gold","hafnium","hassium","holmium","indium","iridium","iron","lanthanum","lawrencium","lead","lithium","lutetium","magnesium","manganese","meitnerium","mendelevium","mercury","molybdenum","neodymium","neptunium","nickel","niobium","nobelium","osmium","palladium","platinum","plutonium","polonium","potassium","praseodymium","promethium","protactinium","radium","rhenium","rhodium","roentgenium","rubidium","ruthenium","rutherfordium","samarium","scandium","seaborgium","silver","sodium","strontium","tantalum","technetium","terbium","thallium","thorium","thulium","tin","titanium","tungsten","ununbium","ununhexium","ununpentium","ununquadium","ununtrium","uranium","vanadium","ytterbium","yttrium","zinc","zirconium"]}},function(e,r){"use strict";e.exports={description:"A list of monsters and other mythic creatures",sources:"some from https://en.wikipedia.org/wiki/Mythic_humanoids, others from memory.",names:["angel","brownie","bugbear","centaur","chimera","chupacabra","cockatrice","cyclops","demon","djinn","dragon","draugr","dryad","dwarf","elemental","elf","fairy","faun","frost giant","gargoyle","genie","ghast","ghost","ghoul","giant","gnome","goblin","golem","gorgon","gremlin","griffon","hag","harpy","hippogriff","hobgoblin","homonculus","hydra","imp","incubus","kappa","kobold","kraken","lamassu","leprechaun","lich","manticore","mermaid","merman","minotaur","mummy","naga","nix","nymph","ogre","oni","orc","pegasus","phoenix","pixie","poltergeist","roc","sasquatch","satyr","selkie","siren","spectre","sphinx","sprite","succubus","sylph","thunderbird","troll","unicorn","vampire","valkyrie","warg","wendigo","werewolf","wight","witch","wraith","wyvern","yeti","zombie"]}},function(e,r){"use strict";e.exports={flowers:["anemone","amaryllis","amaranth","aster","azalea","babys breath","begonia","bellflower","bergamot","bird of paradise","bluebell","bottlebrush","buttercup","camellias","carnation","chrysantemum","columbine","clover","crocus","daisy","dahlia","daffodil","delphinium","edelweiss","primrose","forget me not","foxglove","freesia","gerbera daisy","gladiolus","hibiscus","heather","hyacinth","holly","iris","jasmine","ladys slipper","lavender","lilac","lily","lotus flower","marigold","marjoram","mimosa","narcissus","orange blossom","orchid","peach blossom","peony","petunia","rhododendron","rosemary","roses","sage","snapdragon","sunflower","tansy","thistle","thyme","tulip","violet","water lily","zinnia"]}},function(e,r){"use strict";e.exports={description:"A list of home appliances",appliances:["air conditioner","air fryer","air ioniser","aroma lamp","attic fan","bachelor griller","back boiler","barbecue","beehive oven","beverage opener","boiler","bread machine","butane torch","can opener","ceiling fan","central vacuum cleaner","clothes dryer","clothes iron","coffee percolator","coffeemaker","combo washer dryer","compactor","convection heater","convection microwave","convection oven","corn roaster","crepe maker","deep fryer","dehumidifier","dishwasher","earth oven","electric cooker","electric water boiler","embroidery machine","energy regulator","espresso machine","fan heater","field kitchen","fire pot","fireplace toaster","flame supervision device","flattop grill","food steamer","garbage disposal unit","hair dryer","hair iron","halogen oven","home server","hot plate","humidifier","HVAC","icebox","instant hot water dispenser","internet refrigerator","kettle","kimchi refrigerator","kitchener range","micathermic heater","microwave oven","mousetrap","oil heater","oven","panini sandwich grill","patio heater","pneumatic vacuum","popcorn maker","pressure cooker","pressure fryer","radiator","reflector oven","refrigerator","rice cooker","rice polisher","robotic vacuum cleaner","rotisserie","sandwich toaster","self-cleaning oven","set-n-forget cooker","sewing machine","slow cooker","solar cooker","sous-vide cooker","soy milk maker","stove","sump pump","susceptor","swamp cooler","tandoor","thermal immersion circulator","thermal mass refrigerator","tie press","toaster","toaster oven","trivet","trouser press","turkey fryer","vacuum cleaner","vacuum fryer","vaporizer","waffle iron","washing machine","water cooker","water cooler","water heater","wet grinder","window fan","wood-fired oven"]}},function(e,r){"use strict";e.exports={description:"A list of English adjectives.",adjs:["Aristotelian","Arthurian","Bohemian","Brethren","Mosaic","Oceanic","Proctor","Terran","Tudor","abroad","absorbing","abstract","academic","accelerated","accented","accountant","acquainted","acute","addicting","addictive","adjustable","admired","adult","adverse","advised","aerosol","afraid","aggravated","aggressive","agreeable","alienate","aligned","all-round","alleged","almond","alright","altruistic","ambient","ambivalent","amiable","amino","amorphous","amused","anatomical","ancestral","angelic","angrier","answerable","antiquarian","antiretroviral","appellate","applicable","apportioned","approachable","appropriated","archer","aroused","arrested","assertive","assigned","athletic","atrocious","attained","authoritarian","autobiographical","avaricious","avocado","awake","awsome","backstage","backwoods","balding","bandaged","banded","banned","barreled","battle","beaten","begotten","beguiled","bellied","belted","beneficent","besieged","betting","big-money","biggest","biochemical","bipolar","blackened","blame","blessed","blindfolded","bloat","blocked","blooded","blue-collar","blushing","boastful","bolder","bolstered","bonnie","bored","boundary","bounded","bounding","branched","brawling","brazen","breeding","bridged","brimming","brimstone","broadest","broiled","broker","bronze","bruising","buffy","bullied","bungling","burial","buttery","candied","canonical","cantankerous","cardinal","carefree","caretaker","casual","cathartic","causal","chapel","characterized","charcoal","cheeky","cherished","chipotle","chirping","chivalrous","circumstantial","civic","civil","civilised","clanking","clapping","claptrap","classless","cleansed","cleric","cloistered","codified","colloquial","colour","combat","combined","comely","commissioned","commonplace","commuter","commuting","comparable","complementary","compromising","conceding","concentrated","conceptual","conditioned","confederate","confident","confidential","confining","confuse","congressional","consequential","conservative","constituent","contaminated","contemporaneous","contraceptive","convertible","convex","cooked","coronary","corporatist","correlated","corroborated","cosmic","cover","crash","crypto","culminate","cushioned","dandy","dashing","dazzled","decreased","decrepit","dedicated","defaced","defective","defenseless","deluded","deodorant","departed","depress","designing","despairing","destitute","detective","determined","devastating","deviant","devilish","devoted","diagonal","dictated","didactic","differentiated","diffused","dirtier","disabling","disconnected","discovered","disdainful","diseased","disfigured","disheartened","disheveled","disillusioned","disparate","dissident","doable","doctrinal","doing","dotted","double-blind","downbeat","dozen","draining","draught","dread","dried","dropped","dulled","duplicate","eaten","echoing","economical","elaborated","elastic","elective","electoral","elven","embryo","emerald","emergency","emissary","emotional","employed","enamel","encased","encrusted","endangered","engraved","engrossing","enlarged","enlisted","enlivened","ensconced","entangled","enthralling","entire","envious","eradicated","eroded","esoteric","essential","evaporated","ever-present","evergreen","everlasting","exacting","exasperated","excess","exciting","executable","existent","exonerated","exorbitant","exponential","export","extraordinary","exultant","exulting","facsimile","fading","fainter","faith-based","fallacious","faltering","famous","fancier","fast-growing","fated","favourable","fearless","feathered","fellow","fermented","ferocious","fiddling","filling","firmer","fitted","flammable","flawed","fledgling","fleshy","flexible","flickering","floral","flowering","flowing","foggy","folic","foolhardy","foolish","footy","forehand","forked","formative","formulaic","foul-mouthed","fractional","fragrant","fraudulent","freakish","freckled","freelance","freight","fresh","fretted","frugal","fulfilling","fuming","funded","funny","garbled","gathered","geologic","geometric","gibberish","gilded","ginger","glare","glaring","gleaming","glorified","glorious","goalless","gold-plated","goody","grammatical","grande","grateful","gratuitous","graven","greener","grinding","grizzly","groaning","grudging","guaranteed","gusty","gypsy","half-breed","hand-held","handheld","hands-off","hard-pressed","harlot","healing","healthier","healthiest","heart","heart-shaped","heathen","hedonistic","heralded","herbal","high-density","high-performance","high-res","high-yield","hissy","hitless","holiness","homesick","honorable","hooded","hopeless","horrendous","horrible","hot-button","huddled","human","humbling","humid","humiliating","hypnotized","idealistic","idiosyncratic","ignited","illustrated","illustrative","imitated","immense","immersive","immigrant","immoral","impassive","impressionable","improbable","impulsive","in-between","in-flight","inattentive","inbound","inbounds","incalculable","incomprehensible","indefatigable","indigo","indiscriminate","indomitable","inert","inflate","inform","inheriting","injured","injurious","inking","inoffensive","insane","insensible","insidious","insincere","insistent","insolent","insufferable","intemperate","interdependent","interesting","interfering","intern","interpreted","intersecting","intolerable","intolerant","intuitive","irresolute","irritate","jealous","jerking","joining","joint","journalistic","joyful","keyed","knowing","lacklustre","laden","lagging","lamented","laughable","layered","leather","leathern","leery","left-footed","legible","leisure","lessening","liberating","life-size","lifted","lightest","limitless","listening","literary","liver","livid","lobster","locked","long-held","long-lasting","long-running","long-suffering","loudest","loveliest","low-budget","low-carb","lowering","lucid","luckless","lusty","luxurious","magazine","maniac","manmade","maroon","mastered","mated","material","materialistic","meaningful","measuring","mediaeval","medical","meditated","medley","melodic","memorable","memorial","metabolic","metallic","metallurgical","metering","midair","midterm","midway","mighty","migrating","mind-blowing","mind-boggling","minor","mirrored","misguided","misshapen","mitigated","mixed","modernized","molecular","monarch","monastic","morbid","motley","motorized","mounted","multi-million","multidisciplinary","muscled","muscular","muted","mysterious","mythic","nail-biting","natural","nauseous","negative","networked","neurological","neutered","newest","night","nitrous","no-fly","noncommercial","nonsense","north","nuanced","occurring","offensive","oldest","oncoming","one-eyed","one-year","onstage","onward","opaque","open-ended","operating","opportunist","opposing","opt-in","ordinate","outdone","outlaw","outsized","overboard","overheated","oversize","overworked","oyster","paced","panting","paralyzed","paramount","parental","parted","partisan","passive","pastel","patriot","peacekeeping","pedestrian","peevish","penal","penned","pensive","perceptual","perky","permissible","pernicious","perpetuate","perplexed","pervasive","petrochemical","philosophical","picturesque","pillaged","piped","piquant","pitching","plausible","pliable","plumb","politician","polygamous","poorest","portmanteau","posed","positive","possible","postpartum","prank","pre-emptive","precocious","predicted","premium","preparatory","prerequisite","prescient","preserved","presidential","pressed","pressurized","presumed","prewar","priced","pricier","primal","primer","primetime","printed","private","problem","procedural","process","prodigious","professional","programmed","progressive","prolific","promising","promulgated","pronged","proportionate","protracted","pulled","pulsed","purgatory","quick","rapid-fire","raunchy","razed","reactive","readable","realizing","recognised","recovering","recurrent","recycled","redeemable","reflecting","regal","registering","reliable","reminiscent","remorseless","removable","renewable","repeating","repellent","reserve","resigned","respectful","rested","restrict","resultant","retaliatory","retiring","revelatory","reverend","reversing","revolving","ridiculous","right-hand","ringed","risque","robust","roomful","rotating","roused","rubber","run-down","running","runtime","rustling","safest","salient","sanctioned","saute","saved","scandalized","scarlet","scattering","sceptical","scheming","scoundrel","scratched","scratchy","scrolled","seated","second-best","segregated","self-taught","semiautomatic","senior","sensed","sentient","sexier","shadowy","shaken","shaker","shameless","shaped","shiny","shipped","shivering","shoestring","short","short-lived","signed","simplest","simplistic","sizable","skeleton","skinny","skirting","skyrocketed","slamming","slanting","slapstick","sleek","sleepless","sleepy","slender","slimmer","smacking","smokeless","smothered","smouldering","snuff","socialized","solid-state","sometime","sought","spanking","sparing","spattered","specialized","specific","speedy","spherical","spiky","spineless","sprung","squint","stainless","standing","starlight","startled","stately","statewide","stereoscopic","sticky","stimulant","stinky","stoked","stolen","storied","strained","strapping","strengthened","stubborn","stylized","suave","subjective","subjugated","subordinate","succeeding","suffering","summary","sunset","sunshine","supernatural","supervisory","supply-side","surrogate","suspended","suspenseful","swarthy","sweating","sweeping","swinging","swooning","sympathize","synchronized","synonymous","synthetic","tailed","tallest","tangible","tanked","tarry","technical","tectonic","telepathic","tenderest","territorial","testimonial","theistic","thicker","threatening","tight-lipped","timed","timely","timid","torrent","totalled","tougher","traditional","transformed","trapped","traveled","traverse","treated","trial","trunk","trusting","trying","twisted","two-lane","tyrannical","unaided","unassisted","unassuming","unattractive","uncapped","uncomfortable","uncontrolled","uncooked","uncooperative","underground","undersea","undisturbed","unearthly","uneasy","unequal","unfazed","unfinished","unforeseen","unforgivable","unidentified","unimaginative","uninspired","unintended","uninvited","universal","unmasked","unorthodox","unparalleled","unpleasant","unprincipled","unread","unreasonable","unregulated","unreliable","unremitting","unsafe","unsanitary","unsealed","unsuccessful","unsupervised","untimely","unwary","unwrapped","uppity","upstart","useless","utter","valiant","valid","valued","vanilla","vaulting","vaunted","veering","vegetative","vented","verbal","verifying","veritable","versed","vinyl","virgin","visceral","visual","voluptuous","walk-on","wanton","warlike","washed","waterproof","waved","weakest","well-bred","well-chosen","well-informed","wetting","wheeled","whirlwind","widen","widening","willful","willing","winnable","winningest","wireless","wistful","woeful","wooded","woodland","wordless","workable","worldly","worldwide","worst-case","worsted","worthless"]}},function(e,r,o){!function(r,o){e.exports=o()}(this,function(){function e(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}function r(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(r,o){return r===r.toUpperCase()?o.toUpperCase():r[0]===r[0].toUpperCase()?e(o):o.toLowerCase()}function i(e,r){return e.replace(/\$(\d{1,2})/g,function(e,o){return r[o]||""})}function a(e,r,a){if(!e.length||c.hasOwnProperty(e))return r;for(var n=a.length;n--;){var t=a[n];if(t[0].test(r))return r.replace(t[0],function(e,r,a){var n=i(t[1],arguments);return""===e?o(a[r-1],n):o(e,n)})}return r}function n(e,r,i){return function(n){var t=n.toLowerCase();return r.hasOwnProperty(t)?o(n,t):e.hasOwnProperty(t)?o(n,e[t]):a(t,n,i)}}function t(e,r,o){var i=1===r?t.singular(e):t.plural(e);return(o?r+" ":"")+i}var l=[],s=[],c={},u={},d={};return t.plural=n(d,u,l),t.singular=n(u,d,s),t.addPluralRule=function(e,o){l.push([r(e),o])},t.addSingularRule=function(e,o){s.push([r(e),o])},t.addUncountableRule=function(e){return"string"==typeof e?void(c[e.toLowerCase()]=!0):(t.addPluralRule(e,"$0"),void t.addSingularRule(e,"$0"))},t.addIrregularRule=function(e,r){r=r.toLowerCase(),e=e.toLowerCase(),d[e]=r,u[r]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["thief","thieves"],["genie","genies"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach(function(e){return t.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return t.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i,"$1sis"],[/(^analy)(?:sis|ses)$/i,"$1sis"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(^[pl]|zomb|^(?:neck)?t|[aeo][lt]|cut)ies$/i,"$1ie"],[/(\b(?:mon|smil))ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(e[mn]u)s?$/i,"$1"],[/(movie|twelve)s$/i,"$1"],[/(cris|test|diagnos)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return t.addSingularRule(e[0],e[1])}),["advice","agenda","bison","bream","buffalo","carp","chassis","cod","cooperation","corps","digestion","debris","diabetes","energy","equipment","elk","excretion","expertise","flounder","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","information","jeans","justice","kudos","labour","machinery","mackerel","media","mews","moose","news","pike","plankton","pliers","pollution","premises","rain","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","trout","tuna","whiting","wildebeest","wildlife","you",/pox$/i,/ois$/i,/deer$/i,/fish$/i,/sheep$/i,/measles$/i,/[^aeiou]ese$/i].forEach(t.addUncountableRule),t})}]);
//# sourceMappingURL=bundle.js.map