import { adjectives, animals, colors, uniqueNamesGenerator } from 'unique-names-generator';

export function getRandomName() {
	const randomName: string = uniqueNamesGenerator({
		dictionaries: [adjectives, animals],
		separator: ' '
	});
	return randomName;
}
