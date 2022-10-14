var calendarEl, calendar;
// document.addEventListener('DOMContentLoaded', function () {
calendarEl = document.getElementById('calendar');
calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  dateClick: ($event) => {
    $event.jsEvent.preventDefault()
    addCalendarEvent($event);
  }
});
calendar.render();
// });

function addCalendarEvent($event) {
  var start = new Date($event.dateStr + 'T00:00:00')
  calendar.addEvent({ title: 'renta de katy', start, allDay: true })
}