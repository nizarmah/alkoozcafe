document.addEventListener("DOMContentLoaded", function () {
  fetch("menu.json")
    .then(function (res) { return res.json(); })
    .then(function (data) { renderMenu(cleanMenu(data)); });
});

// --- Data cleaning (same logic as the old cleaner.ts) ---

function isValidName(name) {
  return name && name.nameEnglish && name.nameArabic;
}

function isValidPrice(price) {
  return price && typeof price.amount === "number" && price.currency;
}

function cleanMenu(menu) {
  if (!menu || !menu.categoryList) return { categoryList: [] };

  var categories = menu.categoryList
    .map(function (cat) {
      if (!isValidName(cat.name) || !cat.itemList) return null;

      var items = cat.itemList
        .map(function (item) {
          if (!isValidName(item.name) || !item.priceList) return null;

          var prices = item.priceList.filter(isValidPrice);
          if (prices.length === 0) return null;

          return { name: item.name, priceList: prices };
        })
        .filter(Boolean);

      if (items.length === 0) return null;

      return { name: cat.name, itemList: items };
    })
    .filter(Boolean);

  return { categoryList: categories };
}

// --- Price formatting ---

function formatPrice(price) {
  switch (price.currency) {
    case "usd":
      return "$" + price.amount;
    case "lbp":
      return price.amount + " L.L.";
    default:
      return String(price.amount);
  }
}

function formatPriceList(priceList) {
  return priceList.map(formatPrice).join(" / ");
}

// --- DOM rendering ---

function renderMenu(menu) {
  var container = document.getElementById("menu");

  menu.categoryList.forEach(function (category) {
    var section = document.createElement("div");
    section.className = "category";

    // Force page break before "Cold Drinks" so it starts on the second page
    if (category.name.nameEnglish === "Cold Drinks") {
      section.classList.add("page-break");
    }

    // Category header
    var header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML =
      '<span class="line"></span>' +
      '<h3 dir="ltr">' + escapeHtml(category.name.nameEnglish) + "</h3>" +
      '<span class="separator">|</span>' +
      '<h3 dir="rtl">' + escapeHtml(category.name.nameArabic) + "</h3>" +
      '<span class="line"></span>';
    section.appendChild(header);

    // Items
    var itemsDiv = document.createElement("div");
    itemsDiv.className = "category-items";

    category.itemList.forEach(function (item) {
      var row = document.createElement("div");
      row.className = "item";
      row.innerHTML =
        '<div class="cell-en">' +
          '<span class="name-en" dir="ltr">' + escapeHtml(item.name.nameEnglish) + "</span>" +
          '<span class="leader"></span>' +
        "</div>" +
        '<span class="price">' + escapeHtml(formatPriceList(item.priceList)) + "</span>" +
        '<div class="cell-ar">' +
          '<span class="leader"></span>' +
          '<span class="name-ar" dir="rtl">' + escapeHtml(item.name.nameArabic) + "</span>" +
        "</div>";
      itemsDiv.appendChild(row);
    });

    section.appendChild(itemsDiv);
    container.appendChild(section);
  });

  // Force column balancing on screen by setting an explicit height.
  // Chromium ignores column-fill:balance without a height constraint.
  balanceColumns(container);
}

function balanceColumns(container) {
  // Measure content height in single-column mode
  container.style.columnCount = "1";
  container.style.height = "auto";
  var singleColHeight = container.scrollHeight;
  container.style.columnCount = "";

  // Start with half the single-col height + buffer
  var height = Math.ceil(singleColHeight / 2) + 40;
  container.style.height = height + "px";

  // CSS multi-column overflow can be vertical (column 2 overflows bottom)
  // or horizontal (extra columns). Check if the last item fits visually.
  var maxIterations = 30;
  while (maxIterations-- > 0) {
    var lastChild = container.querySelector(".category:last-child .category-items");
    if (!lastChild) break;
    var lastItem = lastChild.lastElementChild;
    if (!lastItem) break;

    var containerRect = container.getBoundingClientRect();
    var lastRect = lastItem.getBoundingClientRect();

    // Check both: item must be within container width AND height
    var fitsH = lastRect.right <= containerRect.right + 1;
    var fitsV = lastRect.bottom <= containerRect.bottom + 1;
    if (fitsH && fitsV) break;

    height += 40;
    container.style.height = height + "px";
  }
}

// --- Utility ---

function escapeHtml(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
