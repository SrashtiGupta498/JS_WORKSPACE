
class Application {
    calendar: Calendar;

    constructor(calendar: Calendar) {
        this.calendar = calendar;
    }

    run(): void {
        this.calendar.createEvent({name: 'Abstract Factory Pattern', date: new Date(), participants: []});
    }
}