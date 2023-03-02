class AppleCalender{
    createEvent({name , date , participants}): void
    {
        AppleAPI.createEvent({title:name , date, invitees:participants});

    }
}
