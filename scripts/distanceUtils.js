// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               Imports and Constants
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               		 Is Within
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isWithinRange(token, item, target) {
	// TODO: No range provided in the system
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               		Get Distance
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function getDistance(t1, t2, wallBlock = false) {
	const t1X = t1.data.width >= 1 ? 0.5 : t1.data.width / 2;
	const t2X = t2.data.width >= 1 ? 0.5 : t2.data.width / 2;
	const t1Y = t1.data.height >= 1 ? 0.5 : t1.data.height / 2;
	const t2Y = t2.data.height >= 1 ? 0.5 : t2.data.height / 2;

	// Start loop for t1
	const segments = [];
	for (let x = t1X; x < t1.data.width; x++) {
		for (let y = t1Y; y < t1.data.height; y++) {
			// Get origin Point
			const origin = new PIXI.Point(
				...canvas.grid.getCenter(
					Math.round(t1.data.x + canvas.dimensions.size * x),
					Math.round(t1.data.y + canvas.dimensions.size * y)
				)
			);

			// Start loop for t2
			for (let x1 = t2X; x1 < t2.data.width; x1++) {
				for (let y1 = t2Y; y1 < t2.data.height; y1++) {
					// Get Destination point
					const dest = new PIXI.Point(
						...canvas.grid.getCenter(
							Math.round(t2.data.x + canvas.dimensions.size * x1),
							Math.round(t2.data.y + canvas.dimensions.size * y1)
						)
					);
					// Create Ray
					const r = new Ray(origin, dest);
					// Check Wall Blocking
					if (wallBlock) if (canvas.walls?.checkCollision(r)) continue;
					segments.push({ ray: r });
				}
			}
		}
	}

	// Check if ray exists
	if (!segments.length) return -1;
	const rDistance = segments.map(
		ray => canvas.grid.measureDistances([ray], { gridSpaces: true })[0]
	);
	const distance = Math.min(...rDistance);
	const height = Math.abs((t1.data.elevation || 0) - (t2.data.elevation || 0));

	return Math.sqrt(height * height + distance * distance);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               		isAdjacent
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export function isAdjacent(t1, t2, wallsBlock = true) {
	if (getDistance(t1, t2, wallsBlock) > 5) return false;

	return true;
}
