// 画像をクリックしたときに画面中央にモーダルウィンドウを表示し、オリジナルの画像サイズで表示

// 画像をクリックしたときのイベント
document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function() {
      openModal(this.src);
  });
});

function openModal(src) {
  // モーダル要素を作成
  const modal = document.createElement('div');
  modal.innerHTML = `<img src="${src}">`;
  modal.classList.add('modal');

  // モーダルの表示
  document.body.appendChild(modal);
  modal.style.display = 'flex';

  // モーダルのクリックイベント（モーダルを閉じる）
  modal.addEventListener('click', () => {
    closeModal(modal);
  });
}

function closeModal(modal) {
  // フェードアウトアニメーションを適用
  modal.style.animation = 'modalFadeOut 0.1s forwards';

  // アニメーションが終了したらモーダルを削除
  modal.addEventListener('animationend', () => {
    modal.style.display = 'none';
    document.body.removeChild(modal);
  });
}