export const mainQuests = JSON.parse(localStorage.getItem('mainQuest')) ||
[
    {
        questId:'01-main-create-quest-page',
        questType: 'main',
        questCategory: 'Web Learning',
        questTitle: 'Create the Quest Page',
        questDetails:'Create a quest page to take down everything you want to do. The purpose of this page is just to keep track of everything and not neceesarily meant for compeletion.',
        questProgress: 0,
        questExperience: 1000,
        questRank: 'B+',
        questImage: 'images/CvQuestIcon.jpg',
        questRequirements: 'Laptop and time',
        questObjectives:[
            {
                objectivesId:'01-main-create-quest-page-first-objective',
                objectivesTitle:'Design all the quest HTML',
                completed: true
            },
            {
                objectivesId:'01-main-create-quest-page-second-objective',
                objectivesTitle:'Style all the quest CSS',
                completed: true
            },
            {
                objectivesId:'01-main-create-quest-page-third-objective',
                objectivesTitle:'Generate all HTML and add functions',
                completed: true
            },
            {
                objectivesId:'01-main-create-quest-page-fourth-objective',
                objectivesTitle:'Save data to locale storage with quest creator',
                completed: true
            },
            {
                objectivesId:'01-main-create-quest-page-fourth-objective',
                objectivesTitle:'Create the backend and final designs',
                completed: true
            }
        ],
        questKeywords: [
            'website',
            'code',
            'creation',
            'learning',
            'alien',
            'words'
        ],
        briefingLink: 'Pending',
        isComplete: true,
        isActive: false,
        requirementsChecked: true,
    },
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
                completed: true
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
        questId:'01-main-complete-your-studies',
        questType: 'main',
        questCategory: 'Tech Learning',
        questTitle: 'Complete Your Studies',
        questDetails:'Learn how to work with technology to repair, build and improve technology you own. Create fun and use things that could serve a purpose.',
        questProgress: 0,
        questExperience: 3400,
        questRank: 'S',
        questImage: 'images/ScrollQuestIcon.jpg',
        questRequirements: 'Laptop, Books, Money, Tools, Material and time',
        questObjectives:[
            {
                objectivesId:'01-main-complete-your-studies-first-objective',
                objectivesTitle:'Gather info, and make an at home studies plan',
                completed: false
            },
            {
                objectivesId:'01-main-complete-your-studies-second-objective',
                objectivesTitle:'Go from thoery to practical and make projects',
                completed: false
            },
            {
                objectivesId:'01-main-complete-your-studies-third-objective',
                objectivesTitle:'Find the requirements to studies N6 engineering',
                completed: false
            },
            {
                objectivesId:'01-main-complete-your-studies-fourth-objective',
                objectivesTitle:'Try to complete the study while working and living alone.',
                completed: false
            },
            {
                objectivesId:'01-main-complete-your-studies-fifth-objective',
                objectivesTitle:'Finish your studies and make exciting use of the skills.',
                completed: false
            }
        ],
        questKeywords: [
            'engineereing',
            'studying',
            'practical',
            'technology',
            'creation',
            'learning' 
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,
    },
    {
        questId:'01-main-become-a-hafez',
        questType: 'main',
        questCategory: 'Religious learning',
        questTitle: 'Become a Hafez',
        questDetails:'Learn to read and memorise the Quran. Try to practice and evening teach it. Remember you can consult deen buddy.',
        questProgress: 0,
        questExperience: 10000,
        questRank: 'B',
        questImage: 'images/OpenBookIcon.jpg',
        questRequirements: 'Laptop, Books, Quran and time',
        questObjectives:[
            {
                objectivesId:'01-main-become-a-hafez-first-objective',
                objectivesTitle:'Most important gather the requirement for becoming a hafez.',
                completed: false
            },
            {
                objectivesId:'01-main-become-a-hafez-second-objective',
                objectivesTitle:'Gather the books need to practice and read with.',
                completed: false
            },
            {
                objectivesId:'01-main-become-a-hafez-third-objective',
                objectivesTitle:'Find someone you can ask about these things.',
                completed: false
            },
            {
                objectivesId:'01-main-become-a-hafez-fourth-objective',
                objectivesTitle:'Try to understand what your memorizing.',
                completed: false
            },
            {
                objectivesId:'01-main-become-a-hafez-fifth-objective',
                objectivesTitle:'Keep practicing and find some to teach.',
                completed: false
            }
        ],
        questKeywords: [
            'hafez',
            'imaan',
            'quran',
            'memorising',
            'learning' 
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,
    },
    {
        questId:'01-main-create-first-game',
        questType: 'main',
        questCategory: 'Web Learning',
        questTitle: 'Create your first Game',
        questDetails:'Create a game in godot become famliar with the tool and programming language around using Godot and preparing assets.',
        questProgress: 0,
        questExperience: 2000,
        questRank: 'A',
        questImage: 'images/GameControllerIcon.webp',
        questRequirements: 'Laptop and time',
        questObjectives:[
            {
                objectivesId:'01-main-create-first-game-first-objective',
                objectivesTitle:'Learn to use to godot and aseprite',
                completed: false
            },
            {
                objectivesId:'01-main-create-first-game-second-objective',
                objectivesTitle:'Download and create assets for the game',
                completed: false
            },
            {
                objectivesId:'01-main-create-first-game-third-objective',
                objectivesTitle:'Write stories and lore for your games and power systems.',
                completed: false
            },
            {
                objectivesId:'01-main-create-first-game-fourth-objective',
                objectivesTitle:'Develop music and sound for your game.',
                completed: false
            },
            {
                objectivesId:'01-main-create-first-game-fifth-objective',
                objectivesTitle:'Play test the game and publish the game.',
                completed: false
            }
        ],
        questKeywords: [
            'website',
            'code',
            'gaming',
            'assets',
            'animating',
            'creation',
            'learning' 
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
        questId:'01-main-practice-2d-sprite',
        questType: 'main',
        questCategory: 'Web Learning',
        questTitle: 'Practice 2D Sprite',
        questDetails:'Pratice making 2d sprites, tilesets and tilemap. Test out different pixel sprite sizes, put together reusable color palettes, try to put together shapes in order to make more compilcated sprites, and learn to animate them.',
        questProgress: 0,
        questExperience: 840,
        questRank: 'C+',
        questImage: 'images/GameDrawnIcon.jpg',
        questRequirements: 'Laptop and time',
        questObjectives:[
            {
                objectivesId:'01-main-practice-2d-sprite-first-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-practice-2d-sprite-second-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-practice-2d-sprite-third-objective',
                objectivesTitle:'.',
                completed: false
            },
            {
                objectivesId:'01-main-practice-2d-sprite-fourth-objective',
                objectivesTitle:'',
                completed: false
            },
            {
                objectivesId:'01-main-practice-2d-sprite-fifth-objective',
                objectivesTitle:'',
                completed: false
            }
        ],
        questKeywords: [ 
            'sprite',
            'design',
            'pixels',
            'gaming',
            'shapes ',
            'aseprite'  
        ],
        briefingLink: 'Pending',
        isComplete: false,
        isActive: false,
        requirementsChecked: true,
    },
];

/*
    This is the refined base template with default info 
        {
            questId:'',
            questType: 'main',
            questCategory: 'Web Learning',
            questTitle: 'Create the Quest Page',
            questDetails:'Create a quest page to take down everything you want to do. The purpose of this page is just to keep track of everything and not neceesarily meant for compeletion.',
            questProgress: 4,
            questExperience: 1000,
            questRank: 'B+',
            questImage: 'Pending',
            questRequirements: 'Laptop and time',
            questObjectives:[
                {
                    objectivesId:'',
                    objectivesTitle:'',
                    completed: false
                },
                {
                    objectivesId:'',
                    objectivesTitle:'',
                    completed: false
                },
                {
                    objectivesId:'',
                    objectivesTitle:'',
                    completed: false
                },
                {
                    objectivesId:'',
                    objectivesTitle:'',
                    completed: false
                },
                {
                    objectivesId:'',
                    objectivesTitle:'',
                    completed: false
                }
            ],
            questKeywords: [
                'website',
                'code',
                'creation',
                'learning' 
            ],
            briefingLink: 'Pending',
            isComplete: false,
            isActive: false,
            requirementsChecked: true,
        }
*/

/*
    This is the orignal data template
        {
            questId:'',
            questType: '',
            questCategory: '',
            questTitle: '',
            questDetails:'',
            questProgress: '',
            questExperience: '',
            questRank: '',
            questImage: '',
            questRequirements: '',
            questOcjectives: {
                firstOcbjective: '',
                lastOcjective: ''
            },
            questObjectives: {
                progressId:'',
                progressTitle:'',
                progressDetails:''
            },
            briefingLink: '',
            questKeywords:{},
            isComplete: false,
            isActive: false,
            requirementsChecked: true,
        }
*/