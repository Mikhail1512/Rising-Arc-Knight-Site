/* 
 To-do list 
    - make a all quests feature and search bar as well as a filter for the all quests system

 Ideas 
    : Rewards upon complete quests
*/

import { generateHeader } from "./header.js";
import { activeQuests } from "../data/quest-data/activeQuests.js";
import { mainQuests } from "../data/quest-data/mainQuests.js";
import { sideQuests } from "../data/quest-data/sideQuests.js";
import { errandsList } from "../data/quest-data/errands.js";
import { collectablesList } from "../data/quest-data/collectables.js";
import { questBinList } from "../data/quest-data/questBin.js";
import { questImageIcons } from "../data/quest-data/questImageArray.js";

const url = new URL(window.location.href);
const creationUrlParams = url.searchParams.get('creatingNewQuest');
const deleteUrlParams = url.searchParams.get('loadingDeleteQuests');
const updateUrlParams = url.searchParams.get('loadingUpdateQuests');
const questIdUrlParams = url.searchParams.get("selectedQuestId");
const questArrayURLParams = url.searchParams.get("questArrayType");

let questArray = mainQuests;
let toggleQuestView = false;

document.querySelector('.js-index-header').innerHTML = generateHeader();

function generateQuestLog(objectItem){
    const questPageBody = document.querySelector('.js-quests-body-main');

    let questHTML = '';


    if(toggleQuestView){  

        questHTML = `
            <div class="quest-display-container">
                <div class="quest-menu-header">
                    <div class="quest-menu-title js-quest-menu-title">⬅️</div>
                    <div class="quest-type-title-container">
                        <div class="quest-type-title">Main Quests</div>
                        <div class="add-quest-button js-add-quest-button">Create</div>
                    </div>
                </div>
                <div class="quest-type-menu-body">      
                    <div class="active-quests-selection js-active-quests-selection">
                        <div class="quest-menu-icon">⌛</div>
                        <div></div>
                    </div>
                    <div class="main-quests-selection js-main-quests-selection">
                        <div class="quest-menu-icon">💼</div>
                        <div></div>
                    </div>
                    <div class="side-quests-selection js-side-quests-selection">
                        <div class="quest-menu-icon">🔷</div>
                        <div></div>
                    </div>
                    <div class="errands-selection js-errands-selection">
                        <div class="quest-menu-icon">🛍️</div>
                        <div></div>
                    </div>
                    <div class="collectables-selection js-collectables-selection">
                        <div class="quest-menu-icon">⭐</div>
                        <div></div>
                    </div>
                </div>
                <div class="quest-actions-display">
                    <div class="quests-objects-display">
                       ${generateCards()}
                    </div>
                </div>
                <div class="quest-desription-section js-quest-description-section">
                    
                </div>
            </div>
        `;

        questPageBody.innerHTML = questHTML;
        
        generateDetailSection();
        toggleObjectiveInfo();

        const questDisplayContainer = document.querySelector('.quest-display-container');
        const questTypeTitleContainer = document.querySelector('.quest-type-title-container');
        const questMenuTitle = document.querySelector('.quest-menu-title');
        const questTypeMenuBody = document.querySelector('.quest-type-menu-body');

        const questActionsDisplay = document.querySelector('.quest-actions-display');
        const questsObjectsDisplay = document.querySelector('.quests-objects-display');
        
        const activeQuestsSelection = document.querySelector('.active-quests-selection');
        const mainQuestsSelection = document.querySelector('.main-quests-selection');
        const sideQuestsSelection = document.querySelector('.side-quests-selection');
        const errandsSelection = document.querySelector('.errands-selection');
        const collectablesSelection = document.querySelector('.collectables-selection');

        questDisplayContainer.style.gridTemplateColumns = '60px 330px 376px';
        questTypeTitleContainer.style.width = '704px';
        questMenuTitle.style.width = '59px';
        questTypeMenuBody.style.width = '60px';
        questActionsDisplay.style.width = '330px';
        questsObjectsDisplay.style.width = '329px';
        questsObjectsDisplay.style.border =  'none';
        
        activeQuestsSelection.style.gap =  '0';
        mainQuestsSelection.style.gap =  '0';
        sideQuestsSelection.style.gap =  '0';
        errandsSelection.style.gap =  '0';
        collectablesSelection.style.gap =  '0';

        activeQuestsSelection.style.width =  '42px';
        mainQuestsSelection.style.width =  '42px';
        sideQuestsSelection.style.width =  '42px';
        errandsSelection.style.width =  '42px';
        collectablesSelection.style.width =  '42px';

        activeQuestsSelection.style.justifyContent =  'center';
        mainQuestsSelection.style.justifyContent =  'center';
        sideQuestsSelection.style.justifyContent =  'center';
        errandsSelection.style.justifyContent =  'center';
        collectablesSelection.style.justifyContent =  'center';

        document.querySelectorAll('.quest-cards').forEach( (element) => {
            element.style.width = '300px';
            element.style.height = '70px';
            element.style.padding = '0';
            element.style.justifyContent = 'space-around';
        });
        document.querySelectorAll('.quest-card-body').forEach( (element) => {
            element.style.width = '220px';
            element.style.height = '50px';
        });
        document.querySelectorAll('.quest-icon').forEach( (element) => {
            element.style.width = '50px';
            element.style.height = '50px';
        });
        document.querySelectorAll('.quest-name').forEach( (element) => {
            element.style.fontSize = '1.3rem';
            element.style.width = '220px';
        });
        document.querySelectorAll('.quest-exp div').forEach( (element) => {
            element.style.fontSize = '1.1rem';
        });

    }else{
        questHTML = `
            <div class="quest-display-container">
                <div class="quest-menu-header">
                    <div class="quest-menu-title js-quest-menu-title">Quest Menu</div>
                    <div class="quest-type-title-container">
                        <div class="quest-type-title js-quest-type-title">Main Quests</div>
                        <div class="add-quest-button js-add-quest-button">Create</div>
                    </div>

                </div>
                <div class="quest-type-menu-body">      
                    <div class="active-quests-selection js-active-quests-selection">
                        <div class="quest-menu-icon active-quest-icon">⌛</div>
                        <div>Active Quests</div>
                    </div>
                    <div class="main-quests-selection js-main-quests-selection">
                        <div class="quest-menu-icon">💼</div>
                        <div>Main Quests</div>
                    </div>
                    <div class="side-quests-selection js-side-quests-selection">
                        <div class="quest-menu-icon">🔷</div>
                        <div>Side Quests</div>
                    </div>
                    <div class="errands-selection js-errands-selection">
                        <div class="quest-menu-icon">🛍️</div>
                        <div>Errands</div>
                    </div>
                    <div class="collectables-selection js-collectables-selection">
                        <div class="quest-menu-icon">⭐</div>
                        <div>Collectables</div>
                    </div>
                </div>
                <div class="quest-actions-display">
                    <div class="quests-objects-display">
                        ${generateCards()}
                    </div>
                </div>
            </div>        
        `;

        /*
            questHTML = `
                <div class="quest-display-container">
                    <div class="quest-menu-header">
                        <div class="quest-menu-title js-quest-menu-title">Quest Menu</div>
                        <div class="quest-type-title-container">
                            <div class="quest-type-title">Active Quests</div>
                            <div class="add-quest-button js-add-quest-button">Create</div>
                        </div>
                    </div>
                    <div class="quest-type-menu-body">      
                        <div class="active-quests-selection js-active-quests-selection">
                            <div class="quest-menu-icon"><i class="fa-regular fa-hourglass-half"></i></div>
                            <div>Active Quests</div>
                        </div>
                        <div class="main-quests-selection js-main-quests-selection">
                            <div class="quest-menu-icon"><i class="fa-solid fa-briefcase"></i></div>
                            <div>Main Quests</div>
                        </div>
                        <div class="side-quests-selection js-side-quests-selection">
                            <div class="quest-menu-icon"><i class="fa-solid fa-diamond"></i></div>
                            <div>Side Quests</div>
                        </div>
                        <div class="errands-selection js-errands-selection">
                            <div class="quest-menu-icon"><i class="fa-solid fa-bag-shopping"></i></div>
                            <div>Errands</div>
                        </div>
                        <div class="collectables-selection js-collectables-selection">
                            <div class="quest-menu-icon"><i class="fa-solid fa-star"></i></div>
                            <div>Collectables</div>
                        </div>
                    </div>
                    <div class="quest-actions-display">
                        <div class="quests-objects-display">
                            ${generateCards()}
                        </div>
                    </div>
                </div>        
            `;
        */ 

        questPageBody.innerHTML = questHTML;

        const questDisplayContainer = document.querySelector('.quest-display-container');
        const questTypeTitleContainer = document.querySelector('.quest-type-title-container');
        const questMenuTitle = document.querySelector('.quest-menu-title');
        const questTypeMenuBody = document.querySelector('.quest-type-menu-body');

        const questActionsDisplay = document.querySelector('.quest-actions-display');
        const questsObjectsDisplay = document.querySelector('.quests-objects-display');
        
        const activeQuestsSelection = document.querySelector('.active-quests-selection');
        const mainQuestsSelection = document.querySelector('.main-quests-selection');
        const sideQuestsSelection = document.querySelector('.side-quests-selection');
        const errandsSelection = document.querySelector('.errands-selection');
        const collectablesSelection = document.querySelector('.collectables-selection');

        questDisplayContainer.style.gridTemplateColumns = '280px 486px';
        questTypeTitleContainer.style.width = '484px';
        questMenuTitle.style.width = '279px';
        questTypeMenuBody.style.width = '280px';
        questActionsDisplay.style.width = '486px';
        questsObjectsDisplay.style.width = '486px';
        questsObjectsDisplay.style.borderRight =  '1px solid black';
        
        activeQuestsSelection.style.gap =  '20px';
        mainQuestsSelection.style.gap =  '20px';
        sideQuestsSelection.style.gap =  '20px';
        errandsSelection.style.gap =  '20px';
        collectablesSelection.style.gap =  '20px';

        activeQuestsSelection.style.width =  '220px';
        mainQuestsSelection.style.width =  '220px';
        sideQuestsSelection.style.width =  '220px';
        errandsSelection.style.width =  '220px';
        collectablesSelection.style.width =  '220px';

        activeQuestsSelection.style.justifyContent =  'start';
        mainQuestsSelection.style.justifyContent =  'start';
        sideQuestsSelection.style.justifyContent =  'start';
        errandsSelection.style.justifyContent =  'start';
        collectablesSelection.style.justifyContent =  'start';

        document.querySelectorAll('.quest-cards').forEach( (element) => {
            element.style.width = '420px';
            element.style.height = '90px';
            element.style.padding = '0 14px';
            element.style.justifyContent = 'start';
        });
        document.querySelectorAll('.quest-card-body').forEach( (element) => {
            element.style.width = '290px';
            element.style.height = '70px';
        });
        document.querySelectorAll('.quest-icon').forEach( (element) => {
            element.style.width = '60px';
            element.style.height = '60px';
        });
        document.querySelectorAll('.quest-name').forEach( (element) => {
            element.style.fontSize = '1.7rem';
            element.style.width = '100%';
        });
        document.querySelectorAll('.quest-exp div').forEach( (element) => {
            element.style.fontSize = '1.5rem';
        });
    };
    
    function generateCards(){
        let cardsHTML = '';

        questArray.forEach((thisObject) => {
            
            if(toggleQuestView){
                cardsHTML +=`
                    <div class="quest-cards js-quest-cards-${thisObject.questId}">
                        <div class="quest-icon"><img src="${thisObject.questImage}" alt="" style="
                            width: 100%;
                            height: 100%;
                        "></div>
                        <div class="quest-card-body">
                            <div class="quest-name">${thisObject.questTitle}</div>
                            <div class="quest-exp">
                                <div>${thisObject.questRank} Rank</div>
                                <div>${thisObject.questExperience} exp</div>
                            </div>
                        </div>
                    </div>
                `;

            }else{
                cardsHTML +=`
                <div class="quest-cards js-quest-cards-${thisObject.questId}">
                    <div class="quest-icon"><img src="${thisObject.questImage}" alt="" style="
                        width: 100%;
                        height: 100%;
                    "></div>
                    <div class="quest-card-body">
                        <div class="quest-name">${thisObject.questTitle}</div>
                        <div class="quest-exp">
                            <div>${thisObject.questRank} Rank</div>
                            <div>${thisObject.questExperience} exp</div>
                        </div>
                    </div>
                </div>
            `;
            }

        });

        return cardsHTML;
    };
    
    function generateDetailSection(){
        const objectiveList = objectItem.questObjectives;
        let detailHTML = '';
        let listHTML = '';
        
        
        objectiveList.forEach((listItem) => {
            if(listItem.completed){
                listHTML+= `
                    <li style="text-decoration: line-through;">${listItem.objectivesTitle}</li>
                `;
            }else{
                listHTML+= `
                    <li>${listItem.objectivesTitle}</li>
                `;  
            };
        });

        detailHTML = `
            <div class="quest-desription-display">
                <div class="quest-description-header js-quest-description-header">
                    <div class="description-title">${objectItem.questTitle}</div>
                    <div class="quest-options-button-container">
                        <div class="quest-options-button js-quest-options-button">📋</div>
                    </div>
                </div>
                <div class="quest-description-body">
                    ${objectItem.questDetails}
                </div>
            </div>
            <div class="quest-objective">
                <div class="quest-objective-header">
                    <div>Objective log</div>
                    <div class="percent-progress"></div>
                </div>
                <div class="quest-objective-body">
                    <ul>
                        ${listHTML}
                    </ul>
                </div>
            </div>
            <div class="confirm-objectives-section">
                <div class="confirm-button-container">
                    <button class="js-revert-objective-button">Revert</button>
                    <button class="js-confirm-objective-button">Confirm</button>
                </div>
            </div>
        `;
        
        /*
            detailHTML = `
                <div class="quest-desription-display">
                    <div class="quest-description-header">
                        <div class="description-title">${objectItem.questTitle}</div>
                        <div class="quest-options-button js-quest-options-button">
                            <i class="${questMenuIcon}"></i>
                        </div>
                    </div>
                    <div class="quest-description-body">
                        ${objectItem.questDetails}
                    </div>
                </div>
                <div class="quest-objective">
                    <div class="quest-objective-header">
                        <div>Objective log</div>
                        <div class="percent-progress"></div>
                    </div>
                    <div class="quest-objective-body">
                        <ul>
                            ${listHTML}
                        </ul>
                    </div>
                </div>
                <div class="confirm-objectives-section">
                    <div class="confirm-button-container">
                        <button class="js-revert-objective-button">Revert</button>
                        <button class="js-confirm-objective-button">Confirm</button>
                    </div>
                </div>
            `;
        */

        document.querySelector('.js-quest-description-section').innerHTML= detailHTML;
        document.querySelector('.js-quest-options-button').addEventListener('click', () => {
                document.querySelector('.js-quest-description-header').innerHTML += `
                    <div class="quest-control-menu">
                        <div class="quest-selection-menu-title">Menu</div>
                        <div class="exit-quest-menu-button js-exit-quest-menu-button">❌</div>
                        <div class="delete-section-link js-delete-section-link">Delete Quests</div>
                        <div class="update-section-link js-update-section-link">Update Quests</div>
                        <button class="activate-quest-button">Activate</button>
                    </div>
                `;
                document.querySelector('.js-exit-quest-menu-button').addEventListener('click', () => {
                    generateDetailSection();
                });
                document.querySelector('.js-delete-section-link').addEventListener('click', () => {
                    window.location.href = `quest.html?loadingDeleteQuests=true&selectedQuestId=${objectItem.questId}&questArrayType=${objectItem.questType}`;
                    controlQuestPage();
                });
                document.querySelector('.js-update-section-link').addEventListener('click', () => {
                    window.location.href = `quest.html?loadingUpdateQuests=true&selectedQuestId=${objectItem.questId}&questArrayType=${objectItem.questType}`;
                    controlQuestPage();
                });
        });
        toggleActiveObjective(objectiveList);
    };

    function toggleObjectiveInfo(){
        const objectiveList = objectItem.questObjectives;
        const objectivesLength  = objectiveList.length;

        let toggleInfoState = true;
        let toggleInfoCount = 1;
        let completeOjectives = 0;

        objectiveList.forEach((objectiveItem) => {
            if(objectiveItem.completed){
                completeOjectives+=1;
            }
        });
        
        let infoText = `${(completeOjectives/objectivesLength)*100} %`;
       
        const intervalId = setInterval(() => {
            if(toggleInfoState){
                infoText = `${completeOjectives} / ${objectivesLength}`;
                toggleInfoState = false;
            }else{
                
                objectItem.questProgress =(completeOjectives/objectivesLength)*100;
                infoText = `${objectItem.questProgress} %`;
                toggleInfoState = true;
            };
            
            document.querySelector('.percent-progress').innerHTML = infoText;
            toggleInfoCount-=1;
            if(toggleInfoCount < 0){
            clearInterval(intervalId);
            }
        }, 10000);

        document.querySelector('.percent-progress').innerHTML =  infoText;

        if(toggleInfoCount < 0){
            clearInterval(intervalId);
        }

    };

    function toggleActiveObjective(objectiveList){
        let objectiveIndex = 0;

        objectiveList.forEach((objectiveItem) => {
            if(objectiveItem.completed){
                objectiveIndex+=1;
            }
        })
        if(objectiveList.length > objectiveIndex){
            document.querySelector('.js-confirm-objective-button').addEventListener('click', () => {
                objectiveList[objectiveIndex].completed = true;
                generateDetailSection();
                toggleObjectiveInfo();
            });
        };

        if(objectiveIndex > 0){
            document.querySelector('.js-revert-objective-button').addEventListener('click', () => {
                objectiveList[objectiveIndex -1].completed = false;
                generateDetailSection();
                toggleObjectiveInfo();
            });
        };
    };

};

function generateQuestCreator(){
    const questPageBody = document.querySelector('.js-quests-body-main');
    let questTypeSelected = mainQuests;
    let selectedQuestType = 'mainQuest';
    
    let createHTML = '';

    createHTML = `
        <div class="quest-creator">
            <div class="creator-header">
                <div class="quest-creator-title">Create Quests</div>
                <div class="create-button-container">
                    <select id="questTypeSelector" class="quest-type-selector js-quest-type-selector">
                        <option value="main">Main Quest</option>
                        <option value="side">Side Quest</option>
                        <option value="errand">Errands</option>
                        <option value="collectable">Collectables</option>
                    </select>
                    <button class="cancel-creation-button">Cancel</button>
                    <button class="create-quest-button js-create-quest-button">Create</button>
                </div>
            </div>
            <div class="creator-body">
                <div class="quest-creator-section-A">
                    <div class="quest-text-container js-quests-id-container">
                        <label for="questIdInput">Quest Id:</label>
                        <input type="text" id="questIdInput" class="js-quest-id-input" placeholder="create-new-quest">
                    </div>
                    <div class="quest-text-container">
                        <label for="questTextInput">Quest Title:</label>
                        <input type="text" id="questTextInput" class="quest-title-input js-quest-title-input" placeholder="Enter Quest Name">
                    </div>
                    <div class="quest-text-container">
                        <label for="questCategoryInput">Quest Category:</label>
                        <input type="text" id="questCategoryInput" class="quest-category-input js-quest-category-input" placeholder="Enter Quest Category">
                    </div>
                </div>
                <div class="quest-creator-section-B">
                    <div class="quest-details-container">
                        <label for="questDetailInput">Quest Details:</label>
                        <textarea id="questDetailInput" class="quest-details-input js-quest-details-input" placeholder="Enter a short quest description. Explain the plan alittle bit."></textarea>
                    </div>
                    <div class="quest-checkbox-container">
                        <div class="quest-requirements-container">
                            <label for="questRequirementCheck">Requirements checked:</label>
                            <input type="checkbox" id="questRequirementCheck" class="quest-checkbox-input js-quest-requirements-checkbox" checked>
                        </div>  
                        <div class="quest-active-container">
                            <label for="questActiveCheck">Activate Quest:</label>
                            <input type="checkbox" id="questActiveCheck" class="quest-checkbox-input js-quest-activate-input">
                        </div>  
                    </div>
                </div>
                <div class="quest-creator-section-C">
                    <div class="quest-experience-container">
                        <label for="questExperienceInput">Experience:</label>
                        <input type="number" id="questExperienceInput" class="quest-experience-input js-quest-experience-input" placeholder="120">
                    </div>

                    <div class="quest-rank-container">
                        <label for="questRankSelector">Select Rank:</label>
                        <select name="QuestRanks" id="questRankSelector" class="rank-selector js-quest-rank-selector">
                            <option value="S">S</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C" selected>C</option>
                            <option value="C-">C-</option>
                            <option value="D+">D+</option>
                            <option value="D">D</option>
                            <option value="D-">D-</option>
                            <option value="F">F</option>
                        </select>
                    </div>

                    <div class="quest-keywords-container">
                        <label for="questKeywordInput">Add Keywords:</label>
                        <div class="input-button-container">
                            <input type="text" id="questKeywordInput" class="quest-keyword-input js-quest-keyword-input" placeholder="keyword">
                            <button class="add-keyword-button js-add-keyword-button">Add</button>
                        </div>
                    </div>

                </div>
                <div class="quest-creator-section-D">
                    <div class="quest-requirements-list-container">
                        <label for="questRequirementListInput">Quest Requirements:</label>
                        <input type="text" id="questRequirementListInput" class="quest-requirements-list-input js-quest-requirements-list-input" placeholder="Enter The Reuirements List">
                    </div>
                    <div class="quest-objectives-container">
                        <label for="questObjectivesInput">Add Objective:</label>
                        <input type="text" id="questObjectivesInput" class="quest-objective-input js-quest-objective-input" placeholder="Enter New Objective">
                        <button class="add-object-button js-add-objective-button">Add</button>
                    </div>
                    <div class="image-selector-container">
                        <label for="questImageSelector">Quest Image:</label>
                        <select id="questImageSelector" class="quest-image-selector js-quest-image-selector">
                            
                        </select>
                    </div>
                    <div class="briefing-selector-container">
                        <label for="questBriefingSelector">Quest Briefing:</label>
                        <select id="questBriefingSelector" class="quest-briefing-selector js-quest-briefing-selector">
                            <option value="pending" default>Select from availiable options</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    `;

    questPageBody.innerHTML = createHTML;
    createNewObject();


    function createNewObject(){
        const tempQuestObject = {
            questId:'',
            questType: 'main',
            questCategory: '',
            questTitle: '',
            questDetails:'',
            questProgress: 0,
            questExperience: 0,
            questRank: 'C',
            questImage: 'Pending',
            questRequirements: 'Laptop and time',
            questObjectives:[
 
            ],
            questKeywords: [

            ],
            briefingLink: 'Pending',
            isComplete: false,
            isActive: false,
            requirementsChecked: true
        };

        let idTypeText = '';
        let questImageHtml = '<option value="pending" default>Select from availiable options</option>';

        const inputIdElement = document.querySelector('.js-quest-id-input');
        const questTypeInput = document.querySelector('.js-quest-type-selector');
        const questTitleInput = document.querySelector('.js-quest-title-input');
        const questCategoryInput = document.querySelector('.js-quest-category-input');
        const questDetailsInput = document.querySelector('.js-quest-details-input');
        const questRequirementsCheckbox = document.querySelector('.js-quest-requirements-checkbox');
        const questActivateInput = document.querySelector('.js-quest-activate-input');
        const questExperienceInput = document.querySelector('.js-quest-experience-input');
        const questRankInput = document.querySelector('.js-quest-rank-selector');
        const questRequirementsListInput = document.querySelector('.js-quest-requirements-list-input');
        const questImageInput = document.querySelector('.js-quest-image-selector');
        const questBriefingInput = document.querySelector('.js-quest-briefing-selector');

        questTypeInput.addEventListener('click', () => {
            handleTypeIdText();
            if(questTypeInput.value === 'main'){
                selectedQuestType = 'mainQuest';
                questTypeSelected = mainQuests;
            }else if(questTypeInput.value === 'side'){
                selectedQuestType = 'sideQuest';
                questTypeSelected = sideQuests;
            }else if(questTypeInput.value === 'errand'){
                selectedQuestType = 'errandList';
                questTypeSelected = errandsList;
            }else if(questTypeInput.value === 'collectable'){
                selectedQuestType = 'collectableList';
                questTypeSelected = collectablesList;
            }
        });
        handleTypeIdText();

        function handleTypeIdText(){
            if(questTypeInput.value === 'main'){
                idTypeText = `01-${questTypeInput.value}`
            }else if(questTypeInput.value === 'side'){
                idTypeText = `02-${questTypeInput.value}`
            }else if(questTypeInput.value === 'errand'){
                idTypeText = `03-${questTypeInput.value}`
            }else if(questTypeInput.value === 'collectable'){
                idTypeText = `04-${questTypeInput.value}`
            }
        };        

        questImageIcons.forEach((questImageReference) => {
            questImageHtml += `
                <option value="${questImageReference}" default>${questImageReference}</option>
            `;  
        });

        document.querySelector('.js-quest-image-selector').innerHTML = questImageHtml;

        document.querySelector('.js-add-keyword-button').addEventListener('click', () => {
            tempQuestObject.questKeywords.push((String(document.querySelector('.js-quest-keyword-input').value)).toLowerCase());
            document.querySelector('.js-quest-keyword-input').value = '';
        });
       
        document.querySelector('.js-add-objective-button').addEventListener('click', () => {
            if(inputIdElement.value !== ''){
                const questTypeString = String(document.querySelector('.js-quest-type-selector').value);           
                const objectiveArray = tempQuestObject.questObjectives;
                const tempObjective = {
                    objectivesId:`${idTypeText}-${inputIdElement.value}-${handleObjectiveCount()}-objective`,
                    objectivesTitle:'',
                    completed: false
                }

                function handleObjectiveCount(){
                    let count = 'first';

                    if(tempQuestObject.questObjectives.length === 1){
                        count = 'second';
                    }else if(tempQuestObject.questObjectives.length === 2){
                        count = 'third';
                    }else if(tempQuestObject.questObjectives.length === 3){
                        count = 'fourth';
                    }else if(tempQuestObject.questObjectives.length === 4){
                        count = 'fifth';
                    }else if(tempQuestObject.questObjectives.length === 5){
                        count = 'sixth';
                    }else if(tempQuestObject.questObjectives.length === 6){
                        count = 'seventh';
                    }else if(tempQuestObject.questObjectives.length === 7){
                        count = 'eighth';
                    }else if(tempQuestObject.questObjectives.length === 8){
                        count = 'ninth';
                    }else if(tempQuestObject.questObjectives.length === 9){
                        count = 'tenth';
                    }else if(tempQuestObject.questObjectives.length === 10){
                        count = 'eleventh';
                    }else if(tempQuestObject.questObjectives.length === 11){
                        count = 'twelfth';
                    }

                    return count;
                };

                tempObjective.objectivesTitle = String(document.querySelector('.js-quest-objective-input').value);
                objectiveArray.push(structuredClone(tempObjective));
                document.querySelector('.js-quest-objective-input').value = '';
            }
        });
        
        document.querySelector('.js-create-quest-button').addEventListener('click', () => {
            let objectiveArray = tempQuestObject.questObjectives;

            tempQuestObject.questId = `${idTypeText}-${inputIdElement.value}`;
            tempQuestObject.questType = questTypeInput.value;
            tempQuestObject.questTitle = questTitleInput.value;
            tempQuestObject.questCategory = questCategoryInput.value;
            tempQuestObject.questDetails = questDetailsInput.value;
            tempQuestObject.requirementsChecked = questRequirementsCheckbox.checked;
            tempQuestObject.isActive = questActivateInput.checked;
            tempQuestObject.questExperience = questExperienceInput.value;
            tempQuestObject.questRank = questRankInput.value;
            tempQuestObject.questRequirements = questRequirementsListInput.value;
            tempQuestObject.questImage = questImageInput.value;
            tempQuestObject.briefingLink = questBriefingInput.value;
            
            console.log(tempQuestObject.questKeywords);
            console.log(tempQuestObject.questObjectives);
            console.log(tempQuestObject);
            questTypeSelected.push(structuredClone(tempQuestObject));

            localStorage.setItem(`${selectedQuestType}`, JSON.stringify(questTypeSelected));

            console.log(JSON.parse(localStorage.getItem(`${selectedQuestType}`)))

            inputIdElement.value = '';
            questTitleInput.value = '';
            questCategoryInput.value = '';
            questDetailsInput.value = '';
            questRequirementsCheckbox.checked = true;
            questActivateInput.checked = false;
            questExperienceInput.value = '';
            questRequirementsListInput.value = '';

            objectiveArray = [];
            tempQuestObject.questKeywords = [];
        });
    };
};

function generateDeleteQuests(){
    const questPageBody = document.querySelector('.js-quests-body-main');
    let deleteHTML = '';

    deleteHTML = `
        <div class="quest-data-control js-quest-data-control">
            <div class="data-control-header">
                <div class="data-control-title">Quest Data Controls</div>
                <div class="update-delete-switch-container">
                    <select name="" id="" class="update-delete-switch">
                        <option value="Delete">Delete Quest</option>
                        <option value="Update">Update Quest</option>
                    </select>
                    <button class="exit-quest-controls js-exit-quest-controls">❌</button>
                </div>
            </div>
            <div class="data-control-body">
                <div class="quest-delete-section">
                    <div class="delete-selection-header">
                        <div class="delete-selection-title">
                            Delete Quest
                        </div>
                        <button class="delete-quest-button js-delete-quest-button">Delete</button>
                    </div>
                    <div class="delete-selection-body">
                        <div class="delete-section-image-container js-delete-section-image-container">
                            <img src="images/BlankUserImage.png" alt="">
                        </div>

                        <div class="delete-section-controls">
                            <div class="quest-title-select-container">
                                <label>Title:</label>
                                <div class="delete-title-display js-delete-title-display" id="deleteTitleDisplay"></div>
                            </div>
                            <div class="quest-id-select-container">
                                <label for="questIdSelection">Id:</label>
                                <select id="questIdSelection" class="quest-id-selection js-quest-id-selection"></select>
                            </div>
                            <div class="quest-type-section">
                                <label for="questTypeButtonsContainer">Type:</label>
                                <div class="quest-type-buttons-container" id="questTypeButtonsContainer">
                                    <button class="main-quest-button js-main-array-button"><div>💼</div></button>
                                    <button class="side-quest-button js-side-array-button"><div>🔷</div></button>
                                    <button class="errand-list-button js-errand-array-button"><div>🛍️</div></button>
                                    <button class="collectable-list-button js-collectable-array-button"><div>⭐</div></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="quest-bin-section">
                    <div class="quest-bin-header">
                        <div class="quest-bin-header-title">Quest Bin</div>
                        <div class="clear-bin-buttons">
                            <button class="binned-restore-all-button js-binned-restore-all-button"><div>➕</div></button>
                            <button class="remove-all-binned-quest-button js-remove-all-binned-quest-button"><div>🗑️</div></button>
                        </div>
                    </div>
                    <div class="quest-bin-body js-quest-bin-body">
                        
                    </div>
                </div>
            </div>
        </div>
    `;

    function InitializingDeleteSection(){
        const deleteIdSelector = document.querySelector(".js-quest-id-selection");
        const deleteTitleDisplay = document.querySelector(".js-delete-title-display");
        const deleteImageDisplay = document.querySelector(".js-delete-section-image-container");
        
        let optionsHTML = '';
        let selectedDeleteImage = '';
        let selectedIdValue = '';
        let selectedTitleText = '';
        let questTypeSelection = '';

        if(questArrayURLParams === 'collectable'){
            questArray = collectablesList;
        }else if(questArrayURLParams === 'errand'){
            questArray = errandsList;
        }else if(questArrayURLParams === 'side'){
            questArray = sideQuests;
        }else{
            questArray = mainQuests;
        };

        questArray.forEach((selectObjectItem) => {

            if(selectObjectItem.questId === questIdUrlParams){   
                if(selectObjectItem.questImage !== "Pending"){
                    console.log(selectObjectItem.questImage !== "Pending");
                    selectedDeleteImage = `<img src="${selectObjectItem.questImage}" alt=""></img>`;
                }       
                selectedIdValue = selectObjectItem.questId;
                selectedTitleText = selectObjectItem.questTitle;
                questTypeSelection = selectObjectItem.questType;        
        }
            optionsHTML += `
                <option value="${selectObjectItem.questId}">${selectObjectItem.questId}</option>
            `;
        });
        
        deleteIdSelector.innerHTML = optionsHTML;
        deleteIdSelector.value = selectedIdValue;
        deleteTitleDisplay.innerHTML = selectedTitleText;
        deleteImageDisplay.innerHTML = selectedDeleteImage;
        // document.querySelector(`.js-${questTypeSelection}-array-button`).style.backgroundColor = '#89cfc7';
    };

    function deleteSectionController(){
        const mainArraySelector = document.querySelector('.js-main-array-button');
        const sideArraySelector = document.querySelector('.js-side-array-button');
        const errandArraySelector = document.querySelector('.js-errand-array-button');
        const collectableArraySelector = document.querySelector('.js-collectable-array-button');
        const deleteIdSelector = document.querySelector(".js-quest-id-selection");
        const deleteTitleDisplay = document.querySelector(".js-delete-title-display");
        const deleteImageDisplay = document.querySelector(".js-delete-section-image-container");
        
        function editDeletionSectionInfo(){
            let optionsHTML = '';
            let confirmNewTitle = false; 

            questArray.forEach((selectObjectItem) => {
                optionsHTML += `
                    <option value="${selectObjectItem.questId}">${selectObjectItem.questId}</option>
                `;

                if(!confirmNewTitle){
                    deleteTitleDisplay.innerHTML = selectObjectItem.questTitle; 
                    deleteImageDisplay.innerHTML = `<img src="${selectObjectItem.questImage}" alt=""></img>`;
                    confirmNewTitle = true; 
                }

            });
            
            deleteIdSelector.innerHTML = optionsHTML;
        } 

        document.querySelector('.js-delete-quest-button').addEventListener('click', () => {
            let tempQuestArray = [];
            
            questArray.forEach((deletionQuestObject) => {
                if(deletionQuestObject.questId === deleteIdSelector.value){
                    questBinList.push(deletionQuestObject);
                }else{
                    tempQuestArray.push(deletionQuestObject)
                }
            });

            questArray = structuredClone(tempQuestArray);
            editDeletionSectionInfo();
            generateQuestBinCards();
        });

        deleteIdSelector.addEventListener('click', () => {
            questArray.forEach((selectedQuestType) => {
                if(deleteIdSelector.value === selectedQuestType.questId){
                    deleteTitleDisplay.innerHTML = selectedQuestType.questTitle;

                    if(selectedQuestType.questImage !== "Pending"){
                        console.log(selectObjectItem.questImage !== "Pending");
                        deleteImageDisplay.innerHTML = `<img src="${selectedQuestType.questImage}" alt="">`;
                    }else{
                        deleteImageDisplay.innerHTML = '<img src="images/BlankUserImage.png" alt="">';
                    }

                }
            });
        }); 

        mainArraySelector.addEventListener('click', () => {
            questArray = mainQuests;
            editDeletionSectionInfo();
            mainArraySelector.style.backgroundColor = '#89cfc7';
            sideArraySelector.style.backgroundColor = 'white';
            errandArraySelector.style.backgroundColor = 'white';
            collectableArraySelector.style.backgroundColor = 'white';
        });
        sideArraySelector.addEventListener('click', () => {
            questArray = sideQuests;
            editDeletionSectionInfo();
            mainArraySelector.style.backgroundColor = 'white';
            sideArraySelector.style.backgroundColor = '#89cfc7';
            errandArraySelector.style.backgroundColor = 'white';
            collectableArraySelector.style.backgroundColor = 'white';
        });
        errandArraySelector.addEventListener('click', () => {
            questArray = errandsList;
            editDeletionSectionInfo();
            mainArraySelector.style.backgroundColor = 'white';
            sideArraySelector.style.backgroundColor = 'white';
            errandArraySelector.style.backgroundColor = '#89cfc7';
            collectableArraySelector.style.backgroundColor = 'white';
        });
        collectableArraySelector.addEventListener('click', () => {
            questArray = collectablesList;
            editDeletionSectionInfo();
            mainArraySelector.style.backgroundColor = 'white';
            sideArraySelector.style.backgroundColor = 'white';
            errandArraySelector.style.backgroundColor = 'white';
            collectableArraySelector.style.backgroundColor = '#89cfc7';
        });
    };

    function generateQuestBinCards(){
        let binCardHTML = '';

        questBinList.forEach((binnedObject) => {
            binCardHTML += `
                <div class="binned-quest-card">
                    <div class="bin-card-image-container">
                        <img src="images/BlankUserImage.png" alt="Blank">
                    </div>
                    <div class="bin-quest-card-details">
                        <div class="binned-quest-title-container">
                            <div class="binned-quest-title">${binnedObject.questTitle}</div>
                            <button class="remove-binned-quest-button js-remove-binned-quest-${binnedObject.questId}-button"><div>🗑️</div></button>
                        </div>
                        <div class="binned-quest-body-container">
                            <div class="binned-rank-exp-container">
                                <div class="binned-quest-rank">Rank ${binnedObject.questRank}</div>
                                <div class="binned-quest-experience">${binnedObject.questExperience} exp</div>
                            </div>
                            <button class="binned-restore-button js-binned-restore-${binnedObject.questId}-button"><div>➕</div></button>
                        </div>
                    </div>
                </div>
            `;


        });
        document.querySelector('.js-quest-bin-body').innerHTML = binCardHTML;
    };

    function binSectionController(){
        const deleteIdSelector = document.querySelector(".js-quest-id-selection");
        const deleteTitleDisplay = document.querySelector(".js-delete-title-display");

        document.querySelector('.js-binned-restore-all-button').addEventListener('click', () => {

            questPageBody.innerHTML += `
                <div class="empty-bin-checked">
                    <div class="empty-bin-checked-header">
                        <div>Restoring binned quests</div>
                        <button>➕</button>
                    </div>
                    <div class="empty-bin-checked-body">
                        <div class="empty-bin-body-text">Are you sure you want to restore all binned quests?</div>
                        <div class="empty-bin-body-warning">This change is permenant!</div>
                    </div>
                    <div class="empty-bin-checked-footer">
                        <button class="cancel-clear-bin js-cancel-restore-bin">Cancel</button>
                        <button class="confirm-clear-bin js-confirm-restore-bin">Confirm</button>
                    </div>
                </div>
            `;
            document.querySelector(".js-confirm-restore-bin").addEventListener('click',() => {
                let optionsHTML = '';
                let confirmNewTitle = false;

                questBinList.forEach((binnedObject, index) => {
                    if(binnedObject.questType === 'main'){
                        questArray = mainQuests;
                    } else if(binnedObject.questType === 'side'){
                        questArray = sideQuests;
                    } else if(binnedObject.questType === 'errand'){
                        questArray = errandsList;
                    } else if(binnedObject.questType === 'collectable'){
                        questArray = collectablesList;
                    }

                    questArray.push(binnedObject);
                });
                questBinList.splice(0);
                deleteTitleDisplay.innerHTML = questArray[0].questTitle;
                generateDeleteQuests();

            });
            document.querySelector(".js-cancel-restore-bin").addEventListener('click',() => {
                generateDeleteQuests();
            })
        });
        document.querySelector('.js-remove-all-binned-quest-button').addEventListener('click', () => {
            questPageBody.innerHTML += `
                <div class="empty-bin-checked">
                    <div class="empty-bin-checked-header">
                        <div>Clearing Out Quest Bin</div>
                        <button>🗑️</button>
                    </div>
                    <div class="empty-bin-checked-body">
                        <div class="empty-bin-body-text">Are you sure you want to empty the bin?</div>
                        <div class="empty-bin-body-warning">This is a permenant delete !</div>
                    </div>
                    <div class="empty-bin-checked-footer">
                    <button class="cancel-clear-bin js-cancel-clear-bin">Cancel</button>
                        <button class="confirm-clear-bin js-confirm-clear-bin">Confirm</button>
                    </div>
                </div>
            `;
            document.querySelector(".js-confirm-clear-bin").addEventListener('click',() => {
                questBinList.splice(0);
                generateDeleteQuests();
            })
            document.querySelector(".js-cancel-clear-bin").addEventListener('click',() => {
                generateDeleteQuests();
            })
        });
        questBinList.forEach((binnedObject, index) => {
            document.querySelector(`.js-remove-binned-quest-${binnedObject.questId}-button`).addEventListener('dblclick', () => {
                questBinList.splice(index, 1);
                generateQuestBinCards();
                binSectionController()
            });
            document.querySelector(`.js-binned-restore-${binnedObject.questId}-button`).addEventListener('click', () => {
                if(binnedObject.questType === 'main'){
                    questArray = mainQuests;
                } else if(binnedObject.questType === 'side'){
                    questArray = sideQuests;
                } else if(binnedObject.questType === 'errand'){
                    questArray = errandsList;
                } else if(binnedObject.questType === 'collectable'){
                    questArray = collectablesList;
                }

                questArray.push(binnedObject);
                questBinList.splice(index, 1);
                deleteSectionController();
                generateQuestBinCards();
                binSectionController();
            });
        });
    }
    

    questPageBody.innerHTML = deleteHTML;

    InitializingDeleteSection();
    deleteSectionController();
    generateQuestBinCards();
    binSectionController();

    document.querySelector('.js-exit-quest-controls').addEventListener('click', () => {
        window.location.href = 'quest.html'
        controlQuestPage()
    });

};

function generateUpdateQuest(){
    const questPageBody = document.querySelector('.js-quests-body-main');
    let updateHTML = '';

    updateHTML=`
        <div class="update-quest-data-controller">
            <div class="update-quest-data-header">
                <div class="data-control-title">Quest Data Controls</div>
                <div class="update-delete-switch-container">
                    <select name="" id="" class="update-delete-switch">
                        <option value="Update">Update Quest</option>
                        <option value="Delete">Delete Quest</option>
                    </select>
                    <button class="exit-quest-controls js-exit-quest-controls">❌</button>
                </div>
            </div>
            <div class="update-quest-data-body">
                <div class="quest-body-title-container">
                    <div class="update-quest-title">Update Quest</div>
                    <button class="update-quest-button js-update-quest-button">Update</button>
                </div>
                <div class="quest-body-data-container">
                    <div class="quest-update-selector">
                        <div class="quest-update-title-selection js-quest-update-title-selection">
                            <label for="updateTitleQuestSelector">Quest Title:</label>
                            <select id="updateTitleQuestSelector" class="update-title-quest-selector js-update-title-quest-selector">
                            </select>
                        </div>
                        <div class="quest-update-id-selection js-quest-update-id-selection">
                            <label for="updateIdQuestSelector">Quest Id:</label>
                            <select id="updateIdQuestSelector" class="update-id-quest-selector js-update-id-quest-selector">
                            </select>
                        </div>
                        <div class="update-quest-type-selection">
                            <label for="questUpdateTypeSelection">Type:</label>
                            <div class="quest-update-type-selection" id="questUpdateTypeSelection">
                                <button class="main-quest-button js-main-array-button"><div>💼</div></button>
                                <button class="side-quest-button js-side-array-button"><div>🔷</div></button>
                                <button class="errand-list-button js-errand-array-button"><div>🛍️</div></button>
                                <button class="collectable-list-button js-collectable-array-button"><div>⭐</div></button>
                            </div>
                        </div>
                    </div>
                    <div class="update-detail-section js-update-detail-section">

                    </div>
                    <div class="update-keywords-section js-update-keywords-section">

                    </div>
                    <div class="update-imaging-section js-update-imaging-section">

                    </div>
                </div>
            </div>
        </div>    
    `;

    questPageBody.innerHTML = updateHTML;

    function initializingUpdateSection(){
        const updateTitleInput = document.querySelector('.js-update-title-quest-selector');
        const updateIdInput = document.querySelector('.js-update-id-quest-selector');
        const updatedDetailSection = document.querySelector('.js-update-detail-section');
        const updatedKeywordsSection = document.querySelector('.js-update-keywords-section');
        const updateImagingSection = document.querySelector('.js-update-imaging-section');
        const exitUpdatesButton = document.querySelector(".js-exit-quest-controls");

        let updateTitleHTML = '';
        let updateIdHTML = '';

        let updateDetailSectionHTML = '';
        let updateKeywordsSectionHTML = '';
        let updateImagingSectionHTML = '';

        let oneRunQuestLog = true;

        exitUpdatesButton.addEventListener('click', () => {
            window.location.href = "quest.html";
        });

        questArray.forEach((questObject) => {
            updateTitleHTML+=`<option value="${questObject.questTitle}">${questObject.questTitle}</option>`;
            updateIdHTML+=`<option value="${questObject.questId}">${questObject.questId}</option>`;

            if(questObject.questId === questIdUrlParams){
                updateDetailSectionHTML = `
                    <div class="update-quest-details-container">
                        <label for="updateQuestDetailInput">Quest Details:</label>
                        <textarea id="updateQuestDetailInput" class="update-quest-detail-input js-update-quest-detail-input">${questObject.questDetails}</textarea>
                    </div>
                    <div class="quest-category-update-container">
                        <label for="questCategoryUpdateInput">Quest Category:</label>
                        <input type="text" id="questCategoryUpdateInput" class="quest-category-update-input js-quest-category-update-input" value="${questObject.questCategory}">
                    </div>
                    <div class="update-objectives-controls">
                        <label for="updateQuestObjectivesInput">Update Objectives:</label>
                        <div class="update-objective-body">
                            <div class="update-objectives-input-container">
                                <input type="text" id="updateQuestObjectivesInput" class="update-quest-objectives-input js-update-quest-objectives-input">
                                <select id="objectivesIndexSelector" class="objectives-index-selector js-objectives-index-selector">
                                </select>
                            </div>
                            <div class="update-objective-button-container">
                                <button class="delete-objective-button js-delete-objective-button">🗑️</button>
                                <button class="objectives-submit-update-button js-objectives-submit-update-button">Update</button>
                            </div>
                        </div>
                    </div>
                    <div class="quest-update-progress-container">
                        <label for="updateQuestProgressInput">Quest Progress:</label>
                        <input type="range" min="0" max="100" value="${questObject.questProgress}" id="updateQuestProgressInput" class="update-quest-progress-input js-update-quest-progress-input">
                    </div>
                    <div class="requirements-active-check-container">
                        <div class="active-quests-checkbox-container">
                            <label for="activeQuestsCheckbox">Active Quest:</label>
                            <input type="checkbox" id="activeQuestsCheckbox" class="active-quests-checkbox-update js-active-quests-checkbox-update" checked="${questObject.isActive}">
                        </div>
                        <div class="quests-requirements-checkbox-container">
                            <label for="questsRequirementsCheckbox">Requirements Quest:</label>
                            <input type="checkbox" id="questsRequirementsCheckbox" class="quests-requirements-checkbox-update js-quests-requirements-checkbox-update" checked="${questObject.requirementsChecked}">
                        </div>
                    </div>
                `;
                updateKeywordsSectionHTML = `
                    <div class="quest-experience-update-control">
                        <label for="questExperienceUpdateInput">Experience:</label>
                        <input type="number" id="questExperienceUpdateInput" class="quest-experience-update-input js-quest-experience-update-input" value="${questObject.questExperience}">
                    </div>
                    <div class="quest-rank-updater">
                        <label for="rankSelectInput">Select Rank:</label>
                        <select id="rankSelectInput" class="rank-select-input js-rank-select-input">
                            <option value="S">S</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B" selected>B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            <option value="D+">D+</option>
                            <option value="D">D</option>
                            <option value="D-">D-</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div class="update-quest-keywords-section">
                        <label for="updateKeywordsInput">Update Keywords:</label>
                        <div class="keywords-update-body-section">
                            <div class="keyword-count-container">
                                <input type="text" id="updateKeywordsInput" class="update-keywords-input js-update-keywords-input">
                                <select class="update-keywords-index-selector">

                                </select>
                            </div>
                            <div class="update-keywords-button-container">
                                <button class="delete-keyword-button js-delete-keyword-button">🗑️</button>
                                <button class="submit-keyword-button js-submit-keyword-button">Add</button>
                            </div>
                        </div>
                    </div>
                `;
                updateImagingSectionHTML = `
                    <div class="requirements-update-section">
                        <label for="requirementsQuestUpdateInput">Quest Requirements:</label>
                        <input type="text" id="requirementsQuestUpdateInput" class="requirements-quest-update-input js-requirements-quest-update-input" value="${questObject.questRequirements}">
                    </div>
                    <div class="image-update-container">
                        <label for="imageUpdateSelection">Quest Image:</label>
                        <select id="imageUpdateSelection" class="image-update-selection js-image-update-selection">
                            ${generateImageSelection()}
                        </select>
                    </div>
                    <div class="update-briefing-link-container">
                        <label for="updateBriefingLinkSelector">Quest Briefing:</label>
                        <select id="updateBriefingLinkSelector" class="update-briefing-link-selector js-update-briefing-link-selector">
                            <option value="pending" default>Select from availiable options</option>
                        </select>
                    </div>                
                `;
            };
            if(oneRunQuestLog){
                let keywordIndexCount = 0;

                questObject.questKeywords.forEach((questObjectKeywords) => {
                    keywordIndexCount++;
                });

                oneRunQuestLog = false;
            };
        });

        function generateImageSelection(){
            let imageLinkHTML = '<option value="pending" default>Select from availiable options</option>';
            questImageIcons.forEach((imagePathString) => {
                imageLinkHTML += `<option value="${imagePathString}" default>${imagePathString}</option>`;
            });
            return imageLinkHTML;
        }

        updateTitleInput.innerHTML = updateTitleHTML;
        updateIdInput.innerHTML = updateIdHTML;

        updatedDetailSection.innerHTML = updateDetailSectionHTML;
        updatedKeywordsSection.innerHTML = updateKeywordsSectionHTML;
        updateImagingSection.innerHTML = updateImagingSectionHTML;

        questArray.forEach((questObject) => {
            if(questObject.questId === questIdUrlParams){
                const questObjectivesSelector = document.querySelector('.js-objectives-index-selector');
                const questObjectiveTitleInput = document.querySelector('.js-update-quest-objectives-input');
                const questKeywordsSelector = document.querySelector('.update-keywords-index-selector');
                const questKeywordInput = document.querySelector('.js-update-keywords-input');
                const questImageSelector = document.querySelector('.js-image-update-selection');

                let objectiveIndexCount = 0;
                let keywordsIndexCount = 0;

                questObject.questObjectives.forEach((seletedQuestObjective) => {
                    questObjectivesSelector.innerHTML += `<option value="${objectiveIndexCount}">${objectiveIndexCount}</option>`;
                    objectiveIndexCount += 1;
                    questObjectiveTitleInput.value = seletedQuestObjective.objectivesTitle;
                });
                questObjectivesSelector.innerHTML += `<option value="${questObject.questObjectives.length}">${questObject.questObjectives.length}</option>`;
                questObjectivesSelector.value = (questObject.questObjectives.length) - 1;

                questObject.questKeywords.forEach((questSearchKeyword) => {
                    questKeywordsSelector.innerHTML += `<option value="${keywordsIndexCount}">${keywordsIndexCount}</option>`;
                    keywordsIndexCount += 1;
                    questKeywordInput.value = questSearchKeyword;
                });
                questKeywordsSelector.innerHTML += `<option value="${questObject.questKeywords.length}">${questObject.questKeywords.length}</option>`;
                questKeywordsSelector.value = (questObject.questKeywords.length) - 1;
                

                questImageSelector.value = questObject.questImage;
            }
        });

        oneRunQuestLog = true;
    };

    function questUpdateControls(){
        const questTitleSelector = document.querySelector('.js-update-title-quest-selector');
        const questIdSelector = document.querySelector('.js-update-id-quest-selector');
        const questDetailInput = document.querySelector('.js-update-quest-detail-input');
        const questCategoryInput = document.querySelector('.js-quest-category-update-input');
        const questProgressInput = document.querySelector('.js-update-quest-progress-input');
        const questActiveCheckbox = document.querySelector('.js-active-quests-checkbox-update');
        const questRequirementsCheckbox = document.querySelector('.js-quests-requirements-checkbox-update');
        const questExperienceInput = document.querySelector('.js-quest-experience-update-input');
        const questRankSelectInput = document.querySelector('.js-rank-select-input');
        const questRequirementsInput = document.querySelector('.js-requirements-quest-update-input');
        const questImageSelector = document.querySelector('.js-image-update-selection');
        const questBriefingLink = document.querySelector('.js-update-briefing-link-selector');

        
        const questObjectivesSelector = document.querySelector('.js-objectives-index-selector');
        const questObjectiveTitleInput = document.querySelector('.js-update-quest-objectives-input');
        const deleteUpdateObjectivesButton = document.querySelector('.js-delete-objective-button');
        const submitObjectiveButton = document.querySelector('.js-objectives-submit-update-button');

        const questKeywordsSelector = document.querySelector('.update-keywords-index-selector');
        const questKeywordInput = document.querySelector('.js-update-keywords-input');
        const deleteUpdateKeywordsButton = document.querySelector('.js-delete-keyword-button');
        const submitKeywordButton = document.querySelector('.js-submit-keyword-button');

        const questUpdateButton = document.querySelector('.js-update-quest-button');

        const questTypeMainButton = document.querySelector('.js-main-array-button');
        const questTypeSideButton = document.querySelector('.js-side-array-button');
        const questTypeErrandButton = document.querySelector('.js-errand-array-button');
        const questTypeCollectableButton = document.querySelector('.js-collectable-array-button');

        function updateInputInfo(selectObjectUpdate){
            let objectiveIndexCount = 0;
            let keywordsIndexCount = 0;

            questObjectivesSelector.innerHTML = '';
            questKeywordsSelector.innerHTML = '';

            questTitleSelector.value = selectObjectUpdate.questTitle;
            questIdSelector.value = selectObjectUpdate.questId;
            questDetailInput.value = selectObjectUpdate.questDetails;
            questCategoryInput.value = selectObjectUpdate.questCategory;
            questProgressInput.value = selectObjectUpdate.questProgress;
            questActiveCheckbox.checked = selectObjectUpdate.isActive;
            questRequirementsCheckbox.checked = selectObjectUpdate.requirementsChecked;
            questExperienceInput.value = selectObjectUpdate.questExperience;
            questRankSelectInput.value = selectObjectUpdate.questRank;
            questRequirementsInput.value = selectObjectUpdate.questRequirements;
            questImageSelector.value = selectObjectUpdate.questImage;

            selectObjectUpdate.questObjectives.forEach((seletedQuestObjective) => {
                questObjectivesSelector.innerHTML += `<option value="${objectiveIndexCount}">${objectiveIndexCount}</option>`;
                objectiveIndexCount += 1;
                questObjectiveTitleInput.value = seletedQuestObjective
            });

            selectObjectUpdate.questKeywords.forEach((questSearchKeyword) => {
                questKeywordsSelector.innerHTML += `<option value="${keywordsIndexCount}">${keywordsIndexCount}</option>`;
                keywordsIndexCount += 1;
                questKeywordInput.value = questSearchKeyword;
            });

        };

        questTitleSelector.addEventListener('click', () => {
            questArray.forEach((selectObjectUpdate) => {
                if(questTitleSelector.value === selectObjectUpdate.questTitle){
                    updateInputInfo(selectObjectUpdate);
                };
            });
        });

        questIdSelector.addEventListener('click', () => {
            questArray.forEach((selectObjectUpdate) => {
                if(questIdSelector.value === selectObjectUpdate.questId){
                    updateInputInfo(selectObjectUpdate);
                };
            });
        });

        questTypeMainButton.addEventListener('click', () => {
            questArray = mainQuests;
            questTitleSelector.innerHTML = '';
            questIdSelector.innerHTML = '';
            questArray.forEach((selectObjectUpdate) => {
                questTitleSelector.innerHTML += `<option value="${selectObjectUpdate.questTitle}">${selectObjectUpdate.questTitle}</option>`;
                questIdSelector.innerHTML += `<option value="${selectObjectUpdate.questId}">${selectObjectUpdate.questId}</option>`;
            });
        });
        
        questTypeSideButton.addEventListener('click', () => {
            questArray = sideQuests;
            questTitleSelector.innerHTML = '';
            questIdSelector.innerHTML = '';
            questArray.forEach((selectObjectUpdate) => {
                questTitleSelector.innerHTML += `<option value="${selectObjectUpdate.questTitle}">${selectObjectUpdate.questTitle}</option>`;
                questIdSelector.innerHTML += `<option value="${selectObjectUpdate.questId}">${selectObjectUpdate.questId}</option>`;
            });
        });

        questTypeErrandButton.addEventListener('click', () => {
            questArray = errandsList;
            questTitleSelector.innerHTML = '';
            questIdSelector.innerHTML = '';
            questArray.forEach((selectObjectUpdate) => {
                questTitleSelector.innerHTML += `<option value="${selectObjectUpdate.questTitle}">${selectObjectUpdate.questTitle}</option>`;
                questIdSelector.innerHTML += `<option value="${selectObjectUpdate.questId}">${selectObjectUpdate.questId}</option>`;
            });
        });

        questTypeCollectableButton.addEventListener('click', () => {
            questArray = collectablesList;
            questTitleSelector.innerHTML = '';
            questIdSelector.innerHTML = '';
            questArray.forEach((selectObjectUpdate) => {
                questTitleSelector.innerHTML += `<option value="${selectObjectUpdate.questTitle}">${selectObjectUpdate.questTitle}</option>`;
                questIdSelector.innerHTML += `<option value="${selectObjectUpdate.questId}">${selectObjectUpdate.questId}</option>`;
            });
        });



        questObjectivesSelector.addEventListener('click', () => {
            questArray.forEach((questObject) => {
                if(questObject.questId === questIdSelector.value){
                    let objectiveIndexCount = 0;
                    questObject.questObjectives.forEach((selectedObjective) => {
                        if( questObject.questObjectives.length <= Number(questObjectivesSelector.value)){
                            questObjectiveTitleInput.value = 'Add a new objective +';
                        }else if(Number(questObjectivesSelector.value) === objectiveIndexCount ){
                            questObjectiveTitleInput.value = selectedObjective.objectivesTitle;
                        };
                        objectiveIndexCount += 1;
                    });

                }
            });
        });

        deleteUpdateObjectivesButton.addEventListener('click', () => {
            questArray.forEach((selectObjectUpdate) => {
                if(questIdSelector.value === selectObjectUpdate.questId && selectObjectUpdate.questObjectives.length > 1){
                    let tempObjectivesArray = [];
                    let objectiveIndexCount = 0; 

                    selectObjectUpdate.questObjectives.forEach((selectedObjective) => {
                        let tempUpdateObjectives = {};

                        console.log(questObjectiveTitleInput.value === selectedObjective.objectivesTitle);

                        if(questObjectiveTitleInput.value === selectedObjective.objectivesTitle){
                            console.log(selectedObjective);
                        }else{
                            function handleObjectiveCount(){
                                let count = 'first';

                                if(tempUpdateObjectives.length === 1){
                                    count = 'second';
                                }else if(tempUpdateObjectives.length === 2){
                                    count = 'third';
                                }else if(tempUpdateObjectives.length === 3){
                                    count = 'fourth';
                                }else if(tempUpdateObjectives.length === 4){
                                    count = 'fifth';
                                }else if(tempUpdateObjectives.length === 5){
                                    count = 'sixth';
                                }else if(tempUpdateObjectives.length === 6){
                                    count = 'seventh';
                                }else if(tempUpdateObjectives.length === 7){
                                    count = 'eighth';
                                }else if(tempUpdateObjectives.length === 8){
                                    count = 'ninth';
                                }else if(tempUpdateObjectives.length === 9){
                                    count = 'tenth';
                                }else if(tempUpdateObjectives.length === 10){
                                    count = 'eleventh';
                                }else if(tempUpdateObjectives.length === 11){
                                    count = 'twelfth';
                                }

                                return count;
                            };

                            tempUpdateObjectives.objectivesId = `${selectObjectUpdate.questId}-${handleObjectiveCount()}-objective`;
                            tempUpdateObjectives.objectivesTitle = selectedObjective.objectivesTitle;
                            tempUpdateObjectives.completed = false;

                            tempObjectivesArray.push(tempUpdateObjectives);
                        };
                    });

                    selectObjectUpdate.questObjectives = structuredClone(tempObjectivesArray);

                    questObjectivesSelector.innerHTML = '';
                    
                    selectObjectUpdate.questObjectives.forEach((seletedQuestObjective) => {
                        questObjectivesSelector.innerHTML += `<option value="${objectiveIndexCount}">${objectiveIndexCount}</option>`;
                        objectiveIndexCount += 1;
                        questObjectiveTitleInput.value = seletedQuestObjective.objectivesTitle;
                    });

                    questObjectivesSelector.innerHTML += `<option value="${selectObjectUpdate.questObjectives.length}">${selectObjectUpdate.questObjectives.length}</option>`;
                    questObjectivesSelector.value = (selectObjectUpdate.questObjectives.length) - 1;

                };
            });
        });

        submitObjectiveButton.addEventListener('click', () => {
            questArray.forEach((questObjectiveObject) => {
                if(questObjectiveObject.questId === questIdSelector.value){
                    let objectiveIndexCount = 0;
                    let indexObjectiveAmount = (questObjectiveObject.questObjectives.length) - 1;
                    let tempObjectiveObject = {};

                    if(questObjectiveObject.questObjectives.length <= questObjectivesSelector.value && indexObjectiveAmount < 11){
                        
                        console.log(questObjectiveObject.questObjectives);

                        function handleObjectiveCount(){
                            let count = 'first';

                            if(questObjectiveObject.questObjectives.length === 1){
                                count = 'second';
                            }else if(questObjectiveObject.questObjectives.length === 2){
                                count = 'third';
                            }else if(questObjectiveObject.questObjectives.length === 3){
                                count = 'fourth';
                            }else if(questObjectiveObject.questObjectives.length === 4){
                                count = 'fifth';
                            }else if(questObjectiveObject.questObjectives.length === 5){
                                count = 'sixth';
                            }else if(questObjectiveObject.questObjectives.length === 6){
                                count = 'seventh';
                            }else if(questObjectiveObject.questObjectives.length === 7){
                                count = 'eighth';
                            }else if(questObjectiveObject.questObjectives.length === 8){
                                count = 'ninth';
                            }else if(questObjectiveObject.questObjectives.length === 9){
                                count = 'tenth';
                            }else if(questObjectiveObject.questObjectives.length === 10){
                                count = 'eleventh';
                            }else if(questObjectiveObject.questObjectives.length === 11){
                                count = 'twelfth';
                            }

                            return count;
                        };

                        tempObjectiveObject.objectivesId = `${questObjectiveObject.questId}-${handleObjectiveCount()}-objective`;
                        tempObjectiveObject.objectivesTitle = questObjectiveTitleInput.value;
                        tempObjectiveObject.completed = false;

                        questObjectiveObject.questObjectives.push(structuredClone(tempObjectiveObject)) ;

                        questObjectivesSelector.innerHTML = '';
                    
                        questObjectiveObject.questObjectives.forEach((seletedQuestObjective) => {
                            questObjectivesSelector.innerHTML += `<option value="${objectiveIndexCount}">${objectiveIndexCount}</option>`;
                            objectiveIndexCount += 1;
                            questObjectiveTitleInput.value = seletedQuestObjective.objectivesTitle;
                        });

                        questObjectivesSelector.innerHTML += `<option value="${questObjectiveObject.questObjectives.length}">${questObjectiveObject.questObjectives.length}</option>`;
                        questObjectivesSelector.value = (questObjectiveObject.questObjectives.length) - 1;
                    }else if(questObjectiveObject.questObjectives.length > questObjectivesSelector.value){
                        questObjectiveObject.questObjectives[indexObjectiveAmount].objectivesTitle = questObjectiveTitleInput.value;
                    }else{
                        window.alert('Error: You cannot have more the 12 objectives per quest!!!')
                    };

                    console.log(questObjectiveObject.questObjectives);
                };
            });
        });

        questKeywordsSelector.addEventListener('click', () => {
            questArray.forEach((questObject) => {
                if(questIdSelector.value === questObject.questId ){
                    let keywordIndexCount = 0;
                    questObject.questKeywords.forEach((selectedKeyword) => {
                        if(questObject.questKeywords.length <= Number(questKeywordsSelector.value)){
                            questKeywordInput.value = 'word +';
                        }else if(Number(questKeywordsSelector.value) === keywordIndexCount && questObject.questKeywords.length > Number(questKeywordsSelector.value)){
                            questKeywordInput.value = selectedKeyword;
                        };
                        keywordIndexCount+=1;
                    });
                }
            });
        });

        deleteUpdateKeywordsButton.addEventListener('click', () => {
            questArray.forEach((selectObjectUpdate) => {
                if(questIdSelector.value === selectObjectUpdate.questId && selectObjectUpdate.questKeywords.length > 1){
                    let tempKeywordArray = [];
                    selectObjectUpdate.questKeywords.forEach((selectedKeyword) => {
                        if(questKeywordInput.value === selectedKeyword){
                            console.log(selectedKeyword);
                        }else{
                            tempKeywordArray.push(selectedKeyword);
                        }
                    });
                    selectObjectUpdate.questKeywords = structuredClone(tempKeywordArray);
                    updateInputInfo(selectObjectUpdate);
                    questKeywordsSelector.innerHTML += `<option value="${selectObjectUpdate.questKeywords.length}">${selectObjectUpdate.questKeywords.length}</option>`;
                    questKeywordsSelector.value = (selectObjectUpdate.questKeywords.length) - 1;
                };
            });
        }); 

        submitKeywordButton.addEventListener('click', () => {
            questArray.forEach((questKeywordyObject) => {
                if(questKeywordyObject.questId === questIdSelector.value){
                    let keywordsIndexCount = 0;
                    let indexKeywordAmount = (questKeywordyObject.questKeywords.length) -1;
                    console.log(questKeywordyObject.questKeywords);
                    if(questKeywordsSelector.value >indexKeywordAmount){
                        questKeywordyObject.questKeywords.push(questKeywordInput.value);
                        questKeywordsSelector.innerHTML = '';

                        questKeywordyObject.questKeywords.forEach((questSearchKeyword) => {
                            questKeywordsSelector.innerHTML += `<option value="${keywordsIndexCount}">${keywordsIndexCount}</option>`;
                            keywordsIndexCount += 1;
                            questKeywordInput.value = questSearchKeyword;
                        });

                        questKeywordsSelector.innerHTML += `<option value="${questKeywordyObject.questKeywords.length}">${questKeywordyObject.questKeywords.length}</option>`;
                        questKeywordsSelector.value = (questKeywordyObject.questKeywords.length) - 1;
                        
                    }else{
                        questKeywordyObject.questKeywords[questKeywordsSelector.value] = questKeywordInput.value;
                    };
                    console.log(questKeywordyObject.questKeywords);
                };
            });
        });




        questUpdateButton.addEventListener('click', () => {
            let questUpdatedObject = {};

            function createNewObject(){
                questArray.forEach((questUpdationObject) => {
                    if(questUpdationObject.questId === questIdSelector.value){
                        console.log(questUpdatedObject);


                        questUpdatedObject.questId = questIdSelector.value;
                        questUpdatedObject.questType = questUpdationObject.questType;
                        questUpdatedObject.questCategory = questCategoryInput.value;
                        questUpdatedObject.questTitle = questTitleSelector.value;
                        questUpdatedObject.questDetails = questDetailInput.value;
                        questUpdatedObject.questProgress = questProgressInput.value;
                        questUpdatedObject.questExperience = questExperienceInput.value;
                        questUpdatedObject.questRank = questRankSelectInput.value;
                        questUpdatedObject.questImage = questImageSelector.value;
                        questUpdatedObject.questRequirements = questRequirementsInput.value;
                        questUpdatedObject.questObjectives = questUpdationObject.questObjectives;
                        questUpdatedObject.questKeywords = questUpdationObject.questKeywords;
                        questUpdatedObject.briefingLink = questBriefingLink.value;
                        questUpdatedObject.isComplete = questUpdationObject.isComplete;
                        questUpdatedObject.isActive = questActiveCheckbox.value;
                        questUpdatedObject.requirementsChecked = questRequirementsCheckbox.value;


                        questUpdationObject = structuredClone(questUpdatedObject)
                        console.log(questUpdationObject);
                        console.log('first step');
                    };
                });
            };

            createNewObject();

            console.log(questUpdatedObject);
            console.log(questArray);
        });

    };

    initializingUpdateSection();
    questUpdateControls();
};

function controlQuestPage(){
    let loadState = false;

    if(creationUrlParams){
        generateQuestCreator();
        document.querySelector('.cancel-creation-button').addEventListener('click', () => {
            window.location.href = `quest.html`;
        });
    }else if(deleteUrlParams){
        generateDeleteQuests();
    }else if(updateUrlParams){
        generateUpdateQuest();
    }else{
        questArray.forEach((thisObject) => {

            document.querySelector(`.js-quest-cards-${thisObject.questId}`).addEventListener('click',() => {
                if(!loadState){
                    setTimeout(() => {
                        toggleQuestView = true;
                        generateQuestLog(thisObject);
                        controlQuestPage();
                        loadState = false;
                    }, 280);
                };
                loadState = true;
            });
            
            document.querySelector('.js-quest-menu-title').addEventListener('click', () => {
                toggleQuestView = false;
                generateQuestLog(thisObject);
                controlQuestPage();
                toggleActiveState();
            });
            document.querySelector('.js-active-quests-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = activeQuests;
                generateQuestLog(thisObject);
                controlQuestPage();
                toggleActiveState();
                document.querySelector('.js-quest-type-title').innerHTML = 'Active Quests';
            });
            document.querySelector('.main-quests-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = mainQuests;
                generateQuestLog(thisObject);
                controlQuestPage();
                toggleActiveState();
                document.querySelector('.js-quest-type-title').innerHTML = 'Main Quests';
            });
            document.querySelector('.js-side-quests-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = sideQuests;
                generateQuestLog(thisObject);
                controlQuestPage();
                toggleActiveState();
                document.querySelector('.js-quest-type-title').innerHTML = 'Side Quests';
            });
            document.querySelector('.js-errands-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = errandsList;
                generateQuestLog(thisObject);
                controlQuestPage();
                toggleActiveState();
                document.querySelector('.js-quest-type-title').innerHTML = 'Errand List';
            });
            document.querySelector('.js-collectables-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = collectablesList;
                generateQuestLog(thisObject);
                controlQuestPage();
                toggleActiveState();
                document.querySelector('.js-quest-type-title').innerHTML = 'Collectables';
            });
            document.querySelector('.js-add-quest-button').addEventListener('click', () => {
                window.location.href = `quest.html?creatingNewQuest=${true}`;
            });

        });
        toggleActiveState();
    };
};

function toggleActiveState(){
    questArray.forEach((thisObject) => {
        document.querySelector(`.js-quest-cards-${thisObject.questId}`).addEventListener('dblclick',() => {
            designActiveObject(thisObject);
        });
    });

    function designActiveObject(thisObject){
            let newItem = true;
            activeQuests.forEach((activeQuest) => {
                if(activeQuest.questId === thisObject.questId){
                    newItem = false;
                }
            });
            if(newItem){
                thisObject.isActive = true;
                activeQuests.push(thisObject);
                console.log(activeQuests);
            }else{
                console.log('Quest is already active');
            };
    };
};

generateQuestLog();
controlQuestPage();