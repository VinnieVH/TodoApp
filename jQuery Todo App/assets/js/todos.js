// check off specific todos by clicking

$('ul').on('click', 'li', function() {
	$(this).toggleClass('done');
// 	// if li is linetrough
// 	if ($(this).hasClass('done')) {
// 		// turn it black and remove linethrough
// 		$(this).removeClass('done');
// 		// else
// 	} else {
// 		// turn it linetrough and gray
// 		$(this).addClass('done');
// 	}
});

// click on the trashcan to delete the todo
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// lets you press enter after you want a todo to be added
$('input[type="text"]').keypress(function(event){
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// creates a new li and add it to the ul
		$('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>');
	}
});

$('.fa-plus').click(function() {
	$('input[type="text"]').fadeToggle();
});