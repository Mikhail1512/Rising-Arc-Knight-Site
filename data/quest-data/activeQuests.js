export const activeQuests = JSON.parse(localStorage.getItem('activeQuest')) || [
    {
        questId:'01-main-go-job-hunting',
        questType: 'main',
        questCategory: 'Job Hunting',
        questTitle: 'Find a suitable Job',
        questDetails:'Find a job that meets your requirements and figure out how to meets theirs. This will allow a major amount of requirements from others quests to be met.',
        questProgress: 0,
        questExperience: 2400,
        questRank: 'A-',
        questImage: 'images/CvQuestIcon.jpg',
        questRequirements: 'Laptop, Qualifications, job hunter page  and time',
        questObjectives:[
            {
                objectivesId:'01-main-go-job-hunting-first-objective',
                objectivesTitle:'Gather infomation about job requirement and responsibilities.',
                completed: false
            },
            {
                objectivesId:'01-main-go-job-hunting-second-objective',
                objectivesTitle:'Oragnize each in categories with with overlapping requirement.',
                completed: false
            },
            {
                objectivesId:'01-main-go-job-hunting-third-objective',
                objectivesTitle:'Strategize method to obtain and meet the requirements.',
                completed: false
            },
            {
                objectivesId:'01-main-go-job-hunting-fourth-objective',
                objectivesTitle:'Apply excessively to these position and practice for the interviews.',
                completed: false
            },
            {
                objectivesId:'01-main-go-job-hunting-fifth-objective',
                objectivesTitle:'Obtain the Job and get that money.',
                completed: false
            }
        ],
        questKeywords: [
            'job',
            'qualification',
            'hunt',
            'search' 
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,
    },
    {
        questId:'01-main-learn-day-trading',
        questType: 'main',
        questCategory: 'Web Learning',
        questTitle: 'Learn Day Trading',
        questDetails:'Learn more about day trading. Practice back testing, study market structure, learn about the fibonacci sequence and learn to calculate pips, lots size, market values and currency exchange.',
        questProgress: 0,
        questExperience: 3000,
        questRank: 'A+',
        questImage: 'images/DayTradingIcon.png',
        questRequirements: 'Laptop and time',
        questObjectives:[
            {
                objectivesId:'01-main-learn-day-trading-first-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-learn-day-trading-second-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-learn-day-trading-third-objective',
                objectivesTitle:'.',
                completed: false
            },
            {
                objectivesId:'01-main-learn-day-trading-fourth-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-learn-day-trading-fifth-objective',
                objectivesTitle:'',
                completed: false
            }
        ],
        questKeywords: [
            'website',
            'fibonacci',
            'sequence',
            'trade',
            'stock',
            'gold',
            'money',
            'supply', 
            'demand',
            'market',
            'structure',
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,   
    },
    {
        questId:'01-main-study-gdscript-syntax',
        questType: 'main',
        questCategory: 'Web Learning',
        questTitle: 'Study GDscript Syntax',
        questDetails:'Practice learning and using GDscript syntax and practice making game logic inside of Godot.',
        questProgress: 0,
        questExperience: 840,
        questRank: 'C+',
        questImage: 'images/CodingSiteIcon.webp',
        questRequirements: 'Laptop and time',
        questObjectives:[
            {
                objectivesId:'01-main-study-gdscript-syntax-first-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-study-gdscript-syntax-second-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-study-gdscript-syntax-third-objective',
                objectivesTitle:'.',
                completed: false
            },
            {
                objectivesId:'01-main-study-gdscript-syntax-fourth-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-study-gdscript-syntax-fifth-objective',
                objectivesTitle:'',
                completed: false
            }
        ],
        questKeywords: [
            'godot',
            'gdscript',
            'programming',
            'gaming',
            'logic',
            'engine',  
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,
    },
    {
        questId:'01-main-create-career-page',
        questType: 'main',
        questCategory: 'Web Learning',
        questTitle: 'Create career page',
        questDetails:'',
        questProgress: 0,
        questExperience: 840,
        questRank: 'C+',
        questImage: 'images/CodingSiteIcon.webp',
        questRequirements: 'Laptop and time',
        questObjectives:[
            {
                objectivesId:'01-main-create-career-page-first-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-create-career-page-second-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-create-career-page-third-objective',
                objectivesTitle:'.',
                completed: false
            },
            {
                objectivesId:'01-main-create-career-page-fourth-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-create-career-page-fifth-objective',
                objectivesTitle:'',
                completed: false
            }
        ],
        questKeywords: [
            'career',
            'job',
            'webpage',
            'qualification',
            'requirement',
            'application',
            'link',
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,
    },
    {
        questId:'03-errands-get-your-passport',
        questType: 'errand',
        questCategory: 'Fetch Quest',
        questTitle: 'Go get your passport',
        questDetails:'Go to the munciple office to create a passport so you can apply for oversea jobs',
        questProgress: 0,
        questExperience: 100,
        questRank: 'B',
        questImage: 'images/CvQuestIcon.jpg',
        questRequirements: 'Money, id photos, id and time',
        questObjectives:[
            {
                objectivesId:'03-errands-get your-passport-first-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'03-errands-get your-passport-second-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'03-errands-get your-passport-third-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'03-errands-get your-passport-fourth-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'03-errands-get your-passport-fifth-objective',
                objectivesTitle:'',
                completed: false
            }
        ],
        questKeywords: [
            'passport',
            'oversea',
            'government',
            'fetch' 
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,
    },
    {
        questId:'02-side-make-a-netherscape-map',
        questType: 'side',
        questCategory: 'Drawing and Shading', 
        questTitle: 'Make a Netherscape',
        questDetails:'Try to draw a Netherscape Map with proper shading, line work, preportions and layers. Checkout different layered images and Youtube tutorials on terrain drawing and map construction.',
        questProgress: 0,
        questExperience: 320,
        questRank: 'B+',
        questImage: 'images/MapAndLocationIcon.png',
        questRequirements: 'Laptop, time',
        questObjectives:[
            {
                objectivesId:'02-side-make-a-netherscape-map-first-objective',
                objectivesTitle:'Checkout different layered images.',
                completed: true
            },
            {
                objectivesId:'02-side-make-a-netherscape-map-second-objective',
                objectivesTitle:'Watch video on layering and perspective.',
                completed: true
            },
            {
                objectivesId:'02-side-make-a-netherscape-map-third-objective',
                objectivesTitle:'Make the background layer.',
                completed: true
            },
            {
                objectivesId:'02-side-make-a-netherscape-map-fourth-objective',
                objectivesTitle:'Make the mid-ground layer.',
                completed: true
            },
            {
                objectivesId:'02-side-make-a-netherscape-map-fifth-objective',
                objectivesTitle:'Make the foreground layer.',
                completed: true
            }
        ],
        questKeywords: [
            'gaming',
            'runes',
            'terrain',
            'landscape',
            'ground',
            'map',
            'layers', 
            'volcano'
        ],
        briefingLink: 'Pending',
        isComplete: true,
        isActive: false,
        requirementsChecked: true,
    },
    {
        questId:'02-side-make-a-godot-shump',
        questType: 'side',
        questCategory: 'Drawing and Shading', 
        questTitle: 'Make a Godot Shump',
        questDetails:'Try to remake the godot pico 8 shump in godot try using assests and sounds to speed process',
        questProgress: 0,
        questExperience: 320,
        questRank: 'B+',
        questImage: 'images/GameControllerIcon.webp',
        questRequirements: 'Laptop, time',
        questObjectives:[
            {
                objectivesId:'02-side-make-a-godot-shump-first-objective',
                objectivesTitle:'',
                completed: true
            },
            {
                objectivesId:'02-side-make-a-godot-shump-second-objective',
                objectivesTitle:'',
                completed: true
            },
            {
                objectivesId:'02-side-make-a-godot-shump-third-objective',
                objectivesTitle:'',
                completed: true
            },
            {
                objectivesId:'02-side-make-a-godot-shump-fourth-objective',
                objectivesTitle:'',
                completed: true
            },
            {
                objectivesId:'02-side-make-a-godot-shump-fifth-objective',
                objectivesTitle:'',
                completed: true
            }
        ],
        questKeywords: [
            'gaming',
            'ground',
            'map',
            'layers', 
            'shapeship',
            'shoot',
            'alien',
            'planets'
        ],
        briefingLink: 'Pending',
        isComplete: true,
        isActive: false,
        requirementsChecked: true,
    },
    {
        questId:'03-errands-debug-the-calendar-page',
        questType: 'errand',
        questCategory: 'Debug and error handling',
        questTitle: 'Debug calendar page',
        questDetails:'Organise your room so it neat and easy to find things, also so if someone opens your cupboard you can chill.',
        questProgress: 0,
        questExperience: 640,
        questRank: 'B-',
        questImage: 'images/RepairToolsIcon.png',
        questRequirements:  'Computer and Time',
        questObjectives:[
            {
                objectivesId:'03-errands-debug-the-calendar-page-first-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'03-errands-debug-the-calendar-page-second-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'03-errands-debug-the-calendar-page-third-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'03-errands-debug-the-calendar-page-fourth-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'03-errands-debug-the-calendar-page-fifth-objective',
                objectivesTitle:'',
                completed: false
            }
        ],
        questKeywords: [
            'calendar',
            'website',
            'webpage',
            'tasks',
            'daily',
            'quest',
            'list',
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,
    },
];