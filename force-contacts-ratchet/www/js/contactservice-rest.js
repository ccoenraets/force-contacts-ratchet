var services = (function () {

    "use strict";

    function ContactService(forceClient) {

        function findAll(successHandler, errorHandler) {
            var soql = 'SELECT Id, FirstName, LastName, Title FROM contact LIMIT 50';
            forceClient.query(soql, function (data) {
                successHandler(data.records);
            }, errorHandler);
        }

        function findByName(searchKey, successHandler, errorHandler) {
            var soql = 'SELECT Id, FirstName, LastName, Title FROM contact WHERE name LIKE \'%' + searchKey + '%\' LIMIT 50';
            forceClient.query(soql, function (data) {
                successHandler(data.records);
            }, errorHandler);
        }

        function findById(contactId, successHandler, errorHandler) {
            var fieldList = ['Id', 'FirstName', 'LastName', 'Title', 'Department', 'Phone', 'MobilePhone', 'Email'];
            forceClient.retrieve('Contact', contactId, fieldList, successHandler, errorHandler);
        }

        function save(original, changes, successHandler, errorHandler) {
            if (original) {
                forceClient.update('Contact', original.Id, changes, function (data) {
                    changes.Id = original.Id;
                    successHandler(changes);
                }, errorHandler);
            } else {
                forceClient.create('Contact', changes, function (data) {
                    changes.Id = data.Id;
                    successHandler(changes);
                }, errorHandler);
            }
        }

        return {
            findAll: findAll,
            findByName: findByName,
            findById: findById,
            save: save
        };

    }

    return {
        ContactService: ContactService
    };

}());