function getDogBreed(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        displayResults(responseJson.message)
      })
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function displayResults(breedPicture) {
    console.log(breedPicture);
    $('#dog-response').remove();
    if(breedPicture === 'Breed not found (master breed does not exist)'){
        $('main').append(`<p id="dog-response">${breedPicture}</p>`)
    }
    else{
        $('main').append(`<img src="${breedPicture}" id="dog-response">`)
    }

  }
  
  function watchForm() {
      //console.log("submitted")
    $('form').submit(event => {
      event.preventDefault();
      console.log($('input').val());
      let breed = $('input').val();
      getDogBreed(breed);
    });
  }
  
  $(function() {
    //wait for submission
    watchForm();
  });