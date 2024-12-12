let section = $state('hero');

export function getSection() {
	
	function setSection(s) {
		section = s
	}

	return {
		get section() {
			return section;
		},
		setSection,
	};
}