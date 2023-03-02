

class Configuration {
    calendar: Calendar;

    constructor(config: ConfigurationArgs) {
        switch (config.os) {
            case 'ios':
                this.calendar = new AppleCalender();
                break;
            case 'chromeos':
                this.calendar = new GoogleCalendar();
                break;
            case 'windows':
                this.calendar = new OutlookCalender();
                break
            default:
                throw new Error('OS is not supported');
        }
    }

    setup(): void {
        new Application(this.calendar).run();
    }
}