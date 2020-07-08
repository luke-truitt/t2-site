import ShopifyBuy from '@shopify/buy-button-js'
import ComponentDefault from '@shopify/buy-button-js/src/defaults/components.js'
import Storage from './Storage'
import ShopifyStyle from './ShopifyStyle.json'

console.log("ComponentDefault", ComponentDefault)

const ShopifyClient = ShopifyBuy.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

const ShopifyUi = ShopifyBuy.UI.init(ShopifyClient)


// check all the default values at:
// https://github.com/Shopify/buy-button-js/blob/master/src/defaults/components.js
Storage.shopifyDisplayOptions = ShopifyStyle


export { ShopifyClient, ShopifyUi }
