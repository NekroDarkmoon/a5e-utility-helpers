// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import * as actorUtils from './scripts/actorUtils.js';
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

		getConditions: actorUtils.getConditions,
		getConditionImmunities: actorUtils.getConditionImmunities,
		getDamageImmunities: actorUtils.getDamageImmunities,
		getDamageResistances: actorUtils.getDamageResistances,
		getDamageVulnerabilities: actorUtils.getDamageVulnerabilities,
		getLanguages: actorUtils.getLanguages,
		getSenses: actorUtils.getSenses,
		hasSpellPoints: actorUtils.hasSpellPoints,
		hasSpellSlots: actorUtils.hasSpellSlots,
		isBloodied: actorUtils.isBloodied,
		isWounded: actorUtils.isWounded,
		isSpellCaster: actorUtils.isSpellCaster,
		isUnconscious: actorUtils.isUnconscious,
	};
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
