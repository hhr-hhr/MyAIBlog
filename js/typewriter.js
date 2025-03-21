document.addEventListener('DOMContentLoaded', function() {
  // 检查元素是否存在
  const typewriterElement = document.querySelector('.Typewriter__wrapper');
  if (typewriterElement) {
    // 初始化Typed.js
    new Typed('.Typewriter__wrapper', {
      strings: ['Build My Programming Insights'], // 替换为您想要显示的文本
      typeSpeed: 50,          // 打字速度
      backSpeed: 30,          // 删除速度
      backDelay: 3000,        // 删除前的延迟
      startDelay: 500,        // 开始前的延迟
      loop: true,             // 是否循环
      showCursor: true,       // 显示光标
      cursorChar: '|',        // 光标字符
      autoInsertCss: true     // 自动插入CSS
    });
  }
});
