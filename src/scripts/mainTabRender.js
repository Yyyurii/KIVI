// class informBlock {
//   constructor(parent, imgSrc, title, text, clazz) {
//     this.parent = document.querySelector(`.${parent}`);
//     this.imgSrc = imgSrc;
//     this.title = title;
//     this.text = text;
//     this.clazz = clazz;
//   }

//   render() {
//     const element = document.createElement('div');
//     element.classList.add(`inform-block__container`, `${this.clazz}`)
//     element.innerHTML = `
//       <div class="inform-block__img">
//         <img src="images/${this.imgSrc}" alt="">
//       </div>
//       <div class="inform-block__text-block">
//         <span class="pattern-title">${this.title}</span>
//         <span class="pattern-text">
//           ${this.text}
//         </span>
//       </div>
//      `;
//     this.parent.append(element);
//   }
// }

// new informBlock(
//   'main',
//   'three-brothers.png',
//   'Користь',
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere maxime aliquam totam eum ullam! Qui repudiandae ut itaque nam dolores, iusto, perferendis repellendus tempore blanditiis consequatur obcaecati fugit impedit sint similique adipisci labore? Quasi doloremque deleniti recusandae optio hic, vitae corporis natus obcaecati nemo quidem dolore reprehenderit suscipit tempore molestiae!'
// ).render();
// new informBlock(
//   'main',
//   'wifi.png',
//   'WiFi з твоєї чашки',
//   'Ретльно підібрані радіохвилі для інстаграму, фейсбуку, та Ютубу. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, minus.',
//   'inform-block__reverse'
// ).render();
// new informBlock(
//   'main',
//   'three-brothers.png',
//   'Три брати',
//   ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione architecto ullam, accusantium corrupti illo quasi pariatur. Esse, exercitationem deleniti!'
// ).render();