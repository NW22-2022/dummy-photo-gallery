const hamburger = document.querySelector(".js-hamburger");

// addEventListener() ・・・ イベントの監視
// - 引数 (イベント名, イベント発生時に実行する関数)
hamburger.addEventListener("click", (e) => {
  // html要素に「is-drawerActive」というclassを付けたり消したりする
  document.documentElement.classList.toggle("is-drawerActive");

  // aria-expanded属性のtrue/falseを切り替える
  // 現在のaria-expanded属性を取得（文字列のtrue/falseを boolenに変換して取得）
  const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";

  // 現在の値の反対を設定
  e.currentTarget.setAttribute("aria-expanded", !isExpanded);
});
