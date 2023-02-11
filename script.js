

const firstToUpper = function (str) {
    let arr = str.split("");

    arr[0] = arr[0].toUpperCase();

    let upped = "";

    arr.forEach((letter) => { upped += letter });

    return upped;
}

const dice10 = function () {
    return Math.floor(Math.random() * 9 + 1);
}

const getRandomInt = function (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const unitFac = function (owner, name, type, inID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
    diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {
    return {
        owner,
        name,
        type,
        inID,
        me,
        di,
        de,
        mv,
        mo,
        en,
        co,
        chargeBonus,
        meVsCav,
        meVsInf,
        meVsMis,
        diVsCav,
        diVsInf,
        diVsMis,
        deVsCav,
        deVsInf,
        deVsMis,
        isEngaged: null,
        isFleeing: 0,
        isDead: 0,
        usedMissiles: 0,
        wound: function () {
            if (this.en > 0) {
                this.en -= 1;
            }
        },
        flee: function () {
            if (this.isFleeing === 0) {
                this.isFleeing = 1;
            }
        },
        stopFlee: function () {
            if (this.isFleeing === 1) {
                this.isFleeing = 0;
            }
        },
        engage: function (targetID) {
            this.isEngaged = targetID;
        },
        disengage: function () {
            this.isEngaged = null;
        },
        die: function () {
            this.isDead = 1;
        },
        useMissiles: function () {
            this.usedMissiles = 1;
        },
        resetMissiles: function () {
            this.usedMissiles = 0;
        }
    }
}

const armyModule = function (letter) {

    let IDnum = 0;

    let army = {
        armyID: `army` + letter,
        mis: [],
        cav: [],
        inf: []
    }

    const getArmy = function () {
        return army;
    }

    const getAlive = function () {
        let aliveMis = army.mis.filter(unit => unit.isDead === 0);
        let aliveCav = army.cav.filter(unit => unit.isDead === 0);
        let aliveInf = army.inf.filter(unit => unit.isDead === 0);

        let newArmy = {
            armyID: army.armyID,
            mis: aliveMis,
            cav: aliveCav,
            inf: aliveInf
        }

        return newArmy;
    }

    const getMis = function () {
        return army[`mis`];
    }

    const getCav = function () {
        return army[`cav`];
    }

    const getInf = function () {
        return army[`inf`];
    }

    const resetArmy = function () {
        IDnum = 0;

        army.mis = [];
        army.cav = [];
        army.inf = [];
    }

    const addUnit = function (owner, name, type, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
        diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {

        let inID = letter + `.` + type + `-` + IDnum;

        IDnum++;

        let newUnit = unitFac(owner, name, type, inID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
            diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis);

        if (army[newUnit.type]) {

            army[newUnit.type].push(newUnit);

            console.log(`${newUnit.inID} successfully created`)

        } else {
            let error = `ERR addUnit : unit type doesn't exist`;
            console.log(error);
            alert(error);

            return -1;
        }
    };

    const getUnitIndexById = function (ID) {

        // this function takes an ID and returns an object containing the array and the index in that array of the
        // inputed ID.

        let type = ID.split("-")[0].split(".")[1];

        if (army[type].length > 0) {
            for (let i = 0; i < army[type].length; i++) {
                if (army[type][i].inID === ID) {
                    return { type: type, index: i };

                } else if (i === (army[type].length - 1)) {
                    let error = `ERR getUnitIndexById : unit '${ID}' not found`;
                    console.log(error);
                    alert(error);

                    return -1;
                }
            }
        } else if (army[type]) {
            let error = `ERR getUnitIndexById : unit ${ID} not found`;
            console.log(error);
            alert(error);

            return -1;
        } else {
            let error = `ERR getUnitIndexById : ${ID} unit type doesn't exist`;
            console.log(error);
            alert(error);

            return -1;
        }
    }

    const getUnit = function (ID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR getUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        return army[access.type][access.index];
    }

    const woundUnit = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR woundUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        army[access.type][access.index].wound();
        console.log(`woundUnit : ${ID} got wounded`);

        if (army[access.type][access.index].en <= 0) {
            console.log(`woundUnit : ${ID} got killed`);
            killUnit(ID);
        }

    }

    const killUnit = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR killUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].en > 0) {
            let error = `ERR killUnit : unit isn't dead`
            console.log(error);
            alert(error);
        } else {
            army[access.type][access.index].die();
            console.log(`killUnit : ${ID} got killed`);
        }
    }

    const route = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR route : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].isFleeing === 0) {
            army[access.type][access.index].flee();

            console.log(`route: ${ID} is routing !`);
        } else {
            console.log(`ERR route : ${ID} is already routed`);
        }
    }

    const unroute = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR unroute : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].isFleeing === 1) {
            army[access.type][access.index].stopFlee();
            console.log(`unroute: ${ID} rallied !`);
        } else {
            console.log(`unroute : ${ID} is not routed`);
        }
    }

    const engageUnit = function (ID, targetID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR engageUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].engage(targetID);

        console.log(`engageUnit : ${ID} engaged in melee with ${targetID}`);
    }

    const disengageUnit = function (ID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR disengageUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].disengage();
        console.log(`disengageUnit : ${ID} disengaged from melee`);
    }

    const unitUseMissiles = function (ID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR unitUseMissiles : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].useMissiles();
        console.log(`unitUseMissiles : ${ID} used missile attack`)
    }

    const armyResetMissiles = function () {
        army.mis.forEach((unit) => { unit.resetMissiles() });
        army.cav.forEach((unit) => { unit.resetMissiles() });
        army.inf.forEach((unit) => { unit.resetMissiles() });
    }

    return {
        getArmy,
        getAlive,
        getMis,
        getCav,
        getInf,
        resetArmy,
        addUnit,
        getUnitIndexById,
        getUnit,
        woundUnit,
        killUnit,
        route,
        unroute,
        engageUnit,
        disengageUnit,
        unitUseMissiles,
        armyResetMissiles
    }
};

let armyA = (armyModule)(`A`);
let armyB = (armyModule)(`B`);

armyA.addUnit('Gaetan', 'Conscrits', 'inf', 2, null, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Lanciers', 'inf', 4, null, 8, 2, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyA.addUnit('Gaetan', 'Cavalerie lourde', 'cav', 4, -2, 10, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Archers d\'élite', 'mis', 1, 6, 8, 3, 6, 3, 5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);


armyB.addUnit('Gérard', 'Conscrits', 'inf', 2, null, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Lanciers', 'inf', 4, null, 8, 2, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyB.addUnit('Gérard', 'Cavalerie lourde', 'cav', 4, -2, 10, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Archers d\'élite', 'mis', 1, 6, 8, 3, 6, 3, 5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);

function attackRoll(atkID, atk, defID, def) {
    let roll = dice10();
    let atkValue = roll + atk;

    if (roll === 1) {
        console.log(`${atkID} miss ${defID} (roll ${roll})`);
        return 'miss';
    } else if (roll === 10) {
        if (atkValue >= (def * 2)) {
            console.log(`${atkID} hit ${defID} (roll ${roll}) and crit`);
            return 'crit'
        } else {
            console.log(`${atkID} hit ${defID} (roll ${roll})`);
            return 'hit';
        }

    }

    if (atkValue < def) {
        console.log(`${atkID} miss ${defID} (roll ${roll})`);
        return 'miss';
    } else if (atkValue >= (def * 2)) {

        console.log(`${atkID} hit ${defID} (roll ${roll}) and crit`);
        return 'crit'
    } else if (atkValue >= def) {
        console.log(`${atkID} hit ${defID} (roll ${roll})`);
        return 'hit';
    } else {
        console.log(`ERR attackRoll : bad values`);
        return -1;
    }
}


function rangePhase() {

    let typeSwitch = [`mis`, `cav`, `inf`];

    let aMissiles = [];

    let a = armyA.getArmy();

    for (let key in a) {

        if (key === `armyID`) {
            continue;
        }

        a[key].forEach((unit) => {
            if (!unit.isEngaged && (unit.di || unit.di === 0)) {
                aMissiles.push(unit);
            }
        })

    }

    let bMissiles = [];

    let b = armyB.getArmy();

    for (let key in b) {

        if (key === `armyID`) {
            continue;
        }

        b[key].forEach((unit) => {
            if (!unit.isEngaged && (unit.di || unit.di === 0)) {
                bMissiles.push(unit)
            }
        })
    }

    let i = 0;


    function missileVolley(i, missileList, armyList, armyModuleCallback) {

        if (!missileList[i]) {
            console.log(`missileVolley : all range-capable units of ${missileList} already shot`);
            return;
        }

        if (!armyList[`mis`] && !armyList[`cav`] && !armyList[`inf`]) {

            let error = `ERR rangePhase : army B is no more`;
            console.log(error);
            alert(error);
            return -1

        }

        if (missileList[i].type === 'cav') {
            let dice = dice10();

            if ((dice + missileList[i].di) <= (missileList[i].me + missileList[i].chargeBonus)) {
                console.log(`${missileList[i].inID} saves its action for movement phase`);
                return;
            }
        }

        let list;

        do {
            let switchRoll = getRandomInt(0, 2);
            list = armyList[typeSwitch[switchRoll]];
        } while (!list[0]);

        let shooter = missileList[i];

        let target = shooter.diTarget = list[getRandomInt(0, (list.length - 1))];

        console.log(`${shooter.inID} targets ${target.inID} for range attack`);

        let diBonus = `diVs` + firstToUpper(target.type);

        if (shooter[diBonus]) {
            shooter.di += shooter[diBonus];
            console.log(`rangePhase : apply ${shooter[diBonus]} bonys to ${shooter.inID}'s Di`);
        } else {
            console.log(`rangePhase : no Di bonus to apply against this type`);
        }

        if (target.deVsMis) {
            target.de += target.deVsMis;
            console.log(`rangePhase : apply ${target.deVsMis} bonus to ${target.inID}'s De`);
        } else {
            console.log(`rangePhase : no bonus De against range attacks`)
        }

        let result = attackRoll(shooter.inID, shooter.di, target.inID, target.de);

        switch (result) {
            case 'miss':
                console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and miss !`);
                break;

            case 'hit':
                console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and hit !`);
                armyModuleCallback.woundUnit(target.inID);
                break;

            case 'crit':
                console.log(`rangePhase : ${shooter.inID} shoots at ${target.inID} and crits !`);
                armyModuleCallback.woundUnit(target.inID);
                armyModuleCallback.route(target.inID);
                break;
        }
    }

    do {

        missileVolley(i, aMissiles, b, armyB);
        missileVolley(i, bMissiles, a, armyA);

        i++;
    } while (aMissiles[i] || bMissiles[i])

}

rangePhase();

function movementPhase(...armies) {

    let armyList = [];

    function breakEngage(unit) {
        let pairedID = unit.isEngaged;
        let unitID = unit.inID;

        let pairedArmy = `army` + pairedID.split('.')[0];
        let unitArmy = `army` + unitID.split('.')[0];

        armies.forEach((army) => {
            if (army.armyID === pairedArmy) {
                army.disengageUnit(pairedID);
            }

            if (army.armyID === unitArmy) {
                army.disengageUnit(unitID);
            }
        })
    }

    function engage(unitID, targetID) {

        let targetArmy = `army` + targetID.split('.')[0];
        let unitArmy = `army` + unitID.split('.')[0];

        armies.forEach((army) => {
            if (army.getArmy().armyID === targetArmy) {
                army.engageUnit(targetID, unitID);
            }

            if (army.getArmy().armyID === unitArmy) {
                army.engageUnit(unitID, targetID);
            }
        })
    }

    armies.forEach((army) => {
        let unitArr = [];
        let curr = army.getArmy();

        unitArr = curr.inf.concat(curr.cav, curr.mis);

        // this randomises the position of each unit in the array to make sure
        // the same units aren't playing first every time ;

        for (let i = unitArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = unitArr[i];
            unitArr[i] = unitArr[j];
            unitArr[j] = temp;
        }

        armyList.push(unitArr);
    });

    for (let i = 0; ; i++) {

        console.log(i);

        let witness = 0;

        armyList.forEach((army) => { if (army[i]) { witness = 1 } });

        if (witness === 0) {
            console.log(`movmentPhase : no unit remains. Break`);
            // if all units of all armies have played, break the loop;
            break;
        }

        for (let j = 0; j < armyList.length; j++) {
            let curr = armyList[j][i];

            console.log(`movementPhase : ${curr.inID}'s movement phase`);

            if (curr.isEngaged) {

                console.log(`movementPhase : ${curr.inID} is already engaged`);

                let coin = getRandomInt(0, 1);

                if (!coin && curr.type !== `mis`) {

                    console.log(`movementPhase : ${curr.inID} chooses to stay engaged`);
                    continue;
                }

                console.log(`movementPhase : ${curr.inID} tries to break free`);

                coin = getRandomInt(0, 1);

                if (coin) {
                    breakEngage(curr)

                    console.log(`movementPhase : ${curr.inID} breaks engage`);
                    continue;
                }

                console.log(`movementPhase : ${curr.inID} fails to disengage`);
            }

            if (curr.isEngaged) {
                console.log(`movementPhase : ${curr.inID} is still engage and didn't move out`);
                continue;
            }

            if ((curr.type === `mis`)) {
                console.log(`movementPhase : ${curr.inID} is missile unit and choses to stay out of mele`);
                continue;
            }

            console.log(`movementPhase : ${curr.inID} is not engaged`);
            console.log(`movementPhase : ${curr.inID} target selection proceeding`);

            let targetList = [];

            for (let k = 0; k < armyList.length; k++) {

                if (armyList[k][0].inID.split('.')[0] != curr.inID.split('.')[0]) { // if army from the list is not the same as curr's army
                    armyList[k].forEach((unit) => {
                        if (!unit.isEngaged) {

                            
                            targetList.push(unit);
                        }
                    })
                }
            }

            let targetIndex = getRandomInt(0, (targetList.length -1));

            let target = targetList[targetIndex].inID;

            engage(curr.inID, target);

            console.log(`movementPhase : ${curr.inID}'s movement phase ends`);

        }

    }


}

movementPhase(armyA, armyB);

console.log(armyA.getAlive());
console.log(armyB.getAlive());
console.log(armyA.getArmy());
console.log(armyB.getArmy());