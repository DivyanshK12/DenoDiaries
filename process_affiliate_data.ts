import { Product } from './products.ts';
import { getDataUrl, getThresholdPrice } from './deps.ts';
// import { getDataUrl } from 'https://raw.githubusercontent.com/bricewilson/Deno-Getting-Started/Linking_to_External_Code/affiliate_data.ts'
// import { getThresholdPrice } from 'https://raw.githubusercontent.com/bricewilson/Deno-Getting-Started/Linking_to_External_Code/pricing_rules.ts'

export async function processData() {

    const affiliateID: number = parseInt(Deno.args[0]);
    const data_url: string = getDataUrl(affiliateID);
    const response = await fetch(data_url);
    const data = await response.json() as Product[]; // asserting with typescript that it is an array of Products
    const threshold_price : number = getThresholdPrice(affiliateID);

    const affiliate_products: Product[] = new Array<Product>();

    data.forEach(product => {
        if(product.price > threshold_price){
            product.affiliateId = affiliateID;
            affiliate_products.push(product);
        }
    });

    Deno.writeTextFile('affiliate_products.json', JSON.stringify(affiliate_products, null, '  '));
// write to text file, null as optional second parameter and few spaces to make it legible

// run using deno run --allow-net --allow-write
}
if (import.meta.main)
{
    processData();
}// others can import it and can self eecute as well