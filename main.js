const slides = document.querySelectorAll(".offer__slide"),
      prev = document.querySelector(".offer__slider-prev"),
      next = document.querySelector(".offer__slider-next"),
      slidesWrapper = document.querySelector('.offer__slider-wrapper'),  
      width = window.getComputedStyle(slidesWrapper).width,    
      slidesField = document.querySelector('.offer__slider-inner')
      
      let slideIndex = 1           
      let offset = 0 

slidesField.style.width = 100 * slides.length + '%';  
slidesField.style.display = 'flex';        
slidesField.style.transition = '0.5s all';
slidesWrapper.style.overflow = 'hidden'    

next.addEventListener("click", ()=>{         
    if (offset == +width.slice(0, width.length - 2) *(slides.length - 1)){  
        offset = 0      
    }else{
        offset += +width.slice(0, width.length - 2) 
    }
    slidesField.style.transform = `translateX(-${offset}px)`                                                    
})

prev.addEventListener("click", ()=>{        
    if (offset == 0){  
        offset = +width.slice(0, width.length - 2) *(slides.length - 1)  
    }else{
        offset -= +width.slice(0, width.length - 2)  // если это был не последний слайд, то отнимаю на ширину слайда на которую смещаюсь
    }
    slidesField.style.transform = `translateX(-${offset}px)`   
})
