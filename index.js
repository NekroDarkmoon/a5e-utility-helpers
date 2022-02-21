// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import * as tokenUtils from './scripts/tokenUtils.js';
import * as minorUtils from './scripts/minorUtils.js';
import * as distanceUtils from './scripts/distanceUtils.js';

//
export const moduleName = 'a5e-utility-helpers';
export const moduleTag = 'A5E Utility Helpers';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                      Hooks
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Hooks.once('init', async function () {
	console.log(`${moduleTag} | Initializing.`);
});

Hooks.once('setup', async function () {
	console.log(`${moduleTag} | Setup.`);
});

Hooks.once('ready', async function () {
	// Setup Api
	setupApi();

	console.log(`${moduleTag} | Ready.`);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    API Setup
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function setupApi() {
	window.A5EUtils = {
		getCanvas: minorUtils.getCanvas,

		getDistance: distanceUtils.getDistance,
		isAdjacent: distanceUtils.isAdjacent,

		getConditions: tokenUtils.getConditions,
		getConditionImmunities: tokenUtils.getConditionImmunities,
		getDamageImmunities: tokenUtils.getDamageImmunities,
		getDamageResistances: tokenUtils.getDamageResistances,
		getDamageVulnerabilities: tokenUtils.getDamageVulnerabilities,
		getLanguages: tokenUtils.getLanguages,
		getSenses: tokenUtils.getSenses,
		getTokenData: tokenUtils.getTokenData,
		hasSpellPoints: tokenUtils.hasSpellPoints,
		hasSpellSlots: tokenUtils.hasSpellSlots,
		isBloodied: tokenUtils.isBloodied,
		isWounded: tokenUtils.isWounded,
		isSpellCaster: tokenUtils.isSpellCaster,
		isUnconscious: tokenUtils.isUnconscious,
	};
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
