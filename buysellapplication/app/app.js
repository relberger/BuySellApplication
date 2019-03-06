﻿'use strict';

var buySellApp = angular.module('buySellApp', []).
    controller('AdListController', ['$scope', 'getAllAds',// 'getAdById',
        function AdListController($scope, getAllAds, getAdById)
        {
            $scope.ads = getAllAds();

            //$scope.getAdById(id) = function (id)
            //{
            //    getAdById(id);
            //};

        }])
    .factory('getAllAds', [function ()
    {
        return function ()
        {
            var categories =
            {
                FURNITURE: 1,
                BOOKS: 2,
                CARS: 3,
                GAMES: 4
            };

            var ads =
                [
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
                        title: 'Bookshelf',
                        addedOn: '1/10/2019',
                        description: 'Four shelves',
                        price: 20,
                        imageUrl: 'https://content.haycdn.com/mgen/master:WALM5331.jpg?is=400,400,0xffffff',
                        category: categories.FURNITURE,
                        contactName: 'Sirius Black',
                        email: 'siriusblack@gmail.com',
                        phone: '3475692153'
                    }
                ]

            return ads;
        }

    }])
    //.factory('getAdById', 'id', [function (id)
    //{
    //    var ads = getAllAds();
    //    var ad;

    //    for (var i = 0; i < ads.length; i++)
    //    {
    //        if (ads[i].id == id)
    //        {
    //            ad = ads[i];
    //        }
    //    }

    //    return ad;
    //}])
    ;
