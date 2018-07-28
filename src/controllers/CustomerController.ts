import {Request, Response} from "express";
import Customer from "../domain/Customer";

export default class CustomerController{
  public static async all(req: Request, res: Response) {
    try{
    const customers = await Customer.find({});
  
      res.status(200).send(customers)
    } catch (exception) {
      res.status(400).send(exception)
    }
  }

  public static async create(req: Request, res: Response) {
    try{
      const { name, email, age } = req.body
  
      const customer = new Customer(name, email, age);
      
      const saved = await customer.save()
  
      res.status(203).send(saved)
    } catch (exception) {
      res.status(400).send(exception.message)
    }
  }

  public static async update(req: Request, res: Response) {
    try{
      const { id } = req.params
  
      return Customer.findByIdAndUpdate(
        id,
        req.body,
        {new: true},
        (err, todo) => {
            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
      )
    } catch (exception) {
      res.status(400).send(exception.message)
    }
  }

  public static async deleteById(req: Request, res: Response) {
    try{
      const { id } = req.params

      const deleted = await Customer.deleteOne({_id: id})
  
      res.status(200).send(deleted)
    } catch (exception) {
      res.status(400).send(exception.message)
    }
  }
}
