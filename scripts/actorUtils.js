// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { moduleName, moduleTag } from '../index.js';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    getConditions
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * @returns {Array<String> || Array<Object>} conditions
 */
export function getConditions(token, fullObject = false) {
	const effects = token.data.actorData.effects;
	if (fullObject) return effects;

	return effects.map(e => e.label);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Get Condition Immunities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getConditionImmunities(token) {
	return token.data.actorData.data.traits?.conditionImmunities || [];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Get Condition Immunities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageImmunities(token) {
	return token.data.actorData.data.traits?.damageImmunities || [];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                  Get Resistances
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageResistances(token) {
	return token.data.actorData.data.traits?.damageResistances || [];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageVulnerabilities(token) {
	return token.data.actorData.data.traits?.damageVulnerabilities || [];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getLanguages(token) {
	return token.data.actorData.data.proficiencies?.languages || [];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getSenses(token) {
	return token.data.actorData.data.attributes?.senses || [];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    hasSpellSlots
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function hasSpellPoints(token) {
	const points = token.data.actorData.data.spellResources?.points;
	if (!points) return false;

	return points.current > 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    hasSpellSlots
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function hasSpellSlots(token, spellLevel = -1) {
	const slots = token.data.actorData.data.spellResources?.slots;
	if (!slots) return false;

	if (spellLevel === -1) {
		const available = Object.values(slots).reduce((a, b) => a + b.current, 0);
		if (available > 0) return true;
		else return false;
	}

	if (!slots[spellLevel]) return false;
	return slots[spellLevel].current > 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     isBloodied
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * @returns {Boolean}
 */
export function isBloodied(token) {
	const effects = getConditions(token);

	return effects.filter(e => e.label === 'Bloodied').length !== 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     isWounded
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isWounded(token, hpBased = true) {}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     isSpellCaster
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isSpellCaster(token) {
	return token.data.actorData.data.spellResources ? true : false;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                   isUnconscious
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isUnconscious(token, hpBased = true) {
	const effect = getConditions(token).filter(e => e.label === 'Unconscious');
	const hpBelowZero = token.data.actorData.data.attributes.hp < 1;

	if (hpBased) return hpBelowZero || effect.length !== 0;
	else return effect.length !== 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
