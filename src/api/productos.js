

let arrayProductos = [
    {
      id: '1',
      nombre: 'Producto 1',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 500
    },
    {
      id: '2',
      nombre: 'Producto 2',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 600
    },
    {
      id: '3',
      nombre: 'Producto 3',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 400
    },
    {
      id: '4',
      nombre: 'Producto 4',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 900
    }
  ]

export const getFetch = () =>{
    return new Promise ( (resolve, reject) => {
      setTimeout(()=>{
        resolve(arrayProductos)
      },2000)
    })
}

export const getItem = (idProd) =>{
  return new Promise ( (resolve, reject) => {
    setTimeout(()=>{
      resolve(arrayProductos.find(prod => prod.id == idProd))
    },2000)
  })
}