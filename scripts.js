   
   
 const toggleBar = document.getElementById('toggleBar');
 const mobileNav = document.getElementById('mobileNav');
 
 toggleBar.addEventListener('click', () => {
     toggleBar.classList.toggle('active');
     mobileNav.classList.toggle('active');
 });
 
   
   
   
   
   
   
   
   // Toggle phone number visibility
   document.getElementById('callButton').addEventListener('click', () => {
    const phoneNumber = document.getElementById('phoneNumber');
    phoneNumber.style.display = phoneNumber.style.display === 'none' ? 'block' : 'none';
    });