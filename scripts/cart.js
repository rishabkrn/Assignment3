function inc(element) {
    let el = document.querySelector(`[name="${element}"]`);
    el.value = parseInt(el.value) + 1;
  }
  
  function dec(element) {
    let el = document.querySelector(`[name="${element}"]`);
      if (parseInt(el.value) > 0) {
        el.value = parseInt(el.value) - 1;
    }
  }

