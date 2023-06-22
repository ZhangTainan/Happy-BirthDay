document.addEventListener("DOMContentLoaded", function () {
  const $ = document.querySelector.bind(document);
  const video = $("video");
  const cake = $("#cake");
  const top = $("#env-top");
  const bottom = $("#env-bottom");
  const left = $("#env-left");
  const right = $("#env-right");
  const env = $("#envelope");
  const card = $("#card");
  const btn_group = $("#btn-group");
  const pause = $("#pause");
  const confirm = $("#confirm");
  const confirm_btn = $("#confirm-btn");
  const computerOnlyMessage = $("#computerOnlyMessage");
  // 检测设备类型
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  if (isMobileDevice()) {
    computerOnlyMessage.style.display = "block";
  } else {
    pause.addEventListener("click", function () {
      if (pause.textContent === "暂停") {
        video.pause();
        pause.textContent = "播放";
      } else if (pause.textContent === "播放") {
        video.play();
        pause.textContent = "暂停";
      }
    });
    const content = `Dear SomeBody: 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ad voluptatibus illum culpa magnam iusto adipisci
      quae mollitia? Veniam ratione dolore quasi voluptate tempore atque quibusdam, quisquam in expedita omnis saepe sed cum corrupti
      possimus, deserunt nemo repudiandae! Praesentium aut, expedita tempora similique cupiditate dolor repellendus deleniti odit facere
      ipsum quia error laudantium iure non iusto, ut aliquid modi aliquam totam fuga provident suscipit omnis obcaecati natus! Iste dolorum nulla voluptas aspernatur quae, recusandae expedita accusantium provident quas dicta quod est quaerat impedit deserunt architecto laboriosam esse velit quo ipsa voluptatum explicabo temporibus nobis quasi. Porro nobis nihil ad tempore ipsa explicabo eum, veritatis, voluptates voluptas similique distinctio sint alias provident quia laborum! Unde dolor voluptates dicta hic et ea, inventore praesentium porro aperiam omnis, est veniam quasi ex, dolorum sapiente aspernatur. Distinctio numquam a eos nulla, sequi modi harum rerum odio fugit in aspernatur, odit facilis, quibusdam quod perferendis?”的男孩们，上岸并不是他们的终极目标，我们只有摩多摩多(这里是日语意思是更多更多，怕你看不懂😂）的努力，才能踏入那个——能让我们躺平的地方。😡，没想到吧，没有啥壮志凌云的激励话语。我们两其实真的很像，很容易满足，但又顾虑太多，唉，可恶，不行，单词还没背完，差不多。最后最后，生日快乐老汤😁(首尾呼应，高端写法😘)，and快乐不止生日，咱们成都见。`;
    cake.addEventListener("click", function () {
      confirm.style.display = "block";
      confirm_btn.addEventListener("click", function () {
        confirm.style.display = "none";
        video.play();
        btn_group.style.display = "flex";
        top.style.transform =
          "translate(-50%,-50%) rotateX(-135deg)  skew(10deg)";
        let tmr = setTimeout(() => {
          top.style.opacity = "0";
          bottom.style.opacity = "0";
          left.style.opacity = "0";
          right.style.opacity = "0";
          env.style.opacity = "0";
          card.style.transform = "translate(-50%, -50%) scale(1.5)";
          card.style.opacity = "0.5";
          let i = 0;
          const inv = setInterval(() => {
            card.textContent = content.substring(0, i) + (i & 1 ? "_" : "");
            i++;
            if (i >= content.length) {
              card.textContent = content;
              clearTimeout(tmr);
              clearInterval(inv);
            }
          }, 150);
        }, 3000);
      });
    });
  }
});
