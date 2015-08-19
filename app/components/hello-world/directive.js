class HelloWorldDirective {
  constructor() {
    this.templateUrl = 'hello-world-template.html';
    this.restrict = 'EA';
  }

  static directiveFactory() {
    HelloWorldDirective.instance = new HelloWorldDirective();
    return HelloWorldDirective.instance;
  }
}

export default HelloWorldDirective;
