// my example of typer js
// currently not sinking with HTML, attempt to find another solution 
// to create a type.js solution

var _content = ["Welcome !", "Full Stack Software Engineer", "Web Developer"];

// current sentence being processed
let part = 0;
// character number of the current sentence being processed
let part_index = 0;

// this will hold a return value
let _interval_value;

// this element will hold the text
let _element = document.querySelector('.myWord');

let _cursor = document.querySelector('.cursor');



// typing effect
function type() {
  // content is the array above
  let text = _content[part].substring(0, part_index + 1);
  _element.innerHTML = text;
  part_index++;

  if (text === _content[part]) {
    // this hides the cursors
    _cursor.style.display = "none";

    clearInterval(_interval_value);
    setTimeout(function () {
      _interval_value = setInterval(Delete, 50);
    }, 2000);
  }
}

// deleting animation 
function Delete() {
    // get substring with 1 char deleted 
    let text = _content[part].substring(0, part_index - 1);
    _element.innerHTML = text;
    part_index--;

    // / if sentence has been deleted then start to display the next sentence
    if(text === '') {
        clearInterval(_interval_value);
        
        // if current sentence was last then display first one, else move to next
        if(part === (_content.length -1))
            part = 0;
        else 
            part++;
        
        part_index = 0;

        // start to display the next sentence after some time
        setTimeout(function() {
            _cursor.style.display = "inline-block";
            _interval_value = setInterval(type, 100);
        }, 200);
    }
}

// start typing animaiton on load 
_interval_value = setInterval(type, 100);