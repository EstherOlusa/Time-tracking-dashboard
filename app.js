let currentFilter = "daily";
const filterItems = document.querySelectorAll(".filter-item");
const timeItems = document.querySelectorAll(".times");

const getPrefix = () => {
  if (currentFilter === "weekly") return "Last week";
  if (currentFilter === "monthly") return "Last month";
  return "Previous";
};

filterItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const element = e.currentTarget;
    currentFilter = element.dataset.filter;

    // toggle active state start
    filterItems.forEach((it) => {
      it.classList.remove("active");
    });
    element.classList.add("active");
    // toggle active state end

    // time items loop start
    timeItems.forEach((it) => {
      const cardType = it.dataset.target;
      const cardData = data[cardType];
      const prefix = getPrefix();

      const timeEl = document.createElement("p");
      timeEl.classList.add("time");
      timeEl.innerHTML = `${cardData.timeframes[currentFilter].current}hrs`;

      const prevTimeEl = document.createElement("p");
      prevTimeEl.classList.add("previous-time");
      prevTimeEl.innerHTML = `${prefix} - ${cardData.timeframes[currentFilter].previous}hrs`;

      it.innerHTML = "";
      it.appendChild(timeEl);
      it.appendChild(prevTimeEl);
    });
    // time items loop end
  });
});
