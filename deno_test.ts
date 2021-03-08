import 
{ assertStringIncludes } 
from "https://deno.land/std@0.89.0/testing/asserts.ts";

Deno.test('My simple string', () => {
    const msg = "Deno is awesome";
    assertStringIncludes(msg, 'awesome');
});

// alternate style

Deno.test({
    name :'My objective string', 
    fn : () => {
        const msg = "Deno is awesome";
        assertStringIncludes(msg, 'awesome');
    },
    ignore:false,
    only:false,
    sanitizeOps:true,
    sanitizeResources:true,
});
