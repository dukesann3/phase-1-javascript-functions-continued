// code your solution here

function saturdayFun(activity='roller-skate'){
    const returnStatement = `This Saturday, I want to ${activity}!`;
    return returnStatement;
}

function mondayWork(activity='go to the office'){
    const returnStatement = `This Monday, I will ${activity}.`;
    return returnStatement;
}

function wrapAdjective(adj){
    const youAre = 'You are';
    return function (baseWord){
        return `${youAre} ${adj}${baseWord}${adj}!`;
    }
}

