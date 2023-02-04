import './style.css'

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
        meTarget: null,
        diTarget: null,
        isEngaged: null,
        isFleeing: 0,
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
        missileTarget: function (targetID) {
            this.diTarget = targetID;
        },
        meleeTarget: function (targetID) {
            this.meTarget = targetID;
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
        ID = 0;

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
            army[access.type].splice(access.index, 1);
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
            let error = `ERR engageUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].disengage();
        console.log(`engageUnit : ${ID} disengaged from melee`);
    }

    const missileTarget = function (ID, targetID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR missileTarget : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        /* if (access[access.type][access.index].di === null) {
            let error = `ERR missileTarget : ${ID} have no missile attack`;
            console.log(error);
            alert(error);
            return -1;
        } */

        army[access.type][access.index].missileTarget(targetID);

        console.log(`missileTarget : ${ID} targets ${targetID} at range`);
    }

    const meleeTarget = function (ID, targetID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR missileTarget : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].meleeTarget(targetID);

        console.log(`meleeTarget : ${ID} targets ${targetID} for melee`);
    }

    return {
        getArmy,
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
        missileTarget,
        meleeTarget,
    }
};

let armyA = (armyModule)(`A`);
let armyB = (armyModule)(`B`);

armyA.addUnit('Gaetan', 'Conscrits', 'inf', 2, null, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Lanciers', 'inf', 4, null, 8, 2, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyA.addUnit('Gaetan', 'Cavalerie lourde', 'cav', 4, -2, 10, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Archers d\'élite', 'mis', 1, 6, 8, 3, 6, 3, 5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0);


armyB.addUnit('Gérard', 'Conscrits', 'inf', 2, null, 4, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Lanciers', 'inf', 4, null, 8, 2, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyB.addUnit('Gérard', 'Cavalerie lourde', 'cav', 4, -2, 10, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Archers d\'élite', 'mis', 1, 6, 8, 3, 6, 3, 5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0);

function attackRoll(atkID, atk, defID, def) {
    let roll = dice10();
    let atkValue = roll + atk;

    /* console.log(atkID);
    console.log(atk);
    console.log(defID);
    console.log(def); */

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

function toBattle() {


    let typeSwitch = [`mis`, `cav`, `inf`];

    // missile phase

    function setMissileTargets() {
        let aMissiles = armyA.getMis();
        let bMissiles = armyB.getMis();

        for (let i = 0; i < aMissiles.length; i++) {

            let preRoll = getRandomInt(0, 2);

            let list = armyB.getArmy()[typeSwitch[preRoll]];

            let mainRoll = getRandomInt(0, (list.length - 1));

            let targetID = list[mainRoll].inID;

            armyA.missileTarget(aMissiles[i].inID, targetID);
        }

        for (let i = 0; i < bMissiles.length; i++) {

            let preRoll = getRandomInt(0, 2);

            let list = armyA.getArmy()[typeSwitch[preRoll]];

            let mainRoll = getRandomInt(0, (list.length - 1));

            let targetID = list[mainRoll].inID;

            armyB.missileTarget(bMissiles[i].inID, targetID);
        }
    }

    setMissileTargets();

    function missileVolley() {
        let aMissiles = armyA.getMis();
        let bMissiles = armyB.getMis();
        let i = 0;

        do {

            console.log(i);

            if (aMissiles[i]) {
                let missile = aMissiles[i];
                let target = armyB.getUnit(missile.diTarget);

                let diBonus = `diVs` + firstToUpper(target.type); // need to set first letter of type to upper case to match camel case;

                console.log(diBonus);

                console.log(missile[diBonus]);

                missile.di += missile[diBonus];
                target.de += target.deVsMis;

                let result = attackRoll(missile.inID, missile.di, target.inID, target.de);

                switch (result) {
                    case 'miss':
                        break;

                    case 'hit':
                        armyB.woundUnit(target.inID);
                        break;

                    case 'crit':
                        armyB.woundUnit(target.inID);
                        armyB.route(target.inID);
                        break;
                }
            }

            if (bMissiles[i]) {
                let missile = bMissiles[i];
                let target = armyA.getUnit(missile.diTarget);

                let diBonus = `diVs` + firstToUpper(target.type); // need to set first letter of type to upper case to match camel case;

                missile.di += missile[diBonus];
                target.de += target.deVsMis;

                let result = attackRoll(missile.inID, missile.di, target.inID, target.de);

                switch (result) {
                    case 'miss':
                        break;

                    case 'hit':
                        armyA.woundUnit(target.inID);
                        break;

                    case 'crit':
                        armyA.woundUnit(target.inID);
                        armyA.route(target.inID);
                        break;
                }
            }

            i++;

        } while (aMissiles[i] && bMissiles[i]);
    }

    missileVolley();
}

toBattle();
console.log(armyA.getArmy());
console.log(armyB.getArmy());