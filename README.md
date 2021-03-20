# DenoDiaries
Code I wrote while learning the basics of deno
 # Files Map :
 * **simple_server.ts** is the first file that is run(as mentioned in documentation) while setting up deno
 * **links.txt** stores a few key learnings (and commands)
 * **products.ts** houses the interface (like a class) on which the rest of the files depend
 * **deps.ts** house the dependency map for imports (and makes importing more managable)
 * **affiliate_data.ts** exports an "affiliate_id to data" mapping function ( To simulate fetching data from external sources)
 * **products.json** is the same data used above
 * **pricing_rules.ts** exports a function that defines threshold limits for each affiliate_id
 * **process_affiliate_data.ts** uses the above threshold to filter data in products.json
 * The output of above process is stored in **affiliate_products.json**
 * **affiliate_data_server.ts** is a simple API Server that exposes the above file
 * All files ending in _ **test** are part of the test suite

# Learning source :
https://github.com/bricewilson
