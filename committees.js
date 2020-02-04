/** Class representing a committee.
 * @property {string} type - The type of committee.
 * @property {string} name - The full name of the committee,
 * @property {string} abreviation - The abreviated name of the committee
 */
class Committee {
	/**
     * Create a Committee.
	 * @param {number} type - 0 = General Assembly, 1 = Special Committees, 2 = Crisis Committees
	 * @param {string} name - The full name of the committee.
	 * @param {string} abreviation - The abreviated name of the committee.
	 */
	constructor(type, abreviation, name) {
		if (type == 0) this.type = "General Assembly";
		if (type == 1) this.type = "Special Committees";
		if (type == 2) this.type = "Crisis Committees";
		this.name = name;
		this.abreviation = abreviation;
    }
    
    /**
     * Returns a string that represents the committee in a parsable friendly way
	 * @return {string}
	 */
    seralize(){
        return this.abreviation + "," + this.name + "," + this.type;
    }
}

/** 
 * Alters the default toString() function for the Committee class.
 * @returns {string} Committee abreviation
 */
Committee.prototype.toString = function() {
	return this.abreviation;
};

/** @type {Committee[]} */ 
var committees = [
	new Committee(
        0,
		"First Committee",
        "Disarment and International Security"
    ),
	new Committee(
		0,
		"Second Committee",
		"Economic and Financial"
	),
	new Committee(
		0,
		"Third Committee",
		"Tercera Comisión en Asuntos Sociales, Culturales y Humanitarios"
	),
	new Committee(
		0,
		"UN WOMEN",
		"United Nations Entity for Gender Equality and the Empowerment of Women"
	),
	new Committee(
		0,
		"ACNUR",
		"Alto Comisionado de las Naciones Unidas para los Refugiados"
	),
	new Committee(
		0,
		"PNUFID",
		"Programa de las Naciones Unidas para la Fiscalización Internacional de Drogas"
	),
	new Committee(1, "UNFPA", "United Nations Population Fund"),
	new Committee(1, "UNICEF", "Fondo de las Naciones Unidas para la Infancia"),
	new Committee(
		1,
		"CSTSD",
		"Commission de la Science et de la Technologie au Service du Dévelopment"
	),
	new Committee(1, "COP 25", "Conferencia de las Partes 25"),
	new Committee(1, "CCT", "Comité Contra el Terrorismo"),
	new Committee(2, "OEA", "Organización de los Estados Americanos"),
	new Committee(2, "HRW", "Human Rights Watch"),
	new Committee(2, "FMI", "Fondo Monetario Internacional"),
	new Committee(2, "NATO", "North Atlantic Treaty Organization"),
	new Committee(2, "SC", "Security Council"),
	new Committee(2, "ICC", "International Criminal Court")
];

/** @type {Committee[]} */ 
var general_assembly = [];
/** @type {Committee[]} */ 
var special_committees = [];

/** @type {Committee[]} */ 
var crisis_committees = [];

committees.forEach(committee => {
	if (committee.type == "General Assembly") {
		general_assembly.push(committee);
	}
	if (committee.type == "Special Committees") {
		special_committees.push(committee);
	}
	if (committee.type == "Crisis Committees") {
		crisis_committees.push(committee);
	}
});
