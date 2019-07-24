class Element {
  name;
  done;
  detail;
  extended = false;
  cratedBy = "Liam";
  doneBy = "Natalie";


    constructor(name, done, detail, cratedBy, doneBy) {
        this.name = name;
        this.done = done;
        this.detail = detail;
        this.cratedBy = cratedBy;
        this.doneBy = doneBy;
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
        new Element("test 1 element 1",true, "" ,"Liam", "Emil"),
        new Element("test 1 element 2 with long name",false, "this is element 2 for testing!", "Natalie","Liam"),
        new Element("test 1 element 3",true, "this is element 3 for testing! this is element 1 for testing! whit long test","Liam", "Natalie"),
        new Element("test 1 element 4",false, "this is element 4 for testing!","Liam", "Natalie"),
        new Element("test 1 element 5",true, "this is element 5 for testing!","Liam","Liam")
  ]),

    new List("test List 2", [
        new Element("test 2 element 1",true, "this is element 1 for testing!","Liam", "Natalie"),
        new Element("test 2 element 2",false, "this is element 2 for testing!","Liam","Liam"),
        new Element("test 2 element 3",false, "this is element 3 for testing!", "Natalie","Liam"),
        new Element("test 2 element 4",false, "this is element 4 for testing!", "Natalie","Liam"),
        new Element("test 2 element 5",true, "this is element 5 for testing!","Liam", "Natalie")
    ]),

    new List("test List 3", [
        new Element("test 3 element 1",true, "this is element 1 for testing!","Liam", "Natalie"),
        new Element("test 3 element 2",false, "this is element 2 for testing!", "Natalie", "Natalie"),
        new Element("test 3 element 3",true, "this is element 3 for testing!","Liam", "Natalie"),
        new Element("test 3 element 4",true, "this is element 4 for testing!", "Natalie", "Natalie"),
        new Element("test 3 element 5",true, "this is element 5 for testing!","Liam", "Emil")
    ]),
    new List("test List 4", [
        new Element("test 3 element 1",true, "this is element 1 for testing!","Liam", "Natalie"),
        new Element("test 3 element 2",true, "this is element 2 for testing!", "Natalie", "Natalie"),
        new Element("test 3 element 3",true, "this is element 3 for testing!","Liam", "Natalie"),
    ])
];

export default tempLists;