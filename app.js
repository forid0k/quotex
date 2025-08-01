
const tableBody = document.querySelector("#signalTable tbody");
function addSignalRow({ time, market, asset, timeframe, signal, strategy }) {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${time}</td><td>${market}</td><td>${asset}</td><td>${timeframe}</td><td>${signal}</td><td>${strategy}</td>`;
  tableBody.prepend(row);
}
setInterval(() => {
  const now = new Date().toLocaleTimeString();
  const asset = document.getElementById("marketSelect").value;
  const strategies = [];
  if (ema.checked) strategies.push("EMA");
  if (rsi.checked) strategies.push("RSI");
  if (volume.checked) strategies.push("Volume");
  if (priceAction.checked) strategies.push("Price Action");
  if (strategies.length === 0) return;
  const signal = Math.random() > 60.0 ? "BUY" : "SELL";
  addSignalRow({
    time: now,
    market: "Real Market",
    asset,
    timeframe: "1m",
    signal,
    strategy: strategies.join(" + ")
  });
}, 5000);
