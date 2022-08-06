$(document).ready(function() {
	$('#form').submit(function(){
		if (document.form.username.value == '' || document.form.review.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "add-review.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});