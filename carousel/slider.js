const slider = photo_cell.getOrCreateInstance('.photo_cell');
document.addEventListener('DOMContentLoaded', () => {
    const slider = photo_cell.getOrCreateInstance('.photo_cell');
  });
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cell').forEach((el) => {
        photo_cell.getOrCreateInstance(el);
    });
  });
  photo_cell.getOrCreateInstance('.photo_cell', {
    loop: false, 
    swipe: false 
  });