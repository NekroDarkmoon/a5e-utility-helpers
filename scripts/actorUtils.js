// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { moduleName, moduleTag } from '../index.js';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    	isPC
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function _getData(token) {
	if (char.actor.data.type === 'character') return token.actor.data;
	else return token.data.actorData;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    getConditions
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * @returns {Array<String> || Array<Object>} conditions
 */
export function getConditions(token, fullObject = false) {
	let effects;
	if (isPC(token)) effects = token.actor.data.effects;
	else effects = token.data.actorData.effects;

	if (!effects) return [];
	if (fullObject) return effects;

	return effects.map(
		e => CONFIG.A5E.conditions[e.label.toLowerCase()] || e.label
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Get Condition Immunities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getConditionImmunities(token) {
	let traits;
	if (isPC(token)) traits = token.actor.data.data.traits;
	else traits = token.data.actorData.data.traits;

	return (
		traits?.conditionImmunities.map(t => CONFIG.A5E.damageTypes[t] || t) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Get Condition Immunities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageImmunities(token) {
	let traits;
	if (isPC(token)) traits = token.actor.data.data.traits;
	else traits = token.data.actorData.data.traits;

	return (
		traits?.damageImmunities.map(t => CONFIG.A5E.damageTypes[t] || t) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                  Get Resistances
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageResistances(token) {
	let traits;
	if (isPC(token)) traits = token.actor.data.data.traits;
	else traits = token.data.actorData.data.traits;

	return (
		traits?.damageResistances.map(t => CONFIG.A5E.damageTypes[t] || t) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageVulnerabilities(token) {
	let traits;
	if (isPC(token)) traits = token.actor.data.data.traits;
	else traits = token.data.actorData.data.traits;

	return (
		traits?.damageVulnerabilities.map(t => CONFIG.A5E.damageTypes[t] || t) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getLanguages(token) {
	let profs;
	if (isPC(token)) profs = token.actor.data.data.proficiencies;
	else profs = token.data.actorData.data.proficiencies;

	return profs?.languages.map(l => CONFIG.A5E.languages[l] || l) || [];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getSenses(token) {
	let attributes;
	if (isPC(token)) attributes = token.actor.data.data.attributes;
	else attributes = token.data.actorData.data.attributes;

	return attributes?.senses.map(s => CONFIG.A5E.senses[s] || s) || [];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    Get SpellSlots
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// export function getSpellSlots(token, spellLevel = null) {
// 	let slots;
// 	if (isPC(token)) slots = token.data.actorData.data.spellResources?.slots;
// 	else token.actor.data.data.spellResources?.slots;

// 	if (!slots) return false;

// 	if (!spellLevel) {
// 		const available = Object.values(slots).reduce((a, b) => a + b.current, 0);
// 		if (available > 0) return true;
// 		else return false;
// 	}

// 	// TODO: Finish this
// 	if (!slots[spellLevel]) return false;
// 	return slots[spellLevel].current > 0;
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    hasSpellSlots
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function hasSpellPoints(token) {
	let points;

	if (isPC(token)) points = token.actor.data.data.spellResources?.points;
	else points = token.data.actorData.data.spellResources?.points;

	if (!points) return false;
	return points.current > 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    hasSpellSlots
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function hasSpellSlots(token, spellLevel = null) {
	let slots;

	if (isPC(token)) slots = token.actor.data.data.spellResources?.slots;
	else slots = token.data.actorData.data.spellResources?.slots;

	if (!slots) return false;

	if (!spellLevel) {
		const available = Object.values(slots).reduce((a, b) => a + b.max, 0);
		if (available > 0) return true;
		else return false;
	}

	if (!slots[spellLevel]) return false;
	return slots[spellLevel].max > 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     isBloodied
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * @returns {Boolean}
 */
export function isBloodied(token) {
	let hp;
	if (isPC(is)) hp = token.actor.data.data.attributes.hp;
	else hp = token.data.actorData.attributes.hp;

	return hp.value < hp.max * 0.5;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     isWounded
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isWounded(token) {
	let hp;
	if (isPC(is)) hp = token.actor.data.data.attributes.hp;
	else hp = token.data.actorData.attributes.hp;

	return hp.value < hp.max;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     isSpellCaster
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isSpellCaster(token) {
	let spellResources;

	if (isPC(token)) spellResources = token.actor.data.data.spellResources;
	else spellResources = token.data.actorData.data.spellResources;

	return spellResources ? true : false;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                   isUnconscious
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isUnconscious(token, hpBased = true) {
	const effect = getConditions(token).filter(
		e => e.label.toLowerCase() === CONFIG.A5E.conditions.unconscious
	);

	let hp;
	if (isPC(is)) hp = token.actor.data.data.attributes.hp;
	else hp = token.data.actorData.attributes.hp;

	const hpBelowZero = hp.value < 1;

	if (hpBased) return hpBelowZero || effect.length !== 0;
	else return effect.length !== 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
