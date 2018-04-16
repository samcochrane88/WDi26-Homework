let lines = {
  "N":["Time Square","34th","28th","23rd","Union Square","8th"],
  "L":["8th","6th","Union Square","3rd","1st"],
  "6":["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
}

$(function() {

    let currentLine = '';

    $('select').change(function(element) {
      $('#output').empty();

      let currentLine = $('#line').val();
      if (currentLine == 'Line N') currentLine = 'N';
      if (currentLine == 'Line 6') currentLine = '6';
      if (currentLine == 'Line L') currentLine = 'L';

      let startDropdown = $('.start-dropdown').val();
      let finishDropdown = $('.finish-dropdown').val();

      if (startDropdown !== 'Select a start station' && finishDropdown !== 'Select a finish station') {
        $('#output').removeClass('d-none');

        let startPosition = lines[currentLine].indexOf(startDropdown);
        let finishPosition = lines[currentLine].indexOf(finishDropdown);

        let allStations = lines[currentLine];
        let updatedStation = allStations.splice(startPosition, (finishPosition - startPosition)+1);

        $('.output-container').removeClass('d-none')

        // loop through all of the stations on that line and append each station to the output div
        _.forEach(updatedStation, function(station) {
          let stationElement =
          `<div class="alert alert-primary" role="alert">
            ${station}
          </div>`;

          $('#output').append(stationElement)


        })


      }


    })


    $('#line').change(function (element) {
      var valueSelected = this.value;

      if (valueSelected == 'Start Line') {
        $('.n-line').addClass('d-none');
        $('.6-line').addClass('d-none');
        $('.l-line').addClass('d-none');
      }

      if (valueSelected == 'Line N') {
        $('.n-line').removeClass('d-none');
        $('.6-line').addClass('d-none');
        $('.l-line').addClass('d-none');
      }

      if (valueSelected == 'Line 6') {
        $('.6-line').removeClass('d-none');
        $('.n-line').addClass('d-none');
        $('.l-line').addClass('d-none');
      }

      if (valueSelected == 'Line L') {
        $('.l-line').removeClass('d-none');
        $('.n-line').addClass('d-none');
        $('.6-line').addClass('d-none');
      }
    });
});



function singleLine (line, start, finsh) {


}
