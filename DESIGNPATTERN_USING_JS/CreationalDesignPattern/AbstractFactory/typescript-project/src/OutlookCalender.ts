class OutlookCalender{
    createEvent({name,date,participants}): void
    {
        MicrosoftAPI.createEvent({title:name , date, invitees:participants});

    }
}
