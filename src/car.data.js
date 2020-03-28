const CAR_DATA = [
    {
        id: 1,
        logo: "https://i.imgur.com/0bIIEAT.png",
        title: 'abarth',
        linkUrl: '/abarth',
        makerText: "Founded as a hillclimb and sports car racing team in 1950, Carlo Abarth's company expanded into producing tuning equipment and engines for various Fiats alongside its own racing models. Such was the cachet of the name that Fiat was glad to have its products branded with the Abarth badge. Its best-known and arguably most fun creations were the tiny and giant-killing Fiat 500 and 600 - based models. After a flirtation with Simca, Abarth was taken over by Fiat in 1971 and continued to denote performance models, although it became little more than a trim level during the 1990s and 2000s. In more recent years it has been relaunched as a separate division by Fiat.",
        cars: [
            {
                id: 1,
                name: 'Fiat 750 Zagato',
                routeName: 'Fiat_750_Zagato',
                modelText: "Carlo Abarth's 750 Zagato GT first appeared at the Geneva Motor Show in 1956 and immediately caused a storm. The pretty little coupé and roadster were based on the Fiat 500's running gear, but powered by a tuned version of the Abarth 747cc engine in high-compression form, delivering 446hp. Later versions were available with a twin-cam head that made enough power to take the featherweight sports car to a top speed of 118mph and on the Mille Miglia in 1957. Highly prized.",
                imageUrl: 'https://i.imgur.com/LHmjpJ0.jpg?2',
                specifications: {
                    YearsProduced: "1957 - 1961",
                    Perfomance: "0-60mph: 15.8sec Top speed: 95mph",
                    PowerAndtorque: "44bhp/44lb ft",
                    Engine: "Normally aspirated 747cc four cylinder, petrol, carburettor, 8 valves",
                    Drivetrain: "Rear-engine RWD",
                    Structure: "Separate chassis",
                    Transmission: "Four-speed manual",
                    Weight: "535 kg"  
                },
                PriceGuide: {
                    LaunchPrice: "£2,248",
                    Excellent: "£125,000",
                    Good: "£100,000",
                    Average: "£80,000",
                    Project: "£50,000"
                }
            },
            {
                id: 2,
                name: 'Fiat 850/1000',
                routeName: 'Fiat_850/1000',
                modelText: "The Abarth-converted Fiat 850 and 1000 were front-running European Group 2 Touring Cars, winning the championship on several occasions. Their combination of grip, performance and low price made them highly desirable club-level competition cars, with the fastest examples easily topping 115mph. They remain popular with racers - and, appropriately, they are far better suited to the track than they are the road. Expensive and desirable today, the 1000 Corsa is still the car to beat in the 1000cc category.",
                imageUrl: 'https://i.imgur.com/luWgKJd.jpg?2',
                specifications: {
                    YearsProduced: "1960 - 1970",
                    Perfomance: "0-60mph: 7.0sec (1000TC Corsa)   Top speed: 118mph",
                    PowerAndtorque: "112bhp/65lb ft",
                    Engine: "Normally aspirated 989cc four cylinders, petrol, carburettor, 8 valves",
                    Drivetrain: "Rear-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Five-speed manual",
                    Weight: "583 kg"
                },
                PriceGuide: {
                    LaunchPrice: "Not sold in UK",
                    Excellent: "£95,000",
                    Good: "£70,000",
                    Average: "£50,000",
                    Project: "£30,000"
                }
            },
            {
                id: 3,
                name: 'Simca 1300/2000 GT',
                routeName: 'Simca_1300/2000_GT',
                modelText: "French company Simca had close ties with Fiat, so when it was looking for a porty new model to improve its image it was only natural it should turn to Abarth. Starting with Simca 1000 as a base, Abarth conceived the pretty and extremely potent 1300 GT, which used a bespoke 136bhp twin-cam engine mounted in the tail and higly aerodynamic bodywork. The 1300 GT and its 1600 and 2000 successors (the latter producing 200bhp and reckoned to be capable of 168mph) scored many wins on the track, and are much prized.",
                imageUrl: 'https://i.imgur.com/HjMqhUm.png',
                specifications: {
                    YearsProduced: "1962 - 1965",
                    Perfomance: "0-60mph: 6.8sec (1300 GT) Top speed: 142mph",
                    PowerAndtorque: "136bhp/97lb ft",
                    Engine: "Normally aspirated 1288cc, four cylindres, petrol, carburettor, 8 valves",
                    Drivetrain: "Rear-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Six-speed manual",
                    Weight: "635 kg"
                },
                PriceGuide: {
                    LaunchPrice: "Not sold in UK",
                    Excellent: "£260,000 (£320,000)",
                    Good: "£200,000 (£240,000)",
                    Average: "£170,000 (£180,000)",
                    Project: "£85,000 (£110,000)"
                }
            },
            {
                id: 4,
                name: 'Fiat 595/595SS/695SS',
                routeName: 'Fiat_595',
                modelText: "Carlo Abarth cult his performance car teeth on the rear-engine Fiat 500, producing some of Italy's finest pocket rockets. Although based on one of the slowest cars you could buy, the Abarth was every inch a Mini Cooper rival during the 1960s, with the bored-out 695 version packing a 40bhp punch. Abarths feature extrovert styling and, on the right road, will give much more powerful cars a real run for their money. Very rare and relatively valuable in the UK, and well worth seeking out if you like your thrills served on the raw side.",
                imageUrl: 'https://i.imgur.com/zVjlpAy.jpg',
                specifications: {
                    YearsProduced: "1963 - 1971",
                    Perfomance: "0-60mph: N/A Top speed: N/A",
                    PowerAndtorque: "30bhp/33lb ft",
                    Engine: "Normally aspirated 593cc twin, petrol, carburettor, 4 valves",
                    Drivetrain: "Rear-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Four-speed manual",
                    Weight: "500 kg"
                },
                PriceGuide: {
                    LaunchPrice: "N/A in UK",
                    Excellent: "£50,000 (£60,000 for 695SS)",
                    Good: "£37,500 (£45,000)",
                    Average: "£27,500 (£35,000)",
                    Project: "£17,500 (£22,000)"
                }
            },
            {
                id: 5,
                name: 'Fiat 124 Rally Spider',
                routeName: 'Fiat_124_Spider',
                modelText: "Homologation special based on 1800-engined 124 Spider. there's extra power from twin Weber carbs and new exhaust manifold - the last ones even being offered with an optional 16 valve head and the stiffened shell was fitted with lightweight glass fibre bonnet and boot and alloy door skins. All got a rollcage and permanent hardtop. independent rear suspension improved handling and one won the 1972 European rally Championship. 1013 were built, but pure road-going examples are almost impossible to find these days.",
                imageUrl: 'https://i.imgur.com/JtCBJf8.jpg',
                specifications: {
                    YearsProduced: "1972 - 1975 (1013 in total)",
                    Perfomance: "0-60mph: 7.5sec Top speed: 118mph",
                    PowerAndtorque: "128bhp/117lb ft",
                    Engine: "Normally aspirated 175cc four cylinder, petrol, carburettor, 8 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Five-speed manual",
                    Weight: "939 kg"
                },
                PriceGuide: {
                    LaunchPrice: "N/A",
                    Excellent: "£90,000",
                    Good: "£65,000",
                    Average: "£47,500",
                    Project: "£26,000"
                }
            },
        ],
    },
    {
        id: 2,
        logo: 'https://i.imgur.com/yeJqZA9.png',
        title: 'ac',
        linkUrl: '/ac',
        makerText: "BRITAIN'S OLDEST independent car marque, AC – for Auto Carriers - built its first three-wheeled passenger vehicle in 1907. It gradually moved upmarket; four- wheeled vehicles appeared in 1913 and, after WW1, the company expanded into sports cars, It continued after the next war as a struggling specialist manufacturer, even going back to three-wheelers, until it hit paydirt with the Cobra in 1962, its Ace roadster fitted with Ford V8 engines by US racing god Carroll Shelby. The marque limped through the 1970s and '80s with models such as the ME3000 but still exists today - the current AC Cars, led by Alan Lubinsky, builds updated Cobras in South Africa with a 6.2-litre, GM-sourced V8.",
        cars: [
            {
                id: 6,
                name: '2-litre',
                routeName: '2-litre',
                modelText: "After WW2 ended, AC resumed the building of low- volume quality cars with this gently sporting 2.0- litre saloon. A four-door was added to the range for 1953, by which time the already ageing triple-carb AC engine's output had risen from 74bhp to 85bhp. Bodies are aluminium over a wood frame and steel chassis; suspension also harks back to days past with solid axles and transverse leaf springs at each end of the car. At least the dampers are hydraulic: an AC first. Cable rear brakes are fitted to early cars, with an all-hydraulic system from 1951.",
                imageUrl: 'https://i.imgur.com/pXXm2wg.jpg?2',
                specifications: {
                    YearsProduced: "1947 - 1958 (1284 in total)",
                    Perfomance: "0-60mph: 19.9sec Top speed: 80mph",
                    PowerAndtorque: "74bhp/105lb ft",
                    Engine: "Normally aspirated 1991cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engne RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "1222 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,277",
                    Excellent: "£15,000",
                    Good: "£10,000",
                    Average: "£4,500",
                    Project: "£2,000"
                }
            },
            {
                id: 7,
                name: '2-litre DHC/Buckland',
                routeName: '2-litre_Buckland',
                modelText: "Straightforward drophead version of the saloon was only in production a year, so few were built and all went for export - though most were still right-hand drive. You are more likely to come across one of the Buckland tourers, whose bodies were built by a coachbuilder of that name. These were a lot prettier, with more rounded lines and a fold-flat windscreen. Later examples also got cutaway doors for an even more sporting look, though mechanically they were identical to the saloons. Quite hard to find, but not usually that expensive when you do.",
                imageUrl: 'https://i.imgur.com/CMGnx0E.jpg?2',
                specifications: {
                    YearsProduced: "1949 - 1956",
                    Perfomance: "0-60mph: 19.9sec Top speed: 80mph",
                    PowerAndtorque: "74bhp/100lb ft",
                    Engine: "Normally aspirated 1991cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "1320 kg"
                },
                PriceGuide: {
                    LaunchPrice: "Not known",
                    Excellent: "£30,000",
                    Good: "£18,500",
                    Average: "£12,000",
                    Project: "£6,000"
                }
            },
            {
                id: 8,
                name: 'Ace (AC engine)',
                routeName: 'Ace',
                modelText: "Designed to raise AC's post-war profile, and to tap into America's new-found enthusiasm for Brit sports cars. The simple but pretty aluminium body clothed a tube-frame chassis with all-independent suspension that gave excellent handling and stole a march over rivals like Jaguar - even if it was by transverse leaf springs. Finned aluminium drum brakes gradually gave way to discs around 1958. Only the engine disappointed. It was AC's own, but had been in production since the 1920s; output grew from 85bhp to 105bhp, but the car needed more.",
                imageUrl: 'https://i.imgur.com/looq0dZ.jpg',
                specifications: {
                    YearsProduced: "1951 - 1962 (223 in total)",
                    Perfomance: "0-60mph: 9.5sec Top speed: 112mph",
                    PowerAndtorque: "85bhp/110lb ft",
                    Engine: "Normally aspirated 1991cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "762 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,439",
                    Excellent: "£220,000",
                    Good: "£165,000",
                    Average: "£120,000",
                    Project: "£70,000"
                }
            },
            {
                id: 9,
                name: 'Aceca-AC',
                routeName: 'Aceca_AC',
                modelText: "Introduced for 1955, the Aceca was a grand touring coupé version of the Ace, offering more luxury than the roadster that fully justified its extra cost. The basic chassis followed the lines of the Ace, but with heavier-duty main rails, an extra crossmember and rubber mountings for the differential to reduce the amount of road noise transmitted to the cabin. For similar reasons, glassfibre front and rear bulkheads were used. Rather than the tubes of the Ace, doors and tailgate were wood-framed in the traditional manner. Rarity helps keep values strong.",
                imageUrl: 'https://i.imgur.com/IV9ygAa.jpg',
                specifications: {
                    YearsProduced: "1954 - 1963 (151 in total)",
                    Perfomance: "0-60mph: 13.4sec Top speed: 102 mph",
                    PowerAndtorque: "85bhp/110lb ft",
                    Engine: "Normally aspirated 1991cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "890 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,439",
                    Excellent: "£120,000",
                    Good: "£90,000",
                    Average: "£60,000",
                    Project: "£40,000"
                }
            },
            {
                id: 10,
                name: 'Ace-Bristol',
                routeName: 'Ace_Bristol',
                modelText: "From 1956, all those who had criticised the Ace for its lack of power got an answer (though it was to be the first of many): Bristol's six-cylinder unit of similar capacity was bought in. Of slightly newer and more sophisticated design, most were supplied in 128bhp spec, though a few were delivered with 125 or even 105bhp. The better Bristol gearbox was also used, with overdrive a popular option. They were sold at a price premium alongside other Aces and one was driven to the 1959 Le Mans 24 Hours, winning the 2.0-litre class and finishing seventh overall.",
                imageUrl: 'https://i.imgur.com/4DFBEZf.jpg',
                specifications: {
                    YearsProduced: "1956 - 1962 (463 in total)",
                    Perfomance: "0-60mph: 9.1sec Top speed: 118mph",
                    PowerAndtorque: "125bhp/123lb ft",
                    Engine: "Normally aspirated 1971cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "894 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£2,011",
                    Excellent: "£270,000",
                    Good: "£215,000",
                    Average: "£165,000",
                    Project: "£100,000"
                }
            },
            {
                id: 11,
                name: 'Aceca-Bristol',
                routeName: 'Aceca_Bristol',
                modelText: "In line with the Ace, a Bristol-engined version of the Aceca was added from 1956. Though markedly more expensive than the AC-engined car, it was a much better performer and outsold the lesser car, with 169 leaving the factory. As with all Acecas, you get details such as two rows of four louvres in the bonnet, burr walnut instrument surrounds and glovebox lid, and hinged rear side windows to aid ventilation. Though the car was directly related to the Ace, and had a similar nose and grille, no body panels are the same on both cars. Values on the up.",
                imageUrl: 'https://i.imgur.com/LKOnPZx.jpg',
                specifications: {
                    YearsProduced: "1956 - 1963 (169 in total)",
                    Perfomance: "0-60mph: 10.3sec Top speed: 115mph",
                    PowerAndtorque: "105bhp/123lb ft",
                    Engine: "Normally aspirated 1971cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "895 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,722",
                    Excellent: "£150,000",
                    Good: "£120,000",
                    Average: "£80,000",
                    Project: "£40,000"
                }
            },
            {
                id: 12,
                name: 'Greyhound',
                routeName: 'Greyhound',
                modelText: "Stylish and dignified four-seat big brother to the Aceca, also panelled in aluminium and fitted with all the same engine choices, though in reality most ordered used the Bristol straight-six, either in 2.0- or 2.2-litre form. No more than three are thought to have received the Zephyr 2.6. Despite a change to coil springs for independent suspension, handling isn't a match for the Aceca and, although only a quarter as many were built as the smaller car, they have never set the market alight in the same way and can be bought for about half as much.",
                imageUrl: 'https://i.imgur.com/0lmIDlk.jpg?1',
                specifications: {
                    YearsProduced: "1959 - 1963 (83 in total)",
                    Perfomance: "0-60mph: 12.7sec Top speed: 104mph",
                    PowerAndtorque: "125bhp/132lb ft",
                    Engine: "Normally aspirated 1971cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "991 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£2,891",
                    Excellent: "£60,000",
                    Good: "£48,000",
                    Average: "£35,000",
                    Project: "£16,000"
                }
            },
            {
                id: 13,
                name: 'Ace RS 2.6',
                routeName: '',
                modelText: "Introduced in 1961 and originally a Ruddspeed conversion - hence the 'RS' - this used the cheap and cheerful 2.6-litre six-cylinder engine from a Mkll Ford Zephyr. Depending on which state of tune the customer ordered, output could be up to 170bhp (Stage 3, with aluminium head and triple Webers). Even in that most potent form it was still cheaper then the Bristol-engined Ace. Now up to Ace-Bristol prices, only 37 were built and they're recognised by a new nose and grille that would soon adorn Cobras - along with a further eight Aceca coupés.",
                imageUrl: 'https://i.imgur.com/BJWUAhF.jpg?1',
                specifications: {
                    YearsProduced: "1961 - 1963 (37 in total)",
                    Perfomance: "0-60mph: N/A Top speed: 120mph",
                    PowerAndtorque: "100bhp/133lb ft",
                    Engine: "Normally aspirated 2553cc straight six, petrol, carburettor, 12 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "813 kg"
                },
                PriceGuide: {
                    LaunchPrice: "Not known",
                    Excellent: "£250,000",
                    Good: "£200,000",
                    Average: "£150,000",
                    Project: "£85,000"
                }
            },
            {
                id: 14,
                name: 'Cobra 260/289',
                routeName: '',
                modelText: "Carroll Shelby's big idea outsold the Ace it was based on, with most sold in the US and none in the UK until 1964. The first 75 used 4.2-litre Ford V8s; those and the next 51 4.7 versions had cam-and-peg steering; after that it was much improved rack-and- pinion. Standard smallblock Cobras have flat faces to their flared arches, though there were 27 AC 289s (no Cobra in name) built from mid-1966 with the big- arched Cobra 427 bodyshell and coil-sprung chassis. Note: the mk2 289 can now fetch as much as a 427, as it is eligible for all historic events.",
                imageUrl: 'https://i.imgur.com/6Ni9XY5.jpg',
                specifications: {
                    YearsProduced: "1961 - 1965 (673 in total)",
                    Perfomance: "0-60mph: 5.5sec Top speed: 138mph",
                    PowerAndtorque: "271bhp/269lb ft",
                    Engine: "Normally aspirated 4727cc V8, petrol, carburettor, 16 valvee",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£2,454",
                    Excellent: "£600,000 (add 40% for 289 mk2)",
                    Good: "£420,000",
                    Average: "£280,000",
                    Project: "£170,000"
                }
            },
            {
                id: 15,
                name: 'Cobra 427',
                routeName: '',
                modelText: "A complete reworking of the Cobra's chassis was required for the installation of Ford's 'big block 7.0- litre V8s, most of which were the 427ci in various states of tune, though some were sold with smaller- bore/longer-stroke 428ci engines. Chassis tubes were larger, with more crossmembers, and suspension was unequal-length wishbones with coil springs. The body changed, with bulging rear wings to cover much larger tyres, plus aggressively flared front wings. The 31 427 S/C (Semi Competition) models are particularly sought after and valuable.",
                imageUrl: 'https://i.imgur.com/YIth0nz.jpg?1',
                specifications: {
                    YearsProduced: "1965 - 1967 (413 in total)",
                    Perfomance: "0-60mph: 4.2sec Top speed: 165mph",
                    PowerAndtorque: "410bhp/480lb ft",
                    Engine: "Normally aspirated 6997cc V8, petrol, carburettor, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Four-speed manual",
                    Weight: "N/A"
                },
                PriceGuide: {
                    LaunchPrice: "Not known",
                    Excellent: "£850,000",
                    Good: "£600,000",
                    Average: "£450,000",
                    Project: "N/A"
                }
            },
            {
                id: 16,
                name: '428/428 Convertible',
                routeName: '',
                modelText: "Convertible Heavy-hitter from Thames Ditton uses a six-inch- extended Cobra chassis clothed in bodywork - steel this time - by Frua from Turin. Passing resemblance to Frua's Maserati Mistral, but only handles and door-glass frames are shared. Engine is the 7.0- litre Ford Galaxie V8 used in some Cobras, but the 428 was still no bargain. The cost of the bodies and shipping chassis to and from Italy meant prices were 20% higher than for Astons and Jensens. The AC wasn't special enough to justify that and only 51 coupés and 29 Convertibles were sold in six years.",
                imageUrl: 'https://i.imgur.com/XE8XG4X.jpg?1',
                specifications: {
                    YearsProduced: "1967 - 1973 (80 in total)",
                    Perfomance: "0-60mph: 5.4sec Top speed: 145mph",
                    PowerAndtorque: "345bhp/462lb ft",
                    Engine: "Normally aspirated 7010cc V8, petrol, carburettor, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Three-speed automatic",
                    Weight: "1483 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£4,250",
                    Excellent: "£120,000 (add 50% for Convertible)",
                    Good: "£75,000",
                    Average: "£47,500",
                    Project: "£35,000"
                }
            },
            {
                id: 18,
                name: '3000 ME',
                routeName: '',
                modelText: "An attempt to lift sales by building something more affordable saw AC mid-mounting a Ford V6 transversely over a custom-made transmission. That was one problem: the engine's heavy weight and less-than-sporting output meant only 120mph. Delays in reaching production meant the 3000ME was pitched against the similarly-priced Lotus Esprit. Those volume sales never materialised, with only around 100 built, including a short-lived revival in 1984-85 when licensed to a Scottish factory. Good survival rate and a keen following.",
                imageUrl: 'https://i.imgur.com/cRXuhoX.jpg?2',
                specifications: {
                    YearsProduced: "1979 - 1985 (100 aprox in total)",
                    Perfomance: "0-60mph: 8.5sec Top speed: 120mph",
                    PowerAndtorque: "138bhp/192lb ft",
                    Engine: "Normally aspirated 2994cc V6, petrol, carburettor, 12 valves",
                    Drivetrain: "Mid-engine RWD",
                    Structure: "Glassfibre body / backbone chassis",
                    Transmission: "Five-speed manual",
                    Weight: "1128 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£12,432",
                    Excellent: "£15,000",
                    Good: "£12,000",
                    Average: "£8,000",
                    Project: "£4,250"
                }
            },
            {
                id: 19,
                name: 'Cobra MkIV',
                routeName: '',
                modelText: "The arrival of the Cobra MKIV heralded a new era for AC. The Hurlock family passed on the rights of the marque to Brian Angliss, who had been building Autokraft Cobra replicas for years, using much of the original '60s tooling. When they became ACs, these cars were lauded for their high levels of build quality and retention of the original's spirit. Most cars have subsequently had their '80s-era dashboards replaced by '60s replicas, and are good value considering the spiralling values of '60s examples. Add 50% for rare 'Lightweight' version.",
                imageUrl: 'https://i.imgur.com/nVDGi3v.jpg',
                specifications: {
                    YearsProduced: "1983 - 1989 (450 approx in total)",
                    Perfomance: "0-60mph: 5.3sec Top speed: 134mph",
                    PowerAndtorque: "320bhp/385lb ft",
                    Engine: "4942cc V8, petrol, electronic fuel injection, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Five-speed manual",
                    Weight: "N/A"
                },
                PriceGuide: {
                    LaunchPrice: "£25,000",
                    Excellent: "£100,000",
                    Good: "£72,500",
                    Average: "£57,500",
                    Project: "£40,000"
                }
            }
        ]
    },
    {
        id: 3,
        logo: 'https://i.imgur.com/d7Pg69o.png',
        title: 'alfa-romeo',
        linkUrl: '/alfa-romeo',
        makerText: "WHAT STARTED as Anonima Lombardo Fabbrica Automobili (ALFA) in 1910 in a factory bought from Darracq was taken over by Nicolo Romeo in 1915. Thus began one of the great marques in motoring history. Its original glory days were the 1930s, when Alfa Romeos were among the best cars money could buy. Post-war survival drove them downmarket, but the spirit remained with fine ranges of coupés and spiders to complement the saloons. Sadly that wasn't enough and when financial losses piled too high in the '80s, Fiat headed off a bid from Ford to take control in 1987. In recent times the marque has seen a resurgence with cars like the 8C supercar and the rapid Giulia sports saloon.",
        cars: [
            {
                id: 20,
                name: 'Giulietta Sprint',
                routeName: '',
                modelText: "Unusually it was the coupé version of the Giulietta line that appeared first. The floorpan would prove adaptable, as the sheer number of variations that subsequently appeared bears testimony to, but for many this remains the most desirable of the mainstream factory cars. The Bertone-styled coupé was treated to a'range of exciting twin-cams; even the original 1290cc version packed a respectable 65bhp. Later Veloce and SS models boasted outputs up to 100bhp. Expect to pay a large premium for Veloce models, especially on a 750-series car.",
                imageUrl: 'https://i.imgur.com/A75XOMq.jpg?2',
                specifications: {
                    YearsProduced: "1954 - 1962 (27,142 in total)",
                    Perfomance: "0-60: 13.0sec Top speed: 101mph",
                    PowerAndtorque: "80bhp/72lb ft",
                    Engine: "Normally aspirated 1290cc four cylinder, petrol, carburettor, 8 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Four-speed manual",
                    Weight: "860 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£2,261",
                    Excellent: "£50,000",
                    Good: "£35,000",
                    Average: "£25,000",
                    Project: "£10,000"
                }
            },
            {
                id: 21,
                name: 'Guilietta Spider',
                routeName: '',
                modelText: "The Spider was designed by Pininfarina and was an object lesson in Italian style and understatement. It's still great to drive in all forms, and remains in demand today. As with the rest of the family, rust was land is) a serious factor in its survival rate, and the condition of the bodywork and chassis are of paramount importance. They have few mechanical issues, and just about all the mechanical parts are readily available off-the-shelf, so they're not difficult to run. Again, you pay a premium for Veloce models, say specialists Classic Alfa.",
                imageUrl: 'https://i.imgur.com/2laovYI.jpg?1',
                specifications: {
                    YearsProduced: "1955 - 1962 (17,096 in total)",
                    Perfomance: "0-60: 11.8sec Top speed: 113mph",
                    PowerAndtorque: "80bhp/72lb ft",
                    Engine: "Normally aspirated 1290cc four cylinder, petrol, carburettor, 8 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Four-speed manual",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£2,116",
                    Excellent: "£55,000",
                    Good: "£40,000",
                    Average: "£25,000",
                    Project: "£12,000"
                }
            },
            {
                id: 22,
                name: 'Giulietta Berlinda',
                routeName: '',
                modelText: "These saloons might have hit the market during the mid-1950s, but they enjoyed an advanced specification and were built with the sporting driver in mind. In typical Alfa style, the Berlina started out powered by a modest engine, but with each new season, or so it seemed, a more powerful variation was shoehorned in. The pick of the crop ended up being the 75bhp Ti version, which ticked all of the important sporting saloon boxes. Sadly, the survival rate is very low, with the main culprits being damp climates and rabid rust.",
                imageUrl: 'https://i.imgur.com/00wbK5h.jpg?1',
                specifications: {
                    YearsProduced: "1955 - 1963 (39,057 in total)",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "0-60mph: 11.8sec Top speed: 113mph",
                    Engine: "Normally aspirated 1290cc four cylinder, petrol, carburattor, 8 valves",
                    Drivetrain: "Front engine RWD",
                    Structure: "Monocoque",
                    Transmission: "Four-speed manual",
                    Weight: "870 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£ 1,726",
                    Excellent: "£15,000",
                    Good: "£10,000",
                    Average: "£4,000",
                    Project: "£2,000"
                }
            },
            {
                id: 23,
                name: 'Giulietta Sprint Speciale',
                routeName: '',
                modelText: "The Series 101 Giulietta was the first Alfa to be made available in Sprint Speciale form but, when the 105-Series Giulia followed on in 1962, these SS series Alfas really came into their own. With power from a 1570cc twin-cam, performance from these coupés was something rather special. The chances of finding an unrestored car these days are quite slim, but when they do turn up, they still command strong values. Today, these are the Giulias with the good looks that everyone wants, a fact reflected in their very strong values.",
                imageUrl: 'https://i.imgur.com/uobX8T0.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 24,
                name: '2000/2600 Spider',
                routeName: '',
                modelText: "Although there's a strong family resemblance to the Giulietta, the six-cylinder 2000/2600 harks back to the previous-generation Alfa Romeo 1900. The elegant styling was by Touring and its high price was justified by its 2+2 seating layout, detachable hardtop and five-speed gearbox. Performance was seriously improved with the arrival of the 2.6-litre version in 1962. 'Not the greatest of Alfas to drive,' say Classic Alfa, 'but continuing to fetch strong prices as people recognise the fine styling and the value of the Touring Superleggera association.",
                imageUrl: 'https://i.imgur.com/TlCqdQN.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 25,
                name: 'Giulia Spider',
                routeName: '',
                modelText: "Exquisite looks by Pininfarina but now using the 1600 Giulia engine. Amongst the production of predominantly LHD about 400 factory RHD cars were finally made using the pretty Giulietta Spider shape. Rust is a serious issue, especially with the RHD cars due to the UK climate, and they suffer from it even more readily than the coupes and saloons. But engine and gearbox are strong with good support from a network of specialists. The last hurrah of the 101-series, but none the worse for that, and all versions are good to drive.",
                imageUrl: 'https://i.imgur.com/TXhY914.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 26,
                name: '2000/2600 Sprint',
                routeName: '',
                modelText: "The 2600 Sprint was the ultimate incarnation of the twin-cam straight-six. Very much a grand tourer, the coupé lacked the agility of its smaller cousins, despite its sports car looks, but the torquey engine made this a car for covering continents, with prodigious straight-line pace. It wa also significant as one of Giorgetto Giugiaro's first designs, laying the foundations for a significant career ahead. Unlike more mainstream Alfas, parts for the 2600 Sprint are not so readily available. After rising steadily for years, values have levelled off.",
                imageUrl: 'https://i.imgur.com/EDy0YVN.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 27,
                name: 'Giulia Sprint GT/Veloce',
                routeName: '',
                modelText: "A hot little number right now, the 'step front' Giulia coupé is very much in demand because of its good looks, driving experience and ease of tuning. Values have increased significantly in recent years, bolstered by the desirability of the GTA. When launched, the twin-cam 1600 versions were quick from the box, but subsequent versions (1750 and 2000) added even more excitement to the mix. The advice is to go for the example with the best body you can find and worry about the mechanicals after that - as parts availability is excellent.",
                imageUrl: 'https://i.imgur.com/6N7FZOh.jpg',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 28,
                name: 'Giulia 1300/1600 Ti/Super',
                routeName: '',
                modelText: "The boxy 105-Series Giulia might not look like the most exciting saloon on the planet, but underneath that plain-Jane exterior beats the heart of a truly sporting saloon. Given the lusty twin-cam engines, five-speed gearbox and well set-up chassis, it's easy to see why Alfa was so annoyed by the way its cars were depicted being outrun by the Mini-Coopers in The Italian Job. 'The hipster's choice!' say Classic Alfa. 'Values on the rise due to both the high prices being asked for the coupés and also due to a new wave of interest in their boxy but cool '60s styling.",
                imageUrl: 'https://i.imgur.com/SA4GhMf.jpg',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 29,
                name: 'Giulia TZ/TZ-2',
                routeName: '',
                modelText: "Created as a replacement for the gorgeous Giulietta SZ, the Zagato-styled TZ and TZ-2 continued that car's glorious looks and race-bred handling. The TZ nomenclature stands for 'Tubolare Zagato', denoting the car's tubular chassis. It was powered by Alfa's twin-cam with up to 170bhp, and its suspension was a sophisticated all-independent set-up - in other words, here was a true thoroughbred. The TZ-2 was the first Alfa with a glassfibre body (ten were built that way) and had even more dramatic styling. Incredibly desirable now.",
                imageUrl: 'https://i.imgur.com/wk1hJPI.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 30,
                name: 'Giulia Sprint GTA',
                routeName: '',
                modelText: "The GTA might look like your standard Sprint GT, but it makes extensive use of aluminium body panels. The reason for this was simple - the GTA was built for racing and, wherever possible, weight-saving was applied. The A in its name means Alleggerita, Italian for 'lightened', and even the sump, cam cover, timing cover and clutch housing were replaced by featherweight magnesium alloy items. Values remain strong, say specialists Classic Alfa. You will pay even more for a car with period Autodelta history. Deduct 20% for a 1300 GTA Junior.",
                imageUrl: 'https://i.imgur.com/WZJhEpJ.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 31,
                name: '1600 Duetto/1750 Spider',
                routeName: '',
                modelText: "Forever associated with Dustin Hoffman in The Graduate. The pretty little Pininfarina-styled roadster appeared in 1966 as the final genuinely new variant on the 105-Series platform and was marked out by its enclosed headlamps and boat-tail rear end. Powered by the 1570cc twin-cam, it was a gem to drive with great handling, sharp steering and excellent all-round disc braking.. It wasn't around for long though: after only 18 months, the 1600 was succeeded by the more potent 1750. Values have started to climb again, say Classic Alfa.",
                imageUrl: 'https://i.imgur.com/TLU41Ix.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 32,
                name: 'Giulia GT Junior',
                routeName: '',
                modelText: "Due to the complexity of the 105-Series Giulia range the easiest way of relating to the GT Junior is to think of it as the entry-level model. That means it initially came with a 1300cc engine and simplified interior, and gave sporting Italians the chance to own a Giulia Sprint GT lookalike without the fiscal implications. Over time it was developed in parallel with the larger-engined cars and, in 1970, it lost its characteristic step-front. In 1972 a 1600cc Junior was introduced to close the gap in the range to the 2000cc GTV. Values strengthening.",
                imageUrl: 'https://i.imgur.com/UsXtuAL.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 33,
                name: 'Tipo 33 Stradale',
                routeName: '',
                modelText: "As 1960s supercars go, the 33 Stradale is possibly the most special of all. Although its V8 displaced a 'mere' 2-litres, the lightly detuned racing engined pushed out an impressive 227bhp, giving the 700kg car an exceptionally healthy power-to-weight ratio. But the 33 Stradale is a racing car for the road. Its body was built by Franco Scaglione, the final assembly was by Autodelta and, with only 18 made, these cars take rare-and-exclusive to another level. Tipo 33s almost never come up for sale, so coming up with a definitive value is almost impossible.",
                imageUrl: 'https://i.imgur.com/y1y223U.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 34,
                name: '1750/2000 GTV',
                routeName: '',
                modelText: "To ally itself with the launch of the 1750 Berlina, the Giulia Sprint was facelifted to become the 1750 GTV coupé. It retained the original GT1300/GT Junior 1.6 bodyshell but gained a quad-headlight front end and cleaner external trim details (as well as losing the step-front). The revised interior was an ergonomic improvement, although purists prefer the older design. The 1779cc four cylinder was now the base power unit for the non-Junior line, meaning lusty performance. These later models are considered the easiest to live with. Values still rising.",
                imageUrl: 'https://i.imgur.com/AzlMYtZ.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 35,
                name: '1750/2000 Berlinda',
                routeName: '',
                modelText: "With Alfa Romeo's new model development concentrating on the 'Sud and Alfetta, the mid- range Giulia saloon was treated to a front and rear makeover and relaunched to become the 1750/2000 Berlina. Although the styling (by Pininfarina) was considered unimaginative, it retained the outgoing car's roomy interior and boot, as well as the driver's car credentials that made the original so appealing. An updated interior and dashboard made the car feel more modern. The top-of-the-range 2000cc version with 132bhp was a genuine sports saloon.",
                imageUrl: 'https://i.imgur.com/o2w3TlN.jpg?2',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 36,
                name: 'Spider 1750/2000 S2',
                routeName: '',
                modelText: "Alfa couldn't leave its cars alone during the 1960s and '70s. After just three years in production, the 1750 Spider Veloce was given a major restyle, the boat-tail giving way to the more aerodynamic Kamm tail. It made the Spider look less streamlined but more modern. In 1972 the 1750 engine was upgraded to the final-incarnation 2000cc unit. There were also cut-price 1600 Junior versions. Given what is happening with the 'roundtail' cars, these Series 2s represent excellent value and a sound investment, say specialists Classic Alfa.",
                imageUrl: 'https://i.imgur.com/SsOcede.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 37,
                name: '1300/1600 Junior Z',
                routeName: '',
                modelText: "An appealing Italian 'bitza' that somehow transcends the sum of its parts. Created by Zagato using the chassis from the Spider and normal GT Junior mechanicals, the Junior Zagato was an arresting-looking coupé that added real variety to the Alfa Romeo line-up. The sloping front and Kamm tail were certainly a world apart from the well-crafted classicism of the rest of the Giulia- derived cars, but no less appealing for it. It was lighter and more aerodynamic than the standard cars so it was usefully quicker too.",
                imageUrl: 'https://i.imgur.com/OiqXjLp.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 38,
                name: 'Montreal',
                routeName: '',
                modelText: "Conceived as a junior-leaque supercar, the Montreal was a commercial failure for Alfa. It originally appeared at Expo '67 in Montreal, Canada, (hence the name) as a concept car, and proved so popular that the company decided to turn it into a production reality. Hurried production meant using ordinary 105-series suspension, resulting in a car whose handling didn't really match it's race-car-based V8. Today it's viewed as a seriously desirable classic car. Values have been rising steadily in recent times, according to specialists Classic Alfa.",
                imageUrl: 'https://i.imgur.com/XKj0KbE.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 39,
                name: 'Alfetta',
                routeName: '',
                modelText: "Alfa Romeo's first new big saloon of the '70s marked something of a departure from its predecessors. Boasting a new platform that would last for well over two decades, all the ingredients were there for a great sporting saloon: a range of twin-cam engines and a transaxle gearbox for perfect weight distribution. Build quality was variable, with the earliest cars the most solidly assembled, but a bigger problem was corrosion. Rare today, not fully understood, and perhaps more deserving of its own accolades than being known as the saloon that begat the GTV.",
                imageUrl: 'https://i.imgur.com/RNx4h7H.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 40,
                name: 'Alfasud',
                routeName: '',
                modelText: "When it went on sale in 1972, the Alfasud rewrote the small-car book. Given that Alfa Romeo had no experience of small, front-driven cars, the sheer dynamic excellence of the flat-four powered 'Sud came as a shock. However, Alfasud was also a government-led experiment in the redistribution of manufacturing la new factory was built near Naples, where the workforce was unskilled in car-making). Customers found their new 'Suds would rust, or fall to pieces. Today good examples are prized but are also quite hard to find. A flawed gem.",
                imageUrl: 'https://i.imgur.com/z2PyXN6.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 41,
                name: 'Alfetta GT 1.8/GTV 2000',
                routeName: '',
                modelText: "It was left to Bertone to create a suitably handsome coupé from Alfetta underpinnings. It was originally launched as the Alfetta GT in 1779cc twin-cam form, and a 1.6GT joined the range in 1976 - along with the GTV 2000. With a full 2.0 litres under the bonnet, it delivered effortless performance, accompanied by the rorty soundtrack you would expect from an Alfa. As ever, rust and flimsy build quality are the main enemies. But buying a GTV now should be relatively painless given that the surviving examples should have been properly rebuilt. Early cars are on the up.",
                imageUrl: 'https://i.imgur.com/dPfnE62.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 42,
                name: 'Alfasud Sprint',
                routeName: '',
                modelText: "The Italians have always been great at turning innocuous-looking family saloons into great sporting coupés. So when Alfa Romeo turned the rather good 'Sud into a usable small sporting car, the results were predictably sparkling. Styling was handled by Giugiaro, and to many the Sprint successfully eclipsed the already desirable GTV. It was especially rapid in twin-carb Veloce form, but any example will reward the enthusiastic driver. An iffy 1980s facelift did it no favours, though, and fans prefer the crisp original.",
                imageUrl: 'https://i.imgur.com/LawCKbp.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 43,
                name: 'Alfa Six',
                routeName: '',
                modelText: "Strangely appealing today for those with a penchant for automotive losers, but the Alfa Six is a car the Arese company would rather choose to forget. It was ready for production by the mid-1970s, but the oil crisis and Alfa Romeo's enfeebled cashflow situation meant that the launch was continually delayed. When it arrived, the Six underwhelmed - its engine was magnificent, but the duff dynamics, narrow body and obvious Alfetta styling overtones let it down. Maybe a handful left in the UK now, so bask in its rarity if you find one, but don't pay over the odds.",
                imageUrl: 'https://i.imgur.com/pthyw2F.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 44,
                name: 'Alfetta GTV6',
                routeName: '',
                modelText: "As big Alfa saloons go, the Six was not a huge success, but we owe the existence of one of the best-sounding Alfa Romeos to the failed executive saloon, which donated its wonderful V6 engine to the Alfetta GTV. Running a new Bosch fuel injection system, the V6's power was up to 160bhp, giving the GTV6 a very useful power hike, as well as one of the most sublime soundtracks in motoring history. As with the Alfetta GT and GTV before it, a good GTV6 was a phenomenally good car in the bends - especially as it finally had the power to exploit it.",
                imageUrl: 'https://i.imgur.com/iQhuVLu.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 45,
                name: 'Alfa 33',
                routeName: '',
                modelText: "Much was expected of the 33. It was supposed to build on the best bits of the Alfasud, to create a formidable new family car for the slick '80s. Instead, it failed to move on the game at all - even if the styling hinted that this was a much more upmarket offering. As it was, the wedge from Naples sold slowly and despite a welter of improvements throughout its life, stubbornly refused to realise its potential. As a driver's car, it's marred by a weird driving position but, for the family, it's an excellent proposition, thanks to its roomy cabin. Cheap and characterful now, but a 'Sud betters it.",
                imageUrl: 'https://i.imgur.com/OpZvvZe.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 46,
                name: 'Spider 2000 S3/S4',
                routeName: '',
                modelText: "The final restyle of the Spider took place at the beginning of 1990 - and Pininfarina was given the honour of preparing the Spider for its final days. The car was rounded off with smoother bumpers and slimmer rear light clusters. By this point the Spider was almost 30 years old, but the new fuel- injected engines, along with power-assisted steering, prolonged its life for three years. North American sales of the S4 Spider remained strong right to the end, with more than 75% of the production run ending up in the US.",
                imageUrl: 'https://i.imgur.com/QJwUxbL.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 47,
                name: '75 V6/3.0 V6',
                routeName: '',
                modelText: "Launched on Alfa Romeo's 75th anniversary, the 75 was a mixture of Giulietta and Alfa 90. Alfa engineered the car to use a transaxle and this gave it almost perfect 50:50 weight distribution. That, coupled with the melodic V6 engine, made the 75 one of the most desirable sporting saloons of the 1980s. The styling was done in-house, following on from the Alfa 33 , which had a similar square headlamp and grille arrangement. The 75 also came with a reasonable amount of equipment as standard, but power steering was extra.",
                imageUrl: 'https://i.imgur.com/CKLFyb3.jpg?2',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 48,
                name: 'SZ/RZ',
                routeName: '',
                modelText: "First conceived as a design study in 1987, the Sprint Zagato caused such a sensation that, in 1989, Alfa launched a production version at the Geneva Motor Show. Based on a heavily modified 75, the SZ had the performance (and sound) to back up its sporty yet unconventional looks. Its ability to hang on in bends really made the SZ special - it could generate 1.1g of cornering force. The RZ (Roadster Zagato) was produced from 1992 until the end of 1993. Only 284 were made. Values of both have edged up slowly in recent years but have yet to really take off.",
                imageUrl: 'https://i.imgur.com/R0Ik3D9.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            },
            {
                id: 49,
                name: 'GTV 2.0/3.0 V6',
                routeName: '',
                modelText: "Launched in 1995, the front-drive GTV filled a coupé-shaped gap in Alfa Romeo's 1990s line-up, effectively replacing the rear-drive GTV and GTV6. It's among the most striking cars of its era, with wedgy Pininfarina coachwork. A 2.0-litre, four- cylinder Twin Spark engine was offered initially, with Alfa's familiar 3.0-litre 'Busso' V6 joining in 1997. The GTV and equivalent Spider convertible also marked a step up in quality for Alfa and a fully galvanised body keeps rust at bay. A 2003 facelift brought newer 2.0 JTS and 3.2 V6 engines.",
                imageUrl: 'https://i.imgur.com/6vpOadt.jpg?1',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "0-60: sec Top speed: mph",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: " kg"
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£,000",
                    Good: "£,000",
                    Average: "£,000",
                    Project: "£,000"
                }
            }
        ]
    },
    {
        id: 4,
        logo: 'https://i.imgur.com/9Api2I7.png',
        title: 'allard',
        linkUrl: '/allard',
        makerText: "SYDNEY ALLARD founded the marque that bore his name in 1936, with his first car being based on a Ford V8. The first bespoke Allards came along in 1945, still with Ford V8 engines but now with very distinctive long-nosed bodies. Always competition-orientated, Allards remained rather idiosyncratic and dramatic-looking until the 1950s when a series of roadsters - the K3, Palm Beach and JR - came out, sporting four- and six-cylinder engines as well as V8s. Demand plummeted as rivals produced cheaper, faster, better- looking alternatives. The firm ended up modifying Ford Anglias until 1966 when a fire destroyed the factory. Sydney Allard died at home the same night.",
        cars: [
            {
                id: 50,
                name: 'L/M',
                modelText: "If you enjoy your Allard-shaped kicks with the kids in the back seats then Allard L and M are just the ticket. Effectively just a K1 with a six-inch wheelbase stretch (to 112in) and a pair of occasional seats in the rear, the additional model in the Allard line-up proved surprisingly popular. The M added some civilities such as coil-sprung suspension (from 1949) and a column gearchange. Although most UK cars were fitted with Ford Pilot engines, many were shipped overseas without a powertrain, leaving the owner to chose a suitable local engine.",
                imageUrl: 'https://i.imgur.com/VMlDFHG.jpg',
                specifications: {
                    YearsProduced: "1946 - 1950 (191/500 in total)",
                    Perfomance: "0-60: 15.2sec Top speed: 82mph",
                    PowerAndtorque: "85bhp/N/A",
                    Engine: "Normally aspirated 3622cc V8, petrol, carburettor, 16 (side) valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separate chassis",
                    Transmission: "Three-speed manual",
                    Weight: "1396 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,151",
                    Excellent: "£55,000",
                    Good: "£40,000",
                    Average: "£24,000",
                    Project: "£14,000"
                }
            },
            {
                id: 51,
                name: 'K1/K2',
                modelText: "Allard's first post-war sports car was a leap forward. Although it looked ungainly (a subsequent family trait) it was a great car to drive, proving very effective in competition. The technical make-up might have been simple, with a box-section frame, transverse leaf springs and a steel body, but careful chassis development was the key. The fitment of a powerful V8 engine (from the Ford Pilot) delivered plenty of effortless performance. The end result was a charismatic English sports car that has a loyal following to this day. Add c10% for K2.",
                imageUrl: 'https://i.imgur.com/6cILJpq.jpg?2',
                specifications: {
                    YearsProduced: "1946 - 1951 (151/119 in total)",
                    Perfomance: "0-60mph: 13.6sec Top speed: 102mph",
                    PowerAndtorque: "85bhp/150lb ft",
                    Engine: "Normally aspirated 3622cc V8, petrol, carburettor, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separate chassis",
                    Transmission: "Three-speed manual",
                    Weight: "1118 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,277",
                    Excellent: "£100,000",
                    Good: "£70,000",
                    Average: "£45,000",
                    Project: "£30,000"
                }
            }, 
            {
                id: 52,
                name: 'P1',
                modelText: "Derived from the M 'drophead coupé', the Allard P1 was a hard-topped two-door saloon that broke with tradition for the marque. Although marketed as something of a gentleman's carriage, the P1 couldn't disguise its competition roots, making it an appealing proposition for enthusiastic drivers. Sydney Allard drove one to victory in the 1952 Monte Carlo Rally, making him the only person in the history of the event to win the event in a car bearing his own name. Today, the P1 continues to be well regarded by enthusiasts. Prices on the rise.",
                imageUrl: 'https://i.imgur.com/yBDzWN5.jpg?2',
                specifications: {
                    YearsProduced: "1949 - 1951 (559 in total)",
                    Perfomance: "0-60mph: 15.2sec Top speed: 85mph",
                    PowerAndtorque: "85bhp/150lb ft",
                    Engine: "Normally aspirated 3622cc V8, petrol, carburettor, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separate chassis",
                    Transmission: "Three-speed manual",
                    Weight: "1372 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,277",
                    Excellent: "£35,000",
                    Good: "£26,000",
                    Average: "£18,000",
                    Project: "£9,000"
                }
            }, 
            {
                id: 53,
                name: 'J2/J2X',
                modelText: "The most celebrated of all the Allards and, despite their rarity, the most likely to come onto the market. In the UK, the J2 came with either the 3.6-litre V8 from the Ford Pilot or a 4.4-litre Mercury unit. In the US, enthusiastic owners fitted a whole range of V8 powerplants. Suspension was more sophisticated than the earlier cars', ensuring excellent handling, and the J2 enjoyed a successful racing career on both sides of the Atlantic. In 1952, Allard introduced the J2X, with the engine pushed further forward, partly to allow more legroom (hence X for extended).",
                imageUrl: 'https://i.imgur.com/VRHJ1oE.jpg',
                specifications: {
                    YearsProduced: "1950 - 1954 (1173 in total - 90 J2, 83 J2X)",
                    Perfomance: "0-60mph: 8.6sec Top speed: 111mph",
                    PowerAndtorque: "120bhp/221lb ft",
                    Engine: "Normally aspirated 4375cc V8, petrol, carburettor, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Three-speed manual",
                    Weight: "914 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,277",
                    Excellent: "£275,000",
                    Good: "£230,000",
                    Average: "£160,000",
                    Project: "£100,00"
                }
            },
            {
                id: 54,
                name: 'K3',
                modelText: "Altogether more sophisticated than its earlier relatives, the K3 was Allard's attempt at appealing to more sophisticated buyers with luxuries such as a one-piece bonnet and wide bench seat that was supposed to accommodate the entire family. This being Allard's supposedly softer option, Americans were the target. Problem was, Stateside buyers were looking for the exact opposite in their English sports cars, and so the K3's market failure was disappointing. But it was a pretty car, especially by Allard's standards. Values have been climbing.",
                imageUrl: 'https://i.imgur.com/GKgJ4jQ.jpg?2',
                specifications: {
                    YearsProduced: "1952 - 1955 (62 in total)",
                    Perfomance: "0-60mph: N/A",
                    PowerAndtorque: "85bhp/150lb ft",
                    Engine: "Normally aspirated 3622cc V8, petrol, carburettor, 16 valves",
                    Drivetrain: "Front-engine RWD",
                    Structure: "Separated chassis",
                    Transmission: "Three-speed manual",
                    Weight: "1181 kg"
                },
                PriceGuide: {
                    LaunchPrice: "£1,713",
                    Excellent: "£110,000",
                    Good: "£75,000",
                    Average: "£55,000",
                    Project: "£35,000"
                }
            },
        ],
    },
    {
        id: 5,
        logo: 'https://i.imgur.com/COG7rzl.png?1',
        title: 'alpine',
        linkUrl: '/alpine',
        makerText: "SOCIÉTÉ ANONYME des Automobiles Alpine was born in 1954, the brainchild of competition driver Jean Rédélé. It used Renault underpinnings with attractive glassfibre coupé bodies on top, leading to 1962's definitive A110, which remained in production until 1977 and turned Alpine into France's leading sports car maker. Alpine was always closely tied with Renault, which took over in 1974. This era also saw the striking A310, which in time evolved into the GTA and A610. From 1994 the Dieppe factory was given over to building Renaults, but today the marque is being revived. The all-new A110, inspired by the '60s classic, has earned rave reviews and could yet have a positive effect on values.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 6,
        logo: 'https://i.imgur.com/WbhPVRg.png?1',
        title: 'alvis',
        linkUrl: '/alvis',
        makerText: "FOUNDED in 1919, the Alvis name reputedly came from a design of piston: al from 'aluminium' and vis' meaning strong' in Latin.Its 12/50 and 12/60 models were notable early designs and it was also a pioneer of front- wheel - drive during the 1920s. It built a range of imposing and progressive sports models during the 1930s but adopted a one-model policy after the war. In 1955, Swiss firm Graber penned a new and very handsome body and the TC108G, TD21 , TE21 and TF21 that followed were noted for their arresting appearance, especially the final stacked- headlamp cars. Competitor Rover took over the firm in 1965 and, from 1967, Alvis was confined to making military machines.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 7,
        logo: 'https://i.imgur.com/bXfvnEC.png?1',
        title: 'armstrong-sidderley',
        linkUrl: '/a-sidderley',
        makerText: "SIDDELEY was founded in 1902 and, after various partnerships, was taken over by the Armstrong Whitworth Development Company in 1919. The new Armstrong- Siddeley combine specialised in large luxury machines (although it did market a smaller 12hp model). In the week WW2 ended, it launched the patriotically-named Lancaster saloon and Hurricane drophead coupés, soon followed by the Typhoon and Whitley variants. The Sapphire 346 of 1952 brought power steering to British cars for the first time, but the smaller and awkwardly styles 234 and 236 models were a failure and contributed to the decision to end car production after a merger with Bristol in 1960.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 8,
        logo: 'https://i.imgur.com/mpFATW5.png?1',
        title: 'aston-martin',
        linkUrl: '/aston-martin',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 9,
        logo: 'https://i.imgur.com/iGyYvQi.png?1',
        title: 'audi',
        linkUrl: '/audi',
        makerText: "AUGUST HORCH chose Audi as a name for his 1909 company because 'Horch' in German means 'hark', which equates to 'Audi' in Latin. Audi became best-known for its luxurious and sporting big- engined cars, joining with the Wanderer, DKW and Horch firms to form Auto Union in 1932, leading to the four-ring logo. Largely dormant after the war because its factories were in East Germany, Auto Union was bought by Volkswagen in 1964 and relaunched the Audi brand, building FWD cars. The marque came into its own in the 1980s with advanced models such as the 4wd Quattro, which saw great success in rallying. Today, Audi is one of the world's foremost prestige brands.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 10,
        logo: 'https://i.imgur.com/BZAHHAu.png',
        title: 'austin',
        linkUrl: '/austin',
        makerText: "FOUNDED IN Longbridge, Birmingham in 1905, Herbert Austin's car company grew to become one of Britain's industrial powerhouses. Its early, troubled years came to an end with the hugely-popular Austin Seven of 1922, arguably the UK's first people's car. After WW2, Austin became the dominant partner in BMC, and the successful and forward-thinking models continued3; not least the best-selling Mini. Economic conditions saw BMC becoming part of British Leyland in 1968 and led to troubled times symbolised by such models as the Maxi and Allegro. The 1980 Metro was a much-needed sales triumph, but the Austin name was dropped in 1987 by the then Rover Group.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 11,
        logo: 'https://i.imgur.com/gPkAem4.png?2',
        title: 'austin-healey',
        linkUrl: '/austin-healey',
        makerText: "RACER AND engineer Donald Healey built cars from 1945 onwards, but real success eluded him until his Healey 100 of 1952 was noticed by Austin boss Leonard Lord. Austin agreed to build the Healey, using its mechanical parts and, thus, Austin-Healey as a marque was formed, intended as a sort of Austin-centric version of MG. The 'Big' Healeys - the 100, 100/6 and 3000 models - were later joined by the smaller Austin-Healey Sprite, a small, cheap and cheerful roadster. Things soured with the formation of British Leyland in 1968; the 3000 came to an end the same year and the Sprite continued until 1971, when the Austin and Healey deal was finally cancelled.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 12,
        logo: 'https://i.imgur.com/P52m0Ej.png',
        title: 'bentley',
        linkUrl: '/bentley',
        makerText: "THE FIRST Bentley appeared at the 1919 London Motor Show and, within a few years, the cars had become the darlings of rich playboys who delighted in taking them racing. Brooklands and Le Mans were two of the famous venues dominated by the marque. But, in 1931, Bentley was bought by Rolls-Royce and its sporting glories started to fade. Although there were glorious moments such as the 1952-1955 R-type Continental, eventually the cars became little more than badge-engineered RRs. In the 1980s, though, the marque re-emerged from the shadow of its parent, with more emphasis on performance. Now owned by VW, Bentleys are once again sporting and individualistic machines.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 13,
        logo: 'https://i.imgur.com/wIzS5f2.png?1',
        title: 'berkeley',
        linkUrl: '/berkeley',
        makerText: "BERKELEY WAS a caravan manufacturer until it diversified into tiny glassfibre sportscars designed by Lawrence Bond (of Bond car famel. Twin-cylinder motorcycle engines provided more than enough power for these very lightweight machines; the 50bhp B105 of 1959 could top 100mph. The most successful was the three-wheeled T60, of which 1830 were built between 1959 and 1960. However, the lure to customers of rivals like the Austin-Healey Sprite meant that the firm went bankrupt in 1961, although a new incarnation of it built a handful of T60s in the 1990s, using motorcycle engines. Meanwhile, the original Berkeley factory found employment making women's underwear...",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 14,
        logo: 'https://i.imgur.com/ICh2WI1.png?1',
        title: 'bitter',
        linkUrl: '/bitter',
        makerText: "RACING DRIVER and car importer Erich Bitter was intrigued by a 1969 Opel concept he saw at the Frankfurt Motor Show. A deal was struck with Opel, and Bitter GMBH was formed, with Erich Bitter's reinterpretation of the Opel CD as its main product. The cars were actually constructed by Baur,. After 395 had been built, the firm switched its attention to the more affordable SC in 1979, which was again Opel-based but had a coupé body designed by Bitter himself (although it did look awfully like the Ferrari 365 GT4 2+2). Convertibles and saloons followed, but Bitter failed in 1989. In 2007, it announced a comeback with a new car, the Vero, but it struggled to sell and was canned in 2012.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 15,
        logo: 'https://i.imgur.com/pmysqMw.png?1',
        title: 'bizzarrini',
        linkUrl: '/bizzarrini',
        makerText: "SPORTS CARS FOR the connoisseur, these were the creation of Giotto Bizzarrini, a former Alfa Romeo and Ferrari engineer who was heavily involvedi in the latter's legendary 250GTO. After leaving Ferrari in 1961, he worked on the Lamborghini V12 engine and Iso's Grifo project. In 1964, Bizzarrini SpA was formed, its first car being launched two years later. Based on the competition Grfo A3C, it was called the 5300 Strada. The firm's most famous design was the P538S, which raced at Le Mans. Only around 160 Bizzarrinis were built before production ceased in 1969. Giotto continued working as a consultant, producing prototypes and building replica P538s.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 16,
        logo: 'https://i.imgur.com/4JY9fFv.png?1',
        title: 'bmw',
        linkUrl: '/bmw',
        makerText: "BAYERISCHE MOTOREN Werke was an aviation manufacturer banned from building aircraft after World War One. So, it turned to motorcycles and cars; its first automobile was an Austin Seven copy named the Dixi. From that, BMW moved onto its own very fine sports and touring cars including the lovely 328. Turbulent times followed the end of World War Two, with BMW coming close to bankruptcy and turning to Isetta and 600 bubble cars to help sustain it. The Neue Klasse models from 1961 saved the firm, and it's continued to flourish ever since. Today's BMWS are highly respected and capable machines, while the products of the M division are top-drawer drivers' cars.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 17,
        logo: 'https://i.imgur.com/rqS7rYe.png',
        title: 'borgward',
        linkUrl: '/borgward',
        makerText: "IN 1929, car radiator manufacturer Carl Borgward became a director of Hansa Lloyd AG; gradually this company became just Borgward. Its stylish models were typified by the large and sleek-looking 2400, which was the first European car to have its own automatic transmission, and the pretty Isabella, of 1954 to 1961, which was named after the founder's wife. Well over 200,000 were sold, thanks to the looks and the car's reputation for being almost bulletproof. Problems elsewhere in the conglomerate that Borgward was a part of led to bankruptcy in 1961, even though the company itself was still making money. Borgward himself died just two years later.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 18,
        logo: 'https://i.imgur.com/lviCC2w.png',
        title: 'bristol',
        linkUrl: '/bristol',
        makerText: "WITH SPARE production capacity after the end of the war, the Bristol Aeroplane Company decided to enter the car-making business and acquired the rights to pre-war BMW models. It was soon building the streamlined, fast and luxurious 403 using aviation principles of construction. The prestige machines continued thereafter, being expensively handmade in small numbers for well-heeled customers. Chrysler V8s were introduced with the 407 of 1961. Therafter it was a story of gradual evolution, with the exception of the 200mph gullwing-door Fighter in 2007. Rescued from administration by Frazer-Nash Research in 2011, a new model, the Bullet speedster, was launched in 2016.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 19,
        logo: 'https://i.imgur.com/GlOEr4j.png',
        title: 'caterham',
        linkUrl: '/caterham',
        makerText: "WHEN LOTUS stopped building its basic Seven sports car in 1973, the rights were acquired by Caterham Cars, a Kent-based Lotus dealer. So the firm has now built the Seven for far longer than the 16 years chalked up by its creator. The original 1950s styling may be sacred, but elsewhere the car has been comprehensively updated, with Vauxhall, Ford and Rover mechanicals. Caterham dabbled with something different in the 1990s but the pretty 21, with its expanded bodywork, proved not to be a success and only 48 were built between 1995 and 1999. The company has stuck doggedly with the Seven ever since, and in recent years has developed a popular line in low-powered 'retro' versions.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 20,
        logo: 'https://i.imgur.com/AlIfP2Z.png',
        title: 'chevrolet',
        linkUrl: '/chevrolet',
        makerText: "ONE OF the great American marques, often immortalised in song, Chevrolet was founded in 1911 by Billy Durant and Louis Chevrolet. Profits from the firm allowed Durant to buy General Motors in 1917, and thus Chevy became a major constituent of GM. It was soon the US's best-selling brand, building over a million cars annually by 1927. Designs in the 1950s were futuristic and powerful, with Chevy V8s becoming a legend in their own right. The glassfibre Corvette sportscar made a similar name for itself - as did the later Corvair, but for all the wrong, safety-related reasons. Recent times have been turbulent, but Chevrolet still remains the archetypical American car maker.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 21,
        logo: 'https://i.imgur.com/i3mP0iu.png',
        title: 'chrysler',
        linkUrl: '/chrysler',
        makerText: "THE AMERICAN giant Chrysler took over the Rootes Group in 1967 and added Simca to the mix. It didn't actually use the Chrysler badge on cars until the 180 of 1970, and it was another six years before the name replaced Hillman on the Avenger. The Alpine and Horizon were produced in conjunction with Chrysler France, and the Sunbeam (see Talbot) was an emergency development of the Avenger, but the Americans soon had enough and sold out to Peugeot in 1978. It in turn applied Talbot badges to most of the range the following year, leaving the final European car to wear a Chrysler badge as the 2-Litre, a development of the Chrysler 180 that had started the game. That continued until 1980.",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 22,
        logo: 'https://i.imgur.com/fdbzO19.png',
        title: 'citroen',
        linkUrl: '/citroen',
        makerText: "CITROEN STARTED life in 1919 as a builder of worthy but ultimately dull machines. And then came the revolutionary Traction Avant in 1934 with front-wheel drive and svelte modern styling. That established Citroën as a free-thinking radical and the firm lived up to the hype with subsequent creations such as the utilitarian 2CV and the Hydropneumatic wonders that were the Goddess- like DS, the Maserati-engined SM, the futuristic CX and the novel GS. A takeover by Peugeot in 1975 killed off some of Citroën's quirkiness - although 1989's XM was in the marque's best mad traditions - but individuality and daring have returned again in recent years... thankfully!",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 23,
        logo: 'https://i.imgur.com/PfQZBeq.png',
        title: 'daf',
        linkUrl: '/daf',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 24,
        logo: 'https://i.imgur.com/AzXMg3Y.png',
        title: 'daimler',
        linkUrl: '/daimler',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 25,
        logo: 'https://i.imgur.com/bWlNN6v.png',
        title: 'datsun',
        linkUrl: '/datsun',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 26,
        logo: 'https://i.imgur.com/Hl4nKny.gif',
        title: 'delorean',
        linkUrl: '/delorean',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 27,
        logo: 'https://i.imgur.com/AFcG3xo.png',
        title: 'detomaso',
        linkUrl: '/detomaso',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 28,
        logo: 'https://i.imgur.com/esQDxDa.png',
        title: 'facel vega',
        linkUrl: '/facelvega',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 29,
        logo: 'https://i.imgur.com/OnwhDHu.png',
        title: 'ferrari',
        linkUrl: '/ferrari',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 30,
        logo: 'https://i.imgur.com/q0Rae04.png',
        title: 'fiat',
        linkUrl: '/fiat',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    }, 
    {
        id: 31,
        logo: 'https://i.imgur.com/CkrLyZt.png',
        title: 'ford uk',
        linkUrl: '/forduk',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    }, 
    {
        id: 32,
        logo: 'https://i.imgur.com/CkrLyZt.png',
        title: 'ford usa',
        linkUrl: '/fordusa',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    }, 
    {
        id: 33,
        logo: 'https://i.imgur.com/gFPFr4y.png',
        title: 'frazer nash',
        linkUrl: '/frazernash',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 34,
        logo: 'https://i.imgur.com/FL4VLgs.png',
        title: 'gilbern',
        linkUrl: '/gilbern',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 35,
        logo: 'https://i.imgur.com/3MswKgP.png',
        title: 'ginetta',
        linkUrl: '/ginetta',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 36,
        logo: 'https://i.imgur.com/LOXYOAe.png',
        title: 'gordon',
        linkUrl: '/gordon',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 37,
        logo: 'https://i.imgur.com/YBPco9M.png',
        title: 'healey',
        linkUrl: '/healey',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 38,
        logo: 'https://i.imgur.com/vV6Tv55.png',
        title: 'hillman',
        linkUrl: '/hillman',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 39,
        logo: 'https://i.imgur.com/dhG82AD.png',
        title: 'honda',
        linkUrl: '/honda',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 40,
        logo: 'https://i.imgur.com/KMrs7oH.png',
        title: 'humber',
        linkUrl: '/humber',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 41,
        logo: 'https://i.imgur.com/d9gwOhl.png',
        title: 'innocenti',
        linkUrl: '/innocenti',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 42,
        logo: 'https://i.imgur.com/1mYbg5C.png',
        title: 'iso',
        linkUrl: '/iso',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 43,
        logo: 'https://i.imgur.com/p3kAGm6.png',
        title: 'isuzu',
        linkUrl: '/isuzu',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 44,
        logo: 'https://i.imgur.com/Hsjgvrl.png',
        title: 'jaguar',
        linkUrl: '/jaguar',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 45,
        logo: 'https://i.imgur.com/m4VFhL4.png',
        title: 'jensen',
        linkUrl: '/jensen',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 46,
        logo: 'https://i.imgur.com/kB1V42f.png',
        title: 'jowett',
        linkUrl: '/jowett',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 47,
        logo: 'https://i.imgur.com/ycgHzHt.png',
        title: 'lagonda',
        linkUrl: '/lagonda',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 48,
        logo: 'https://i.imgur.com/vIRnHRs.png?1',
        title: 'lamborghini',
        linkUrl: '/lamborghini',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 49,
        logo: 'https://i.imgur.com/VLjtLFG.png',
        title: 'lancia',
        linkUrl: '/lancia',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 50,
        logo: 'https://i.imgur.com/qip6VIp.png',
        title: 'land rover',
        linkUrl: '/land-rover',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 51,
        logo: 'https://i.imgur.com/LbQTh50.png',
        title: 'lea francis',
        linkUrl: '/leafrancis',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 52,
        logo: 'https://i.imgur.com/w4Ggw5F.png',
        title: 'lotus',
        linkUrl: '/lotus',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 53,
        logo: 'https://i.imgur.com/dAM5Rpd.png',
        title: 'marcos',
        linkUrl: '/marcos',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 54,
        logo: 'https://i.imgur.com/bgrxaqb.png',
        title: 'maserati',
        linkUrl: '/maserati',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 55,
        logo: 'https://i.imgur.com/Mq76BLP.png',
        title: 'matra',
        linkUrl: '/matra',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 56,
        logo: 'https://i.imgur.com/K09D1XJ.png',
        title: 'mazda',
        linkUrl: '/mazda',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 57,
        logo: 'https://i.imgur.com/HJA4S4L.png',
        title: 'mclaren',
        linkUrl: '/mclaren',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 58,
        logo: 'https://i.imgur.com/qrtlaUe.png',
        title: 'mercedes-benz',
        linkUrl: '/mercedes-benz',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 59,
        logo: 'https://i.imgur.com/sIzCcOK.png',
        title: 'mg',
        linkUrl: '/mg',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 60,
        logo: 'https://i.imgur.com/tXLj0jG.png',
        title: 'mini',
        linkUrl: '/mini',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 61,
        logo: 'https://i.imgur.com/hRXWJZt.png',
        title: 'mitsubishi',
        linkUrl: '/mitsubishi',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 62,
        logo: 'https://i.imgur.com/QF5S8Ut.png',
        title: 'monteverdi',
        linkUrl: '/monteverdi',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 63,
        logo: 'https://i.imgur.com/yVhyDg7.png',
        title: 'morgan',
        linkUrl: '/morgan',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 64,
        logo: 'https://i.imgur.com/1mVM4Z7.png',
        title: 'morris',
        linkUrl: '/morris',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 65,
        logo: 'https://i.imgur.com/G2X0HFy.png',
        title: 'nsu',
        linkUrl: '/nsu',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 66,
        logo: 'https://i.imgur.com/eMlw0nx.png',
        title: 'opel',
        linkUrl: '/opel',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 67,
        logo: 'https://i.imgur.com/JdPJqfB.png',
        title: 'pagani',
        linkUrl: '/pagani',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 68,
        logo: 'https://i.imgur.com/Cr28Tno.png',
        title: 'panhard',
        linkUrl: '/panhard',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 69,
        logo: 'https://i.imgur.com/ITGmLK6.png',
        title: 'panther',
        linkUrl: '/panther',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 70,
        logo: 'https://i.imgur.com/rjQRhY6.png',
        title: 'peugeot',
        linkUrl: '/peugeot',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 71,
        logo: 'https://i.imgur.com/Ed71imX.png',
        title: 'plymouth',
        linkUrl: '/plymouth',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 72,
        logo: 'https://i.imgur.com/ZEaEFPA.png',
        title: 'pontiac',
        linkUrl: '/pontiac',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 73,
        logo: 'https://i.imgur.com/daDsvqd.png',
        title: 'porsche',
        linkUrl: '/porsche',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 74,
        logo: 'https://i.imgur.com/4B4pYMs.png',
        title: 'reliant',
        linkUrl: '/reliant',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 75,
        logo: 'https://i.imgur.com/RUBCVd2.png',
        title: 'renault',
        linkUrl: '/renault',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 76,
        logo: 'https://i.imgur.com/ypFOpJw.png',
        title: 'riley',
        linkUrl: '/riley',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 77,
        logo: 'https://i.imgur.com/Htryp7C.png',
        title: 'rochdale',
        linkUrl: '/rochdale',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 78,
        logo: 'https://i.imgur.com/RztvpPD.png',
        title: 'rolls royce',
        linkUrl: '/rolls-royce',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 79,
        logo: 'https://i.imgur.com/Y4cv7nd.png',
        title: 'rover',
        linkUrl: '/rover',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 80,
        logo: 'https://i.imgur.com/71U8USS.png',
        title: 'saab',
        linkUrl: '/saab',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 81,
        logo: 'https://i.imgur.com/m0I1jVT.png',
        title: 'seat',
        linkUrl: '/seat',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 82,
        logo: 'https://i.imgur.com/t4D0spg.png',
        title: 'shelby',
        linkUrl: '/shelby',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 83,
        logo: 'https://i.imgur.com/ZgtX6rr.png',
        title: 'simca',
        linkUrl: '/simca',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 84,
        logo: 'https://i.imgur.com/m5GASxp.png',
        title: 'singer',
        linkUrl: '/singer',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 85,
        logo: 'https://i.imgur.com/FFhPrAY.png',
        title: 'skoda',
        linkUrl: '/skoda',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 86,
        logo: 'https://i.imgur.com/k1g72J4.png',
        title: 'standard',
        linkUrl: '/standard',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 87,
        logo: 'https://i.imgur.com/dhewWGX.png',
        title: 'subaru',
        linkUrl: '/subaru',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 88,
        logo: 'https://i.imgur.com/JNgAOQn.png',
        title: 'sunbeam',
        linkUrl: '/sunbeam',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 89,
        logo: 'https://i.imgur.com/fpzGcYg.png',
        title: 'suzuki',
        linkUrl: '/suzuki',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 90,
        logo: 'https://i.imgur.com/BIGMNgw.png',
        title: 'swallow',
        linkUrl: '/swallow',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 91,
        logo: 'https://i.imgur.com/oiK24kR.png',
        title: 'talbot',
        linkUrl: '/talbot',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 92,
        logo: 'https://i.imgur.com/3Xf9bn8.png',
        title: 'toyota',
        linkUrl: '/toyota',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 93,
        logo: 'https://i.imgur.com/zWuJIqP.png',
        title: 'trident',
        linkUrl: '/trident',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 94,
        logo: 'https://i.imgur.com/dlWdhno.png',
        title: 'triumph',
        linkUrl: '/triumph',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 95,
        logo: 'https://i.imgur.com/asxDrjS.png',
        title: 'turner',
        linkUrl: '/turner',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 96,
        logo: 'https://i.imgur.com/ju3w9UK.png',
        title: 'tvr',
        linkUrl: '/tvr',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 97,
        logo: 'https://i.imgur.com/QkZ2tNW.png',
        title: 'vander plas',
        linkUrl: '/vanderplas',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 98,
        logo: 'https://i.imgur.com/hV47fYZ.png',
        title: 'vauxhall',
        linkUrl: '/vauxhall',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 99,
        logo: 'https://i.imgur.com/8tT1DDA.png',
        title: 'volkswagen',
        linkUrl: '/volkswagen',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 100,
        logo: 'https://i.imgur.com/ZWEbqqN.png',
        title: 'volvo',
        linkUrl: '/volvo',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
    {
        id: 101,
        logo: 'https://i.imgur.com/CPNUElc.png',
        title: 'wolseley',
        linkUrl: '/wolseley',
        makerText: "",
        cars: [
            {
                id: '',
                name: '',
                modelText: "",
                imageUrl: '',
                specifications: {
                    YearsProduced: "",
                    Perfomance: "",
                    PowerAndtorque: "",
                    Engine: "",
                    Drivetrain: "",
                    Structure: "",
                    Transmission: "",
                    Weight: ""
                },
                PriceGuide: {
                    LaunchPrice: "£",
                    Excellent: "£",
                    Good: "£",
                    Average: "£",
                    Project: "£"
                }
            },
        ],
    },
];

export default CAR_DATA;
