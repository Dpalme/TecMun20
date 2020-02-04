/** Class representing a committee.
 * @property {string} council - Council the committee belongs to
 * @property {string} name - Full name of the committee,
 * @property {string} abreviation - Abreviated name of the committee
 */
class Committee {
	/**
	 * Create a Committee.
	 * @param {string} name - Full name of the committee.
	 * @param {string} abreviation - Abreviated name of the committee.
	 * @param {string} council - Council the committee belongs to
	 */
	constructor(abreviation, name, council) {
		this.council = council;
		this.name = name;
		this.abreviation = abreviation;
		allCommittees.push(this);
	}

	/**
	 * Returns a string that represents the committee in a parsable friendly way
	 * @return {string}
	 */
	seralize() {
		return [this.abreviation, this.name, this.council].join("|");
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
var allCommittees = [];