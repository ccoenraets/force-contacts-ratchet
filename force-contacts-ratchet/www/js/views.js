var views = (function () {

    "use strict";

    // Compile Handlebars templates
    var tplHome = Handlebars.compile($('#home-template').html()),
        tplContactList = Handlebars.compile($('#contact-list-template').html()),
        tplContactDetails = Handlebars.compile($('#contact-details-template').html()),
        tplContactEdit = Handlebars.compile($('#contact-edit-template').html());

    var HomeView = function (contactService) {

        var $page = $('<div class="page"></div>'),
            $searchKey,
            $content;

        $page.on('keyup', '.search-key', function (event) {
            if (event.keyCode !== 13) { // return key
                contactService.findByName($searchKey.val(), function (contacts) {
                    $content.html(tplContactList(contacts));
                });
            }
        });

        function render() {
            $page.html(tplHome());
            $searchKey = $('.search-key', $page);
            $content = $('.content', $page);
            return $page;
        }

        return {
            render: render
        };

    };

    var ContactView = function (contactService, contact) {

        var $page = $('<div class="page"></div>');

        $page.on('click', '.btn-edit', editMode);
        $page.on('click', '.btn-save', save);

        function render() {
            return contact ? viewMode() : editMode();
        }

        function viewMode() {
            $page.html(tplContactDetails(contact));
            return $page;
        }

        function editMode() {
            $page.html(tplContactEdit(contact));
            return $page;
        }

        function save() {
            var changes = {
                FirstName: $('.firstName').val(),
                LastName: $('.lastName').val(),
                Title: $('.business-title').val(),
                Email: $('.email').val(),
                Phone: $('.phone').val(),
                MobilePhone: $('.mobilePhone').val()
            };
            contactService.save(contact, changes,
                function (newContact) {
                    contact = newContact;
                    viewMode();
                },
                function (error) {
                    alert('An error occurred while saving the contact');
                    console.log(JSON.stringify(error));
                });
        }

        return {
            render: render
        };

    };

    return {
        HomeView: HomeView,
        ContactView: ContactView
    };

}());