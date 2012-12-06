(function($) {
	$.entwine('ss', function($) {

		$('.ss-gridfield .auto-refresh-button button').entwine({
			/**
			 * Button to trigger a reload of the GridField. Full reload, with loading indicator
			 */
			onclick: function() {
				this.closest('.ss-gridfield').reload();
				return false;
			}
		});

		$('.ss-gridfield').entwine({
			/**
			 * A method to reload the gridfield "silently", without showing a loading overlay and
			 * without any error message if reload fails
			 * @param {Object} Additional options for jQuery.ajax() call
			 * @param {successCallback} callback to call after reloading succeeded.
			 */

			silentReload: function(ajaxOpts, successCallback) {
				var self = this, form = this.closest('form'),
					focusedElName = this.find(':input:focus').attr('name'), // Save focused element for restoring after refresh
					data = form.find(':input').serializeArray();

				if(!ajaxOpts) ajaxOpts = {};
				if(!ajaxOpts.data) ajaxOpts.data = [];
				ajaxOpts.data = ajaxOpts.data.concat(data);


				// Include any GET parameters from the current URL, as the view state might depend on it.
				// For example, a list prefiltered through external search criteria might be passed to GridField.
				if(window.location.search) {
					ajaxOpts.data = window.location.search.replace(/^\?/, '') + '&' + $.param(ajaxOpts.data);
				}

				$.ajax($.extend({}, {
					headers: {"X-Pjax" : 'CurrentField'},
					type: "POST",
					url: this.data('url'),
					dataType: 'html',
					success: function(data) {
						// Replace the grid field with response, not the form.
						// of the executing method. Means that it doesn't retrigger the onmatch() on the main container.
						self.empty().append($(data).children());

						// Refocus previously focused element. Useful e.g. for finding+adding
						// multiple relationships via keyboard.
						if(focusedElName) self.find(':input[name="' + focusedElName + '"]').focus();

						var content;
						if(ajaxOpts.data[0].filter=="show"){
							content = '<span class="non-sortable"></span>';
							self.addClass('show-filter').find('.filter-header').show();
						}else{
							content = '<button name="showFilter" class="ss-gridfield-button-filter trigger"></button>';
							self.removeClass('show-filter').find('.filter-header').hide();
						}

						self.find('.sortable-header th:last').html(content);

						if(successCallback) successCallback.apply(this, arguments);
						self.trigger('reload', self);
					},
					error: function(e) {
					}
				}, ajaxOpts));
			},
			/**
			 * Auto-reload the GridField every X-seconds. Stops reloading if the GridField gets removed from the DOM
			 */
			onadd: function() {
				this._super();

				var gridID = $('.refresh-grid-field-id').html();
				var grid = $('#'+gridID);

				//using auto-refresh, not a button
				if (grid.find('.refresh-auto-refresh').length > 0) {
					var autoRefreshDelay = grid.find('.refresh-delay').html();

					function reloadGridTimeout() {
						setTimeout(function(){
							var grid2 = $('#'+gridID);

							//if the grid gets removed from the DOM, stop the auto-refresh process
							if (grid2.length > 0) {
								grid.silentReload();
								reloadGridTimeout();
							}
						},autoRefreshDelay);
					}
					reloadGridTimeout();
				}
			}
		});

	});
})(jQuery);