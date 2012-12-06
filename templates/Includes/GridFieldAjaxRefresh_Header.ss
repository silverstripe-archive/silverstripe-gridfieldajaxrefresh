<% if AutoRefresh %>
<div class="refresh-auto-refresh hide">$AutoRefresh</div>
<div class="refresh-delay hide">$RefreshDelay</div>
<div class="refresh-grid-field-id hide">$GridFieldID</div>
<% else %>
<div class="auto-refresh-button">
	<button name="action_refresh" value="Refresh" class="" id="action_refresh" role="button" aria-disabled="false">
		<span class="ui-button-icon-primary ui-icon btn-icon-arrow-circle-double"></span>
		<span class="ui-button-text">Refresh</span>
	</button>
</div>
<% end_if %>