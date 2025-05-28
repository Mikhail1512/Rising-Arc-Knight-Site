/*
    To-Do List 
        -turn taskText into an object to contain the title, description and experience points 
        -Add quatersOfTheHour to Each hour and make it so that updating the hour updates each
            quater, but updating the quater only update the quater "itself only". 
*/ 

export const hoursOfTheDays = [
    {
        id: "first-hour-00-00-00-morning",
        startTime: "00:00",
        endTime: "00:59",
        timedTask: {
            id: '01-taskSleep',
            titleText: 'Sleeping',
            descriptiveText: 'You should sleeping well inorder to recover and wake up in time',
            experiencePoints: 10,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    }, 
    {
        id: "second-hour-01-00-00-morning",
        startTime: "01:00",
        endTime: "01:59",
        timedTask: {
            id: '01-taskSleep',
            titleText: 'Sleeping',
            descriptiveText: 'You should sleeping well inorder to recover and wake up in time',
            experiencePoints: 10,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "third-hour-02-00-00-morning",
        startTime: "02:00",
        endTime: "02:59",
        timedTask: {
            id: '01-taskSleep',
            titleText: 'Sleeping',
            descriptiveText: 'You should sleeping well inorder to recover and wake up in time',
            experiencePoints: 10,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "fourth-hour-03-00-00-morning",
        startTime: "03:00",
        endTime: "03:59",
        timedTask: {
            id: '01-taskSleep',
            titleText: 'Sleeping',
            descriptiveText: 'You should sleeping well inorder to recover and wake up in time',
            experiencePoints: 10,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "fifth-hour-04-00-00-morning",
        startTime: "04:00",
        endTime: "04:59",
        timedTask: {
            id: '02-freshenUp',
            titleText: 'Morning Freshen up',
            descriptiveText: 'Sit up focus on waking up, then brush teeth, wash face and ears then use ice bucket on your face. You can start gym afterwards.',
            experiencePoints: 35,
        },

        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "sixth-hour-05-00-00-morning",
        startTime: "05:00",
        endTime: "05:59",
        timedTask: {
            id: '03-taskGym',
            titleText: 'Gym',
            descriptiveText: 'Warm up a bit, check your workout schedule for the order of exercises you should perform. You can shower now as well',
            experiencePoints: 150,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "seventh-hour-06-00-00-morning",
        startTime: "06:00",
        endTime: "06:59",
        timedTask: {
            id: '04-taskShower',
            titleText: 'Shower then go ride bike',
            descriptiveText: 'Finish gyming so you can hope in the shower. If there is enough time ride bike.',
            experiencePoints: 45,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "eighth-hour-07-00-00-morning",
        startTime: "07:00",
        endTime: "07:59",
        timedTask: {
            id: '',
            titleText: '',
            descriptiveText: '',
            experiencePoints: 0,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "ninth-hour-08-00-00-morning",
        startTime: "08:00",
        endTime: "08:59",
        timedTask: {
            id: '',
            titleText: '',
            descriptiveText: '',
            experiencePoints: 0,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "tenth-hour-09-00-00-morning",
        startTime: "09:00",
        endTime: "09:59",
        timedTask: {
            id: '',
            titleText: '',
            descriptiveText: '',
            experiencePoints: 0,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "eleventh-hour-10-00-00-morning",
        startTime: "10:00",
        endTime: "10:59",
        timedTask: {
            id: '05-taskStretch',
            titleText: 'Strecthing rountine',
            descriptiveText: 'Check you workout plan for your rountine',
            experiencePoints: 60,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "twelveth-hour-11-00-00-morning",
        startTime: "11:00",
        endTime: "11:59",
        timedTask: {
            id: '',
            titleText: '',
            descriptiveText: '',
            experiencePoints: 0,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "thirteenth-hour-12-00-00-afternoon",
        startTime: "12:00",
        endTime: "12:59",
        timedTask: {
            id: '',
            titleText: '',
            descriptiveText: '',
            experiencePoints: 0,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "fourteenth-hour-13-00-00-afternoon",
        startTime: "13:00",
        endTime: "13:59",
        timedTask: {
            id: '',
            titleText: '',
            descriptiveText: '',
            experiencePoints: 0,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "fifteenth-hour-14-00-00-afternoon",
        startTime: "14:00",
        endTime: "14:59",
        timedTask: {
            id: '',
            titleText: '',
            descriptiveText: '',
            experiencePoints: 0,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "sixteenth-hour-15-00-00-afternoon",
        startTime: "15:00",
        endTime: "15:59",
        timedTask: {
            id: '',
            titleText: '',
            descriptiveText: '',
            experiencePoints: 0,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "seventeenth-hour-16-00-00-afternoon",
        startTime: "16:00",
        endTime: "16:59",
        timedTask: {
            id: '06-taskSideQuest',
            titleText: 'Side Quest Studies',
            descriptiveText: 'Check your list of side quest list for skills to train',
            experiencePoints: 100,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "eighteenth-hour-17-00-00-afternoon",
        startTime: "17:00",
        endTime: "17:59",
        taskText: 'Shower',
        timedTask: {
            id: '06-taskSideQuest',
            titleText: 'Side Quest Studies',
            descriptiveText: 'Check your list of side quest list for skills to train',
            experiencePoints: 100,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "ninteenth-hour-18-00-00-night",
        startTime: "18:00",
        endTime: "18:59",
        timedTask: {
            id: '07-taskCardio',
            titleText: 'Hit some cardio',
            descriptiveText: 'Pick an exercise to do between running, cycling or walking if it is the first week',
            experiencePoints: 200,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "twentyth-hour-19-00-00-night",
        startTime: "19:00",
        endTime: "19:59",
        timedTask: {
            id: '04-taskShower',
            titleText: 'Shower and freshen up again',
            descriptiveText: 'Kick it to the shower after doing some cardio then freshen up with the night routine',
            experiencePoints: 45,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "twentyfirst-hour-20-00-00-night",
        startTime: "20:00",
        endTime: "20:59",
        timedTask: {
            id: '08-taskChill',
            titleText: 'Chill out',
            descriptiveText: 'Chill in bed and try to fall asleep, maybe even soak your feet',
            experiencePoints: 5,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "twentysecond-hour-21-00-00-night",
        startTime: "21:00",
        endTime: "21:59",
        timedTask: {
            id: '01-taskSleep',
            titleText: 'Go sleep',
            descriptiveText: 'Try to fall asleep on time and set an alarm dude, maybe even drink a bunch of ',
            experiencePoints: 10,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "twentythird-hour-22-00-00-night",
        startTime: "22:00",
        endTime: "22:59",
        timedTask: {
            id: '01-taskSleep',
            titleText: 'Sleeping',
            descriptiveText: 'You should sleeping well inorder to recover and wake up in time',
            experiencePoints: 10,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    },
    {
        id: "twentyfourth-hour-23-00-00-night",
        startTime: "23:00",
        endTime: "23:59",
        timedTask: {
            id: '01-taskSleep',
            titleText: 'Sleeping',
            descriptiveText: 'You should sleeping well inorder to recover and wake up in time',
            experiencePoints: 10,
        },
        activeTime: false,
        isCompleted: false,
        activityLink: ''
    }
];