$(document).ready(function() {
  let operation = '';

  $('.calculator-keys button').on('click', function() {
    let buttonValue = $(this).val();
    let displayValue = $('#display').val();

    if (buttonValue === 'C') {
      $('#display').val('');
      operation = '';
    } else if (buttonValue === '=') {
      $.ajax({
        url: '/calculate',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ expression: operation }),
        success: function(response) {
          $('#display').val(response.result);
          operation = response.result.toString();
        },
        error: function(xhr) {
          $('#display').val('Error');
          operation = '';
        }
      });
    } else {
      operation += buttonValue;
      $('#display').val(displayValue + buttonValue);
    }
  });
});