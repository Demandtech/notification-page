const notification = document.querySelectorAll('.notification-box');
let notificationCount = document.querySelector('.count')
document.querySelector('.read').addEventListener("click", ()=>{
  notification.forEach(function (not){
   not.classList.remove('new-message');
  })
  notificationCount.textContent = 0;
})