// const slider = document.querySelector('.items');
// let sliderNodes = document.querySelectorAll('.item');
// let intervalFn = "";
// let iterator = 1;

// let initialize = () => {
//   let x, y = getTransformValue(sliderNodes[0])
//   sliderNodes[0].style.transform = `translateY(${y}px)  scale(1)`
// }
  

// let animateItems = (index) => {
//   console.log(index)
//   sliderNodes[index].classList.add('active');
//   sliderNodes[index-1].classList.remove('active');
//   moveUp(index);
// }

// let moveUp = (index) => {
//   sliderNodes.forEach((node, i) => {
//     let x, y = getTransformValue(node)
//     node.style.transform = `translateY(${y-142}px)  scale(0.9)`
//     if(i == index) node.style.transform = `translateY(${y-142}px)  scale(1)`
//   })
// }

// // https://stackoverflow.com/questions/21987596/get-css-transform-property-with-jquery
// let getTransformValue = (node) => {
//   cssTransform = window.getComputedStyle(node).getPropertyValue('transform')
//   let matrix = cssTransform.replace(/[^0-9\-.,]/g, '').split(',');
//   let transformX = matrix[12] || matrix[4];//translate x
//   let transformY = matrix[13] || matrix[5];//translate y
//   return transformX, transformY
// }

// let startAnimation = () => {
 
  
  
//   intervalFn = setInterval(() => {
   
//       animateItems(iterator)
//       // console.log(iterator)
//       iterator++  
//       if (iterator == sliderNodes.length) resetAnimation()  
//     }, 3000)
// }

// let resetAnimation = () => {
//   clearInterval(intervalFn)
//   iterator=1;

//   setTimeout(() => 
//   {
//     sliderNodes.forEach((node, i) => {
//       node.classList.remove('active')
//       node.style.transform = `translateY(142px) scale(0.9)`
//       if(i==0) {
//         node.style.transform = `translateY(142px) scale(1)`
//         setTimeout(() => {
//           node.classList.add('active')
//         }, 500)
        
//       }
//       })
//     startAnimation();
    
    
//   }, 3000)
// }

//  initialize()
// startAnimation()







