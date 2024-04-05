let sidebarVisible = true;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');

    if (sidebarVisible) {
        sidebar.classList.add('sidebar-hidden');
        toggleBtn.classList.add('hidden'); // 隐藏按钮
    } else {
        sidebar.classList.remove('sidebar-hidden');
        toggleBtn.classList.remove('hidden'); // 显示按钮
    }
    sidebarVisible = !sidebarVisible;
}
