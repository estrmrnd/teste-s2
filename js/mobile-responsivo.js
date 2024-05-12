class MobileNavbar {
    constructor(mobileMenu, menu__list, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.menu__list = document.querySelector(menu__list);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.menu__list.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu__list",
    ".nav-list li",
  );
  mobileNavbar.init();