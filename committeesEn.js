new Committee(
	"First Committee",
	"Disarmament and International Security",
	"General Assembly"
);
new Committee(
    "Second Committee",
    "Economic and Financial",
    "General Assembly"
);
new Committee(
    "Third Committee",
    "Social, Humanitarian & Cultural",
    "General Assembly"
);
new Committee(
    "Fourth Committe",
    "Special Political & Decolonization",
    "General Assembly"
);
new Committee(
    "Fifth Committee",
    "Administrative & Budgetary",
    "General Assembly"
);
new Committee("Sixth Committee", "Legal", "General Assembly");
new Committee("CTC", "Counter-Terrorism Committee", "Security Council");
new Committee("1540", "Non-Proliferation Committee", "Security Council");
new Committee(
    "MSC",
    "United Nations Military Staff Committee",
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
