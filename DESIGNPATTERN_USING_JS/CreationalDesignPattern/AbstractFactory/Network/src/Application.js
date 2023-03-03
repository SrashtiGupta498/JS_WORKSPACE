
class Application {
    calendar;

    constructor(calendar) {
        this.calendar = calendar;
    }
    Configuration= new this.Configuration();

    run() {
        this.calendar.createEvent({name: 'Abstract Factory Pattern', date: new Date(), participants: []});
    }
}