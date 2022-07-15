export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class ItemExtra extends Item {
	id: number;
	type: string;
	image: string;
	qualityRaw: number;

	super(id, type, image, qualityRaw) {
		this.id = id;
		this.type = type;
		this.image = image;
		this.qualityRaw = qualityRaw;
	}
}

export class GildedRose {
	items: Array<ItemExtra>;

	constructor(items = [] as Array<ItemExtra>) {
		this.items = items;
	}

	updateQuality(nextDay) {
		const indexDay = nextDay ? 1 : -1;
		const backStagePassesAdditionalIncDay = nextDay ? 11 : 10;
		const backStagePassesExtraIncDay = nextDay ? 6 : 5;

		this.items.forEach((item) => {
			// define specific items
			const isBackStagePasses = item.name.toLowerCase().includes('backstage passes');
			const isSulfuras = item.name.toLowerCase().includes('sulfuras');
			const isAgedBrie = item.name.toLowerCase().includes('aged brie');
			const isConjured = item.name.toLowerCase().includes('conjured');

			// copy quality value to qualityRaw, to avoid limits
			item.qualityRaw = !isNaN(item.qualityRaw) ? item.qualityRaw : item.quality;

			// quality calc
			let removeQuality = isConjured ? 2 : 1;
			let addBackStagePassesQuality = item.sellIn < backStagePassesExtraIncDay ? 2 : item.sellIn < backStagePassesAdditionalIncDay ? 1 : 0;

			// reverse value if it's previous day
			removeQuality *= indexDay;
			addBackStagePassesQuality *= indexDay;

			// set quality
			item.qualityRaw = item.type == 'vintage' ? item.qualityRaw + indexDay : item.qualityRaw; // increase quality
			item.qualityRaw = item.type == 'regular' ? item.qualityRaw - removeQuality : item.qualityRaw; // decrease quality
			item.qualityRaw = isBackStagePasses ? item.qualityRaw + addBackStagePassesQuality : item.qualityRaw;

			// set sellIn date
			item.sellIn -= !isSulfuras ? indexDay : 0;

			// expired items
			const expiredForward = item.sellIn < 0;
			const expired = nextDay ? expiredForward : item.sellIn < 1;
			item.qualityRaw += expired && isAgedBrie ? indexDay : 0;
			item.qualityRaw = expired && item.type == 'regular' ? item.qualityRaw - indexDay : item.qualityRaw;

			// set limits for visible values
			item.quality = item.type == 'vintage' ? Math.min(item.qualityRaw, 50) : item.qualityRaw;
			item.quality = item.type == 'regular' ? Math.max(0, item.qualityRaw) : item.quality;
			item.quality = isBackStagePasses ? Math.min(item.qualityRaw, 50) : item.quality;
			item.quality = expiredForward && isBackStagePasses ? 0 : item.quality;
			item.quality = expiredForward && item.type == 'regular' ? Math.max(item.qualityRaw, 0) : item.quality;
		});

		return this.items;
	}
}
