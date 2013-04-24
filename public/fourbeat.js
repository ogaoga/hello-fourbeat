function nativeFourBeatEvent(event, color) {
  $(document).trigger('fourbeat', {'event': event, 'color': color});
}
