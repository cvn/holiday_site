var calculateTotal = function(){
	var oldAmount = $('#CounterZone input[name="counter-value"]').val()
	  , newAmount = $('#payment-form input[name="amount"]:checked').val();
	if (newAmount=='other') {
		newAmount = $('#payment-form .amount-other').first().val();
	}
	var newTotal = parseInt(newAmount) + parseInt(oldAmount);
	return newTotal;
}

var submitForm = function(form){
	var $form = $(form);
	$('.submit-button').attr("disabled", "disabled");

	updateCounter($("#CounterZone"), calculateTotal());

	if ($('.donateshelf').length){
	  shelfRetract('donate');
	  resetForm($form);
	  $('#payment-form .payment-errors').html('');
	  finalTreat();
	} else {
	  $('.shelf-full').html('<img class="mobile-thanks" src="/thebellringer/images/thanks.png">');
	}

	return false;
}

function resetForm($form){
    $form.find('.submit-button').removeAttr("disabled");
    $form[0].reset();
}

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

	$.validator.addMethod("amountOther", function(input){
	  if (parseInt(input)>=1 || input == '') {
	    return true;
	  } else {
	    return false;
	  }
	}, "The minimum donation is $1");

	$("#payment-form").validate({
	    submitHandler: submitForm,
	    rules: {
	        "amount-other" : {
	            amountOther: true
	        }
	    }
	});

});