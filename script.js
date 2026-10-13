function sayHello() {
  alert("欢迎访问！！！！！！");
}

// 1. 把后端公网地址提取成常量（换成你 Render 的真实地址）
const API_BASE_URL = 'https://webapi-render-ns5s.onrender.com'; 

window.addEventListener('DOMContentLoaded', async () => {
  const listContainer = document.getElementById('data-list');
  
  try {
    // 2. 使用模板字符串拼接地址
    const response = await fetch(`${API_BASE_URL}/api/messages`);
    
    const data = await response.json();
    
    listContainer.innerHTML = ''; 
    data.forEach(item => {
      const li = document.createElement('li');
      li.innerText = item.text;
      listContainer.appendChild(li);
    });
  } catch (error) {
    console.error('获取数据失败:', error);
    listContainer.innerHTML = '获取数据失败，请检查后端是否启动。';
  }
});

window.alert(16 + "adad")