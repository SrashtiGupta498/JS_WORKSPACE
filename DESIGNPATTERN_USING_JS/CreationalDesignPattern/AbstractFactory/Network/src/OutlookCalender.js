class OutlookCalender{
    createEvent({name , date , participants})
    {
       console.log(MicrosoftAPI.createEvent({title:name , date, invitees:participants}));

    }
}
