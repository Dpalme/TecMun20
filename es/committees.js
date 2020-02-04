new Committee(
	"Primera Comisión",
	"Desarme y Seguridad Internacional",
	"Asamblea General"
);
new Committee(
    "Segunda Comisión",
    "Asuntos Económicos, Financieros, Ambientales y de Desarrollo",
    "Asamblea General"
);
new Committee(
    "Tercera Comisión",
    "Asuntos Sociales, Humanitarios y Culturales",
    "Asamblea General"
);
new Committee(
    "Cuarta Comisión",
    "la Política Especial y de Descolonización",
    "Asamblea General"
);
new Committee(
    "Quinta Comisión",
    "Asuntos Administrativos y de Presupuesto",
    "Asamblea General"
);
new Committee("Sexta Comisión", "Comisión Jurídica", "Asamblea General");
new Committee("CTC", "Counter-Terrorism Comisión", "Security Council");
new Committee("1540", "Non-Proliferation Comisión", "Security Council");
new Committee(
    "MSC",
    "United Nations Military Staff Comisión",
    "Security Council"
);
new Committee("Sanctions", "Sanctions Committees", "Security Council");
new Committee("ECA", "Economic Commision for Africa", "ECOSOC");
new Committee("ECE", "Economic Commision for Europe", "ECOSOC");
new Committee(
    "ECLAC",
    "Economic Commision for Latin America and the Caribbean",
    "ECOSOC"
);
new Committee(
    "ESCAP",
    "Economic and Social Commision for Asia and the Pacific",
    "ECOSOC"
);
new Committee(
    "ESCWA",
    "Economic and Social Commision for Western Asia",
    "ECOSOC"
);

/** @type {Committee[]} */
var general_assembly = [];

/** @type {Committee[]} */
var special_committees = [];

/** @type {Committee[]} */
var crisis_committees = [];

allCommittees.forEach(committee => {
	if (committee.type == "Asamblea General") {
		general_assembly.push(committee);
	}
	if (committee.type == "Special Committees") {
		special_committees.push(committee);
	}
	if (committee.type == "Crisis Committees") {
		crisis_committees.push(committee);
	}
});
