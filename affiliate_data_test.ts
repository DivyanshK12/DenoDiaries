import { getDataUrl } from './affiliate_data.ts';
import { assertMatch } from "https://deno.land/std@0.89.0/testing/asserts.ts";

Deno.test({
    name:'request uses https',
    fn : () => {
        const url = getDataUrl(5);
        assertMatch(url, /https/);
    },
    only:true,
});