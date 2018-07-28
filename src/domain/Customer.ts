import CustomerSchema from '../models/Customer'
import { isEmpty } from 'lodash'

export default class Customer extends CustomerSchema{
  
  private name: String;
  private email: String;
  private age: Number;

  constructor(name, email = '', age = ''){
    super({ name, email, age })
  }

  save(): Promise<this> {
    const { name } = this
    
    if(isEmpty(name)) throw new Error('Name can not be null')

    return super.save()
  }

}