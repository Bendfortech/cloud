const planTabs = document.querySelectorAll('.plan-tab');
const durationButtons = document.querySelectorAll('.duration-btn');
const pricingBody = document.getElementById('pricing-body');

const pricingData = {
  pro: {
    1: [90000, 170000, 240000, 300000, 460000, 640000],
    3: [85500, 161500, 228000, 285000, 437000, 608000],
    6: [81000, 153000, 228000, 270000, 414000, 576000],
    12: [81000, 153000, 228000, 270000, 414000, 576000],
    24: [76500, 144500, 216000, 256000, 437000, 544000],
  },
  business: {
    1: [93000, 173000, 245000, 310000, 465000, 650000],
    3: [88500, 164350, 232750, 295000, 441750, 617500],
    6: [84000, 156000, 234000, 279000, 417000, 585000],
    12: [79800, 148000, 222000, 265000, 396000, 556000],
    24: [76500, 144500, 216000, 256000, 544000, 640000],
  },
  enterprise: {
    1: [95000, 175000, 250000, 320000, 470000, 660000],
    3: [90250, 166250, 237500, 304000, 446500, 627000],
    6: [85500, 157500, 225000, 288000, 423000, 594000],
    12: [80750, 148750, 212500, 272000, 399500, 561000],
    24: [76000, 140000, 205000, 255000, 525000, 630000],
  }
};

let activePlan = 'pro';
let activeDuration = 1;

function formatPrice(value) {
  return value.toLocaleString('vi-VN') + ' VND';
}

function updatePrices() {
  const planPrices = pricingData[activePlan][activeDuration];
  if (!planPrices) return;

  const rows = pricingBody.querySelectorAll('tr');
  rows.forEach((row, index) => {
    const priceEl = row.querySelector('.price');
    if (priceEl) {
      priceEl.textContent = formatPrice(planPrices[index]);
    }
  });
}

function setActiveTab(tabGroup, activeClass, selectedButton) {
  tabGroup.forEach((button) => {
    button.classList.toggle(activeClass, button === selectedButton);
    button.setAttribute('aria-selected', button === selectedButton ? 'true' : 'false');
  });
}

planTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activePlan = tab.dataset.plan;
    setActiveTab(planTabs, 'active', tab);
    updatePrices();
  });
});

durationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeDuration = Number(button.dataset.duration);
    setActiveTab(durationButtons, 'active', button);
    updatePrices();
  });
});

updatePrices();
