class Configuration{
    calender;
    constructor(config)
    {
        switch(config.os)
        {
            case 'ios':
                this.calender = new AppleCalender();
                break;

            case 'chromes':
                this.calender = new GoogleCalender();
                break;

            case 'windows':
                this.calender = new OutlookCalender();
                break;
            default:
                throw new Error('OS is not supported');
        }
    }
    setup()
    {
        new Application(this.calender).run();
    }
 }
