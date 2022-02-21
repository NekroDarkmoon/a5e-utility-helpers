![](https://shields.io/badge/Foundry-v9-informational)
![Latest Release Download Count](https://img.shields.io/github/downloads/NekroDarkmoon/a5e-utility-helpers/latest/module.zip)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2F<a5e-utility-helpers>&colorB=4aa94a)

# A5E Utility Helpers

A small module to provide helper functions for use in the [A5E System](https://foundryvtt.com/packages/a5e).

### Functions

The following functions can be accessed with the namespace `A5EUtils`.

#### Minor Utility Functions

- **getCanvas(): Canvas** --> Returns the canvas object.

#### Distance Utility Functions

- **getDistance(token1: Token, token2: Token, wallsBlock: Boolean): Number** --> Returns the distance between 2 tokens in feet.
- **isAdjacent(token1: Token token2: Token, wallsBlock: Boolean): Boolean** --> Checks if 2 tokens are within 5 feet of each other.

#### Token Utility Functions

- **getConditions(token: Token, fullObject: Boolean = false): Array<String> || Array<Object>** --> Returns an array of conditions. Optionally returns an array of condition objects if `fullObject` is set to `true`.

- **getConditionImmunities(token: Token): Array<String>** --> Returns an array of conditions immunities for a token.
- **getDamageImmunities(token: Token): Array<String>** --> Returns an array of damage immunities for a token.
- **getDamageResistances(token: Token): Array<String>** --> Returns an array of damage resistances for a token.
- **getDamageVulnerabilities(token: Token): Array<String>** --> Returns an array of damage vulnerabilities for a token.
- **getLanguages(token: Token): Array<String>** --> Returns the known languages for a token.
- **getSenses(token: Token): Array<String>** --> Returns an array of senses for a token.
- **hasCondition(token: Token, condition: String): Boolean** --> Checks if a token has a specified condition (The condition string is case insensitive).

- **hasSpellPoints(token: Token): Boolean** --> Checks if a token has spell points.
- **hasSpellSlots(token: Token, spellLevel: Number = null): Boolean** --> Checks if a token has spell slots. Can optionally check if the token has spell slots of a certain level.

- **isBloodied(token: Token): Boolean** --> Checks if the token is below half hp.
- **isWounded(token: Token): Boolean** --> Checks if the token is below max hp.
- **isSpellCaster(token: Token): Boolean** --> Checks if the token is a spell caster.
- **isUnconscious(token: Token): Boolean** --> Checks if the token is unconscious via conditions or if its hp is 0.
