const productsData = [ 
    { 
      src: './image/Фото1.jpg',
      alt: 'фото1',
      name: 'ELLERY X MO CAPSULE',
      link: '',
      desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: '$ 52.00' 
    },
    { 
        src: './image/Фото2.jpg',
        alt: 'фото2',
        name: 'ELLERY X MO CAPSULE',
        link: '',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$ 52.00' 
      },
      { 
        src: './image/Фото3.jpg',
        alt: 'фото3',
        name: 'ELLERY X MO CAPSULE',
        link: '',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$ 52.00' 
      },
      { 
        src: './image/Фото4.jpg',
        alt: 'фото4',
        name: 'ELLERY X MO CAPSULE',
        link: '',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$ 52.00' 
      },
      { 
        src: './image/Фото5.jpg',
        alt: 'фото5',
        name: 'ELLERY X MO CAPSULE',
        link: '',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$ 52.00' 
      },
      { 
        src: './image/Фото6.jpg',
        alt: 'фото6',
        name: 'ELLERY X MO CAPSULE',
        link: '',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$ 52.00' 
      }
    ]
    
    
    
        const productBox = document.querySelector('.product-box');
    
        productsData.forEach(productData => {
        const productEl = document.createElement('div');
        productEl.classList.add('product');
    
        const productImg = document.createElement('img');
        productImg.classList.add('product_img');
        productImg.setAttribute('alt', productData.alt);
        productImg.src = productData.src;
    
        const productContent = document.createElement('div');
        productContent.classList.add('product_content');
    
        const productLink = document.createElement('a');
        productLink.href = productData.link; 
        productLink.textContent = productData.name;
    
        const productText = document.createElement('p');
        productText.classList.add('product_text');
        productText.textContent = productData.desc;
        
        
    
        const productPrice = document.createElement('p');
        productPrice.classList.add('product_price');
        productPrice.textContent = productData.price;
    
        
        productContent.appendChild(productLink);
        productContent.appendChild(productText);
        productContent.appendChild(productPrice);
        productEl.appendChild(productImg);
        productEl.appendChild(productContent);
        productBox.appendChild(productEl);
    
      });