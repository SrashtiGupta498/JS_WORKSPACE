class GoogleCalender{
    createEvent({name , date , participants})
    {
       console.log(GoogleAPI.createEvent({title:name , date, invitees:participants}));

    }
}
