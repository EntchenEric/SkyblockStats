const getWorthFromBazaarItem = async (productId: string) => {
    const response = await fetch('http://localhost:5004/bazaar?productId=' + productId);
    const responseData = await response.json();
    if (responseData.success) {
        return { instabuy: responseData.data.buyPrice, buyorder: responseData.data.sellPrice };
    }
};

const cleanUpItemName = (name: string) => {
    //remove Stars and color
    let newName = name
        .replace(/§[0-9a-fk-or]/g, '')
        .replaceAll('✪', '')
        .replace('➎', '')
        .replace('➍', '')
        .replace('➌', '')
        .replace('➋', '')
        .replace('➊', '');

    newName = newName.replace('Very ', '');
    newName = newName.replace('Highly ', '');
    newName = newName.replace('Extremely ', '');
    newName = newName.replace('Not So ', '');
    newName = newName.replace('Thicc ', '');
    newName = newName.replace('Absolutely ', '');
    newName = newName.replace('Even More ', '');
    newName = newName.replace('Greater ', '');

    //remove reforges
    //Sword Reforges
    newName = newName.replace('Epic ', '');
    newName = newName.replace('Fair ', '');
    newName = newName.replace('Fast ', '');
    newName = newName.replace('Gentle ', '');
    newName = newName.replace('Heroic ', '');
    newName = newName.replace('Hurtful ', '');
    newName = newName.replace('Legendary ', '');
    newName = newName.replace('Odd ', '');
    newName = newName.replace('Sharp ', '');
    newName = newName.replace('Spicy ', '');
    newName = newName.replace('Coldfused ', '');
    newName = newName.replace('Dirty ', '');
    newName = newName.replace('Fabled ', '');
    newName = newName.replace('Gilded ', '');
    newName = newName.replace('Suspicious ', '');
    newName = newName.replace('Warped ', '');
    newName = newName.replace('Withered ', '');
    newName = newName.replace('Withered ', '');
    newName = newName.replace("Jerry's ", '');
    newName = newName.replace('Fanged ', '');

    //Bow Reforges
    newName = newName.replace('Awkward ', '');
    newName = newName.replace('Deadly ', '');
    newName = newName.replace('Fine ', '');
    newName = newName.replace('Grand ', '');
    newName = newName.replace('Hasty ', '');
    newName = newName.replace('Neat ', '');
    newName = newName.replace('Rapid ', '');
    newName = newName.replace('Rich ', '');
    newName = newName.replace('Unreal ', '');
    newName = newName.replace('Precise ', '');
    newName = newName.replace('Spiritual ', '');
    newName = newName.replace('Headstrong ', '');

    //Armor Reforges
    newName = newName.replace('Clean ', '');
    newName = newName.replace('Fierce ', '');
    newName = newName.replace('Heavy ', '');
    newName = newName.replace('Light ', '');
    newName = newName.replace('Mythic ', '');
    newName = newName.replace('Pure ', '');
    newName = newName.replace('Titanic ', '');
    newName = newName.replace('Smart ', '');
    newName = newName.replace('Wise ', '');
    newName = newName.replace('Candied ', '');
    newName = newName.replace('Submerged ', '');
    newName = newName.replace('Perfect ', '');
    newName = newName.replace('Reinforced ', '');
    newName = newName.replace('Renowned ', '');
    newName = newName.replace('Spiked ', '');
    newName = newName.replace('Hyper ', '');
    newName = newName.replace('Giant ', '');
    newName = newName.replace('Jaded ', '');
    newName = newName.replace('Cubic ', '');
    newName = newName.replace('Necrotic ', '');
    newName = newName.replace('Empowered ', '');
    newName = newName.replace('Ancient ', '');
    newName = newName.replace('Undead ', '');
    newName = newName.replace('Loving ', '');
    newName = newName.replace('Ridiculous ', '');
    newName = newName.replace('Bustling ', '');
    newName = newName.replace('Mossy ', '');
    newName = newName.replace('Festive ', '');
    newName = newName.replace('Greater Spook ', '');

    //Equipment Reforges
    newName = newName.replace('Stained ', '');
    newName = newName.replace('Menacing ', '');
    newName = newName.replace('Hefty ', '');
    newName = newName.replace('Soft ', '');
    newName = newName.replace('Honored ', '');
    newName = newName.replace('Blended ', '');
    newName = newName.replace('Astute ', '');
    newName = newName.replace('Colossal ', '');
    newName = newName.replace('Brilliant ', '');
    newName = newName.replace('Blood-Soaked ', '');
    newName = newName.replace('Waxed ', '');
    newName = newName.replace('Rooted ', '');
    newName = newName.replace('Blooming ', '');
    newName = newName.replace('Fortified ', '');
    newName = newName.replace('Strengthened ', '');
    newName = newName.replace('Glistening ', '');
    newName = newName.replace('Snowy ', '');
    newName = newName.replace('Greater Spook ', '');

    //Fishingrod Reforges
    newName = newName.replace('Salty ', '');
    newName = newName.replace('Treacherous ', '');
    newName = newName.replace('Lucky ', '');
    newName = newName.replace('Stiff ', '');
    newName = newName.replace('Dirty ', '');
    newName = newName.replace('Chomp ', '');
    newName = newName.replace("Pitchin' ", '');

    //Pickaxe Reforges
    newName = newName.replace('Unyielding ', '');
    newName = newName.replace("Prospector's ", '');
    newName = newName.replace('Excellent ', '');
    newName = newName.replace('Sturdy ', '');
    newName = newName.replace('Fortunate ', '');
    newName = newName.replace('Ambered ', '');
    newName = newName.replace('Auspicious ', '');
    newName = newName.replace('Fleet ', '');
    newName = newName.replace('Heated ', '');
    newName = newName.replace('Magnetic ', '');
    newName = newName.replace('Mithraic ', '');
    newName = newName.replace('Refined ', '');
    newName = newName.replace('Stellar ', '');
    newName = newName.replace('Fruitful ', '');

    //Axe Reforges
    newName = newName.replace('Great ', '');
    newName = newName.replace('Rugged ', '');
    newName = newName.replace('Lush ', '');
    newName = newName.replace("Lumberjack's ", '');
    newName = newName.replace('Double-Bit ', '');
    newName = newName.replace('Moil ', '');
    newName = newName.replace('Toil ', '');
    newName = newName.replace('Blessed ', '');
    newName = newName.replace('Earthy ', '');

    //Hoe Reforges
    newName = newName.replace('Robust ', '');
    newName = newName.replace('Zooming ', '');
    newName = newName.replace("Peasant's ", '');
    newName = newName.replace('Green Thumb ', '');
    newName = newName.replace('Blessed ', '');
    newName = newName.replace('Bountiful ', '');

    //Vacuum Reforges
    newName = newName.replace('Beady ', '');
    newName = newName.replace('Buzzing ', '');

    //remove dye
    newName = newName.replace('✿ ', '');

    //remove star at end
    newName = newName.replace('✦ ', '');

    //remove spaces at the start
    while (newName[0] == ' ') {
        newName = newName.slice(1);
    }

    //removes space at the end
    while (newName[newName.length - 1] == ' ') {
        newName = newName.slice(0, newName.length - 1);
    }

    return newName;
};

export async function getItemWorth(item: any) {
    if (!item.tag) {
        return { buyOrderWorth: 0, instaBuyWorth: 0, instaBuyCalculation: [], buyOrderCalculation: [] };
    }

    let cheapestPrice = 999999999999999;
    const cleanedName = cleanUpItemName(item.tag.value.display.value.Name.value).replace(' ', '_');
    if (cleanedName == 'Terminator') {
        // console.log(item);
        // console.log('starts: ', item.tag.value.ExtraAttributes.value.dungeon_item_level.value);
    }
    const hyperionReplacers = ['scylla', 'valkyre', 'Astrea'];
    const respo = await fetch(
        'http://localhost:5004/auctions?name=%' +
        (cleanedName in hyperionReplacers ? 'hyperion' : cleanedName) +
        '%&select=starting_bid,name&bin=true&sort=lowest_starting_bid&limit=1'
    );
    const responseData = await respo.json();
    if (responseData.success) {
        cheapestPrice = responseData.data[0].starting_bid;
    }
    const itemWorth: {
        buyOrderWorth: number;
        instaBuyWorth: number;
        instaBuyCalculation: string[];
        buyOrderCalculation: string[];
    } = { buyOrderWorth: 0, instaBuyWorth: 0, instaBuyCalculation: [], buyOrderCalculation: [] };
    if (cheapestPrice === 999999999999999) {
        return itemWorth;
    }
    itemWorth.buyOrderWorth += cheapestPrice;
    itemWorth.instaBuyWorth += cheapestPrice;
    itemWorth.instaBuyCalculation.push('Lowest Bin: ' + cheapestPrice.toLocaleString());
    itemWorth.buyOrderCalculation.push('Lowest Bin: ' + cheapestPrice.toLocaleString());
    if ('enchantments' in item.tag.value.ExtraAttributes.value) {
        const keys = Object.keys(item.tag.value.ExtraAttributes.value.enchantments.value);
        for (let i = 0; i < keys.length; i++) {
            const element = item.tag.value.ExtraAttributes.value.enchantments.value[keys[i]];
            switch (keys[i]) {
                default:
                    break;

                case 'angler':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_ANGLER_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Angler VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Angler VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'bane_of_arthropods':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_BANE_OF_ARTHROPODS_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Bane of Arthropods VI:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Bane of Arthropods VI:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_BANE_OF_ARTHROPODS_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Bane of Arthropods VII:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Bane of Arthropods VII:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'big_brain': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_BIG_BRAIN_3');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 3);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 3);
                    itemWorth.buyOrderCalculation.push(
                        'Big Brain:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 3) +
                        ' (when crafted From Big Brain 3)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Big Brain:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 3) +
                        ' (when crafted From Big Brain 3)'
                    );
                    break;
                }

                case 'blast_protection':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_BLAST_PROTECTION_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Blast Protection VI:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Blast Protection VI:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_BLAST_PROTECTION_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Blast Protection VII:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Blast Protection VII:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'blessing':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_BLESSING_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Blessing VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Blessing VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'cayenne': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_CAYENNE_4');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 4);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 4);
                    itemWorth.buyOrderCalculation.push(
                        'Cayenne:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 4) +
                        ' (when crafted From Cayenne 4)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Cayenne:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 4) +
                        ' (when crafted From Cayenne 4)'
                    );
                    break;
                }

                case 'champion': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_CHAMPION_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Champion:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Champion:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'chance':
                    if (element.value == 4) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_CHANCE_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Chance IV:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Chance IV:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_CHANCE_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Chance V:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Chance V:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'charm': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_CHARM_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Charm:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Charm 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Charm:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Charm 1)'
                    );
                    break;
                }

                case 'cleave':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_CLEAVE_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Cleave VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Cleave VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'compact': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_COMPACT_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Compact:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Compact:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'corruption': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_CORRUPTION_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Corruption:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Corruption 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Corruption:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Corruption 1)'
                    );
                    break;
                }

                case 'counter_strike':
                    if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_COUNTER_STRIKE_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Counter V:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Counter V:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'critical':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_CRITICAL_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Critical VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Critical VI:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_CRITICAL_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Critical VII:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Critical VII:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'cubism':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_CUBISM_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Cubism VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Cubism VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'cultivating': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_CULTIVATING_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Cultivating:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Cultivating:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'dedication':
                    if (element.value > 4) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_DEDICATION_1');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** element.value;
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** element.value;
                        itemWorth.buyOrderCalculation.push(
                            'Dedication:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** element.value +
                            ' (when crafted From Dedication 1)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Dedication:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** element.value +
                            ' (when crafted From Dedication 1)'
                        );
                        break;
                    } else {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_DEDICATION_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Dedication IV:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Dedication IV:' + parseInt(price?.instabuy).toLocaleString()
                        );
                        break;
                    }

                case 'delicate': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_DELICATE_5');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Delicate V:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Delicate V:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'divane_gift': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_DIVANE_GIFT_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Divane Gift:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Divane Gift:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'dragon_hunter': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_DRAGON_HUNTER_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** element.value;
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** element.value;
                    itemWorth.buyOrderCalculation.push(
                        'Dragon Hunter:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** element.value +
                        ' (when crafted From Dragon Hunter 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Dragon Hunter:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** element.value +
                        ' (when crafted From Dragon Hunter 1)'
                    );
                    break;
                }

                case 'ender_slayer':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_ENDER_SLAYER_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Ender Slayer VI:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Ender Slayer VI:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_ENDER_SLAYER_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Ender Slayer VII:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Ender Slayer VII:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'execute': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_EXECUTE_6');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Execute:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Execute:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'experience':
                    if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_EXPERIENCE_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Experience V:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Experience V:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_EXPERIENCE_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Experience VI:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Experience VI:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'expertise': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_EXPERTISE_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Expertise:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Expertise:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'feather_falling':
                    if (element.value >= 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_FEATHER_FALLING_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 6);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 6);
                        itemWorth.buyOrderCalculation.push(
                            'Feather Falling:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Feather Falling 6)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Feather Falling:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Feather Falling 6)'
                        );
                        break;
                    }

                case 'ferocious_mana': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_FEROCIOUS_MANA_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Ferocious Mana:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Ferocious Mana 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Ferocious Mana:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Ferocious Mana 1)'
                    );
                    break;
                }

                case 'fire_aspect':
                    if (element.value == 3) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_FIRE_ASPECT_3');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Fire Aspect III:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Fire Aspect III:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'fire_protection':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_FIRE_PROTECTION_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 6);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 6);
                        itemWorth.buyOrderCalculation.push(
                            'Fire Protection:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Fire Protection 6)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Fire Protection:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Fire Protection 6)'
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_FIRE_PROTECTION_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 6);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 6);
                        itemWorth.buyOrderCalculation.push(
                            'Fire Protection:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Fire Protection 7)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Fire Protection:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Fire Protection 7)'
                        );
                    }
                    break;

                case 'first_strike':
                    if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_FIRST_STRIKE_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'First Strike V:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'First Strike V:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'fortune':
                    if (element.value == 4) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_FORTUNE_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Fortune IV:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Fortune IV:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'frail':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_FRAIL_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Frail VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Frail VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'giant_killer':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_GIANT_KILLER_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Giant Killer:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Giant Killer:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_GIANT_KILLER_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Giant Killer:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Giant Killer:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'green_thumb': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_GREEN_THUMB_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Green Thumb:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Green Thumb 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Green Thumb:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Green Thumb 1)'
                    );
                    break;
                }

                case 'growth':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_GROWTH_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Growth:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Growth:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_GROWTH_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Growth:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Growth:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'hardened_mana': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_HARDENED_MANA_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Hardened Mana:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Hardened Mana 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Hardened Mana:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Hardened Mana 1)'
                    );
                    break;
                }

                case 'harvesting':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_HARVESTING_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Harvesting:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Harvesting:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'hecatomb': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_HECATOMB_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Hecatomb:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Hecatomb:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'infinite_quiver':
                    if (element.value >= 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_INFINITE_QUIVER_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 6);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 6);
                        itemWorth.buyOrderCalculation.push(
                            'Infinite Quiver:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Infinite Quiver 6)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Infinite Quiver:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Infinite Quiver 6)'
                        );
                    }
                    break;

                case 'lethality':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LETHALITY_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Lethality:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Lethality:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'life_steal':
                    if (element.value == 4) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LIFE_STEAL_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Life Steal IV:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Life Steal IV:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LIFE_STEAL_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Life Steal V:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Life Steal V:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'looting':
                    if (element.value == 4) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LOOTING_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Looting IV:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Looting IV:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LOOTING_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Looting V:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Looting V:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'luck':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LUCK_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Luck VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Luck VI:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LUCK_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Luck VII:' + parseInt(price?.buyorder));
                        itemWorth.instaBuyCalculation.push('Luck VII:' + parseInt(price?.instabuy));
                    }
                    break;

                case 'luck_of_the_sea':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LUCK_OF_THE_SEA_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Luck of the Sea VI:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Luck of the Sea VI:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'lure':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_LURE_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Lure VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Lure VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'magnet':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_MAGNET_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Magnet VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Magnet VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'mana_steal': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_MANA_STEAL_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Mana Steal:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Mana Steal 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Mana Steal:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Mana Steal 1)'
                    );
                    break;
                }

                case 'mana_vampire': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_MANA_VAMPIRE_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Mana Vampire:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Mana Vampire 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Mana Vampire:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Mana Vampire 1)'
                    );
                    break;
                }

                case 'overload': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_OVERLOAD_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Overload:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Overload 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Overload:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Overload 1)'
                    );
                    break;
                }

                case 'pesterminator': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_PESTERMINATOR_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Pesterminator:' +
                        parseInt(price?.buyorder.toLocaleString()) +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Pesterminator 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Pesterminator:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Pesterminator 1)'
                    );
                    break;
                }

                case 'piscary':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_PISCARY_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Piscary VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Piscary VI:' + parseInt(price?.instabuy).toLocaleString());
                        break;
                    }

                case 'power':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_POWER_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Power VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Power VI:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_POWER_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Power VII:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Power VII:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'pristine': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_PRISTINE_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Pristine:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Pristine 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Pristine:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Pristine 1)'
                    );
                    break;
                }

                case 'projectile_protection':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_PROTECTION_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Projectile Protection VI:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Projectile Protection VI:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_PROTECTION_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Projectile Protection VII:' + parseInt(price?.buyorder)
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Projectile Protection VII:' + parseInt(price?.instabuy)
                        );
                    }
                    break;

                case 'prosecute':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_PROSECUTE_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Prosecute VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Prosecute VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'prosperity': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_PROSPERITY_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Prosperity:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Prosperity 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Prosperity:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Prosperity 1)'
                    );
                    break;
                }

                case 'protection':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_PROTECTION_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 6);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 6);
                        itemWorth.buyOrderCalculation.push(
                            'Protection:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Protection 6)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Protection:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' s(when crafted From Protection 6)'
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_PROTECTION_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 6);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 6);
                        itemWorth.buyOrderCalculation.push(
                            'Protection:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Protection 7)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Protection:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 6) +
                            ' (when crafted From Protection 7)'
                        );
                    }
                    break;

                case 'quantum': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_QUANTUM_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * element.value;
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * element.value;
                    itemWorth.buyOrderCalculation.push(
                        'Quantum:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Quantum 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Quantum:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Quantum 1)'
                    );
                    break;
                }

                case 'reflection': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_REFLECTION_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * element.value;
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * element.value;
                    itemWorth.buyOrderCalculation.push(
                        'Reflection:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Reflection 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Reflection:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Reflection 1)'
                    );
                    break;
                }

                case 'rejuvenate': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_REJUVENATE_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * element.value;
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * element.value;
                    itemWorth.buyOrderCalculation.push(
                        'Rejuvenate:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Rejuvenate 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Rejuvenate:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Rejuvenate 1)'
                    );
                    break;
                }

                case 'replenish': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_REPLENISH_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Replenish:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Replenish:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'respite': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_RESPITE_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * element.value;
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * element.value;
                    itemWorth.buyOrderCalculation.push(
                        'Respite:' +
                        parseInt(price?.buyorder).toLocaleString()
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Respite:' +
                        parseInt(price?.instabuy).toLocaleString()
                    );
                    break;
                }

                case 'scavenger':
                    if (element.value == 4) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SCAVENGER_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Scavenger IV:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Scavenger IV:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SCAVENGER_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Scavenger V:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Scavenger V:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'sharpness':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SHARPNESS_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 6);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 6);
                        itemWorth.buyOrderCalculation.push(
                            'Sharpness VI:' +
                            parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'SharpnessVI:' +
                            parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SHARPNESS_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 6);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 6);
                        itemWorth.buyOrderCalculation.push(
                            'Sharpness VII:' +
                            parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Sharpness VII:' +
                            parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'smarty_pants': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_SMARTY_PANTS_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * element.value;
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * element.value;
                    itemWorth.buyOrderCalculation.push(
                        'Smarty Pants:' +
                        parseInt(price?.buyorder).toLocaleString()
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Smarty Pants:' +
                        parseInt(price?.instabuy).toLocaleString()
                    );
                    break;
                }

                case 'smite':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SMITE_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Smite VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Smite VI:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SMITE_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Smite VII:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Smite VII:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'smoldering': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_SMOLDERING_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * element.value;
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * element.value;
                    itemWorth.buyOrderCalculation.push(
                        'Smoldering:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Smoldering 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Smoldering:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Smoldering 1)'
                    );
                    break;
                }

                case 'snipe':
                    if (element.value == 4) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SNIPE_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Snipe IV:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Snipe IV:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'spiked_hook':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SPIKED_HOOK_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Spiked Hook VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Spiked Hook VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'strong_mana':
                    {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_STRONG_MANA_1');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                        itemWorth.buyOrderCalculation.push(
                            'Strong Mana:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 1) +
                            ' (when crafted From Strong Mana 1)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Strong Mana:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 1) +
                            ' (when crafted From Strong Mana 1)'
                        );
                    }
                    break;

                case 'sugar_rush': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_SUGAR_RUSH_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * element.value;
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * element.value;
                    itemWorth.buyOrderCalculation.push(
                        'Sugar Rush:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Sugar Rush 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Sugar Rush:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        element.value +
                        ' (when crafted From Sugar Rush 1)'
                    );
                    break;
                }

                case 'sunder': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_SUNDER_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Sunder:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Sunder 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Sunder:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Sunder 1)'
                    );
                    break;
                }

                case 'syphon':
                    if (element.value == 4) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SYPHON_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Syphon IV:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Syphon IV:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_SYPHON_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Syphon V:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Syphon V:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'tabasco':
                    if (element.value == 2) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_TABASCO_2');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Tabasco II:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Tabasco II:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 3) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_TABASCO_3');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Tabasco III:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Tabasco III:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'thunderbolt':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_THUNDERBOLT_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Thunderbolt VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Thunderbolt VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'thunderlord':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_THUNDERLORD_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Thunderlord VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Thunderlord VI:' + parseInt(price?.instabuy).toLocaleString());
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_THUNDERLORD_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Thunderlord VII:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Thunderlord VII:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'titan_killer':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_TITAN_KILLER_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Titan Killer VI:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Titan Killer VI:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    } else if (element.value == 7) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_TITAN_KILLER_7');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Titan Killer VII:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Titan Killer VII:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'transylvanian': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TRANSYLVANIAN_4');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * (element.value - 3);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * (element.value - 3);
                    itemWorth.buyOrderCalculation.push(
                        'Transylvanian:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        (element.value - 3) +
                        ' (when crafted From Transylvanian 4)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Transylvanian:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        (element.value - 3) +
                        ' (when crafted From Transylvanian 4)'
                    );
                    break;
                }

                case 'tripple_strike':
                    if (element.value == 5) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_TRIPPLE_STRIKE_5');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push(
                            'Tripple Strike:' + parseInt(price?.buyorder).toLocaleString()
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Tripple Strike:' + parseInt(price?.instabuy).toLocaleString()
                        );
                    }
                    break;

                case 'true_protection': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TRUE_PROTECTION_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push(
                        'True Protection:' + parseInt(price?.buyorder).toLocaleString()
                    );
                    itemWorth.instaBuyCalculation.push(
                        'True Protection:' + parseInt(price?.instabuy).toLocaleString()
                    );
                    break;
                }

                case 'turbo_cacti': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_CACTI_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Cacti:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Cacti 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Cacti:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Cacti 1)'
                    );
                    break;
                }

                case 'turbo_cane': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_CANE_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Cane:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Cane 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Cane:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Cane 1)'
                    );
                    break;
                }

                case 'turbo_carrot': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_CARROT_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Carrot:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Carrot 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Carrot:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Carrot 1)'
                    );
                    break;
                }

                case 'turbo_cocoa': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_COCOA_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Cocoa:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Cocoa 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Cocoa:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Cocoa 1)'
                    );
                    break;
                }

                case 'turbo_melon': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_MELON_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Melon:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Melon 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Melon:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Melon 1)'
                    );
                    break;
                }

                case 'turbo_mushrooms': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_MUSHROOMS_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Mushrooms:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Mushrooms 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Mushrooms:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Mushrooms 1)'
                    );
                    break;
                }

                case 'turbo_potato': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_POTATO_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Potato:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Potato 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Potato:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Potato 1)'
                    );
                    break;
                }

                case 'turbo_pumpkin': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_PUMPKIN_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Pumpkin:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Pumpkin 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Pumpkin:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Pumpkin 1)'
                    );
                    break;
                }

                case 'turbo_wart': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_TURBO_WARTS_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Turbo Wart:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Wart 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Turbo Wart:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Turbo Wart 1)'
                    );
                    break;
                }

                case 'vampirism':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_VAMPIRISM_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Vampirism VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Vampirism VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'venomous':
                    if (element.value == 6) {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_VENOMOUS_6');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                        itemWorth.buyOrderCalculation.push('Venomous VI:' + parseInt(price?.buyorder).toLocaleString());
                        itemWorth.instaBuyCalculation.push('Venomous VI:' + parseInt(price?.instabuy).toLocaleString());
                    }
                    break;

                case 'vicious':
                    {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_VICIOUS_3');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                        itemWorth.buyOrderCalculation.push(
                            'Vicious:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 1) +
                            ' (when crafted From Vicious 3)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Vicious:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 1) +
                            ' (when crafted From Vicious 3)'
                        );
                    }
                    break;

                case 'ultimate_bank': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_BANK_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Bank:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Bank 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Bank:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Bank 1)'
                    );
                    break;
                }

                case 'ultimate_bobbin_time':
                    {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_BOBBIN_TIME_3');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                        itemWorth.buyOrderCalculation.push(
                            'Bobbin Time:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 1) +
                            ' (when crafted From Bobbin Time 3)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'Bobbin Time:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 1) +
                            ' (when crafted From Bobbin Time 3)'
                        );
                    }
                    break;

                case 'ultimate_chimera': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_CHIMERA_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Chimera:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Chimera 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Chimera:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Chimera 1)'
                    );
                    break;
                }
                case 'ultimate_combo': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_COMBO_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Combo:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Combo 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Combo:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Combo 1)'
                    );
                    break;
                }

                case 'ultimate_duplex': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_DUPLEX_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Duplex:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Duplex 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Duplex:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Duplex 1)'
                    );
                    break;
                }

                case 'ultimate_fatal_tempo': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_FATAL_TEMPO_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Fatal Tempo:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Fatal Tempo 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Fatal Tempo:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Fatal Tempo 1)'
                    );
                    break;
                }

                case 'ultimate_flash': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_FLASH_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Flash:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Flash 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Flash:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Flash 1)'
                    );
                    break;
                }

                case 'ultimate_habanero_tactics': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_HABANERO_TACTICS_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Habanero Tactics:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Habanero Tactics 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Habanero Tactics:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Habanero Tactics 1)'
                    );
                    break;
                }

                case 'ultimate_inferno': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_INFERNO_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Inferno:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Inferno 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Inferno:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Inferno 1)'
                    );
                    break;
                }

                case 'ultimate_last_stand': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_LAST_STAND_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Last Stand:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Last Stand 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Last Stand:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Last Stand 1)'
                    );
                    break;
                }

                case 'ultimate_legion': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_LEGION_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Legion:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Legion 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Legion:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Legion 1)'
                    );
                    break;
                }

                case 'ultimate_no_pain_no_gain': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_NO_PAIN_NO_GAIN_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'No Pain No Gain:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From No Pain No Gain 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'No Pain No Gain:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From No Pain No Gain 1)'
                    );
                    break;
                }

                case 'ultimate_one_for_all': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_ONE_FOR_ALL_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('One For All:' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('One For All:' + parseInt(price?.instabuy).toLocaleString());
                    break;
                }

                case 'ultimate_refriginate': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_REFRIGERATE_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Refrigerate:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Refrigerate 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Refrigerate:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Refrigerate 1)'
                    );
                    break;
                }

                case 'ultimate_rend': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_REND_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Rend:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Rend 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Rend:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Rend 1)'
                    );
                    break;
                }

                case 'ultimate_soul_eater': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_SOUL_EATER_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Soul Eater:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Soul Eater 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Soul Eater:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Soul Eater 1)'
                    );
                    break;
                }

                case 'ultimate_swarm': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_SWARM_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Swarm:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Swarm 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Swarm:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Swarm 1)'
                    );
                    break;
                }

                case 'ultimate_the_one':
                    {
                        const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_THE_ONE_4');
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 3);
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 3);
                        itemWorth.buyOrderCalculation.push(
                            'The One:' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 3) +
                            ' (when crafted From The One 4)'
                        );
                        itemWorth.instaBuyCalculation.push(
                            'The One:' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            2 ** (element.value - 3) +
                            ' (when crafted From The One 4)'
                        );
                    }
                    break;

                case 'ultimate_jerry': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_JERRY_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Ultimate Jerry:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Ultimate Jerry 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Ultimate Jerry:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Ultimate Jerry 1)'
                    );
                    break;
                }

                case 'ultimate_wise': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_WISE_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Ultimate Wise:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Ultimate Wise 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Ultimate Wise:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Ultimate Wise 1)'
                    );
                    break;
                }

                case 'ultimate_wisdom': {
                    const price = await getWorthFromBazaarItem('ENCHANTMENT_ULTIMATE_WISDOM_1');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 2 ** (element.value - 1);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 2 ** (element.value - 1);
                    itemWorth.buyOrderCalculation.push(
                        'Wisdom:' +
                        parseInt(price?.buyorder).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Wisdom 1)'
                    );
                    itemWorth.instaBuyCalculation.push(
                        'Wisdom:' +
                        parseInt(price?.instabuy).toLocaleString() +
                        ' * ' +
                        2 ** (element.value - 1) +
                        ' (when crafted From Wisdom 1)'
                    );
                    break;
                }
            }
        }
    }

    if (item.tag.value.ExtraAttributes.value.ability_scroll) {
        for (
            let scrollId = 0;
            scrollId < item.tag.value.ExtraAttributes.value.ability_scroll.value.value.length;
            scrollId++
        ) {
            const scroll: string =
                item.tag.value.ExtraAttributes.value.ability_scroll.value.value[scrollId];
            const price = await getWorthFromBazaarItem(scroll);
            itemWorth.buyOrderWorth += parseInt(price?.buyorder);
            itemWorth.instaBuyWorth += parseInt(price?.instabuy);
            itemWorth.buyOrderCalculation.push(
                scroll.replaceAll('_', ' ').toLocaleLowerCase() + ': ' + parseInt(price?.buyorder).toLocaleString()
            );
            itemWorth.instaBuyCalculation.push(
                scroll.replaceAll('_', ' ').toLocaleLowerCase() + ': ' + parseInt(price?.instabuy).toLocaleString()
            );
        }
    }

    if (
        item.tag.value.ExtraAttributes.value.art_of_war_count &&
        item.tag.value.ExtraAttributes.value.art_of_war_count.value >= 1
    ) {
        const price = await getWorthFromBazaarItem('THE_ART_OF_WAR');
        itemWorth.buyOrderWorth +=
            parseInt(price?.buyorder) * item.tag.value.ExtraAttributes.value.art_of_war_count.value;
        itemWorth.instaBuyWorth +=
            parseInt(price?.instabuy) * item.tag.value.ExtraAttributes.value.art_of_war_count.value;
        itemWorth.buyOrderCalculation.push('Art of War: ' + parseInt(price?.buyorder).toLocaleString());
        itemWorth.instaBuyCalculation.push('Art of War: ' + parseInt(price?.instabuy).toLocaleString());
    }

    const skyblockItemResponse = await fetch(
        'http://localhost:5004/items?name=%' + cleanedName + '%&limit=1'
    );

    let skyblockItem = await skyblockItemResponse.json();
    if (!skyblockItem.data) {
        return itemWorth;
    }
    skyblockItem = skyblockItem.data[0];

    // console.log(skyblockItem);

    if (item.tag.value.ExtraAttributes.value.gems) {
        const tmpCalculations: { instaBuyCalculation: string[]; buyOrderCalculation: string[] } = {
            instaBuyCalculation: [],
            buyOrderCalculation: [],
        };
        const gems = item.tag.value.ExtraAttributes.value.gems.value;
        const gemKeys = Object.keys(gems);
        for (let i = 0; i < gemKeys.length; i++) {
            const key = gemKeys[i];
            const gem: any = gems[key];
            if (key != 'unlocked_slots') {
                if (key.startsWith('COMBAT') || key.startsWith('UNIVERSAL')) {
                    const type = gem.value;
                    const gemstone = gems[gemKeys[i + 1]].value;
                    const price = await getWorthFromBazaarItem(type + '_' + gemstone + '_GEM');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push(
                        type + ' ' + gemstone + ': ' + parseInt(price?.buyorder).toLocaleString()
                    );
                    itemWorth.instaBuyCalculation.push(
                        type + ' ' + gemstone + ': ' + parseInt(price?.instabuy).toLocaleString()
                    );
                    i++;
                } else {
                    const type = gem.value;
                    const gemstone = key.split('_')[0];
                    const price = await getWorthFromBazaarItem(type + '_' + gemstone + '_GEM');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push(
                        type + ' ' + gemstone + ': ' + parseInt(price?.buyorder).toLocaleString()
                    );
                    itemWorth.instaBuyCalculation.push(
                        type + ' ' + gemstone + ': ' + parseInt(price?.instabuy).toLocaleString()
                    );
                }
                for (let j = 0; j < skyblockItem.gemstone_slots.length; j++) {
                    const gemstoneSlot = skyblockItem.gemstone_slots[j];
                    // console.log(gemstoneSlot);
                    if (gemstoneSlot.slot_type == key.split('_')[0]) {
                        // console.log(gemstoneSlot.costs);
                        gemstoneSlot.costs.forEach(async (cost: any) => {
                            if (cost.type == 'COINS') {
                                itemWorth.buyOrderWorth += cost.coins;
                                itemWorth.instaBuyWorth += cost.coins;
                                tmpCalculations.buyOrderCalculation.push(
                                    gemstoneSlot.slot_type + ' Slot unlocked - Coin Cost: ' + cost.coins.toLocaleString()
                                );
                                tmpCalculations.instaBuyCalculation.push(
                                    gemstoneSlot.slot_type + ' Slot unlocked - Coin Cost: ' + cost.coins.toLocaleString()
                                );
                            }
                            if (cost.type == 'ITEM') {
                                const price = await getWorthFromBazaarItem(cost.item_id);
                                itemWorth.buyOrderWorth += parseInt(price?.buyorder) * cost.amount;
                                itemWorth.instaBuyWorth += parseInt(price?.instabuy) * cost.amount;
                                tmpCalculations.buyOrderCalculation.push(
                                    gemstoneSlot.slot_type +
                                    ' Slot unlocked - ' +
                                    cost.item_id.replaceAll('_', ' ').toLocaleLowerCase() +
                                    ': ' +
                                    parseInt(price?.buyorder).toLocaleString() +
                                    ' * ' +
                                    cost.amount
                                );
                                tmpCalculations.instaBuyCalculation.push(
                                    gemstoneSlot.slot_type +
                                    ' Slot unlocked - ' +
                                    cost.item_id.replaceAll('_', ' ').toLocaleLowerCase() +
                                    ': ' +
                                    parseInt(price?.instabuy).toLocaleString() +
                                    ' * ' +
                                    cost.amount
                                );
                            }
                        });
                    }
                }
            }
        }

        tmpCalculations.buyOrderCalculation.forEach((text) => {
            itemWorth.buyOrderCalculation.push(text);
        });

        tmpCalculations.instaBuyCalculation.forEach((text) => {
            itemWorth.instaBuyCalculation.push(text);
        });
    }
    if (item.tag.value.ExtraAttributes.value.dungeon_item_level) {
        for (let i = 0; i < item.tag.value.ExtraAttributes.value.dungeon_item_level.value; i++) {
            if (
                skyblockItem.upgrade_costs.length <
                item.tag.value.ExtraAttributes.value.dungeon_item_level.value &&
                i > 4
            ) {
                if (i == 5) {
                    const price = await getWorthFromBazaarItem('FIRST_MASTER_STAR');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('First Master Star: ' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('First Master Star: ' + parseInt(price?.instabuy).toLocaleString());
                }
                if (i == 6) {
                    const price = await getWorthFromBazaarItem('SECOND_MASTER_STAR');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Second Master Star: ' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Second Master Star: ' + parseInt(price?.instabuy).toLocaleString());
                }
                if (i == 7) {
                    const price = await getWorthFromBazaarItem('THIRD_MASTER_STAR');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Third Master Star: ' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Third Master Star: ' + parseInt(price?.instabuy).toLocaleString());
                }
                if (i == 8) {
                    const price = await getWorthFromBazaarItem('FOURTH_MASTER_STAR');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Fourth Master Star: ' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Fourth Master Star: ' + parseInt(price?.instabuy).toLocaleString());
                }
                if (i == 9) {
                    const price = await getWorthFromBazaarItem('FIFTH_MASTER_STAR');
                    itemWorth.buyOrderWorth += parseInt(price?.buyorder);
                    itemWorth.instaBuyWorth += parseInt(price?.instabuy);
                    itemWorth.buyOrderCalculation.push('Fifth Master Star: ' + parseInt(price?.buyorder).toLocaleString());
                    itemWorth.instaBuyCalculation.push('Fifth Master Star: ' + parseInt(price?.instabuy).toLocaleString());
                }
            } else {
                skyblockItem.upgrade_costs[i].forEach(async (cost: any) => {
                    // console.log(cost);

                    if (cost.type == 'ESSENCE') {
                        const price = await getWorthFromBazaarItem('ESSENCE_' + cost.essence_type);
                        itemWorth.buyOrderWorth += parseInt(price?.buyorder) * cost.amount;
                        itemWorth.instaBuyWorth += parseInt(price?.instabuy) * cost.amount;
                        itemWorth.buyOrderCalculation.push(
                            (i + 1).toString() +
                            '. Star - ' +
                            cost.essence_type.toLocaleLowerCase() +
                            ' Essence: ' +
                            parseInt(price?.buyorder).toLocaleString() +
                            ' * ' +
                            cost.amount
                        );
                        itemWorth.instaBuyCalculation.push(
                            (i + 1).toString() +
                            '. Star - ' +
                            cost.essence_type.toLocaleLowerCase() +
                            ' Essence: ' +
                            parseInt(price?.instabuy).toLocaleString() +
                            ' * ' +
                            cost.amount
                        );
                    }
                });
            }
        }
    }

    if (item.tag.value.ExtraAttributes.value.hot_potato_count) {
        const books = item.tag.value.ExtraAttributes.value.hot_potato_count.value;
        if (books > 0) {
            const price = await getWorthFromBazaarItem('HOT_POTATO_BOOK');
            itemWorth.buyOrderWorth += parseInt(price?.buyorder) * 10;
            itemWorth.instaBuyWorth += parseInt(price?.instabuy) * 10;
            itemWorth.buyOrderCalculation.push(
                'Hot Potato Books: ' + parseInt(price?.buyorder).toLocaleString() + ' * 10'
            );
            itemWorth.instaBuyCalculation.push(
                'Hot Potato Books: ' + parseInt(price?.instabuy).toLocaleString() + ' * 10'
            );
            if (books > 10) {
                const price = await getWorthFromBazaarItem('FUMING_POTATO_BOOK');
                itemWorth.buyOrderWorth += parseInt(price?.buyorder) * (books - 10);
                itemWorth.instaBuyWorth += parseInt(price?.instabuy) * (books - 10);
                itemWorth.buyOrderCalculation.push(
                    'Fuming Potato Books: ' + parseInt(price?.buyorder).toLocaleString() + ' * ' + (books - 10)
                );
                itemWorth.instaBuyCalculation.push(
                    'Fuming Potato Books: ' + parseInt(price?.instabuy).toLocaleString() + ' * ' + (books - 10)
                );
            }
        }
    }

    if (item.tag.value.ExtraAttributes.value.rarity_upgrades) {
        const price = await getWorthFromBazaarItem('RECOMBOBULATOR_3000');
        itemWorth.buyOrderWorth += parseInt(price?.buyorder);
        itemWorth.instaBuyWorth += parseInt(price?.instabuy);
        itemWorth.buyOrderCalculation.push('Recombobulated: ' + parseInt(price?.buyorder));
        itemWorth.instaBuyCalculation.push('Recombobulated: ' + parseInt(price?.instabuy));
    }

    return itemWorth
}
