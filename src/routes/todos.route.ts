import { Router, Request, Response, NextFunction } from 'express';
import { ObjectID } from 'mongodb';
import * as database from "../database/database";
import * as _ from 'underscore';

const TODOS = [];

export class TodosRouter {
  router: Router

  /**
   * Initialize the TodosRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Todos.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    database.getDB().collection('todos').find({}).toArray((err, todos) => {
      if (err)
        throw err;
      res.json(todos);
    });

  }

  /**
   * GET one Todos.
   */
  public createOne(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    database.getDB().collection('todos').insert(req.body, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.ops[0]);
    });
  }

  /**
   * Toggle one todo state 
   */
  public toggleOne(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    let entity = Object.assign({}, _.omit(req.body, '_id'));
    database.getDB().collection('todos')
      .findOne({ _id: ObjectID.createFromHexString(req.params.id) }, (err, todo2modif) => {
        database.getDB().collection('todos')
        .update({ _id: todo2modif._id }, { $set: {terminado:!todo2modif.terminado} }, (err, result) => {
          if (err) {
            throw err;
          }
          res.send(result.value);
        });
      });
  }

  /**
   * Delete one todo
   */
  public deleteOne(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    let entity = Object.assign({}, _.omit(req.body, '_id'));
    database.getDB().collection('todos')
      .findOne({ _id: ObjectID.createFromHexString(req.params.id) }, (err, todo2del) => {
        database.getDB().collection('todos')
        .deleteOne({ _id: todo2del._id }, (err, result) => {
          if (err) {
            throw err;
          }
          console.log(result.value);
          res.send(result.value);
        });
      });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.post('/', this.createOne);
    this.router.post('/:id', this.toggleOne);
    this.router.delete('/:id', this.deleteOne);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const todosRouter = new TodosRouter();
todosRouter.init();

export default todosRouter.router;