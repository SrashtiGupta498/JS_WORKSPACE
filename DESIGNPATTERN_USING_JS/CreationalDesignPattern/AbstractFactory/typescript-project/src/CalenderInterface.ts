
 interface CreateEventArgs {
    name: string;
    date: Date;
    participants: string[];
}

 interface Calendar {
    createEvent: (options: CreateEventArgs) => void;
}

 interface ConfigurationArgs {
    os: 'ios' | 'chromeos' | 'windows';
}