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
                    <div class="quest-menu-title js-quest-menu-title"><i class="fa-solid fa-bars"></i></div>
                    <div class="quest-type-title-container">
                        <div class="quest-type-title">Active Quests</div>
                        <div class="add-quest-link">Create</div>
                    </div>
                </div>
                <div class="quest-type-menu-body">      
                    <div class="active-quests-selection js-active-quests-selection">
                        <div class="quest-menu-icon"><i class="fa-regular fa-hourglass-half"></i></div>
                        <div></div>
                    </div>
                    <div class="main-quests-selection js-main-quests-selection">
                        <div class="quest-menu-icon"><i class="fa-solid fa-briefcase"></i></div>
                        <div></div>
                    </div>
                    <div class="side-quests-selection js-side-quests-selection">
                        <div class="quest-menu-icon"><i class="fa-solid fa-diamond"></i></div>
                        <div></div>
                    </div>
                    <div class="errands-selection js-errands-selection">
                        <div class="quest-menu-icon"><i class="fa-solid fa-bag-shopping"></i></div>
                        <div></div>
                    </div>
                    <div class="collectables-selection js-collectables-selection">
                        <div class="quest-menu-icon"><i class="fa-solid fa-star"></i></div>
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
                        <div class="quest-type-title">Active Quests</div>
                        <div class="add-quest-link">Create</div>
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
                        <div class="quest-icon"><img src="" alt="" style="
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
                    <div class="quest-icon"><img src="" alt="" style="
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
                <div class="quest-description-header">
                    <div class="description-title">${objectItem.questTitle}</div>
                    <div class="active-quest-button">Add</div>
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
        
        document.querySelector('.js-quest-description-section').innerHTML= detailHTML;
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
    /*
        <div class="quest-creator">
            <div class="creator-header">
                <div class="quest-creator-title">Create Quests</div>
                <div class="quest-links">
                    <div class="main-quest-link">M</div>
                    <div class="side-quest-link">S</div>
                    <div class="errands-link">E</div>
                </div>
            </div>
            <div class="creator-body"></div>
        </div>
    */
};

function controlQuestPage(){
    let loadState = false;

    if(false){
        generateQuestCreator();
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
            });
            document.querySelector('.js-active-quests-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = activeQuests;
                generateQuestLog(thisObject);
                controlQuestPage();
            });
            document.querySelector('.main-quests-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = mainQuests;
                generateQuestLog(thisObject);
                controlQuestPage();
            });
            document.querySelector('.js-side-quests-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = sideQuests;
                generateQuestLog(thisObject);
                controlQuestPage();
            });
            document.querySelector('.js-errands-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = errandsList;
                generateQuestLog(thisObject);
                controlQuestPage();
            });
            document.querySelector('.js-collectables-selection').addEventListener('click', () => {
                toggleQuestView = false;
                questArray = collectablesList;
                generateQuestLog(thisObject);
                controlQuestPage();
            });

        });
    };
};

function toggleActiveState(){
    questArray.forEach((thisObject) => {
        document.querySelector(`.js-quest-cards-${thisObject.questId}`).addEventListener('dblclick',() => {
            designActiveObject();
        });
    });

    function designActiveObject(){
        console.log('Activated');
    };
};


generateQuestLog();

controlQuestPage();


toggleActiveState();