const element1 = document.createElement('p');
element1.id = "one";
console.log(element1);

const element2 = document.getElementById("two");
element2.after(element1);
element1.textContent = "kaise ho sab!";
element1.style.backgroundColor = "pink"
element1.style.color = "blue"
element1.style.width = "100px"

element1.getAttribute("id");
element1.className = 'A';
console.log(element1.getAttribute("class"))


const list1 = document.createElement("li");
list1.textContent = 'Milk';
const list2 = document.createElement("li");
list2.textContent = 'cake';
const list3 = document.createElement("li");
list3.textContent = 'halwa';

const unorderedlist = document.getElementById("ullist");
unorderedlist.append(list1);
unorderedlist.append(list2);
unorderedlist.prepend(list3);

const arr = [
  "alpha","bravo","charlie","delta","echo","foxtrot","golf","hotel","india","juliet",
  "kilo","lima","mike","november","oscar","papa","quebec","romeo","sierra","tango",
  "uniform","victor","whiskey","xray","yankee","zulu","red","blue","green","yellow",
  "orange","purple","pink","black","white","gray","silver","gold","bronze","cyan",
  "magenta","lime","teal","navy","maroon","olive","coral","peach","mint","lavender",
  "rose","sky","ocean","river","mountain","forest","desert","island","valley","plain",
  "storm","rain","snow","cloud","wind","fire","ice","stone","metal","wood",
  "light","shadow","dream","night","day","sun","moon","star","space","time"
];
const fragment = document.createDocumentFragment();

for(let item of arr)
{
   const list = document.createElement('li');
   list.textContent = item;
   fragment.append(list);
}

unorderedlist.append(fragment);

// element1.remove();