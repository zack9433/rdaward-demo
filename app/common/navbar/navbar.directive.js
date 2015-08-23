class NavbarDirective {
  constructor() {
    this.templateUrl = 'navbar.tpl.html';
    this.restrict = 'EA';
  }

  static directiveFactory() {
    NavbarDirective.instance = new NavbarDirective();
    return NavbarDirective.instance;
  }
}

export default NavbarDirective;
