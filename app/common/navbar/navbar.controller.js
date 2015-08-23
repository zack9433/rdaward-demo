class NavbarController {
  constructor(...injects) {
    NavbarController.$inject.forEach((item, index) => this[item] = injects[index]);
  }
}

NavbarController.$inject = [];

export default NavbarController;
