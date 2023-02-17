require('dotenv').config();
require('./config/database');

const Region = require('./models/region');
const Wine = require('./models/wine');

(async function() { 

    await Region.deleteMany({});
    const regions = await Region.create([
        {country: 'United States', countryImg: ['https://images.unsplash.com/photo-1542384517060-2b41144f12a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80']},
        {country: 'Argentina', countryImg: ['https://images.unsplash.com/photo-1585867313424-06b0fd07d314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80']},
        {country: 'Chile', countryImg: ['https://images.unsplash.com/photo-1638367750225-08c090611929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80']},
        {country: 'South Africa', countryImg: ['https://images.unsplash.com/photo-1611033960745-1411f5dd53c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80']},
        {country: 'France', countryImg: ['https://images.unsplash.com/photo-1620679380601-f6cc0a9f8d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']},
        {country: 'Italy', countryImg: ['https://images.unsplash.com/photo-1444214058525-761aeb793113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80']},
        {country: 'Lebanon', countryImg: ['https://imageio.forbes.com/specials-images/imageserve/5f312273be66228616e1dbac/IXSIR-Jezzine-vineyard--Lebanon/960x0.jpg?format=jpg&width=960']},
        {country: 'Morocco', countryImg: ['https://www.wine-searcher.com/images/region/morocco-461-1-7.jpg?width=734']},
        {country: 'Australia', countryImg: ['https://images.unsplash.com/photo-1597218287959-96e3450b92de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']},
        {country: 'New Zealand', countryImg: ['https://images.unsplash.com/photo-1618317458338-10aa54e1a3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80']},
        {country: 'Germany', countryImg: ['https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80']},
    ]);

    await Wine.deleteMany({});
    const wines = await Wine.create([
        {type: 'red', grape: 'Petite Sirah', producer: 'Frey Vineyards', vintage: 2019, region: regions[0], wineImg: ['https://www.freywine.com/assets/images/products/pictures/frey-biodynamic-petite-sirah-2018.jpg'], price: 25},
        {type: 'white', grape: 'Chardonnay', producer: 'Swick Wines', vintage: 2020, region: regions[0], wineImg: ['https://cdn.shopify.com/s/files/1/0574/7749/7007/products/StudioSession-107_1200x.png?v=1633980521'], price: 25},
        {type: 'sparkling', grape: 'Carignane', producer: 'Poor Ranch Vineyard', vintage: 2021, region: regions[0], wineImg: ['https://cdn.shopify.com/s/files/1/0019/3363/9735/products/subject-to-change-party-monster-pet-nat-natural-wine-primal-wine.progressive.jpg?v=1674965185'], price: 33},
        {type: 'red', grape: 'Malbec', producer: 'Chakana Wines', vintage: 2018, region: regions[1], wineImg: ['https://data.callmewine.com/imgprodotto/malbec-valle-de-uco-vientre-chakana-2018_42153.jpg'], price: 36},
        {type: 'white', grape: 'Torrontes', producer: 'Dandelion', vintage: 2021, region: regions[1], wineImg: ['https://organicwineexchange.com/wp-content/uploads/2022/06/sq-Dandelion-Torrontes.jpg'], price: 18},
        {type: 'sparkling', grape: 'Aglianico', producer: 'Bodegas Krontiras', vintage: 2021, region: regions[1], wineImg: ['https://www.amathusdrinks.com/media/catalog/product/u/n/untitled_design_28.png?quality=80&fit=bounds&height=800&width=1050&canvas=1050:800'], price: 21},
        {type: 'red', grape: 'Pais', producer: 'Louis-Antoine Luyt', vintage: 2022, region: regions[2], wineImg: ['https://cdn.shopify.com/s/files/1/0518/7184/2487/products/CopyofKampProductImages-2022-12-15T094620.128_450x.png?v=1671126563'], price: 30},
        {type: 'white', grape: 'Moscatel', producer: 'Rogue Vine', vintage: 2021, region: regions[2], wineImg: ['https://cdn.shopify.com/s/files/1/0486/0090/7935/products/LRM_20220603_145443_1512x.jpg?v=1654297077'], price: 25},
        {type: 'sparkling', grape: 'Moscatel', producer: 'Cacique Maravilla', vintage: 2021, region: regions[2], wineImg: ['https://cdn11.bigcommerce.com/s-so3bj4al4r/images/stencil/1280x1280/products/4193/8631/original__78070.1674015273.jpg?c=2'], price: 26},
        {type: 'red', grape: 'Cinsaut', producer: 'Mount Abora', vintage: 2015, region: regions[3], wineImg: ['https://www.wine-searcher.com/images/labels/05/30/10890530.jpg?width=466&height=400&fit=bounds'], price: 13},
        {type: 'white', grape: 'Chenin Blanc', producer: 'Silwervis', vintage: 2014, region: regions[3], wineImg: ['https://images.vivino.com/thumbs/2rj8QKEKS-WUmY3MPE8dBg_pb_x960.png'], price: 17},
        {type: 'sparkling', grape: 'Chenin Blanc', producer: 'The Blacksmith', vintage: 2020, region: regions[3], wineImg: ['https://cdn.shopify.com/s/files/1/0011/8148/3072/products/barebones-pet-nat-the-blacksmith-natural-Sparkling-wine-Swartland-South_Africa-front_1080x.jpg?v=1635189087'], price: 30},
        {type: 'red', grape: 'Grenache', producer: 'Matin Calme', vintage: 2021, region: regions[4], wineImg: ['https://cdn.shopify.com/s/files/1/0363/6897/3868/products/2020MatinCalmeBonicaMarietaVdFRouge_c5c512da-08d1-41e9-9922-e79dca854ccc_896x864.jpg?v=1660168774'], price: 31},
        {type: 'white', grape: 'Muscadelle', producer: 'Domaine Plageoles', vintage: 2021, region: regions[4], wineImg: ['https://cdn.shopify.com/s/files/1/1044/1362/products/GtsHnib2SsKa7W2WtUsjPw_pb_x600_97faf9aa-b2ec-498e-a3e7-ccdabe0f5193_1024x1024.jpg?v=1643178828'], price: 30},
        {type: 'sparkling', grape: 'Pinot Blanc', producer: 'Anna et André Durrmann', vintage: 2021, region: regions[4], wineImg: ['https://cdn11.bigcommerce.com/s-so3bj4al4r/images/stencil/960w/products/3727/5497/20220215_191007__91289.1645539240.jpg?c=2'], price: 33},
        {type: 'red', grape: 'Nebbiolo', producer: 'G.D. Vajra', vintage: 2021, region: regions[5], wineImg: ['https://cdn.shopify.com/s/files/1/0019/3363/9735/products/g-d-vajra-langhe-nebbiolo-clare-j-c-natural-wine-primal-wine.progressive.jpg?v=1663785296'], price: 30},
        {type: 'white', grape: 'Arneis', producer: 'Angelo Negro', vintage: 2020, region: regions[5], wineImg: ['https://www.kingstonwine.com/images/sites/kingstonwine/labels/angelo-negro-unfiltered-arneis_1.jpg?1676058869?v=1'], price: 23},
        {type: 'sparkling', grape: 'Lambrusco', producer: 'Camillo Donati', vintage: 2019, region: regions[5], wineImg: ['https://cdn.shopify.com/s/files/1/0221/6407/8692/products/Donati-Camillo-Il-Mio-Lambrusco_900x.png?v=1670529478'], price: 18},
        {type: 'red', grape: 'Cinsaut', producer: 'Mersel', vintage: 2020, region: regions[6], wineImg: ['https://static.wixstatic.com/media/7f98c1_611d42de666f45af96fbbc35106cc249~mv2.png/v1/fill/w_456,h_1080,fp_0.50_0.50,q_90,enc_auto/7f98c1_611d42de666f45af96fbbc35106cc249~mv2.png'], price: 26},
        {type: 'white', grape: 'Obeideh', producer: 'Sept', vintage: 2018, region: regions[6], wineImg: ['https://images.vivino.com/thumbs/EtBWGCBqRvW9l05uCgycQg_pb_x960.png'], price: 56},
        {type: 'sparkling', grape: 'Grenache Blanc', producer: 'Couvent Rouge', vintage: 2019, region: regions[6], wineImg: ['https://static.wixstatic.com/media/6ab97d_332c73af5fd7478cbec9db2f491b062d~mv2.jpg/v1/fill/w_593,h_593,al_c,q_85/6ab97d_332c73af5fd7478cbec9db2f491b062d~mv2.jpg'], price: 32},
        {type: 'red', grape: 'Cabernet Sauvignon', producer: 'La Ferme Rouge', vintage: 2020, region: regions[7], wineImg: ['https://cdn11.bigcommerce.com/s-so3bj4al4r/images/stencil/1280x1280/products/1340/3044/La_Ferme_Rouge_La_Petite_Ferme_Rouge_Zaer__22282.1600192773.jpg?c=2'], price: 17},
        {type: 'red', grape: 'Syrah', producer: 'Domaine des Ouled Thaleb', vintage: 2020, region: regions[7], wineImg: ['https://images.vivino.com/thumbs/GVUiZxkhT-iUMymv3Jgcsw_pb_x960.png'], price: 27},
        {type: 'red', grape: 'Dolcetto', producer: 'Dirty Black Denim', vintage: 2021, region: regions[8], wineImg: ['https://cdn.shopify.com/s/files/1/0510/5116/7937/products/dbd_2048x.jpg?v=1667446546'], price: 36},
        {type: 'white', grape: 'Chardonnay', producer: 'Blind Corner', vintage: 2022, region: regions[8], wineImg: ['https://www.blindcorner.com.au/assets/images/products/thumbnails/ChardonnayAligote_clipped_rev_1.png'], price: 50},
        {type: 'sparkling', grape: 'Cabernet Sauvignon', producer: 'Si Vinters', vintage: 2020, region: regions[8], wineImg: ['https://cdn.shopify.com/s/files/1/0026/6754/4640/products/MG_7703copy_1440x_crop_center.jpg?v=1633143146'], price: 38},
        {type: 'red', grape: 'Cabernet Franc', producer: 'Luna Llena', vintage: 2019, region: regions[9], wineImg: ['https://cdn.shopify.com/s/files/1/0221/6407/8692/products/Kindeli---Luna-Lena_17be701f-8041-4ed6-bf29-396ee7fc8d31_900x.png?v=1670529256'], price: 34},
        {type: 'white', grape: 'Muscat of Alexandria', producer: 'Cambridge Road', vintage: 2019, region: regions[9], wineImg: ['https://images.vivino.com/thumbs/eA9z0QtfSUWU_BLFwjLbIA_pb_x960.png'], price: 28},
        {type: 'sparkling', grape: 'Sauvignon Blanc', producer: 'Orbis Moderandi', vintage: 2021, region: regions[9], wineImg: ['https://images.vivino.com/thumbs/LlvvUXhVR9i7XlSwI-gkbQ_pb_x960.png'], price: 15},
        {type: 'red', grape: 'Pinot Noir', producer: 'Der Glücksjäger', vintage: 2021, region: regions[10], wineImg: ['https://cdn.shopify.com/s/files/1/0221/6407/8692/products/Der-Glucksjager---Pinot-Noir_900x.png?v=1670528027'], price: 28},
        {type: 'white', grape: 'Muller', producer: 'Enderle & Moll', vintage: 2019, region: regions[10], wineImg: ['https://cdn.shopify.com/s/files/1/0011/8148/3072/products/muller-muller-thurgau-enderle-and-moll-natural-white-orange-wine-baden-germany-front_1296x.jpg?v=1628426379'], price: 28},
        {type: 'sparkling', grape: 'Blauer Portugieser', producer: 'Brand Bros', vintage: 2021, region: regions[10], wineImg: ['https://www.8greenbottles.de/wp-content/uploads/2021/10/pet-nat_rose_Produktansicht-638x1024.jpg'], price: 19},
    ]);

    console.log(wines);

    process.exit();











})();