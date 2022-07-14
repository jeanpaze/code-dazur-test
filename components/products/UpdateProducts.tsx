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

class ItemExtra extends Item {
	id: number;
	type: string;
	image: string;
}

export class GildedRose {
	items: Array<ItemExtra>;

	constructor(items = [] as Array<ItemExtra>) {
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((item) => {
			const isBackStagePasses = item.name.toLowerCase().includes('backstage passes');
			const isSulfuras = item.name.toLowerCase().includes('sulfuras');
			const isAgedBrie = item.name.toLowerCase().includes('aged brie');
			const isConjured = item.name.toLowerCase().includes('conjured');

			// set quality
			const removeQuality = isConjured ? 2 : 1;
			const addBackStagePassesQuality = item.sellIn < 6 ? 2 : item.sellIn < 11 ? 1 : 0;

			item.quality = item.type == 'vintage' ? Math.min(item.quality + 1, 50) : item.quality; // increase quality
			item.quality = item.type != 'legendary' && item.type != 'vintage' ? Math.max(0, item.quality - removeQuality) : item.quality; // decrease quality
			item.quality = isBackStagePasses ? Math.min(item.quality + addBackStagePassesQuality, 50) : item.quality;

			// set sellIn date
			item.sellIn -= !isSulfuras ? 1 : 0;

			// expired items
			item.quality = item.sellIn < 0 && isBackStagePasses ? 0 : item.quality;
			item.quality += item.sellIn < 0 && isAgedBrie ? 1 : 0;
			item.quality = item.sellIn < 0 && item.type == 'regular' ? Math.max(item.quality - 1, 0) : item.quality;
		});

		return this.items;
	}
}
