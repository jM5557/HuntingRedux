$(document).ready(function(){

    // toggable content
    $(".toggable").click(function (event) {
        event.stopPropagation();
        $(".content", this).toggleClass('visible');
    })

});
class Dropdown {
    constructor(root, items) {
        this.root = root;
        this.mainClickableItem = $(root + " .toggle-item");

        this.items = items;
        this.selectedItem = items[0];

        this.renderItems();
        this.makeItemsClickable();
        this.makeListToggable();
    }

    renderItems () {
        this.mainClickableItem.text(this.selectedItem.text);
        this.items.map ((item, index) => {
            let el = $("<li>"+ item.text +"</li>");
            $(this.root + " .item-list").append(el);
        });
    }

    makeItemsClickable () {
        let _this = this;

        $(_this.root + " .item-list li").click(function () {
            let currentIndex = $(this).index();
            let currentItem = _this.items[currentIndex];

            _this.mainClickableItem.text(currentItem.text);
            $(_this.root + " .item-list").toggleClass('visible');
        });
    }

    makeListToggable () {
        this.mainClickableItem.click(() => {
            $(this.root + " .item-list").toggleClass('visible');
        });
    }
}

class DropdownWithLinks extends Dropdown {
    constructor (root, items) {
        super(root, items);

        $(root + " .download-link-a").prop("href", this.selectedItem.link);
    }
    
    makeItemsClickable () {
        let _this = this;

        $(_this.root + " .item-list li").click(function () {
            let currentIndex = $(this).index();
            _this.selectedItem = _this.items[currentIndex];

            $(_this.root + " .item-list").toggleClass('visible');
            $(_this.root + " .download-link-a").prop("href", _this.selectedItem.link);
            _this.mainClickableItem.text(_this.selectedItem.text);
        });
    }
}
let headerDropdownItems = [
    {
        text: "Google Drive 01",
        link: "https://google.com"
    },
    {
        text: "Google Drive 02",
        link: "https://drive.google.com"
    }
];

new DropdownWithLinks('#top-header .dropdown', headerDropdownItems);
// Header/Navbar
var navbarDefaultState = 'CLOSED';

$("#menu-btn, #close-menu").click(function () { 
    navbarDefaultState = (navbarDefaultState === 'OPEN') ? 'CLOSED' : 'OPEN';
    $("#nav-menu").attr('class', navbarDefaultState);
});