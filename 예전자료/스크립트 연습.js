window.onload = function() {
  let output='';
  for(let i = 0; i<256; i++){
    output += '<div></div>';
  }
  document.body.innerHTML = output;

  let divs = document.querySelectorAll('div');
  for(let j=0; j<divs.length; j++){
    let div = divs[j];
    div.style.width = '500px';
    div.style.height = '1px';
    div.style.background = 'rgb(' + j + ',' + j + ',' + j + ')';
  }
};
