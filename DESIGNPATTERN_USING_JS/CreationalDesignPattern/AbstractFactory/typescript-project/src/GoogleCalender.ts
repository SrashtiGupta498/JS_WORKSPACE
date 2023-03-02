

class GoogleCalendar implements Calendar {
    public createEvent({name, date, participants}: CreateEventArgs): void {
        GoogleAPI.createEvent({title: name, date, invitees: participants});
    }
}