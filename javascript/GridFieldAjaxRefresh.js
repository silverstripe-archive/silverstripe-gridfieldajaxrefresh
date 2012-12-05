(function($) {
	$.entwine('ss', function($) {
		$('.ss-gridfield input').entwine({
			refresh: function(e) {
				var gridField = this.getGridField();
				gridField.reload();
			},
			_updateGlobalMode: function(ajaxOpts, callback) {

			}
		});

		setTimeout(function(){});
	});
})(jQuery);