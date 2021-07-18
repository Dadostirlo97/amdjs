/*

Custom version by ESSEDI

Codice Originale Just Track It - https://raw.githubusercontent.com/moob0/JustTrackIt-AMD/main/amd.js
https://t.me/s/JustTrackIt

How to include:
javascript:javascript:fetch("https://essedihardware.it/amd/sblocca-addtocart.js",{mode: 'no-cors'}).then((response) => response.text()).then((text) => eval(text));
http://essedihardware.it/

*/

function appendAddToCartButton() {
    const productPage = document.getElementById("product-details-info");
    if(productPage){
        if (document.getElementsByClassName("btn-shopping-cart btn-shopping-neutral use-ajax").length === 0) {
            if (productPage.getElementsByClassName("product-out-of-stock").length > 0) {
                document.getElementsByClassName("product-out-of-stock")[0].remove();
                var itemId = window.location.href.replace(/^\D+/g, '').split("/")[0];
                var button = document.createElement("button");
                setCustomInfoToButton(itemId,button)
                document.getElementsByClassName("product-page-description")[0].appendChild(button);
            }
        }
    } else {
        const elements = Array.from(document.getElementsByClassName("view view-shop-product-search view-id-shop_product_search view-display-id-direct-buy-catalog")[0].getElementsByClassName("views-row"));
        Array.from(elements).forEach((item) => {
            if (item.getElementsByClassName("btn-shopping-cart btn-shopping-neutral use-ajax").length === 0) {
                var itemId = item.getElementsByClassName("shop-image-link")[0].getAttribute("href").replace(/^\D+/g, '').split("/")[0];
                var button = document.createElement("button");
                /!* Solo per pagina con tutti i prodotti *!/
                button.setAttribute("data-progress-type", "fullscreen");
                setCustomInfoToButton(itemId,button)
                item.getElementsByClassName("shop-links")[0].innerHTML = "";
                item.getElementsByClassName("shop-links")[0].appendChild(button);
            }
        });
    }
    Drupal.ajax.bindAjaxLinks(document);
    return productPage;
}

function setCustomInfoToButton(itemId,button){
    button.setAttribute("class", "btn-shopping-cart btn-shopping-neutral use-ajax");
    button.setAttribute("href", "/en/direct-buy/add-to-cart/" + itemId);
    button.setAttribute("style", "color: #3f93e5 !important;background-color: #fff !important;border: 2px solid #3f93e5 !important;");
    button.innerText = "SDHW - Add To Cart";
}

if (window.location.href.includes("direct-buy")) {
    if (appendAddToCartButton() != null) {
        document.getElementsByClassName("btn-shopping-cart btn-shopping-neutral use-ajax")[0].click();
    }
}
