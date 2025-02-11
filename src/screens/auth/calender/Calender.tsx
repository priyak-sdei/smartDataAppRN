import React from 'react';
import {Button, Text, View} from 'react-native';
import {LoginScreenProps} from 'src/navigators/AppParamList';
import {Calendar} from 'react-native-big-calendar';
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const events = [
    {
        title: 'Tes',
        start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
        end: new Date(year, month, day, 10, 30), // Today at 10:30 AM
    },
    {
        title: 'Tes',
        start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
        end: new Date(year, month, day, 10, 30), // Today at 10:30 AM
    },
    // {
    //     title: 'Tes',
    //     start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
    //     end: new Date(year, month, day, 11, 45), // Today at 10:30 AM
    // },
    // {
    //     title: 'Tes',
    //     start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
    //     end: new Date(year, month, day, 11, 45), // Today at 10:30 AM
    // },
    // {
    //     title: 'New',
    //     start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
    //     end: new Date(year, month, day, 10, 30), // Today at 10:30 AM
    // },
    // {
    //     title: 'Tes',
    //     start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
    //     end: new Date(year, month, day, 11, 45), // Today at 10:30 AM
    // },
    // {
    //     title: 'Tes',
    //     start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
    //     end: new Date(year, month, day, 11, 45), // Today at 10:30 AM
    // },
    // {
    //     title: 'Tes',
    //     start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
    //     end: new Date(year, month, day, 11, 45), // Today at 10:30 AM
    // },
    // {
    //     title: 'Tes',
    //     start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
    //     end: new Date(year, month, day, 11, 45), // Today at 10:30 AM
    // },
    // {
    //     title: 'Tes',
    //     start: new Date(year, month, day, 10, 0), // Today at 10:00 AM
    //     end: new Date(year, month, day, 10, 10), // Today at 10:30 AM
    // },
];

const Calender: React.FC<LoginScreenProps> = ({navigation}) => {
    return (
        <Calendar
            events={events}
            height={600}
            mode={'week'}
            eventCellStyle={{
                // backgroundColor: 'red',
                borderLeftWidth: 1,
                borderColor: 'white',
                width: 30,
            }}
        />
    );
};

export default Calender;
