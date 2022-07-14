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
		this.items.forEach((item) => {
			const indexDay = nextDay ? 1 : -1;
			const isBackStagePasses = item.name.toLowerCase().includes('backstage passes');
			const isSulfuras = item.name.toLowerCase().includes('sulfuras');
			const isAgedBrie = item.name.toLowerCase().includes('aged brie');
			const isConjured = item.name.toLowerCase().includes('conjured');

			// copy quality value to qualityRaw, to avoid limits
			item.qualityRaw = !isNaN(item.qualityRaw) ? item.qualityRaw : item.quality;

			// quality calc
			let removeQuality = isConjured ? 2 : 1;
			let addBackStagePassesQuality = item.sellIn < 6 ? 2 : item.sellIn < 11 ? 1 : 0;

			// reverse value if it's previous day
			removeQuality *= indexDay;
			addBackStagePassesQuality *= indexDay;

			// set quality
			item.qualityRaw = item.type == 'vintage' ? item.qualityRaw + indexDay : item.qualityRaw; // increase quality
			item.qualityRaw = item.type != 'legendary' && item.type != 'vintage' ? item.qualityRaw - removeQuality : item.qualityRaw; // decrease quality
			item.qualityRaw = isBackStagePasses ? item.qualityRaw + addBackStagePassesQuality : item.qualityRaw;

			// set sellIn date
			item.sellIn -= !isSulfuras ? indexDay : 0;

			// expired items
			item.qualityRaw = item.sellIn < 0 && isBackStagePasses ? 0 : item.qualityRaw;
			item.qualityRaw += item.sellIn < 0 && isAgedBrie ? indexDay : 0;
			item.qualityRaw = item.sellIn < 0 && item.type == 'regular' ? item.qualityRaw - indexDay : item.qualityRaw;

			// set limits for visible values
			item.quality = item.type == 'vintage' ? Math.min(item.qualityRaw, 50) : item.qualityRaw;
			item.quality = item.type != 'legendary' && item.type != 'vintage' ? Math.max(0, item.qualityRaw) : item.qualityRaw;
			item.quality = isBackStagePasses ? Math.min(item.qualityRaw, 50) : item.qualityRaw;
			item.quality = item.sellIn < 0 && item.type == 'regular' ? Math.max(item.qualityRaw, 0) : item.qualityRaw;
		});

		return this.items;
	}
}
