
import x from '../imagenes/buzo.jpeg'

let arrayProductos = [
    {
      id: '1',
      nombre: 'Producto 1',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: '../imagenes/buzo.jpeg'
    },
    {
      id: '2',
      nombre: 'Producto 2',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: '../imagenes/buzo.jpeg'
    },
    {
      id: '3',
      nombre: 'Producto 3',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: '../imagenes/buzo.jpeg'
    },
    {
      id: '4',
      nombre: 'Producto 4',
      descripcion: 'Este es un gran produto para vos',
      stock: 5,
      imagen: '../imagenes/buzo.jpeg'
    }
  ]

export const getFetch = () =>{
    return new Promise ( (resolve, reject) => {
      setTimeout(()=>{
        resolve(arrayProductos)
      },2000)
    })
}