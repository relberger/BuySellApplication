'use strict';

var buySellApp = angular.module('buySellApp', []).
    controller('AdListController', ['$scope', 'adService',
        function AdListController($scope, adService)
        {
            $scope.ads = adService.getAllAds();
        }])
    .factory('adService', [function ()
    {
        var categories =
        {
            FURNITURE: 'furniture',
            BOOKS: 'books',
            CARS: 'cars',
            GAMES: 'games', 
            MISCELLANEOUS: 'miscellaneous',
            ELECTRONICS: 'electronics'
        };

        var ads =
            [
                {
                    id: 0,
                    title: 'Bookshelf',
                    addedOn: '1/10/2019',
                    description: 'Four shelves',
                    price: 20,
                    imageUrl: 'https://content.haycdn.com/mgen/master:WALM5331.jpg?is=400,400,0xffffff',
                    category: categories.FURNITURE,
                    contactName: 'Sirius Black',
                    email: 'siriusblack@gmail.com',
                    phone: '3475692153'
                },
                {
                    id: 1,
                    title: 'Couch',
                    addedOn: '1/1/2019',
                    description: 'Comfortable black couch',
                    price: 50,
                    imageUrl: 'https://secure.img1-fg.wfcdn.com/im/84352408/resize-h500-w500%5Ecompr-r85/3699/36996219/Ibiza+Sofa.jpg',
                    category: categories.FURNITURE,
                    contactName: 'Hermione Granger',
                    email: 'hermionegranger@gmail.com',
                    phone: '2122231223'
                },
                {
                    id: 2,
                    title: 'Table',
                    addedOn: '1/2/2019',
                    description: 'Giving away table',
                    price: 0,
                    imageUrl: 'https://www.ikea.com/us/en/images/products/tarendo-table-black__0241636_PE381441_S4.JPG',
                    category: categories.FURNITURE,
                    contactName: 'Ron Weasley',
                    email: 'ronweasley@yahoo.com',
                    phone: '5166965116'
                },
                {
                    id: 3,
                    title: 'Principles of Biochemistry by David L. Nelson',
                    addedOn: '1/3/2019',
                    description: 'Biochemistry textbook, sixth edition',
                    price: 25,
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/610yw2FxTeL._SX390_BO1,204,203,200_.jpg',
                    category: categories.BOOKS,
                    contactName: 'Albus Dumbledore',
                    email: 'dumbledore@hogwarts.edu',
                    phone: '9174531978'
                },
                {
                    id: 4,
                    title: 'Desk Chair',
                    addedOn: '1/4/2019',
                    description: 'New swivel chair',
                    price: 20,
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1920/4697/products/M03_14628YG-BK_002.jpg?v=1535439875',
                    category: categories.FURNITURE,
                    contactName: 'Minerva McGonagall',
                    email: 'mcgonagall@hogwarts.edu',
                    phone: '9088715432'
                },
                {
                    id: 5,
                    title: 'Dresser',
                    addedOn: '1/5/2019',
                    description: 'Brown dresser',
                    price: 40,
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnjpTmcaUNi0SlM6h_4kFbTKxbOQn0MMVQMwnBuKne1CN4mklLeD8l_zQIUbnbMA5jXRz5fesgZdckiwPPGR-4KvVGjT17Ub0GWpQht_jmE9zthig2282Isw&usqp=CAY',
                    category: categories.FURNITURE,
                    contactName: 'Rubeus Hagrid',
                    email: 'hagrid@hogwarts.edu',
                    phone: '3477364545'
                },
                {
                    id: 6,
                    title: '2006 Honda Civic',
                    addedOn: '1/6/2019',
                    description: 'Used car in good condition',
                    price: 5000,
                    imageUrl: 'https://file.kbb.com/kbb/vehicleimage/housenew/480x360/2006/2006-honda-civic-frontside_hocivcpe061.jpg',
                    category: categories.CARS,
                    contactName: 'Draco Malfoy',
                    email: 'dracomalfoy@gmail.com',
                    phone: '9734536598'
                },
                {
                    id: 7,
                    title: 'Desk',
                    addedOn: '1/7/2019',
                    description: 'Office desk with shelves',
                    price: 30,
                    imageUrl: 'https://www.ikea.com/us/en/images/products/brusali-desk-brown__0383188_PE557807_S4.JPG',
                    category: categories.FURNITURE,
                    contactName: 'Ginny Weasley',
                    email: 'ginnyweasley@gmail.com',
                    phone: '5162165493'
                },
                {
                    id: 8,
                    title: 'Head Tennis Rackets',
                    addedOn: '1/8/2019',
                    description: '2 tennis rackets',
                    price: 100,
                    imageUrl: 'https://dks.scene7.com/is/image/GolfGalaxy/16HEDATS6STRNGXXXPRQ_Black?wid=500&fmt=jpg',
                    category: categories.GAMES,
                    contactName: 'Petunia Dursley',
                    email: 'petuniadursley@yahoo.com',
                    phone: '6159523819'
                },
                {
                    id: 9,
                    title: 'Monopoly game',
                    addedOn: '1/9/2019',
                    description: 'Used game, has all the pieces',
                    price: 5,
                    imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_1cabe0ab-9f6b-49a9-add1-ea653231efdf?wid=488&hei=488&fmt=webp',
                    category: categories.GAMES,
                    contactName: 'Severus Snape',
                    email: 'snape@hogwarts.edu',
                    phone: '9082526947'
                },
                {
                    id: 10,
                    title: 'Blue duffel bag',
                    addedOn: '1/10/2019',
                    description: 'Lightly used duffle bag. 32.5x17x11.5 inches',
                    price: 10,
                    imageUrl: 'https://cdn.shopify.com/s/files/1/0230/0765/products/duffle_blue_front.jpg?v=1499524667',
                    category: categories.MISCELLANEOUS,
                    contactName: 'Cedric Diggory',
                    email: 'cedricdiggory@gmail.com',
                    phone: '3598712456'
                },
                {
                    id: 11,
                    title: 'Foldable Drying Rack',
                    addedOn: '1/11/2019',
                    description: 'Plenty of hanging space. Good alternative to a dryer.',
                    price: 5,
                    imageUrl: 'https://i5.walmartimages.com/asr/a2bb5bc4-993e-4ec1-8e63-2f34f10a6b9a_1.b2391ce2ba59c9105ea54d3d4021c775.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
                    category: categories.MISCELLANEOUS,
                    contactName: 'Argus Filch',
                    email: 'filch@hogwarts.edu',
                    phone: '2124579531'
                },
                {
                    id: 12,
                    title: 'Portable Space Heater',
                    addedOn: '1/12/2019',
                    description: 'Lasko 754200 Ceramic Portable Space Heater with Adjustable Thermostat - Perfect For the Home or Home Office',
                    price: 20,
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Pwq2e1%2B0L._SX425_.jpg',
                    category: categories.FURNITURE,
                    contactName: 'Cornelius Fudge',
                    email: 'fudge@ministry.gov',
                    phone: '9174563265'
                },
                {
                    id: 13,
                    title: 'Corkscrew',
                    addedOn: '1/13/2019',
                    description: 'Wing corkscrew with ergonomic handle',
                    price: 2,
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61jpEa4QqCL._SY879_.jpg',
                    category: categories.MISCELLANEOUS,
                    contactName: 'Lee Jordan',
                    email: 'leejordan@gmail.com',
                    phone: '7975314986'
                },
                {
                    id: 14,
                    title: 'Rubik\x27s Cube',
                    addedOn: '1/14/2019',
                    description: 'Good puzzle',
                    price: 2,
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51K7YxVuk2L._SY355_.jpg',
                    category: categories.GAMES,
                    contactName: 'Luna Lovegood',
                    email: 'lunalovegood@yahoo.com',
                    phone: '5164687913'
                },
                {
                    id: 15,
                    title: 'Magnetic Letters and Numbers',
                    addedOn: '1/15/2019',
                    description: 'Magnetic Letters and Numbers for Educating Kids in Fun -Educational Alphabet Refrigerator Magnets -82 Pieces',
                    price: 5,
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/712c7hQkDdL._SX425_.jpg',
                    category: categories.GAMES,
                    contactName: 'Remus Lupin',
                    email: 'lupin@hogwarts.edu',
                    phone: '4102197823'
                },
                {
                    id: 16,
                    title: 'Bose SoundLink 2 Bluetooth Headphones',
                    addedOn: '1/16/2019',
                    description: 'Original packaging, brand new',
                    price: 200,
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/6188bLRU64L._SX425_.jpg',
                    category: categories.ELECTRONICS,
                    contactName: 'Neville Longbottom',
                    email: 'nevillelongbottom@gmail.com',
                    phone: '9087513249'
                },
                {
                    id: 17,
                    title: 'Air Mattress',
                    addedOn: '1/17/2019',
                    description: 'Air bed / air mattress / Intex Inflatable Camping Mattress',
                    price: 30,
                    imageUrl: 'https://crdms.images.consumerreports.org/w_598,h_436/prod/products/cr/models/396973-air-mattresses-simmons-beautyrest-hi-loft-raised-airbed-10001221.jpg',
                    category: categories.FURNITURE,
                    contactName: 'Peter Pettigrew',
                    email: 'peterpettigrew@aol.com',
                    phone: '9175436921'
                },
                {
                    id: 18,
                    title: '2 All in one printers',
                    addedOn: '1/18/2019',
                    description: 'HP Photosmart plus B209 wireless printer and scanner all in one. Comes with electric cord and USB cable',
                    price: 50,
                    imageUrl: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c02938438.png',
                    category: categories.ELECTRONICS,
                    contactName: 'Rita Skeeter',
                    email: 'rita@dailyprophet.com',
                    phone: '2124697326'
                },
                {
                    id: 19,
                    title: 'Portable Washer',
                    addedOn: '1/19/2019',
                    description: 'Haier 1.5 cu ft washing machine',
                    price: 40,
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ZF3vo%2BSML._SY445_.jpg',
                    category: categories.ELECTRONICS,
                    contactName: 'Dean Thomas',
                    email: 'deanthomas@gmail.com',
                    phone: '7821564983'
                },
                {
                    id: 20,
                    title: 'Tea set',
                    addedOn: '1/20/2019',
                    description: '10 piece tea set',
                    price: 20,
                    imageUrl: 'https://www.englishteastore.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/t/e/teamint1000029124-_-00_childrens-tea-set-10-pcs-country-rose.jpg',
                    category: categories.MISCELLANEOUS,
                    contactName: 'Dolores Umbridge',
                    email: 'umbridge@ministry.gov',
                    phone: '45123684152'
                }
            ];

        this.getAllAds = function ()
        {
            return ads;
        };

        this.getAddById = function (id)
        {
            for (var ad in ads)
            {
                if (ad.id === id)
                {
                    return ad;
                }
            }

            return null;
        };

        return this;
    }]);
