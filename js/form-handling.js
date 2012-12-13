$(document).ready(function(){
	$('.getform').on('mousedown', function(){
		$('.flipper:first-child').removeClass('shy');
	});

	$('input[type=radio]').on('change', function(){
		var $this = $(this);
		$this.closest('.flipper').find('.btn.next').addClass('btn-primary').removeAttr('disabled');
		var id = $this.attr('id');
		var name = $this.attr('name');
		
		var $bubble = $('<div class="confirmed btn btn-primary shy"/>');
		var targetPosition = {};
		if (name=='amount') {
			targetPosition = {
				left: '50%'
				,top: -20
			}
			$('.confirmed').addClass('shy');
			$bubble.html($this.val()).css(targetPosition).appendTo('.flip-container');
		}

		setTimeout(function(){
			$bubble.removeClass('shy');
			$('#'+id).closest('.flipper').addClass('shy').next().removeClass('shy');
		}, 0);
	});

	$('body').on('click', '.next', function(event){
		event.preventDefault();
		$(this).closest('.flipper').addClass('shy').next().removeClass('shy');
	});
	$('.back').on('click', function(event){
		event.preventDefault();
		$(this).closest('.flipper').addClass('shy').prev().removeClass('shy');
	});
	$('.cancel').on('click', function(event){
		event.preventDefault();
		$(this).closest('.flipper').addClass('shy');
	});
});