
class Application {
    calendar;

    constructor(calendar) {
        this.calendar = calendar;
    }

    run() {
        this.calendar.createEvent({name: 'Abstract Factory Pattern', date: new Date(), participants: []});
    }
}