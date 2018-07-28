import CustomerController from '../controllers/CustomerController'


export default [
  {
    path: '/customer',
    method: 'post',
    controller: CustomerController.create
  },
  {
    path: '/customer',
    method: 'get',
    controller: CustomerController.all
  },
  {
    path: '/customer/:id',
    method: 'delete',
    controller: CustomerController.deleteById
  },
  {
    path: '/customer/:id',
    method: 'put',
    controller: CustomerController.update
  }
]
