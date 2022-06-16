

let arrayProductos = [
    {
      id: '1',
      nombre: 'Buzo 1',
      categoria: 'Buzos',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 500
    },
    {
      id: '2',
      nombre: 'Buzo 2',
      categoria: 'Buzos',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 600
    },
    {
      id: '3',
      nombre: 'Buzo 3',
      categoria: 'Buzos',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 400
    },
    {
      id: '4',
      nombre: 'Remera 1',
      categoria: 'Remeras',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 900
    },
    {
      id: '5',
      nombre: 'Remera 2',
      categoria: 'Remeras',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 900
    },
    {
      id: '6',
      nombre: 'Remera 3',
      categoria: 'Remeras',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 900
    },
    {
      id: '7',
      nombre: 'Pantalon 1',
      categoria: 'Pantalones',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 900
    },
    {
      id: '8',
      nombre: 'Pantalon 2',
      categoria: 'Pantalones',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 900
    },
    {
      id: '9',
      nombre: 'Pantalon 3',
      categoria: 'Pantalones',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 900
    },
    {
      id: '10',
      nombre: 'Zapatilla 1',
      categoria: 'Zapatillas',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: 'https://www.ansilta.com/img/articulos/2021/01/buzo_primo_3_13_imagen9.jpg',
      precio: 900
    },
    {
      id: '11',
      nombre: 'Zapatilla 2',
      categoria: 'Zapatillas',
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

/*export const getItem = (idProd) =>{
  return new Promise ( (resolve, reject) => {
    setTimeout(()=>{
      resolve(arrayProductos.find(prod => prod.id == idProd))
    },2000)
  })
}*/