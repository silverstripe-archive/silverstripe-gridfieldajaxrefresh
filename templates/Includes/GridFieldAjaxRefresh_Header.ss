<% if AutoRefresh %>
<div class="refresh-auto-refresh hide">$AutoRefresh</div>
<div class="refresh-delay hide">$RefreshDelay</div>
<div class="refresh-grid-field-id hide">$GridFieldID</div>
<% else %>
<div class="auto-refresh-button">
	<button name="action_refresh" value="<%t GridFieldAjaxRefresh.REFRESH 'Refresh' %>" class="" data-icon="arrow-circle-double" id="action_refresh" role="button" aria-disabled="false">
		<%t GridFieldAjaxRefresh.REFRESH 'Refresh' %>
	</button>
</div>
<% end_if %>