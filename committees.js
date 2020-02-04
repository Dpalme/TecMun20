/** Class representing a commitee.
 * @property {string} type - The type of commitee.
 * @property {string} name - The full name of the commitee,
 * @property {string} abreviation - The abreviated name of the commitee
 */
class Commitee {
	/**
     * Create a Commitee.
	 * @param {number} type - 0 = General Assembly, 1 = Special Committees, 2 = Crisis Committees
	 * @param {string} name - The full name of the commitee.
	 * @param {string} abreviation - The abreviated name of the commitee.
	 */
	constructor(type, abreviation, name) {
		if (type == 0) this.type = "General Assembly";
		if (type == 1) this.type = "Special Committees";
		if (type == 2) this.type = "Crisis Committees";
		this.name = name;
		this.abreviation = abreviation;
	}
}

/** 
 * Alters the default toString() function for the Commitee class.
 * @returns {string} Commitee abreviation
 */
Commitee.prototype.toString = function() {
	return this.abreviation;
};

/** @type {Commitee[]} */ 
var committees = [
	new Commitee(0, "SPAG", "Sesión Plenaria de la Asamblea General"),
	new Commitee(
		0,
		"DISEC",
		"First Commitee Disarment and International Security"
	),
	new Commitee(
		0,
		"TERCERA",
		"Tercera Comisión en Asuntos Sociales, Culturales y Humanitarios"
	),
	new Commitee(
		0,
		"UN WOMEN",
		"United Nations Entity for Gender Equality and the Empowerment of Women"
	),
	new Commitee(
		0,
		"ACNUR",
		"Alto Comisionado de las Naciones Unidas para los Refugiados"
	),
	new Commitee(
		0,
		"PNUFID",
		"Programa de las Naciones Unidas para la Fiscalización Internacional de Drogas"
	),
	new Commitee(1, "UNFPA", "United Nations Population Fund"),
	new Commitee(1, "UNICEF", "Fondo de las Naciones Unidas para la Infancia"),
	new Commitee(
		1,
		"CSTSD",
		"Commission de la Science et de la Technologie au Service du Dévelopment"
	),
	new Commitee(1, "COP 25", "Conferencia de las Partes 25"),
	new Commitee(1, "CCT", "Comité Contra el Terrorismo"),
	new Commitee(2, "OEA", "Organización de los Estados Americanos"),
	new Commitee(2, "HRW", "Human Rights Watch"),
	new Commitee(2, "FMI", "Fondo Monetario Internacional"),
	new Commitee(2, "NATO", "North Atlantic Treaty Organization"),
	new Commitee(2, "SC", "Security Council"),
	new Commitee(2, "ICC", "International Criminal Court")
];

/** @type {Commitee[]} */ 
var general_assembly = [];
/** @type {Commitee[]} */ 
var special_committees = [];

/** @type {Commitee[]} */ 
var crisis_committees = [];

committees.forEach(commitee => {
	if (commitee.type == "General Assembly") {
		general_assembly.push(commitee);
	}
	if (commitee.type == "Special Committees") {
		special_committees.push(commitee);
	}
	if (commitee.type == "Crisis Committees") {
		crisis_committees.push(commitee);
	}
});
