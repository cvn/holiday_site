
    function addInputNames() {
        // Not ideal, but jQuery's validate plugin requires fields to have names
        // so we add them at the last possible minute, in case any javascript 
        // exceptions have caused other parts of the script to fail.
        $(".card-number").attr("name", "card-number")
        $(".card-cvc").attr("name", "card-cvc")
        $(".card-expiry-year").attr("name", "card-expiry-year")
    }

    function removeInputNames() {
        $(".card-number").removeAttr("name")
        $(".card-cvc").removeAttr("name")
        $(".card-expiry-year").removeAttr("name")
    }



    function submitForm(form) {
      // remove the input field names for security
      // we do this *before* anything else which might throw an exception
      removeInputNames(); // THIS IS IMPORTANT!

      // disable the submit button to prevent repeated clicks
      $('.submit-button').attr("disabled", "disabled");
      plaqueButtonsDisabled = 1;
      $('#payment-form .payment-errors').html('<img class="submit-loader" src="/thebellringer/images/loader-red.gif">');
      // createToken returns immediately - the supplied callback submits the form if there are no errors
      var $form = $(form);
      Stripe.createToken({
          name: $form.find('.card-name').val(),
          number: $form.find('.card-number').val(),
          cvc: $form.find('.card-cvc').val(),
          exp_month: $form.find('.card-expiry-month').val(),
          exp_year: $form.find('.card-expiry-year').val()
      }, stripeResponseHandler);
      return false; // submit from callback
    }

function resetForm($form){
    $form.find('.submit-button').removeAttr("disabled");
    $form[0].reset();
}

function stripeResponseHandler(status, response) {
    if (response.error) {
        // re-enable the submit button
        $('.submit-button').removeAttr("disabled");
        plaqueButtonsDisabled = 0;
        // show the errors on the form
        $("#payment-form .payment-errors").html(response.error.message).effect('highlight');
        // we add these names back in so we can revalidate properly
        addInputNames();
    } else {
        var form$ = $("#payment-form");
        // token contains id, last4, and card type
        var token = response['id'];
        // insert the token into the form so it gets submitted to the server
        form$.append("<input type='hidden' name='stripeToken' value='" + token + "' />");
        // and submit
        // form$.get(0).submit();
        donateFormSubmit(form$);
    }
}

function donateFormSubmit($form){
  $.post($form.attr('action'), $form.serialize(), function(data){
    var responseObj = {};
    try {
      var tempObj = $.parseJSON(data);
      if (tempObj) { responseObj = tempObj }
    } catch(e){
    }
    if (responseObj && responseObj.total) {
      var newTotal = responseObj.total;
      updateCounter($("#CounterZone"), newTotal);
      if ($('.donateshelf').length){
        shelfRetract('donate');
        resetForm($form);
        $('#payment-form .payment-errors').html('');
        finalTreat();
      } else {
        $('.shelf-full').html('<img class="mobile-thanks" src="/thebellringer/images/thanks.png">');
      }
    } else {
      $form.find('.submit-button').removeAttr("disabled");
      plaqueButtonsDisabled = 0;
      var errorDescription = responseObj.errorMessage || data;
      $('#payment-form .payment-errors').html("Sorry, there was an error.<br>"+errorDescription);
    }
  });
}

//Doc ready

$(document).ready(function(){

  $('.amount-other').on('focus',function(){
    $('#amount-custom').prop('checked',true);
    $('#amount-custom').trigger('change');
  });
  $('input[name=amount]').on('change',function(){
    if ($('#amount-custom').prop('checked')) {
      $('.amount-other').attr('required','required');
    } else {
      $('.amount-other').removeAttr('required');
      $('.shelf-left label.error').remove();
      $('.shelf-left .error').removeClass('error');
    }
  });


          $.validator.addMethod("cardNumber", Stripe.validateCardNumber, "Please enter a valid card number");
          $.validator.addMethod("cardCVC", Stripe.validateCVC, "Please enter a valid security code");
          $.validator.addMethod("cardExpiry", function() {
              return Stripe.validateExpiry($(".card-expiry-month").val(), 
                                           $(".card-expiry-year").val())
          }, "Please enter a valid expiration");
          $.validator.addMethod("amountOther", function(input){
            if (parseInt(input)>=1 || input == '') {
              return true;
            } else {
              return false;
            }
          }, "The minimum donation is $1");

          // We use the jQuery validate plugin to validate required params on submit
          $("#payment-form").validate({
              submitHandler: submitForm,
              rules: {
                  "card-cvc" : {
                      cardCVC: true,
                      required: true
                  },
                  "card-number" : {
                      cardNumber: true,
                      required: true
                  },
                  "card-expiry-year" : "cardExpiry", // we don't validate month separately
                  "amount-other" : {
                      amountOther: true
                  }
              }
          });

          // adding the input field names is the last step, in case an earlier step errors                
          addInputNames();

  var creditCard = $('.card-number')
  creditCard.cardcheck({
    iconDir: '/thebellringer/images/cc-icons/',
    acceptedCards: ['visa','mastercard','amex', 'discover', 'jcb'],
    iconLocation: '#accepted-cards-images',
    onReset: function() {     
      creditCard.removeClass('error success');
    },
    onError: function( type ) {
      creditCard.removeClass('success').addClass('error');
    },
    onValidation: function( type, niceName ) {
      creditCard.removeClass('error').addClass('success');
    },
  });

}); /* end document ready */