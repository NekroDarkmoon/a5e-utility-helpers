// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { moduleName, moduleTag } from '../index.js';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                Helper: Get Token Data
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getTokenData(token) {
	if (token.actor.data.type === 'character') return token.actor.data;
	else return token.data.actorData;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    getConditions
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * @returns {Array<String> || Array<Object>} conditions
 */
export function getConditions(token, fullObject = false) {
	let effects = getTokenData(token).effects;

	if (effects instanceof Map)
		effects = Array.from(effects.values()).map(e => e.data);

	if (!effects) return [];
	if (fullObject) return effects;

	return effects.map(
		e => game.i18n.localize(CONFIG.A5E.conditions[e.label]) || e.label
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Get Condition Immunities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getConditionImmunities(token) {
	const traits = getTokenData(token).data.traits;

	return (
		traits?.conditionImmunities.map(
			t => game.i18n.localize(CONFIG.A5E.damageTypes[t]) || t
		) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Get Condition Immunities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageImmunities(token) {
	const traits = getTokenData(token).data.traits;

	return (
		traits?.damageImmunities.map(
			t => game.i18n.localize(CONFIG.A5E.damageTypes[t]) || t
		) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                  Get Resistances
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageResistances(token) {
	const traits = getTokenData(token).data.traits;

	return (
		traits?.damageResistances.map(
			t => game.i18n.localize(CONFIG.A5E.damageTypes[t]) || t
		) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDamageVulnerabilities(token) {
	const traits = getTokenData(token).data.traits;

	return (
		traits?.damageVulnerabilities.map(
			t => game.i18n.localize(CONFIG.A5E.damageTypes[t]) || t
		) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getLanguages(token) {
	const profs = getTokenData(token).data.proficiencies;

	return (
		profs?.languages.map(
			l => game.i18n.localize(CONFIG.A5E.languages[l]) || l
		) || []
	);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                 Get Vulnerabilities
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getSenses(token) {
	const attributes = getTokenData(token).data.attributes;

	return attributes?.senses || [];
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
//                                    hasCondition
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function hasCondition(token, condition) {
	/** @type {Array} */
	const conditions = getConditions(token).map(c => c.toLowerCase());

	return conditions.includes(condition.toLowerCase());
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    hasSpellSlots
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function hasSpellPoints(token) {
	const points = getTokenData(token).data.spellResources?.points;
	if (!points) return false;

	return points.current > 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    hasSpellSlots
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function hasSpellSlots(token, spellLevel = null) {
	const slots = getTokenData(token).data.spellResources?.slots;
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
	const hp = getTokenData(token).data.attributes.hp;

	return hp.value < hp.max * 0.5;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     isWounded
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isWounded(token) {
	const hp = getTokenData(token).data.attributes.hp;

	return hp.value < hp.max;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                     isSpellCaster
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isSpellCaster(token) {
	const spellResources = getTokenData(token).data.spellResources;

	return spellResources ? true : false;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                   isUnconscious
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isUnconscious(token, hpBased = true) {
	const effect = getConditions(token).filter(
		e => e === game.i18n.localize(CONFIG.A5E.conditions.unconscious)
	);

	const hp = getTokenData(token).data.attributes.hp;

	const hpBelowZero = hp.value < 1;

	if (hpBased) return hpBelowZero || effect.length !== 0;
	else return effect.length !== 0;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
