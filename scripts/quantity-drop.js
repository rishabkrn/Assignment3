  
  //quantity toggle function that opens a drop down menu to select the desired number
  document.querySelector('.quantity-wrapper').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
  })
  
  for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select-trigger span').textContent = this.textContent;
        }
    })
  }
 
  for (const dropdown of document.querySelectorAll(".selector-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.select').classList.toggle('open');
    })
  }
  
//closes drop deown menu when clicked off

  window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
  });
  