var services = (function () {

    "use strict";

    function ContactService(forceClient) {

        var data = {
            "totalSize": 20,
            "done": true,
            "records": [
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtqAAH"
                    },
                    "Id": "003i000000UPVtqAAH",
                    "FirstName": "Rose",
                    "LastName": "Gonzalez",
                    "Title": "SVP, Procurement",
                    "Phone": "(512) 757-6000",
                    "MobilePhone": "(512) 757-9340",
                    "Email": "rose@edge.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtrAAH"
                    },
                    "Id": "003i000000UPVtrAAH",
                    "FirstName": "Sean",
                    "LastName": "Forbes",
                    "Title": "CFO",
                    "Phone": "(512) 757-6000",
                    "MobilePhone": "(512) 757-4561",
                    "Email": "sean@edge.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtsAAH"
                    },
                    "Id": "003i000000UPVtsAAH",
                    "FirstName": "Jack",
                    "LastName": "Rogers",
                    "Title": "VP, Facilities",
                    "Phone": "(336) 222-7000",
                    "MobilePhone": null,
                    "Email": "jrogers@burlington.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVttAAH"
                    },
                    "Id": "003i000000UPVttAAH",
                    "FirstName": "Pat",
                    "LastName": "Stumuller",
                    "Title": "SVP, Administration and Finance",
                    "Phone": "(014) 427-4427",
                    "MobilePhone": "(014) 454-6364",
                    "Email": "pat@pyramid.net"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtuAAH"
                    },
                    "Id": "003i000000UPVtuAAH",
                    "FirstName": "Andy",
                    "LastName": "Young",
                    "Title": "SVP, Operations",
                    "Phone": "(785) 241-6200",
                    "MobilePhone": "(785) 265-5350",
                    "Email": "a_young@dickenson.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtvAAH"
                    },
                    "Id": "003i000000UPVtvAAH",
                    "FirstName": "Tim",
                    "LastName": "Barr",
                    "Title": "SVP, Administration and Finance",
                    "Phone": "(312) 596-1000",
                    "MobilePhone": "(312) 596-1230",
                    "Email": "barr_tim@grandhotels.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtwAAH"
                    },
                    "Id": "003i000000UPVtwAAH",
                    "FirstName": "John",
                    "LastName": "Bond",
                    "Title": "VP, Facilities",
                    "Phone": "(312) 596-1000",
                    "MobilePhone": "(312) 596-1563",
                    "Email": "bond_john@grandhotels.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtxAAH"
                    },
                    "Id": "003i000000UPVtxAAH",
                    "FirstName": "Stella",
                    "LastName": "Pavlova",
                    "Title": "SVP, Production",
                    "Phone": "(212) 842-5500",
                    "MobilePhone": "(212) 842-5501",
                    "Email": "spavlova@uog.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtyAAH"
                    },
                    "Id": "003i000000UPVtyAAH",
                    "FirstName": "Lauren",
                    "LastName": "Boyle",
                    "Title": "SVP, Technology",
                    "Phone": "(212) 842-5500",
                    "MobilePhone": "(212) 842-5611",
                    "Email": "lboyle@uog.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVtzAAH"
                    },
                    "Id": "003i000000UPVtzAAH",
                    "FirstName": "Babara",
                    "LastName": "Levy",
                    "Title": "SVP, Operations",
                    "Phone": "(503) 421-7800",
                    "MobilePhone": "(503) 421-5451",
                    "Email": "b.levy@expressl&t.net"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu0AAH"
                    },
                    "Id": "003i000000UPVu0AAH",
                    "FirstName": "Josh",
                    "LastName": "Davis",
                    "Title": "Director, Warehouse Mgmt",
                    "Phone": "(503) 421-7800",
                    "MobilePhone": "(503) 421-4387",
                    "Email": "j.davis@expressl&t.net"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu1AAH"
                    },
                    "Id": "003i000000UPVu1AAH",
                    "FirstName": "Jane",
                    "LastName": "Grey",
                    "Title": "Dean of Administration",
                    "Phone": "(520) 773-9050",
                    "MobilePhone": "(520) 773-4539",
                    "Email": "jane_gray@uoa.edu"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu2AAH"
                    },
                    "Id": "003i000000UPVu2AAH",
                    "FirstName": "Arthur",
                    "LastName": "Song",
                    "Title": "CEO",
                    "Phone": "(212) 842-5500",
                    "MobilePhone": "(212) 842-4535",
                    "Email": "asong@uog.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu3AAH"
                    },
                    "Id": "003i000000UPVu3AAH",
                    "FirstName": "Ashley",
                    "LastName": "James",
                    "Title": "VP, Finance",
                    "Phone": "+44 191 4956203",
                    "MobilePhone": "+44 191 3456234",
                    "Email": "ajames@uog.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu4AAH"
                    },
                    "Id": "003i000000UPVu4AAH",
                    "FirstName": "Tom",
                    "LastName": "Ripley",
                    "Title": "Regional General Manager",
                    "Phone": "(650) 450-8810",
                    "MobilePhone": "(650) 345-7636",
                    "Email": "tripley@uog.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu5AAH"
                    },
                    "Id": "003i000000UPVu5AAH",
                    "FirstName": "Liz",
                    "LastName": "D'Cruz",
                    "Title": "VP, Production",
                    "Phone": "(650) 450-8810",
                    "MobilePhone": "(650) 345-6637",
                    "Email": "ldcruz@uog.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu6AAH"
                    },
                    "Id": "003i000000UPVu6AAH",
                    "FirstName": "Edna",
                    "LastName": "Frank",
                    "Title": "VP, Technology",
                    "Phone": "(650) 867-3450",
                    "MobilePhone": "(650) 867-7686",
                    "Email": "efrank@genepoint.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu7AAH"
                    },
                    "Id": "003i000000UPVu7AAH",
                    "FirstName": "Avi",
                    "LastName": "Green",
                    "Title": "CFO",
                    "Phone": "(212) 842-5500",
                    "MobilePhone": "(212) 842-2383",
                    "Email": "agreen@uog.com"
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu8AAH"
                    },
                    "Id": "003i000000UPVu8AAH",
                    "FirstName": "Siddartha",
                    "LastName": "Nedaerk",
                    "Title": null,
                    "Phone": null,
                    "MobilePhone": null,
                    "Email": null
                },
                {
                    "attributes": {
                        "type": "Contact",
                        "url": "/services/data/v29.0/sobjects/Contact/003i000000UPVu9AAH"
                    },
                    "Id": "003i000000UPVu9AAH",
                    "FirstName": "Jake",
                    "LastName": "Llorrac",
                    "Title": null,
                    "Phone": null,
                    "MobilePhone": null,
                    "Email": null
                }
            ]
        };

        function findAll(successHandler, errorHandler) {
            successHandler(data.records);
        }

        function findByName(searchKey, successHandler, errorHandler) {
            var results = data.records.filter(function (element) {
                return (element.FirstName + ' ' + element.LastName).toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            successHandler(results);
        }

        function findById(contactId, successHandler, errorHandler) {
            var contact = null,
                l = data.records.length;
            for (var i = 0; i < l; i++) {
                if (data.records[i].Id === contactId) {
                    contact = data.records[i];
                    break;
                }
            }
            successHandler(contact);
        }

        function save(original, changes, successHandler, errorHandler) {
            if (original) {
                findById(original.Id, function (contact) {
                    contact.FirstName = changes.FirstName;
                    contact.LastName = changes.LastName;
                    contact.Title = changes.Title;
                    contact.Email = changes.Email;
                    contact.Phone = changes.Phone;
                    contact.MobilePhone = changes.MobilePhone;
                    successHandler(contact);
                });
            } else {
                changes.Id = '' + new Date().getTime();
                data.records.push(changes);
                successHandler(changes);
            }
        }

        return {
            findAll: findAll,
            findByName: findByName,
            findById: findById,
            save: save
        }
    }

    return {
        ContactService: ContactService
    }

}());