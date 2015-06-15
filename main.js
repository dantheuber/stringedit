String.prototype.titleize = function() {
  var words = this.split(' ')
  var array = []
  for (var i=0; i<words.length; ++i) {
    array.push(words[i].charAt(0).toUpperCase() + words[i].toLowerCase().slice(1))
  }
  return array.join(' ')
}

var banner = document.getElementById('jumbo');

var wordcount = document.getElementById('wordcount');
var countbtn = document.getElementById('countbtn');
var findword = document.getElementById('word');
var replacefields = document.getElementById('replace_fields');
var replacebtn = document.getElementById('replacebtn');
var wordreplace = document.getElementById('replaceword');
var wordfields = document.getElementById('word_fields');
var upper = document.getElementById('upper');
var lower = document.getElementById('lower');
var output = document.getElementById('output');
var input = document.getElementById('user_input');


var task = {
  active: '',
  wordcount: function(){
    self.active('wordcount');
    toggleWordFields(1);
    toggleReplaceFields(0);
  },
  countwords: function(){
    self.active('countwords');
    output.textContent = 'The string contains '+input.value.split(' ').length+' words\n';
    if(stringCount(input.value,' ')[findword.value]===undefined){
      output.textContent += '"' + findword.value + '" occurs 0 times';
    }else{
      output.textContent += '"' + findword.value + '" occurs ' + stringCount(input.value,' ')[findword.value] + ' times';
    }
  },
  wordreplace: function(){
    self.active('wordreplace');
    toggleWordFields(1);
    toggleReplaceFields(1);
  },
  replaceWords: function(){
    self.active('replacewords');
    var re = new RegExp(findword.value,'g');
    output.textContent = input.value.replace(re,wordreplace.value);
  },
  length: function() {
    self.active('length');
    output.textContent = input.value.length + " characters in string";
    toggleWordFields(0);
  },
  upper: function() {
    self.active('upper');
    output.textContent = input.value.toUpperCase();
    toggleWordFields(0);
  },
  lower: function() {
    self.active('lower');
    output.textContent = input.value.toLowerCase();
    toggleWordFields(0);
  },
  titleize: function() {
    self.active('titleize');
    output.textContent = input.value.titleize();
    toggleWordFields(0);
  }
};


function stringCount(haystack, needle) {
    if (!needle || !haystack) {
        return false;
    }
    else {
        var words = haystack.split(needle),
            count = {};
        for (var i = 0, len = words.length; i < len; i++) {
            if (count.hasOwnProperty(words[i])) {
                count[words[i]] = parseInt(count[words[i]], 10) + 1;
            }
            else {
                count[words[i]] = 1;
            }
        }
        return count;
    }
}

function hideBanner(){
  $('#jumbo').fadeOut('slow');

}
// show or hide the replace word field
function toggleReplaceFields(x){
  if(x===undefined){
    if(replacefields.style.display = ''){
      $('#replacebtn').fadeOut('slow');
      $('#replace_fields').fadeOut('slow',function() {
        $('#countbtn').fadeIn();
      });
    }else{
      $('#countbtn').fadeOut(function() {
        $('#replace_fields').fadeIn();
        $('#replacebtn').fadeIn();
      });
    }
    return;
  }
  else if(x){
    $('#countbtn').fadeOut(function() {
      $('#replace_fields').fadeIn();
      $('#replacebtn').fadeIn();
    });
    return;
  }else if(!x){
    $('#replacebtn').fadeOut('slow');
    $('#replace_fields').fadeOut('slow',function() {
      $('#countbtn').fadeIn();
    });
    return;
  }

}


// show or hide the word function specific fields.
function toggleWordFields(x){
  if(x===undefined){
    if(wordfields.style.display = ''){
      $('#word_fields').fadeOut('slow');
      $('#replacebtn').fadeOut('slow');
    }else{
      $('#word_fields').fadeIn('slow');
      $('#replacebtn').fadeOut('slow');
    }
    return;
  }
  else if(x){
    $('#word_fields').fadeIn('slow');
    $('#replacebtn').fadeOut('slow');
    return;
  }else if(!x){
    $('#word_fields').fadeOut('slow');
    $('#replacebtn').fadeOut('slow');
    return;
  }

}
