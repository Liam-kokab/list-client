class Element {
  name;
  done;
  detail;
  extended = false;
  constructor(name, done, detail){
    this.name = name;
    this.done = done;
    this.detail = detail;
  }
}

class List {
  name;
  elements;
  constructor(name, elements){
    this.name = name;
    this.elements = elements;
  }
}

const tempLists = [

    new List("test List 1", [
        new Element("test 1 element 1",true, "this is element 1 for testing!"),
        new Element("test 1 element 2",false, "this is element 2 for testing!"),
        new Element("test 1 element 3",true, "this is element 3 for testing!"),
        new Element("test 1 element 4",false, "this is element 4 for testing!"),
        new Element("test 1 element 5",true, "this is element 5 for testing!")
  ]),

    new List("test List 2", [
        new Element("test 2 element 1",true, "this is element 1 for testing!"),
        new Element("test 2 element 2",false, "this is element 2 for testing!"),
        new Element("test 2 element 3",false, "this is element 3 for testing!"),
        new Element("test 2 element 4",false, "this is element 4 for testing!"),
        new Element("test 2 element 5",true, "this is element 5 for testing!")
    ]),

    new List("test List 3", [
        new Element("test 3 element 1",true, "this is element 1 for testing!"),
        new Element("test 3 element 2",false, "this is element 2 for testing!"),
        new Element("test 3 element 3",true, "this is element 3 for testing!"),
        new Element("test 3 element 4",true, "this is element 4 for testing!"),
        new Element("test 3 element 5",true, "this is element 5 for testing!")
    ])
];

export default tempLists;